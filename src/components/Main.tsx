import { useState } from "react";
import { QuestionBox } from "./QuestionBox/QuestionBox";
import { ThreeDViewer } from "./ThreeDViewer/ThreeDViewer";
import styles from "./mainStyle.module.css";
import { AppContext, emptyContext } from "../routes/home";

export function Main() {
  const [appContext, setAppContext] = useState<AppContext>(emptyContext);

  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <main className={styles.container}>
          {/* <Timer /> */}
          <ThreeDViewer />
          <QuestionBox />
        </main>
      </div>
    </AppContext.Provider>
  );
}
