import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instanse
        .post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instanse
            .delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instanse
            .get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuth() {
        return instanse
            .get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

