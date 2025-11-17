import ky, { type KyInstance } from "ky";
import { VAR } from "./variable";
export const httpRequest = (): KyInstance => {
  const BASE_URL = VAR.urlApi;

  if (!BASE_URL) {
    throw new Error("Missing API_BASE_URL in environment variables");
  }
  return ky.extend({
    prefixUrl: BASE_URL,
    timeout: 10000,
    retry: {
      limit: 2,
      methods: ["get", "post", "put", "delete"],
    },
    hooks: {
      beforeRequest: [
        (request) => {
          request.headers.set("Content-Type", "application/json");
        },
      ],
    },
  });
};
