import axiosInstance from "./apiClient"

export const postLogin = async (user: any) => {
    try {
        const response = await axiosInstance.post('/api/auth/login', user)
        return response
    } catch (err) {
        console.log(err)
    }

}