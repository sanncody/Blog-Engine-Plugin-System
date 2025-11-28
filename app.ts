import { BlogEngine } from "./blogEngine";

const blogEngine = new BlogEngine();


// blogEngine
// .use(upperCasePlugin)
// .use(emojiWrapperPlugin)
// .use(wordCountPlugin);

const res = blogEngine.process("This is my blog post");

console.log(res);