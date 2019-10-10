import { useEffect, useRef } from 'react';

const useInterval = (callback, delay, startNow) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      if (startNow) tick();
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, startNow]);
}

export default useInterval;
