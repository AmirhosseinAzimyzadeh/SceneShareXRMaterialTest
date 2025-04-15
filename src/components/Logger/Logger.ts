export interface LogI {
  timestamp: string;
  roomIndex: number;
  roomMaterial: number;
  question: string;
  correctAnswer: string | null;
  timeToAnswer: number;
  userAnswer?: string | null;
  screenshot?: string | null;
}

const logs: LogI[] = [];


export function Log(log: LogI) {
  if (log.correctAnswer === undefined) return;
  logs.push(log);
}

export function saveLogs() {
  const data = JSON.stringify(logs);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  // download the file
  const a = document.createElement("a");
  a.href = url;
  a.download = "logs.json";
  a.click();
}