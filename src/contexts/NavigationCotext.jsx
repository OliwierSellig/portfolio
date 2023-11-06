import { createContext, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const { ref: aboutRef, inView: aboutView } = useInView({
    rootMargin: "-500px",
  });
  const { ref: projectsRef, inView: projectsView } = useInView();
  const { ref: contactRef, inView: contactView } = useInView({
    rootMargin: "-250px",
  });

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (aboutView) setActive(0);
    if (!aboutView && projectsView) setActive(1);
    if (contactView) setActive(2);
  }, [projectsView, aboutView, contactView]);

  return (
    <NavigationContext.Provider
      value={{
        aboutRef,
        aboutView,
        projectsRef,
        projectsView,
        contactRef,
        contactView,
        active,
        setActive,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigation() {
  const value = useContext(NavigationContext);
  if (value === undefined)
    throw new Error("Navigation context was used outside of a provider");

  return value;
}

export { NavigationProvider, useNavigation };
