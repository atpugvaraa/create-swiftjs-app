import { useState, useEffect, useDebugValue, useCallback } from "react";
import { Observable } from "./ObservedObject";

// StateObject class that extends Observable for reactive state management
export class StateObject<T> extends Observable {
  private _value: T;

  constructor(initialValue: T) {
    super();
    this._value = initialValue;
  }

  // Get the current value
  get value(): T {
    return this._value;
  }

  // Set a new value and notify subscribers
  set value(newValue: T) {
    if (this._value !== newValue) {
      this._value = newValue;
      this.notify();
    }
  }

  // Update the value using a function
  update(updater: (currentValue: T) => T): void {
    this.value = updater(this._value);
  }

  // Method to create a new StateObject from a partial update
  patch(patch: Partial<T> extends object ? Partial<T> : never): void {
    if (typeof this._value === "object" && this._value !== null && patch) {
      this.value = { ...this._value, ...patch } as T;
    }
  }
}

// Hook to use an already instantiated StateObject in a React component
export function useReactiveStateObject<T>(
  stateObjectInstance: StateObject<T>,
): [T, (newValue: T) => void] {
  // Use a local React state to force re-renders
  const [value, setLocalValue] = useState<T>(stateObjectInstance.value);

  useEffect(() => {
    // Subscribe to changes in the StateObject instance
    const unsubscribe = stateObjectInstance.subscribe(() => {
      setLocalValue(stateObjectInstance.value); // Update local React state when StateObject notifies
    });
    return () => unsubscribe(); // Cleanup subscription
  }, [stateObjectInstance]); // Re-subscribe if stateObject instance changes

  // Create a stable setter function that updates the StateObject
  const setObservedValue = useCallback(
    (newValue: T) => {
      // eslint-disable-next-line react-hooks/immutability
      stateObjectInstance.value = newValue; // This will trigger the StateObject's setter and notification
    },
    [stateObjectInstance],
  );

  useDebugValue(value);
  return [value, setObservedValue];
}

// Hook to create and use a StateObject within a React component
export function useReactiveState<T>(
  initialValue: T,
): [T, (newValue: T) => void, StateObject<T>] {
  // Use useState with a lazy initializer to ensure StateObject is created only once
  const [stateObject] = useState(() => new StateObject(initialValue));

  // Use the useReactiveStateObject hook to get the reactive value and setter
  const [value, setValue] = useReactiveStateObject(stateObject);

  // Return the value, the setter, and the StateObject instance
  return [value, setValue, stateObject];
}

// Type for a getter function that can be used with StateObject
export type StateGetter<T> = () => T;

// Type for a setter function that can be used with StateObject
export type StateSetter<T> = (value: T) => void;

// Create a binding object from a StateObject for use with components that expect { get, set }
export function createBinding<T>(stateObject: StateObject<T>): {
  get: () => T;
  set: (value: T) => void;
} {
  return {
    get: () => stateObject.value,
    set: (value: T) => {
      stateObject.value = value;
    },
  };
}

// Re-export Observable for convenience
export { Observable };
