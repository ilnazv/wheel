import React, { useRef } from "react";
import { IWheelRef, Wheel } from "./Wheel/Wheel";

export default function App() {
  const wheelRef = useRef<IWheelRef>(null);
  return (
    <>
      <button onClick={() => wheelRef.current?.start(10)}>Start</button>
      <Wheel componentRef={wheelRef} />
    </>
  );
}
