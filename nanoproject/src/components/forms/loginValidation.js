import {useForm} from 'react-hook-form'
import { useRouter } from 'next/router'
import Alert from '../alerts'
import {login} from "../../service/user"
import {setCurrentUser} from "../../actions/user";
import { useDispatch, useSelector } from 'react-redux';
import {connect} from "redux"
import jwtDecode from "jwt-decode";
import {setAuthToken} from "../../_helpers/setAuthToken";

const LoginValidation = ({items, onSubmit, alerts, valueLabel="Se Connecter"}) => {
    const {handleSubmit, errors, register} = useForm()
    const dispatch = useDispatch()
    const onSubmitFn = data => {
        if (onSubmit) {
            login(data).then(
                res => {
                    const {token} = res.data
                    console.log(jwtDecode(token))
                    dispatch(setCurrentUser(jwtDecode(token)))
                    localStorage.setItem('jwtToken', token)
                    setAuthToken()
                    router.push("/home")
                }
            )

        }
    }
    const router = useRouter()
    items = items.map(item => {
        item['ref'] = register(item['error'])
        return item
    })

    return (
        <form
            onSubmit={handleSubmit(onSubmitFn)}
            className="form flex flex-wrap w-full"
         >
            {alerts &&
            items.map((item, i) => {
                if (!errors[item.name]) return null
                let msg = errors[item.name].message
                if (msg.length === 0) msg = `${item.label} is required`
                return (
                    <div className="flex flex-col w-full">
                        {errors[item.name] && (
                            <div className="mb-2" key={i}>
                                <Alert
                                    color="bg-transparent border-red-500 text-red-500"
                                    borderLeft
                                    raised>
                                    {msg}
                                </Alert>
                            </div>
                        )}
                    </div>
                )
            })}
            <div className="w-full">
                {items.map((item, i) => {
                    return (
                        <div key={i}>
                            <div className="form-element">
                                {item.label && <div className="form-label text-base">{item.label}</div>}
                                <input
                                    ref={item.ref}
                                    name={item.name}
                                    type={item.type}
                                    className={`form-input text-xl px-6 focus:ring-2 focus:ring-blue-600 border-0 rounded-lg h-14 bg-gray-100 placeholder-gray-300 hover:bg-white border-0 hover:border-gray-400 ${
                                        errors[item.name] ? 'border-red-500' : ''
                                    }`}
                                    placeholder={item.placeholder}
                                />
                                {!alerts && errors[item.name] && (
                                    <div className="form-error">{errors[item.name].message}</div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
            <input
                type="submit"
                className="w-full px-3 py-4 text-white h-14 btn btn-default bg-blueDer hover:bg-blue-500 text-white btn-rounded"
                value={valueLabel}
            />
        </form>
    )
}


export default LoginValidation
