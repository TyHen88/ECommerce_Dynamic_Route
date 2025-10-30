import { UserInfo } from "@/lib/types"
import { http } from "@/utils/http"

const ServiceId = {
    USER_PROFILE: '/api/wb/v1/user/profile',
}

export const userService = {
    getUserProfile: async (): Promise<UserInfo | null> => {
        const response = await http.get(ServiceId.USER_PROFILE)
        return response.data

    },
}
