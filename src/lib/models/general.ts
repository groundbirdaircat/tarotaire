import type { Color } from '$classes/color';

export type SlotContent = () => any; //eslint-disable-line
export type AnyFn = (...args: any[]) => any; //eslint-disable-line
export type WithTarget<TEvent, TElement> = TEvent & { currentTarget: TElement };
export type EventWithTarget<T> = Event & { currentTarget: T };

export type Dict<T> = Record<string, T>;

export type ColorValue = (typeof Color)[keyof typeof Color];
