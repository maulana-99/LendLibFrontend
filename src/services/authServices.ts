import api from "./apiClient";

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data; // Adjust response structure as needed
};
