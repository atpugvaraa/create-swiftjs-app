import { useState, useEffect, useDebugValue } from "react";

// A simple observable class that components can subscribe to
export class Observable {
  private subscribers: Set<() => void> = new Set();

  // Method to notify subscribers of changes
  protected notify() {
    this.subscribers.forEach((subscriber) => subscriber());
  }

  // Method for components to subscribe
  public subscribe(callback: () => void) {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    }; // Cleanup
  }
}

// Hook to observe changes in an Observable object
export function useObservedObject<T extends Observable>(obj: T): T {
  // Force a re-render when the observable notifies
  const [_, setTick] = useState(0);
  useEffect(() => {
    const unsubscribe = obj.subscribe(() => {
      setTick((tick) => tick + 1); // Increment tick to force re-render
    });
    return () => unsubscribe();
  }, [obj]);

  // For React DevTools inspection
  useDebugValue(obj);

  return obj;
}
