import { Navbar } from '../layouts/Navbar';
import { CardWord } from '../components/Card';

export const Home = () => {
  return (
    <main className="min-h-screen min-w-max grid place-items-center grid-rows-[max-content] dark text-foreground bg-gradient-to-b from-black to-gray-950">
      <Navbar />
      <CardWord />
    </main>
  );
};
