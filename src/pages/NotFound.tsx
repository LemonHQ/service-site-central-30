
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageHero from '@/components/ui/PageHero';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageHero
      title="404"
      subtitle="Oops! Page not found"
      backgroundVariant="gray"
    >
      <Button asChild>
        <a href="/">Return to Home</a>
      </Button>
    </PageHero>
  );
};

export default NotFound;
