import instance from './instance'
const access_token = 'token'
// request interceptor
instance.interceptors.request.use(
    config => {

        if (access_token){
            config.headers = {
                'Authorization': `Bearer ${ access_token || null}`,
            }
        }
        return config
    },
    error => {
        console.log(error) // pour faire vs debug
        return Promise.reject(error)
    }
)

// response interceptor
instance.interceptors.response.use(

    response => {
        const res = response.data

        if (res.status !== 200) {

            //afficher un message d'erreur

            if (res.status === 402 || res.status == 401) {
                //   redirection vers la page de login ou choisir le traitement approprié
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // pour faire vs debug
        return Promise.reject(error)
    }
)

export default instance