import type { SWContext, SWPlugin } from "./types";

export class PluginManager {
    plugins: SWPlugin[] = []

    // Registering plugins
    register(plugin: SWPlugin) {
        if (!plugin.name) {
            throw new Error("Plugin name is required");
        }
        this.plugins.push(plugin);
        console.log(`✔️ Plugin: ${plugin.name} registered!`);
    }

    execute(context: SWContext): SWContext {
        
        let result = { ...context };
        for (const plugin of this.plugins) {
            result = plugin.execute(result);
        }

        return result;
    }
}