import type { IShapeTreeNode, TLPage, TLPageState, TLShape, TLBinding, TLAssets } from '../types';
export declare function useShapeTree<T extends TLShape, M extends Record<string, unknown>>(page: TLPage<T, TLBinding>, pageState: TLPageState, assets: TLAssets, meta?: M): IShapeTreeNode<T, M>[];
//# sourceMappingURL=useShapeTree.d.ts.map