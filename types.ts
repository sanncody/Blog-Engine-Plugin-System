export interface SWContext {
    content: string;
};

export interface SWPlugin {
    name: string;
    execute: (content: SWContext) => SWContext;
}