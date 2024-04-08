import { invoke } from '@tauri-apps/api/core';
import { ICliArguments } from '../Typings/Store/cli';

export const fetchCliInformation = async (): Promise<ICliArguments> => await invoke<ICliArguments>('get_cli_args');