import { SWContext, SWPlugin } from "../types";

const reversePlugin: SWPlugin = {
    name: "reverse",
    execute: (context: SWContext): SWContext => {
        const content = context.content;
        const result = content.split('').reverse().join('');
        return { ...context, content: result };
    }
};

export default reversePlugin;