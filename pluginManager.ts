import { SWPlugin } from "./types";

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
}