export const handleApiError = (res: any, data: any, setError: any) => {
  if (data.status != 200) {
    setError(data.message);
  } else {
    setError("");
  }
};

export const makeApiCall = async (
  path: string,
  method: string,
  body: string | null,
) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`, {
    method: method,
    body: body,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};

export const handleGoogleLogin = (e: any) => {
  e.preventDefault();
  e.stopPropagation();
  window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
};
