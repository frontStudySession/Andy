import { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from '../hook/useRouter';
import { LocationContext } from './Router';

interface RouteProps {
  path: string;
  component: React.ReactNode;
}

export const Route = ({ path, component }: RouteProps) => {
  const [isUrlEqualPath, setIsUrlEqualPath] = useState(false);
  const { push } = useRouter();
  const { pathname } = window.location;
  const { setLocation } = useContext(LocationContext);

  const setPathAndRenderComponent = useCallback(() => {
    if (path === pathname) {
      setIsUrlEqualPath(true);
    } else {
      setIsUrlEqualPath(false);
    }

    if (setLocation) {
      window.onpopstate = () => {
        setLocation({ pathName: pathname });
      };
    }
  }, [path, pathname]);

  useEffect(() => {
    setPathAndRenderComponent();
  }, []);

  return isUrlEqualPath ? component : null;
};
