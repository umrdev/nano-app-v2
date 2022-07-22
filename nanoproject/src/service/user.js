import API from "../config/axios"

export const login = (data) => {
    return API.post('auth/login', data).then(
            res => res
        ).catch(err =>
            err.response
        );
}

export const getUsersAll = () => {
    return API.get('/auth/users').then(
        res => res
    ).catch(err =>
        err.response
    );
}


