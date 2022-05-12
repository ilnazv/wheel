import React, { useEffect, useMemo, useRef, useState } from "react";
import { IColored, IItem } from "../Models";

interface IWheelItem extends IColored, IItem {}

const items: IWheelItem[] = [
  {
    id: 0,
    title: "item 1",
    weight: 1,
    color: "blue",
  },
  {
    id: 1,
    title: "item 2",
    weight: 2,
    color: "green",
  },
  {
    id: 2,
    title: "item 3",
    weight: 3,
    color: "red",
  },
];

export function Wheel() {
    const startSpeed =10;
  const [degree, setDegree] = useState(0);
  const speed = useRef(startSpeed);
  const step = useMemo(
    () => 100 / items.map((x) => x.weight).reduce((a, b) => a + b),
    []
  );
  const style = useMemo(() => {
    const res = `${items.reduce(
      (acc: string, cur: IWheelItem, index, arr): string => {
        return `${acc}, ${cur.color} ${
          index > 0 ? step * arr[index - 1].weight : "0"
        }% ${
          (index > 0 ? step * arr[index - 1].weight : 0) + step * cur.weight
        }%`;
      },
      `from ${degree}deg`
    )}`;
    console.log(res);
    return res;
  }, [degree]);

  useEffect(() => {
    setInterval(() => {
      setDegree(cur => {
          const round = Math.floor(cur / 360);
          if (speed.current != startSpeed - round) {
            console.warn('set speed: ', startSpeed - round);
            speed.current = startSpeed - round; 
          }
          return cur + speed.current;
        });
    }, 10);
  }, []);

  return (
    <div
      style={{
        width: 300,
        height: 300,
        border: `1px solid #ccc`,
        borderRadius: "50%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          border: `solid 2em white`,
          padding: `8em`,
          borderRadius: `50%`,
          background: `radial-gradient(white calc(20% - 1px), transparent 20%), 
            conic-gradient(${style})`,
        }}
      ></div>
    </div>
  );
}
