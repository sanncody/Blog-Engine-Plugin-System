import { BlogEngine } from "./blogEngine";
import emojiWrapperPlugin from "./plugins/emojiWrapperPlugin";
import upperCasePlugin from "./plugins/upperCasePlugin";

const blogEngine = new BlogEngine();

/* For creating this method chaining, we have to return the class instance  */
blogEngine
.use(upperCasePlugin)
.use(emojiWrapperPlugin);

const res = blogEngine.process("This is my blog post");

console.log(res);