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
  const AuthenticatedComponent = (props: any) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
      return null; // Show a loader or return null while the auth check happens
    }

    return <WrappedComponent {...props} />;
  };

  // Add display name for better debugging
  AuthenticatedComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthenticatedComponent;
};

export default withAuth;
