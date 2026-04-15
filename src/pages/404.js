import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 – Page Not Found</title>
      </Head>
      <div
        className="d-flex flex-column align-items-center justify-content-center vh-100"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        }}
      >
        <h1 className="display-1 fw-bold text-warning mb-0">404</h1>
        <h2 className="text-white mb-3">Page Not Found</h2>
        <p className="text-secondary mb-4 text-center px-3">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="d-flex gap-3">
          <Link href="/" className="btn btn-warning fw-semibold">
            Go Home
          </Link>
          <Link href="/products" className="btn btn-outline-light fw-semibold">
            Browse Products
          </Link>
        </div>
      </div>
    </>
  );
}

// This tells _app.js to hide the NavBar on this page
Custom404.noNavbar = true;
