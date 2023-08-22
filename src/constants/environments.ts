export const GlobalEnvConfig = Object.freeze({
  APP_BASE_URL: import.meta.env.VITE_APP_BASE_URL ?? "",
  PORT: import.meta.env.VITE_PORT ?? "",
  BASE_API_PREFIX: import.meta.env.VITE_BASE_API_PREFIX ?? "",
  BASE_API_PROXY: import.meta.env.VITE_BASE_API_PROXY,
});
