import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export default function OverlayCanvas() {
  const [cursorLocation, setCursorLocation] = useState({ x: -100, y: -100 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  }, [canvasRef]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={styles.container}
        width={1000}
        height={564}
        onMouseDown={(e) => {
          const rect = canvasRef.current?.getBoundingClientRect();
          if (!rect) return;
          const x = e.clientX - rect.left + 25;
          const y = e.clientY - rect.top + 25;
          setCursorLocation({ x, y });
        }}
      />

      <div
        style={{
          position: "absolute",
          top: cursorLocation.y,
          left: cursorLocation.x,
          width: 50,
          height: 50,
          opacity: cursorLocation.x > 0 ? '0.6' : '0',
          border: "2px solid white",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          transition: "all 0.1s ease-in-out",
        }}
        className={styles.cursor}
      />
    </>
  );
}
