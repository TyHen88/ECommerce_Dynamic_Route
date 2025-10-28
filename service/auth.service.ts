import { http } from "@/utils/http";

const ServiceId = {
    LOGIN: '/api/wb/v1/auth/login',
}

async function login(username: string, password: string) {
    return await http.post(ServiceId.LOGIN, { username, password });
}

export const authService = {
    login,
}