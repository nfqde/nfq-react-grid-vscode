import {ExtensionContext, extensions} from "vscode";

export async function activate(context: ExtensionContext) {
    // Get the TS extension
    const tsExtension = extensions.getExtension('vscode.typescript-language-features');
    if (!tsExtension) {
        return;
    }

    await tsExtension.activate();

    // Get the API from the TS extension
    if (!tsExtension.exports || !tsExtension.exports.getAPI) {
        return;
    }

    const api = tsExtension.exports.getAPI(0);
    if (!api) {
        return;
    }

    api.configurePlugin('@styled/typescript-styled-plugin', {
        tags: ["media", "mediaBetween", 'styled', 'css', 'extend', 'injectGlobal', 'createGlobalStyle', 'keyframes']
    });
}