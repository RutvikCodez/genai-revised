"use client";
import { useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import * as faceapi from "face-api.js";

export default function WebcamRecorder() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [expression, setExpression] = useState<string>("");

  const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
    useReactMediaRecorder({ video: true, audio: true });

  // Load face-api models once
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
      setModelsLoaded(true);
    };
    loadModels();
  }, []);

  // Attach live stream
  useEffect(() => {
    if (videoRef.current && previewStream) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);

  // Run expression detection on an interval while recording
  useEffect(() => {
    if (status === "recording" && modelsLoaded && videoRef.current) {
      intervalRef.current = setInterval(async () => {
        if (!videoRef.current) return;

        const detection = await faceapi
          .detectSingleFace(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions(),
          )
          .withFaceExpressions();

        if (detection) {
          console.log(detection.expressions);

          const top = Object.entries(detection.expressions).sort(
            (a, b) => b[1] - a[1],
          )[0];
          console.log("Expression:", top[0], "Confidence:", top[1].toFixed(2));
        }
      }, 1000); // check every second
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [status, modelsLoaded]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <p>Status: {status}</p>
      <p>Models loaded: {modelsLoaded ? "Yes" : "Loading..."}</p>
      {expression && <p>Detected expression: {expression}</p>}

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-120 h-90 bg-black rounded-lg"
      />

      <button onClick={startRecording}>Start</button>
      <button onClick={stopRecording}>Stop</button>

      {mediaBlobUrl && <video src={mediaBlobUrl} controls className="w-120" />}
    </div>
  );
}
