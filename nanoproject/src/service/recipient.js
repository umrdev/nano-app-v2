import API from "../config/axios"


export const addNewRecipient = (data) => {
    API.post('/recipient', data).then(
        res => res
    ).catch(err =>
        err.response
    );
}
