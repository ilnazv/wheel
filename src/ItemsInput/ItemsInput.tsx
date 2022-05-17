import React, { useCallback, useEffect, useState } from 'react';
import { CSS_COLOR_NAMES } from '../Constants';
import { Color, IWheelItem } from '../Models';

interface IItemsInputProps {
    onChange: (items: IWheelItem[]) => void;
}

const defaultItems: IWheelItem[] = [
    {
        id: 0,
        title: 'item 1',
        weight: 1,
        color: 'Blue',
        selected: true,
    },
    {
        id: 1,
        title: 'item 2',
        weight: 2,
        color: 'Green',
        selected: true,
    },
    {
        id: 2,
        title: 'item 3',
        weight: 3,
        color: 'Red',
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
                <input
                    type="text"
                    value={item.title}
                    onChange={(ev) => {
                        setItems((cur) => {
                            cur.find((x) => x.id === item.id)!.title =
                                ev.target.value;
                            return [...cur];
                        });
                    }}
                ></input>
                {' - '}
                <input
                    type="number"
                    value={item.weight}
                    onChange={(ev) => {
                        setItems((cur) => {
                            cur.find((x) => x.id === item.id)!.weight =
                                ev.target.valueAsNumber;
                            return [...cur];
                        });
                    }}
                ></input>
                {' - '}
                <input
                    type="text"
                    value={item.color}
                    onChange={(ev) => {
                        setItems((cur) => {
                            cur.find((x) => x.id === item.id)!.color = ev.target
                                .value as Color;
                            return [...cur];
                        });
                    }}
                ></input>
            </span>
        );
    }, []);

    const getRandomColor = useCallback(
        () =>
            CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)],
        []
    );

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {items.map(itemInput)}
            <button
                onClick={() =>
                    setItems((cur) => {
                        const color = getRandomColor();
                        return [
                            ...cur,
                            {
                                id: Math.max(...cur.map((x) => x.id)) + 1,
                                color,
                                selected: true,
                                title: color,
                                weight: 1,
                            },
                        ];
                    })
                }
            >
                Add item
            </button>
        </div>
    );
}
