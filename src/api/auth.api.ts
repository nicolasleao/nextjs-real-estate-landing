import api, { handleValidationError } from "./index";

export const logIn = async (email: string, password: string) => {
  try {
    const res = await api.post("/auth/local/login", {
      email,
      password,
    });
    return res.data;
  } catch (e: any) {
    return handleValidationError(e);
  }
};

export const signup = async (name: string, email: string, password: string) => {
  try {
    const res = await api.post("/auth/local/signup", {
      name,
      email,
      password,
    });
    return res.data;
  } catch (e: any) {
    return handleValidationError(e);
  }
};
