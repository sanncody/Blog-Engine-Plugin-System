export interface SWContext {
    context: string;
};

export interface SWPlugin {
    name: string;
    execute: (context: SWContext) => SWContext;
}