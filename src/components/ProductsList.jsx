import Image from 'next/image';
import { useRouter } from 'next/router';

const ProductsList = ({ products, accentColor = 'primary', badge }) => {
  const router = useRouter();

  // ── PROGRAMMATIC ROUTING 
  const handleViewDetails = (id) => {
    router.push(`/products/${id}`);
  };

  const isDark = accentColor === 'info' || accentColor === 'warning';

  return (
    <div className="container mt-4 pb-5">
      <div className="d-flex align-items-center gap-3 mb-4">
        <h1 className="mb-0">Products</h1>
        {badge && (
          <span
            className={`badge bg-${accentColor} fs-6 ${isDark ? 'text-dark' : ''}`}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 shadow-sm product-card border-0">
              {/* Thumbnail */}
              <div className="position-relative" style={{ height: 180 }}>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-semibold">{product.title}</h6>
                <span className="badge bg-secondary mb-2 align-self-start">
                  {product.category}
                </span>

                {/* Star rating */}
                <div className="d-flex align-items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      style={{
                        color:
                          i < Math.round(product.rating)
                            ? '#ffc107'
                            : '#dee2e6',
                        fontSize: '0.8rem',
                      }}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-muted small ms-1">
                    ({product.rating})
                  </span>
                </div>

                <p className="text-success fw-bold mt-auto mb-2">
                  ${product.price}
                </p>

                {/* ── PROGRAMMATIC ROUTING ── */}
                <button
                  className={`btn btn-${accentColor} btn-sm fw-semibold ${isDark ? 'text-dark' : ''}`}
                  onClick={() => handleViewDetails(product.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
