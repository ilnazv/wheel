import React, { useCallback, useEffect, useState } from 'react';
import { IWheelItem } from '../Models';

interface IItemsInputProps {
    onChange: (items: IWheelItem[]) => void;
}

const defaultItems: IWheelItem[] = [
    {
        id: 0,
        title: 'item 1',
        weight: 1,
        color: 'blue',
        selected: true,
    },
    {
        id: 1,
        title: 'item 2',
        weight: 2,
        color: 'green',
        selected: true,
    },
    {
        id: 2,
        title: 'item 3',
        weight: 3,
        color: 'red',
        selected: true,
    },
];

export function ItemsInput({ onChange }: IItemsInputProps): JSX.Element {
    const [items, setItems] = useState(defaultItems);

    useEffect(() => {
        onChange(items.filter((x) => x.selected));
    }, [items]);

    const itemInput = useCallback((item: IWheelItem) => {
        return (
            <span key={`item-input_${item.id}`}>
                <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={(ev) => {
                        setItems((cur) => {
                            cur.find((x) => x.id === item.id)!.selected =
                                ev.target.checked;
                            return [...cur];
                        });
                    }}
                ></input>
                <span>{item.title}</span> - <span>{item.weight}</span> -{' '}
                <span>{item.color}</span>
            </span>
        );
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {items.map(itemInput)}
        </div>
    );
}
