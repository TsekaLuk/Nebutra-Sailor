import pino from "pino";
import type { Logger, Meta } from "./types.js";

const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

const pinoInstance = pino({
  ...(isTest
    ? { level: "silent" }
    : {
        level: process.env.LOG_LEVEL ?? (isDev ? "debug" : "info"),
        ...(isDev
          ? {
              transport: {
                target: "pino-pretty",
                options: { colorize: true, translateTime: "SYS:HH:MM:ss" },
              },
            }
          : {}),
      }),
});

function serializeError(error: unknown): Meta {
  if (error == null) {
    return {};
  }
  if (error instanceof Error) {
    return {
      err: { message: error.message, stack: error.stack, name: error.name },
    };
  }
  return { err: error };
}

function makeLogger(base: pino.Logger): Logger {
  return {
    debug(msg, meta) {
      base.debug(meta ?? {}, msg);
    },
    info(msg, meta) {
      base.info(meta ?? {}, msg);
    },
    warn(msg, meta) {
      base.warn(meta ?? {}, msg);
    },
    error(msg, error, meta) {
      base.error({ ...serializeError(error), ...meta }, msg);
    },
    child(bindings) {
      return makeLogger(base.child(bindings));
    },
  };
}

export const logger: Logger = makeLogger(pinoInstance);
