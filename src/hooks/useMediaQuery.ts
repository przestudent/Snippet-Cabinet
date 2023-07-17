import { useEffect, useState } from 'react';

function useMediaQuery({ mediaCriteria }: { mediaCriteria: string }) {
  const [doesMediaMatch, setDoesMediaMatch] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(mediaCriteria);
    if (mql.matches) {
      setDoesMediaMatch(true);
    } else {
      setDoesMediaMatch(false);
    }
    mql.addEventListener('change', Listener);
    function Listener(ev: MediaQueryListEvent) {
      if (ev.matches) {
        setDoesMediaMatch(true);
      } else {
        setDoesMediaMatch(false);
      }
    }
    return () => mql.removeEventListener('change', Listener);
  }, []);
  return { doesMediaMatch: doesMediaMatch };
}

export default useMediaQuery;
