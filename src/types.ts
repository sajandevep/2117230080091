export type LogLevel = "debug" | "info" | "warn" | "error" | "fatal";
export type LogPackage = "page" | "component" | "api" | "state" | "auth" | "config" | "middleware" | "utils";

export interface LogPayload {
  stack: "frontend";
  level: LogLevel;
  package: LogPackage;
  message: string;
}