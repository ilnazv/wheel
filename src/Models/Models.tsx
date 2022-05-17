export interface IItem {
    id: number;
    title: string;
    weight: number;
}

export interface IColored {
    color: 'red' | 'green' | 'blue';
}

export interface IWheelItem extends IColored, IItem, ISelectable {}

export interface ISelectable {
    selected: boolean;
}
