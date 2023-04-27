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
    }
}

export const profile = {
    getProfile(userId) {
        return instanse
            .get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const auth = {
    getAuth() {
        return instanse
            .get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const follow = {
    postFollow(id = 1) {
        return instanse
            .post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    deleteFollow(id = 1) {
        return instanse
            .delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

