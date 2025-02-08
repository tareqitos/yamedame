import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>404 - Paasdfasdfasf</h1>
      <p>Sorry, we couldn&apos;t find the page you were looking for.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}