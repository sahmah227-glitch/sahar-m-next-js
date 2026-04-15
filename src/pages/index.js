import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>ProductsHub – CSR – Client-Side Rendering</title>
        <meta
          name="description"
          content="Next.js Lab – CSR – Client-Side Rendering"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div
          className="py-5 text-center text-white"
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            minHeight: '100vh',
          }}
        >
          <div className="container py-5">
            <span className="badge bg-warning fs-6 mb-4 px-3 py-2">
              CSR – Client-Side Rendering
            </span>
            <h1 className="display-4 fw-bold mb-3">ProductsHub</h1>
            <p
              className="lead text-secondary mb-2"
              style={{ maxWidth: 520, margin: '0 auto' }}
            >
              Data is fetched in the browser after the page loads using
              useEffect + useState. No server data.
            </p>
            <div className="mt-5">
              <Link
                href="/products"
                className="btn btn-warning btn-lg fw-semibold px-5"
              >
                Browse Products →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
