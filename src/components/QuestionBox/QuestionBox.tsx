import html2canvas from "html2canvas-pro";
import styles from "./styles.module.css";
import { useContext, useState } from "react";
import { Log, saveLogs } from "../Logger/Logger";
import AnimatedText from "../AnimatedChange/AnimatedText";
import { AppContext } from "../../routes/home";
import { Data } from "../../data/Data";

let previousTime = 0;

export function QuestionBox() {
  const { appContext, setAppContext } = useContext(AppContext);
  const { questionIndex, roomIndex } = appContext;
  const [userAnswer, setUserAnswer] = useState<string>("");

  const question = Data.conditions[roomIndex].questions[questionIndex];

  return (
    <div className={styles.container}>
      <AnimatedText text={question.q} />
      {question.a === null || question.a === undefined ? (
        <></>
      ) : (
        <input
          value={userAnswer}
          onChange={(e) => {
            setUserAnswer(e.target.value);
          }}
          type="text"
          placeholder="Answer ..."
        />
      )}
      <button
        onClick={() => {
          if (isLastQuestion(questionIndex, roomIndex)) {
            saveLogs();
            // Alert and reload the page
            return;
          }
          setAppContext((prev: any) => ({
            ...prev,
            questionIndex: questionIndex + 1,
          }));
          const element = document.getElementById("3DView") as HTMLDivElement;

          const timeSpent = performance.now() - previousTime;
          const timeStamp = new Date().toISOString();

          html2canvas(element).then((canvas: any) => {
            const dataUrl = canvas.toDataURL("image/png");
            // You can now send this data URL to your server or use it as needed
            Log({
              timestamp: timeStamp,
              roomIndex: roomIndex,
              roomMaterial: appContext.roomMaterial,
              question: question.q,
              correctAnswer: String(question.a),
              userAnswer: userAnswer,
              timeToAnswer: timeSpent,
              screenshot: dataUrl,
            });
          });
          previousTime = performance.now();
        }}
      >
        {isLastQuestion(questionIndex, roomIndex)
          ? "Finish"
          : question.a === undefined
          ? "Start"
          : "Next"}
      </button>
    </div>
  );
}

function isLastQuestion(questionIndex: number, roomIndex: number): boolean {
  return questionIndex >= Data.conditions[roomIndex].questions.length - 1;
}
