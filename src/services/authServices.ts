import api from "./apiClient";

export const login = async (email: string, password: string) => {
  const response = await api.post("/users/login", { email, password });
  return response.data;
};

export const register = async (name: string, email: string, password: string) => {
  const response = await api.post("/users/register", { name, email, password });
  return response.data;
};