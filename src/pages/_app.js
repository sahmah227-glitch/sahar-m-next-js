import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Pages listed here will NOT show the NavBar
const PAGES_WITHOUT_NAVBAR = ['/404'];

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const showNavbar = !PAGES_WITHOUT_NAVBAR.includes(router.pathname);

  return (
    <>
      {showNavbar && <NavBar />}
      <Component {...pageProps} />
    </>
  );
}
