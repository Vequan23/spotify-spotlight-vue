/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPOTIFY_API_URL: string
  // Add other environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
