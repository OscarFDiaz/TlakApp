import { Navbar } from '../layouts/Navbar';
import { CardWord } from '../components/Card';

export const Home = () => {
  return (
    <main className="min-h-screen dark text-foreground bg-gradient-to-b from-black to-gray-950">
      <Navbar />
      <div className="h-[80vh] flex justify-center items-center">
        <CardWord />
      </div>
    </main>
  );
};
