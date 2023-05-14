import {
  createContext,
  FC,
  Component,
  useContext,
  useState,
  ReactNode,
  useRef,
  MutableRefObject,
  useEffect,
} from "react";
import Animated, {
  Adaptable,
  AnimateProps,
  useSharedValue,
  SharedValue,
} from "react-native-reanimated";
import { ViewProps, ViewComponent } from "react-native";

interface IContext {
  progressRef: SharedValue<number>;
}

const defaultState: IContext = {
  progressRef: { value: 0 },
};

const Context = createContext(defaultState);

export const useAppContext = () => useContext(Context);

interface ContextProps {
  children: ReactNode;
}

export const ContextProvider: FC<ContextProps> = (props) => {
  let progressRef = useSharedValue(0);

  const values = {
    progressRef,
  };

  return <Context.Provider value={values} {...props} />;
};
