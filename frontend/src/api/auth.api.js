import axiosInstance from "./axios";

export const loginUser = async (data) => {
    

    return Promise.resolve({
        data: {
            user: {
                id: "123",
                name: "Hemraj",
                role: "candidate",
            },
            accessToken: "fake-wt-token",
        },
    });
};