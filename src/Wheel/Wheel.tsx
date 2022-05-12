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

const debug = false;

export function Wheel() {
  const startSpeed = 10;
  const roundDivider = useRef(360);
  const [degree, setDegree] = useState(0);
  const speed = useRef(startSpeed);
  const [winnerId, setWinnerId] = useState<number>();
  const percentStep = useMemo(
    () => 100 / items.map((x) => x.weight).reduce((a, b) => a + b),
    []
  );
  const degreeStep = useMemo(
    () => 360 / items.map((x) => x.weight).reduce((a, b) => a + b),
    []
  );
  const style = useMemo(() => {
    const res = `${items.reduce(
      (acc: string, cur: IWheelItem, index, arr): string => {
        return `${acc}, ${cur.color} ${
          index > 0 ? percentStep * arr[index - 1].weight : "0"
        }% ${
          (index > 0 ? percentStep * arr[index - 1].weight : 0) +
          percentStep * cur.weight
        }%`;
      },
      `from ${degree}deg`
    )}`;
    if (debug) {
      console.log(res);
    }
    return res;
  }, [degree]);

  useEffect(() => {
    if (debug) {
      console.warn("roundDivider: ", roundDivider);
    }
    const winnerPosition = Math.ceil(Math.random() * 360);
    let winner: number | undefined;
    items.reduce((acc, cur) => {
      const section = acc + degreeStep * cur.weight;
      const res = winnerPosition / section;
      if (res < 1) {
        winner = cur.id;
        return;
      }
      return section;
    }, 0);
    if (debug) {
      console.warn("winnerSection: ", winnerPosition);
      console.warn("winner: ", winner);
    }
    setInterval(() => {
      setDegree((cur) => {
        const round = Math.floor(cur / roundDivider.current);
        const nextSpeed = startSpeed - round;
        if (speed.current != nextSpeed) {
          if (nextSpeed > 0) {
            speed.current = nextSpeed;
            if (debug) {
              console.warn("set speed: ", nextSpeed);
            }
          } else {
            if (360 - (cur % 360) == winnerPosition) {
              speed.current = 0;
              setWinnerId(winner);
              if (debug) {
                console.warn("set speed: ", nextSpeed);
              }
            }
          }
        }
        return cur + speed.current;
      });
    }, 10);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        overflow: "hidden",
        margin: "0",
        height: "100vh",
        background: "gainsboro",
      }}
    >
      <div
        style={{
          justifySelf: `center`,
        }}
      >
        Winner is {items.find((x) => x.id === winnerId)?.color}
      </div>
      <div
        style={{
          border: `20px solid white`,
          borderRadius: `50%`,
          background: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            position: `absolute`,
            left: `50%`,
            transform: "translate(-50%, 0px) rotate(45deg)",
            border: "solid black",
            borderWidth: "0 3px 3px 0",
            display: "inline-block",
            padding: "3px",
          }}
        ></div>
        <div
          style={{
            padding: `8em`,
            borderRadius: `50%`,
            background: `radial-gradient(white calc(20% - 1px), transparent 20%), 
            conic-gradient(${style})`,
          }}
        ></div>
      </div>
    </div>
  );
}
