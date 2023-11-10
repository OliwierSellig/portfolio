import { createContext, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const { ref: aboutRef, inView: aboutView } = useInView({
    threshold: 0.6,
  });
  const { ref: projectsRef, inView: projectsView } = useInView({
    threshold: 0.4,
  });
  const { ref: contactRef, inView: contactView } = useInView({
    threshold: 0.4,
  });

  const [active, setActive] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function hideNav() {
      setMobileMenuOpen(false);
    }

    document.addEventListener("scroll", hideNav);

    function returnHideNav() {
      document.removeEventListener("scroll", hideNav);
    }

    return returnHideNav;
  }, []);

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
        mobileMenuOpen,
        setMobileMenuOpen,
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
