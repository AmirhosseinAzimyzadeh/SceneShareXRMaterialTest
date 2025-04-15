import { useContext, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import OverlayCanvas from "../OverlayCanvas/OverlayCanvas";
import { AppContext } from "../../routes/home";
import { Data, MaterialType } from "../../data/Data";

interface ThreeDViewerProps {}

const slideResolution = 80;

export function ThreeDViewer(props: ThreeDViewerProps) {
  const [sliderValue, setSliderValue] = useState(0);
  const { appContext, setAppContext } = useContext(AppContext);
  const { roomIndex, roomMaterial } = appContext;

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const value = (videoRef.current.duration / slideResolution) * sliderValue;
      if (isNaN(value)) return;
      videoRef.current.currentTime = value;
    }
  }, [sliderValue, videoRef]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [roomMaterial, roomIndex, videoRef]);

  return (
    <div className={styles.container}>
      <div id="3DView" style={{ position: "relative" }}>
        <video ref={videoRef}>
          <source
            src={Data.conditions[roomIndex].types[roomMaterial]}
            type="video/mp4"
          />
        </video>
        <OverlayCanvas />
      </div>

      <input
        type="range"
        min="0"
        max={slideResolution}
        value={sliderValue}
        onChange={(e) => setSliderValue(parseInt(e.target.value))}
        className={styles.slider}
        id="myRange"
      />

      <div style={{
        transform: 'scale(0.5)',
        height: '20px'
      }}>
        <select
          value={roomMaterial}
          onChange={(e) => {
            setAppContext((prev: any) => ({
              ...prev,
              roomMaterial: parseInt(e.target.value),
              questionIndex: 0,
            }));
          }}
        >
          <option value={MaterialType.SOLID}>Solid</option>
          <option value={MaterialType.GLASSY_WIREFRAME}>
            Semi-transparent
          </option>
          <option value={MaterialType.EDGE_HIGHLIGHT}>Edge Highlight</option>
          <option value={MaterialType.UNITY_DEFAULT}>Unity Default</option>
        </select>

        <select
          value={roomIndex}
          onChange={(e) => {
            setAppContext((prev: any) => ({
              ...prev,
              roomIndex: parseInt(e.target.value),
              questionIndex: 0,
            }));
          }}
        >
          <option value={0}>{Data.conditions[0].name as string}</option>
          <option value={1}>{Data.conditions[1].name as string}</option>
          <option value={2}>{Data.conditions[2].name as string}</option>
          <option value={3}>{Data.conditions[3].name as string}</option>
        </select>
      </div>
    </div>
  );
}
