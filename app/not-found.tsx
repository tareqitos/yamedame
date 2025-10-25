import Button from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='mt-4' style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1 className='font-nunito text-8xl'>四〇四</h1>
      <p className='my-4' >Sorry, the page you are looking for can&apos;t be found.</p>
      <Button variant='secondary' >
        <Link className='' href="/">Home</Link>
      </Button>
    </div>
  );
}