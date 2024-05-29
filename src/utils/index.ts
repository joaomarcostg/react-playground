// Throttle the scroll event
export function throttle<T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number
): (...args: T) => void {
  let isThrottling = false;
  let savedArgs: T | null = null;

  const timerHandler = () => {
    if (savedArgs === null) {
      isThrottling = false;
    } else {
      cb(...savedArgs);
      savedArgs = null;
      setTimeout(timerHandler, delay);
    }
  };

  return (...args: T) => {
    if (isThrottling) {
      savedArgs = args;
      return;
    }

    cb(...args);
    isThrottling = true;
    setTimeout(timerHandler, delay);
  };
}
