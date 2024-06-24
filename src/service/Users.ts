import { axiosInstance } from "./axiosInstance";

export const Users = {
    getAllUsers: async () => {
        const response = await axiosInstance.get(`/users`);
        return response.data
    }
}