import { createContext, useState } from 'react';

interface RouterProps {
  children: React.ReactNode;
}

/**
 * Context를 설정하지 않고, history객체의 push만을 사용해서
 * Route 컴포넌트 내부에서 처리가되면, 아래의 문제점들이 발생
 * 1. 뒤 / 앞으로 가기가 안됨
 * 2. 컴포넌트 내부에서 history.pushState를 사용하면 URL만 변경되고 컴포넌트 렌더링이 안됨
 */
interface LocationContextProps {
  location: { pathName: string };
  setLocation?: React.Dispatch<
    React.SetStateAction<{
      pathName: string;
    }>
  >;
}
/**
 * LocationContext를 생성하여 location을 전역으로 관리
 */
export const LocationContext = createContext<LocationContextProps>({
  location: {
    pathName: '/',
  },
});

export const Router = ({ children }: RouterProps) => {
  const [location, setLocation] = useState({ pathName: '/' });
  return (
    <LocationContext.Provider
      value={{
        location: location,
        setLocation: setLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
