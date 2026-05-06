import { LogClient, LogClientOptions } from "./client";
import { FrontendPackage, LogLevel } from "./types";

let client: LogClient | null = null;

export const initLogger = (options: LogClientOptions) => {
  client = new LogClient(options);
};

export const Log = async (
  level: LogLevel,
  pkg: FrontendPackage,
  message: string
) => {
  if (!client) {
    // eslint-disable-next-line no-console
    console.warn("Logger not initialised");
    return;
  }

  await client.log({
    stack: "frontend",
    level,
    package: pkg,
    message,
  });
};