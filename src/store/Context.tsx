import { createContext, FC, useContext, useState, ReactNode } from "react";
import Animated, { Adaptable } from "react-native-reanimated";

interface IContext {
  progress: Adaptable<number>;
  setProgress: any;
}

const defaultState: IContext = {
  progress: new Animated.Value(0),
  setProgress: () => {},
};

const Context = createContext(defaultState);

export const useDrawerContext = () => useContext(Context);

interface ContextProps {
  children: ReactNode;
}

export const ContextProvider: FC<ContextProps> = (props) => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const values = {
    progress,
    setProgress,
  };

  return <Context.Provider value={values} {...props} />;
};
