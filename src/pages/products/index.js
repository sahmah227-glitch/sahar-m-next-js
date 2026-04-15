import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProductsList from '../../components/ProductsList';

// CSR – All fetching happens in the browser after mount.
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=30')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => setProducts(data.products))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '60vh' }}
      >
        <div className="spinner-border text-warning" role="status" />
        <span className="ms-3 fs-5 text-secondary">Loading products…</span>
      </div>
    );

  if (error)
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );

  return (
    <>
      <Head>
        <title>Products – CSR</title>
      </Head>
      <ProductsList products={products} accentColor="warning" badge="⚡ CSR" />
    </>
  );
}
