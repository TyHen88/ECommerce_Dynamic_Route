import { useQuery } from "@tanstack/react-query"
import { userService } from "@/service/user.service"

const useFetchProfile = () => {
    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    } = useQuery({
        queryKey: ["userInfo"],
        queryFn: userService.getUserProfile,
    })

    return {
        data,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    }
}

export default useFetchProfile