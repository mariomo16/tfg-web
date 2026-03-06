const BASE_URL = 'http://localhost:8000';

export const environment = {
  production: false,
  api: {
    baseUrl: BASE_URL,
    apiUrl: `${BASE_URL}/api`,
  }
} as const;