import type { SWContext, SWPlugin } from "../types";

const emojiWrapperPlugin: SWPlugin = {
    name: "emojiWrapper",
    execute: (context: SWContext): SWContext => {
        const content = context.content;
        const result = `😂👌 ${content} 👍🤌`
        return { ...context, content: result };
    }
};

export default emojiWrapperPlugin;