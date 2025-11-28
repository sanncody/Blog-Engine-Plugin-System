import type { SWContext, SWPlugin } from "../types.ts";

const upperCasePlugin: SWPlugin = {
    name: "upperCase",
    execute: (context: SWContext): SWContext => {
        const content = context.content;

        const result = content.toUpperCase();

        return { ...context, content: result };
    }
}

export default upperCasePlugin;