import React, {
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react';
import { IWheelItem } from '../Models';

const debug = false;

export interface IWheelParams {
    componentRef: React.RefObject<IWheelRef>;
    items: IWheelItem[];
}

export interface IWheelRef {
    start: (speed: number) => void;
}

export function Wheel({ componentRef, items = [] }: IWheelParams) {
    const roundDivider = 360;
    const [degree, setDegree] = useState(0);
    const [winnerId, setWinnerId] = useState<number>();
    const percentStep = useMemo(
        () => 100 / items.map((x) => x.weight).reduce((a, b) => a + b, 0),
        [items]
    );
    const degreeStep = useMemo(
        () => 360 / items.map((x) => x.weight).reduce((a, b) => a + b, 0),
        [items]
    );
    const style = useMemo(() => {
        let curPercent = 0;
        const res = `${items.reduce(
            (acc: string, cur: IWheelItem, index, arr): string => {
                curPercent = curPercent + percentStep * cur.weight;
                return `${acc}, ${cur.color} ${
                    index > 0 ? percentStep * arr[index - 1].weight : '0'
                }% ${curPercent}%`;
            },
            `from ${degree}deg`
        )}`;
        if (debug) {
            console.log(res);
        }
        return res;
    }, [items, degree]);

    const intervalIdRef = useRef<NodeJS.Timer>();

    const unmountWheel = useCallback(() => {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = undefined;
        }
        setDegree(0);
        setWinnerId(undefined);
    }, []);

    useEffect(
        () => () => {
            unmountWheel();
        },
        []
    );

    useEffect(() => unmountWheel(), [items]);

    const itemsMap = useMemo(() => {
        const getItemIdByPosition = (position: number): number => {
            let winner: number | undefined;
            items.reduce((acc, cur) => {
                const section = acc + degreeStep * cur.weight;
                const res = position / section;
                if (res < 1) {
                    winner = cur.id;
                    return;
                }
                return section;
            }, 0);
            return winner!;
        };
        return Array.from(Array(360).keys()).map(getItemIdByPosition);
    }, [items]);

    useImperativeHandle(
        componentRef,
        () => ({
            start: (speed: number): void => {
                startWheel(speed, itemsMap);
            },
        }),
        [componentRef, itemsMap]
    );

    const startWheel = useCallback((startSpeed: number, itemsMap: number[]) => {
        unmountWheel();
        if (debug) {
            console.warn('roundDivider: ', roundDivider);
        }
        const winnerPosition = Math.ceil(Math.random() * 360);
        const winner = itemsMap[winnerPosition];
        if (debug) {
            console.warn('winnerSection: ', winnerPosition);
            console.warn('winner: ', winner);
        }
        let speed = startSpeed;
        intervalIdRef.current = setInterval(() => {
            setDegree((cur) => {
                const round = Math.floor(cur / roundDivider);
                const nextSpeed = startSpeed - round;
                const curId = itemsMap[360 - (cur % 360)];
                if (debug) {
                    console.warn('curId: ', curId);
                }
                setWinnerId(curId);
                if (speed != nextSpeed) {
                    if (nextSpeed > 0) {
                        speed = nextSpeed;
                        if (debug) {
                            console.warn('set speed: ', nextSpeed);
                        }
                    } else {
                        if (360 - (cur % 360) == winnerPosition) {
                            speed = 0;
                            setWinnerId(winner);
                            clearInterval(intervalIdRef.current);
                            intervalIdRef.current = undefined;
                            if (debug) {
                                console.warn('set speed: ', nextSpeed);
                            }
                        }
                    }
                }
                return cur + speed;
            });
        }, 10);
    }, []);

    return (
        <div
            style={{
                display: 'grid',
                placeContent: 'center',
                overflow: 'hidden',
                margin: '0',
                height: '100%',
                padding: `10em`,
                background: 'gainsboro',
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
                    background: 'white',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: `absolute`,
                        left: `50%`,
                        transform: 'translate(-50%, 0px) rotate(45deg)',
                        border: 'solid black',
                        borderWidth: '0 3px 3px 0',
                        display: 'inline-block',
                        padding: '3px',
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
