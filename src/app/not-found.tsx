import Link from 'next/link';
import '@/styles/layout.scss'
import '@/styles/components.scss'

export default function NotFound() {
  return (
    <div className='not-found-container' style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1 className='not-found-title'>四〇四</h1>
      <p className='not-found-text' >Sorry, the page you are looking for can&apos;t be found.</p>
      <div className="not-found-links">
        <Link className='button-rounded' href="/">Home</Link>
        <Link className='button-rounded' href="/">Resources</Link>
        <Link className='button-rounded' href="/">Media</Link>
      </div>
    </div>
  );
}