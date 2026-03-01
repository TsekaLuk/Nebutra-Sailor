/**
 * API Client for Nebutra Web App
 * Communicates with api.nebutra.com (api-gateway)
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
  token?: string;
};

class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = "GET", body, headers = {}, token } = options;

  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers,
  };

  if (token) {
    requestHeaders.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new ApiError(
      response.status,
      error.message || "Request failed",
      error,
    );
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}

export const api = {
  get: <T>(
    endpoint: string,
    options?: Omit<RequestOptions, "method" | "body">,
  ) => request<T>(endpoint, { ...options, method: "GET" }),

  post: <T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<RequestOptions, "method" | "body">,
  ) => request<T>(endpoint, { ...options, method: "POST", body }),

  put: <T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<RequestOptions, "method" | "body">,
  ) => request<T>(endpoint, { ...options, method: "PUT", body }),

  patch: <T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<RequestOptions, "method" | "body">,
  ) => request<T>(endpoint, { ...options, method: "PATCH", body }),

  delete: <T>(
    endpoint: string,
    options?: Omit<RequestOptions, "method" | "body">,
  ) => request<T>(endpoint, { ...options, method: "DELETE" }),
};

/**
 * Server-side: returns an API client with Clerk JWT auto-injected.
 * Use in Server Components, Route Handlers, and Server Actions.
 */
export async function getAuthenticatedApi() {
  const { auth } = await import("@clerk/nextjs/server");
  const { getToken } = await auth();
  const token = (await getToken()) ?? undefined;

  return {
    get: <T>(
      endpoint: string,
      options?: Omit<RequestOptions, "method" | "body">,
    ) => api.get<T>(endpoint, { ...options, token }),

    post: <T>(
      endpoint: string,
      body?: unknown,
      options?: Omit<RequestOptions, "method" | "body">,
    ) => api.post<T>(endpoint, body, { ...options, token }),

    put: <T>(
      endpoint: string,
      body?: unknown,
      options?: Omit<RequestOptions, "method" | "body">,
    ) => api.put<T>(endpoint, body, { ...options, token }),

    patch: <T>(
      endpoint: string,
      body?: unknown,
      options?: Omit<RequestOptions, "method" | "body">,
    ) => api.patch<T>(endpoint, body, { ...options, token }),

    delete: <T>(
      endpoint: string,
      options?: Omit<RequestOptions, "method" | "body">,
    ) => api.delete<T>(endpoint, { ...options, token }),
  };
}

export { ApiError };
export default api;
