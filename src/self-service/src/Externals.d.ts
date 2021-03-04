export interface CoveoUAGlobal {
    (action: string, ...params: any[]): void;
    q?: [string, any[]][];
}

declare module "coveo.analytics" {
    declare const _default: CoveoUAGlobal;
    export default _default;
}