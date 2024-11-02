import Button from './Button';
import { useRouter } from 'next/navigation'; // Import useRouter to handle navigation

const HeroSection = () => {
  const router = useRouter();

  // Handler for Get Started button click
  const handleGetStartedClick = () => {
    router.push('/login'); // Navigate to login page
  };

  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-background mt-6 mb-6">
      <h1 className="text-5xl font-bold text-foreground mb-4">
        AI-powered interviews that help you <br /> find the best talent
      </h1>
      <Button label="Get Started" onClick={handleGetStartedClick} /> {/* Button navigates to login */}
    </section>
  );
};

export default HeroSection;
