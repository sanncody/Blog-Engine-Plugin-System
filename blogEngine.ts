import { PluginManager } from "./pluginManager";
import { SWContext, SWPlugin } from "./types";

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

        return this;
    }

    process(content: string): SWContext {
        console.log();
        
        console.log("Content is processing...\n");
        
        const context: SWContext = {
            content
        };

        const finalResult = this.pluginManager.execute(context);
        
        return finalResult;
    }
};