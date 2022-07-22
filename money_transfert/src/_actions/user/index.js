import {LOGIN} from "../constants/types"

export const setCurrentUser = (data) => ({
    type : LOGIN,
    payload : data
})