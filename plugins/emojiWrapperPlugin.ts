import type { SWContext, SWPlugin } from "../types";

const emojiWrapperPlugin: SWPlugin = {
    name: "emojiWrapper",
    execute: (context: SWContext): SWContext => {
        const content = context.content;
        const emojis = ["🔥", "✨", "⚡", "🎉", "💯", "🚀", "🎈", "🥳", "🎊"];
        const emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
        const emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
        const emoji3 = emojis[Math.floor(Math.random() * emojis.length)];
        const emoji4 = emojis[Math.floor(Math.random() * emojis.length)];
        const result = `${emoji1} ${emoji2} ${content} ${emoji3} ${emoji4}`;

        return { ...context, content: result };
    }
};

export default emojiWrapperPlugin;