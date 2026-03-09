import { useEffect, useRef, useState } from "react";
import { init, detect } from "../utils/utils";

export default function FaceExpression({ onClick = () => {} }) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    init({ landmarkerRef, videoRef, streamRef });

    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  async function handleClick() {
    const expression = detect({ landmarkerRef, videoRef, setExpression });
    onClick(expression);
  }

  return (
    <div className="face-expression">
      <div className="face-expression__video-wrap">
        <video ref={videoRef} playsInline />
      </div>
      <div className="face-expression__info">
        <span className="face-expression__label">{expression}</span>
        <button className="button" onClick={handleClick}>
          Detect My Mood
        </button>
      </div>
    </div>
  );
}
