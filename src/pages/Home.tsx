import { Navbar } from '../layouts/Navbar';
import { CardWord } from '../components/Card';

export const Home = () => {
  return (
    <main className="flex flex-col min-h-screen dark text-foreground bg-gradient-to-b from-black to-gray-950 overflow-y-auto">
      <Navbar />
      <div className="grid place-items-center h-full grow">
        <CardWord />
      </div>
    </main>
  );
};
