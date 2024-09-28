// app/page.tsx
import HeroBanner from './components/HeroBanner';
import Highlights from './components/Highlights';
import MedalTally from './components/MedalTally';
import UpcomingNews from './components/UpcomingNews';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Highlights />
      <MedalTally />
      <Footer />
    </main>
  );
}
