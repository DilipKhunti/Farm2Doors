import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-extrabold text-primary">404</h1>
        <p className="text-2xl text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <p className="text-sm text-muted-foreground">
          Maybe the book or page was removed, or you typed an incorrect URL.
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-gradient-primary text-white rounded-md hover:opacity-90 transition"
        >
          Back to BookXChange
        </a>
      </div>
    </div>
  );
};

export default NotFound;
