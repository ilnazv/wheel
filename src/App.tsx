import React, { useCallback, useRef, useState } from 'react';
import { IWheelItem } from './Models';
import { IWheelRef, Wheel } from './Wheel';
import { ItemsInput } from './ItemsInput';

export default function App() {
    const wheelRef = useRef<IWheelRef>(null);

    const [items, setItems] = useState<IWheelItem[]>([]);
    const [winnerId, setWinnerId] = useState<number>();

    const onWheelChange = useCallback((itemId?: number) => {
        setWinnerId(itemId);
    }, []);

    const onWheelDone = useCallback((itemId?: number) => {
        console.log('done: ', itemId);
    }, []);

    return (
        <>
            <div
                style={{
                    justifySelf: `center`,
                }}
            >
                Winner is {items.find((x) => x.id === winnerId)?.color}
            </div>
            <div
                style={{
                    position: 'relative',
                }}
            >
                <Wheel
                    componentRef={wheelRef}
                    items={items}
                    onChange={onWheelChange}
                    onDone={onWheelDone}
                />
                <button
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '50%',
                        height: '70px',
                        width: '70px',
                    }}
                    onClick={() => wheelRef.current?.start(10)}
                >
                    SPIN
                </button>
            </div>
            <ItemsInput
                onChange={(val) => {
                    setItems(val);
                }}
            />
        </>
    );
}
