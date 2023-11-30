import axios from "axios";
import { logIn } from "@/api/auth.api";

export const setTokensToStorage = (
  at: string,
  rt: string,
  expiresAt: string,
) => {
  localStorage.setItem("@immonova/at", at);
  localStorage.setItem("@immonova/rt", rt);
  localStorage.setItem("@immonova/exp", expiresAt);
};

export const isLoggedIn = async (cb: any) => {
  const at = localStorage.getItem("@immonova/at");
  const rt = localStorage.getItem("@immonova/rt");
  const exp = localStorage.getItem("@immonova/rt");
  if (!at || !rt || !exp) {
    if (typeof window != "undefined") window.location.href = "/login";
  } else {
    cb();
  }
};

export const getUpdatedTokens = async () => {
  // fetch current tokens from localStorage
  const at = localStorage.getItem("@immonova/at");
  const rt = localStorage.getItem("@immonova/rt");
  const exp = localStorage.getItem("@immonova/exp");

  // if some data is missing, consider the user logged out
  if (!exp || !at || !rt) {
    return {};
  }

  // calculate if the token needs to be refreshed based on expiresAt and current timestamp
  const expiresAt = parseInt(exp);
  const now = new Date();
  now.setMinutes(now.getMinutes() + 1);
  if (now.getTime() >= expiresAt) {
    // if tokens need to be refreshed
    // make a request to refresh them and await for it to be finished to return
    const reqBodyJson = JSON.stringify({
      refreshToken: rt,
    });
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        {},
        {
          headers: {
            authorization: `Bearer ${rt}`,
          },
        },
      );
      const { access_token, refresh_token, expires_at } = res.data;
      setTokensToStorage(access_token, refresh_token, `${expires_at}`);
      return {
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresAt: expires_at,
      };
    } catch (e: any) {
      return {};
    }
  } else {
    // if tokens are present and do not need to be refreshed, simply return them
    return {
      accessToken: at,
      refreshToken: rt,
      expiresAt: exp,
    };
  }
};

export const handleGoogleLogin = (e: any) => {
  e.preventDefault();
  e.stopPropagation();
  window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
};
