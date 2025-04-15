import { Main } from "../components/Main";
import { createContext } from "react";
import { MaterialType } from "../data/Data";


const emptyContext: AppContext = {
  roomIndex: 1,
  roomMaterial: MaterialType.GLASSY_WIREFRAME,
  questionIndex: 0,
};

interface AppContextProvider {
  appContext: AppContext;
  setAppContext: React.Dispatch<React.SetStateAction<AppContext>>;
}

const AppContext = createContext<AppContextProvider>({
  appContext: emptyContext,
  setAppContext: () => {},
});

interface AppContext {
  roomIndex: number;
  roomMaterial: MaterialType;
  questionIndex: number;
}

export default function Home() {
  return <Main />;
}

export { AppContext, emptyContext };
