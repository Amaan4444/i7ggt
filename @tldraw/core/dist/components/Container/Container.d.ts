import type { HTMLProps } from 'react';
import * as React from 'react';
import type { TLBounds } from '../../types';
interface ContainerProps extends HTMLProps<HTMLDivElement> {
    id?: string;
    bounds: TLBounds;
    rotation?: number;
    isGhost?: boolean;
    isSelected?: boolean;
    children: React.ReactNode;
}
export declare const Container: import("react").FunctionComponent<ContainerProps>;
export {};
//# sourceMappingURL=Container.d.ts.map