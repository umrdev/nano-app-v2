
export const setAuthToken = () => {
    let token = JSON.parse(localStorage.getItem('jwtToken'));
    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}
