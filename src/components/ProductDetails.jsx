import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductDetail = ({
  product,
  accentColor = 'primary',
  badge,
  builtAt,
}) => {
  const router = useRouter();
  const isDark = accentColor === 'info' || accentColor === 'warning';

  // ── PROGRAMMATIC ROUTING
  const goBack = () => router.push('/products');

  return (
    <>
      <div className="container mt-4 pb-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/products">Products</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        <div className="row g-5">
          {/* Image */}
          <div className="col-md-5">
            <div
              className="position-relative rounded overflow-hidden shadow-sm bg-white"
              style={{ height: 380 }}
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                style={{ objectFit: 'contain', padding: '1rem' }}
                priority
              />
            </div>

            {/* Discount badge */}
            {product.discountPercentage > 0 && (
              <div className="mt-2">
                <span className="badge bg-danger fs-6">
                  {product.discountPercentage}% OFF
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="col-md-7">
            <span className="badge bg-secondary mb-2">{product.category}</span>
            <h1 className="fw-bold mb-2">{product.title}</h1>
            <h2 className={`text-success mb-3`}>${product.price}</h2>
            <p className="text-muted lead">{product.description}</p>

            <ul className="list-group list-group-flush mt-4">
              <li className="list-group-item d-flex justify-content-between">
                <strong>Brand</strong>
                <span>{product.brand || 'N/A'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>SKU</strong>
                <span>{product.sku}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>Stock</strong>
                <span
                  className={
                    product.stock < 20
                      ? 'text-danger fw-semibold'
                      : 'text-success fw-semibold'
                  }
                >
                  {product.stock} units
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>Rating</strong>
                <span>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      style={{
                        color:
                          i < Math.round(product.rating)
                            ? '#ffc107'
                            : '#dee2e6',
                      }}
                    >
                      ★
                    </span>
                  ))}{' '}
                  {product.rating} / 5
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>Availability</strong>
                <span className="badge bg-success align-self-center">
                  {product.availabilityStatus || 'In Stock'}
                </span>
              </li>
            </ul>

            {/* Build timestamp (SSG/ISR only) */}
            {builtAt && (
              <p className="text-muted small mt-3">
                🏗️ Page built at: <strong>{builtAt}</strong>
              </p>
            )}

            {/* ── PROGRAMMATIC ROUTING: back button ── */}
            <button
              className={`btn btn-${accentColor} mt-4 fw-semibold ${isDark ? 'text-dark' : ''}`}
              onClick={goBack}
            >
              ← Back to Products
            </button>
          </div>
        </div>
      </div>

      {/* Floating rendering badge */}
      {badge && (
        <span
          className={`badge bg-${accentColor} ${isDark ? 'text-dark' : ''} badge-rendering`}
        >
          {badge}
        </span>
      )}
    </>
  );
};

export default ProductDetail;
