import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {toast} from 'sonner'

const withAuth = (WrappedComponent: any) => {
  return (props:any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Enter login details')
        router.push('/login'); 
      }else{
        toast.success('Welcome')
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
