import { PluginManager } from "./pluginManager";
import { SWPlugin } from "./types";

// Structure of plugin  
/*{
    name: "plugin-name",
    // context -> processing data content
    execute: (context) => {
        // Process the content which is inside the context and return the modified context
        return context;
    }
}*/

export class BlogEngine {

    pluginManager: PluginManager;

    constructor() {
        this.pluginManager = new PluginManager();
    }

    use(plugin: SWPlugin) {
        this.pluginManager.register(plugin);
    }

    process(content: string): string {
        // todo: process
        return `${content} - By Sann`;
    }
};