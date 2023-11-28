import axios from "axios";
import { getUpdatedTokens } from "@/app/utils/auth";

export const handleValidationError = (e: any) => {
    if (e.response) {
        const message = Array.isArray(e.response.data.message) ? e.response.data.message[0] : e.response.data.message;
        return {
            status: e.response.status,
            message
        }
    }
    return {
        status: 500,
        message: 'Erro interno no servidor'
    }
}

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
    timeout: 1000,
    headers: {
        accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }
});

api.interceptors.request.use(async (config: any) => {
    const tokens = await getUpdatedTokens();
    if (tokens.accessToken && tokens.refreshToken && tokens.expiresAt) {
        config.headers = {
            ...config.headers,
            authorization: `Bearer ${tokens.accessToken}`
        }
    }
    return config;
}, (error: any) => Promise.reject(error))

export default api;