import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: any) => {
  return (props:any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login'); // Redirect to login if not authenticated
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
