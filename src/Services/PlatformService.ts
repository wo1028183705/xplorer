import { platform } from "@tauri-apps/plugin-os";

export const getOS = async (): Promise<string> => {
    const currentPlatform = await platform();
    return currentPlatform;
};
