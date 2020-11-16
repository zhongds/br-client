import Store from "electron-store";
import path from "path";
import { app } from "electron";
import { ConfigStore, initialConfig } from "../types";

export const appDir = path.join(app.getPath("appData"), "oss client");
export const downloadDir = app.getPath("downloads");

export const configStore = new Store<ConfigStore>({
  name: "config",
  cwd: appDir,
  fileExtension: "json",
  defaults: { ...initialConfig, downloadDir }
});
