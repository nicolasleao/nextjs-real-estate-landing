export const makeApiCall = async (
  path: string,
  method: string,
  body: string | null,
) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${path}`, {
    method: method,
    body: body,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
