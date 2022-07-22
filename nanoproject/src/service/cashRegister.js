import API from "../config/axios"


export const addNewCashRegister = (data) => {
    API.post('/cash-register', data).then(
        res => res
    ).catch(err =>
        err.response
    );
}
