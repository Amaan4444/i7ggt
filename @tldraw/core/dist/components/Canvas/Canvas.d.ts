import * as React from 'react';
import type { TLAssets, TLBinding, TLBounds, TLPage, TLPageState, TLPerformanceMode, TLShape, TLSnapLine, TLUsers } from '../../types';
interface CanvasProps<T extends TLShape, M extends Record<string, unknown>> {
    page: TLPage<T, TLBinding>;
    pageState: TLPageState;
    assets: TLAssets;
    snapLines?: TLSnapLine[];
    eraseLine?: number[][];
    grid?: number;
    users?: TLUsers<T>;
    userId?: string;
    hideBounds: boolean;
    hideHandles: boolean;
    hideIndicators: boolean;
    hideBindingHandles: boolean;
    hideCloneHandles: boolean;
    hideResizeHandles: boolean;
    hideRotateHandle: boolean;
    hideGrid: boolean;
    showDashedBrush: boolean;
    externalContainerRef?: React.RefObject<HTMLElement>;
    performanceMode?: TLPerformanceMode;
    meta?: M;
    id?: string;
    onBoundsChange: (bounds: TLBounds) => void;
}
export declare const Canvas: (<T extends TLShape, M extends Record<string, unknown>>({ id, page, pageState, assets, snapLines, eraseLine, grid, users, userId, meta, performanceMode, externalContainerRef, showDashedBrush, hideHandles, hideBounds, hideIndicators, hideBindingHandles, hideCloneHandles, hideResizeHandles, hideRotateHandle, hideGrid, onBoundsChange, }: CanvasProps<T, M>) => JSX.Element) & {
    displayName: string;
};
export {};
//# sourceMappingURL=Canvas.d.ts.map