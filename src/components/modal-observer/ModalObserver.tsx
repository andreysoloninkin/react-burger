export const modalObserver = {
    listeners: [],
    setValue(newValue: any) {
        modalObserver.listeners.forEach((listener) => (listener as any)(newValue));
    },
    subscribe(listener: any) {
      // @ts-ignore
        modalObserver.listeners.push(listener);
    }
  };