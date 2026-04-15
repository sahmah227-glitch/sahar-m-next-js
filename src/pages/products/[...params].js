import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ProductDetail from "../../components/ProductDetails";

// CSR – Catch-all route. Fetches product in the browser using the id from the URL.
export default function ProductDetailPage() {
  const router = useRouter();
  const { params } = router.query; // catch-all: ["5"] or ["5", "reviews"]
  const id = params ? params[0] : null;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => { if (!res.ok) throw new Error("Product not found"); return res.json(); })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading || !product)
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <div className="spinner-border text-warning" role="status" />
        <span className="ms-3 fs-5 text-secondary">Loading product…</span>
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
      <Head><title>{product.title} – CSR</title></Head>
      <ProductDetail product={product} accentColor="warning" badge="⚡ CSR" />
    </>
  );
}
