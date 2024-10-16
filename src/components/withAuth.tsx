import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Enter login details');
      router.push('/login');
    } else {
      toast.success('Welcome');
      setIsAuthenticated(true);
    }
  }, [router]);

  return isAuthenticated;
};

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
      // While the check is ongoing or if unauthenticated, you can return null or a loader
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
