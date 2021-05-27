import { useEffect } from 'react';
import Header from '../components/header';
import Loader from './loader';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <Loader />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2x1">Not Found!</p>
      </div>
    </div>
  );
}
