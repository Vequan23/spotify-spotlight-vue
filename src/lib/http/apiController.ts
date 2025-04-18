import axios from 'axios';

export const apiBaseUrl = import.meta.env.VITE_SPOTIFY_API_URL;

const TOKEN_EXPIRY_MS = 3500 * 1000;

export const apiController = axios.create({
  baseURL: apiBaseUrl,
});

let accessToken: string | null = null;
let tokenExpiry = 0;

apiController.interceptors.request.use(async (config) => {
  const configCopy = { ...config };

  const now = Date.now();

  if (!accessToken || now >= tokenExpiry) {
    try {
      const res = await fetch(import.meta.env.VITE_NEXT_JS_URL, {
        headers: {
          'x-internal-api-key': import.meta.env.VITE_PUBLIC_API_KEY
        }
      });
      const data = await res.json();
      accessToken = data.token;

      tokenExpiry = now + TOKEN_EXPIRY_MS;
    } catch (err) {
      console.error('Failed to refresh Spotify token:', err);
    }
  }

  if (accessToken) {
    configCopy.headers.Authorization = `Bearer ${accessToken}`;
  }

  return configCopy;
});
