import type { TLPerformanceMode } from '../../../../../../@tldraw/core';
import type { SessionType, TldrawCommand, TldrawPatch } from '../../types';
import type { TldrawApp } from '../internal';
export declare abstract class BaseSession {
    app: TldrawApp;
    abstract type: SessionType;
    abstract performanceMode: TLPerformanceMode | undefined;
    constructor(app: TldrawApp);
    abstract start: () => TldrawPatch | undefined;
    abstract update: () => TldrawPatch | undefined;
    abstract complete: () => TldrawPatch | TldrawCommand | undefined;
    abstract cancel: () => TldrawPatch | undefined;
}
//# sourceMappingURL=BaseSession.d.ts.map