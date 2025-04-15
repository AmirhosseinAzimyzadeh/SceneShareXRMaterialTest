import { useState } from "react";
import type { LogI } from "../Logger/Logger";
import styles from "./styles.module.css";

export default function Results() {

  const [rows, setRows] = useState<LogI[]>([]);
  
  const onFileRead = (data: string) => {
    const parsedData = JSON.parse(data) as LogI[];
    setRows(parsedData);
    console.log(parsedData);
  };

  return (
    <div className={styles.container}>
      <FileUpload onFileRead={onFileRead} />
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Room Index</th>
            <th>Room Material</th>
            <th>Question</th>
            <th>Correct Answer</th>
            <th>User Answer</th>
            <th>Time to Answer</th>
            <th>screenshot</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.timestamp}</td>
              <td>{row.roomIndex}</td>
              <td>{row.roomMaterial}</td>
              <td>{row.question}</td>
              <td>{row.correctAnswer}</td>
              <td>{row.userAnswer}</td>
              <td>{row.timeToAnswer}</td>
              <td>
                {row.screenshot && (
                  <ImageShow base64={row.screenshot} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



function FileUpload(props: { onFileRead?: (data: string) => void }) {
  return (
    <input
      type="file"
      accept=".json"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const data = event.target?.result;
            if (data) {
              props.onFileRead?.(data as string);
            }
          };
          reader.readAsText(file);
        }
      }}
    />
  );
}

function ImageShow(props: { base64: string }) {
  return <img width={200} src={props.base64} alt="screenshot" />;
}