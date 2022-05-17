import { CSS_COLOR_NAMES } from '../Constants';

export interface IItem {
    id: number;
    title: string;
    weight: number;
}

export type Color = typeof CSS_COLOR_NAMES[number];

export interface IColored {
    color: Color;
}

export interface IWheelItem extends IColored, IItem, ISelectable {}

export interface ISelectable {
    selected: boolean;
}
