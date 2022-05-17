import React, { useRef, useState } from 'react';
import { IWheelItem } from './Models';
import { IWheelRef, Wheel } from './Wheel';
import { ItemsInput } from './ItemsInput';

export default function App() {
    const wheelRef = useRef<IWheelRef>(null);

    const [items, setItems] = useState<IWheelItem[]>([]);

    return (
        <>
            <button onClick={() => wheelRef.current?.start(10)}>Start</button>
            <ItemsInput
                onChange={(_items) => {
                    console.log('items: ', _items);
                    setItems(_items);
                }}
            />
            <Wheel componentRef={wheelRef} items={items} />
        </>
    );
}
