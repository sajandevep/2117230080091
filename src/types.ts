export type LogLevel = "debug" | "info" | "warn" | "error" | "fatal";

export type FrontendPackage = "api" | "component" | "hook" | "page" | "state" | "style";
export type SharedPackage = "auth" | "config" | "middleware" | "utils";
export type LogPackage = FrontendPackage | SharedPackage;

export interface LogPayload {
  stack: "frontend"; // Always hardcoded
  level: LogLevel;
  package: LogPackage;
  message: string;
}

export interface LoggerOptions {
  getAccessToken: () => string | null;
  baseUrl: string;
  timeoutMs?: number;
  onError?: (error: any) => void;
}