import { useEffect } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import TimeLine from '../components/timeline';
import Loader from './loader';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <Loader />
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <TimeLine />
        <Sidebar />
      </div>
    </div>
  );
}
