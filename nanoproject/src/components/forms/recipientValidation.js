import {useForm} from 'react-hook-form'
import Alert from '../alerts'

const RecipientValidation = ({items, onSubmit, alerts, valueLabel="Valider"}) => {
    
    const { errors, register, handleSubmit} = useForm()
    const onSubmitFn = data => {
        if (onSubmit) {
            console.log(data)
            onSubmit(data)
        }
    }
    items = items.map(item => {
        item['ref'] = register(item['error'])
        return item
    })

    return (
        <form
            onSubmit={handleSubmit(onSubmitFn)}
            className="form flex flex-wrap w-full">
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
                    if (item.type === 'checkbox') {
                        return (
                            <div className="form-element">
                                {item.label && <div className="form-label">{item.label}</div>}
                                <div className="flex items-center justify-start space-x-2">
                                    {item.options.map((option, j) => (
                                        <label className="flex items-center justify-start space-x-2">
                                            <input
                                                ref={item.ref}
                                                type="checkbox"
                                                value={option.value}
                                                name={item.name}
                                                className={`form-checkbox h-4 w-4 ${
                                                    errors[item.name] ? 'text-red-500' : ''
                                                }`}
                                            />
                                            <span
                                                className={`${
                                                    errors[item.name] ? 'text-red-500' : ''
                                                }`}>
                        {option.label}
                      </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                    if (item.type === 'radio') {
                        return (
                            <div className="form-element">
                                {item.label && <div className="form-label">{item.label}</div>}
                                <div className="flex items-center justify-start space-x-2">
                                    {item.options.map((option, j) => (
                                        <label className="flex items-center justify-start space-x-2">
                                            <input
                                                type="radio"
                                                value={option.value}
                                                name={item.name}
                                                ref={register({required: true})}
                                                className={`form-radio h-4 w-4 ${
                                                    errors[item.name] ? 'text-red-500' : ''
                                                }`}
                                            />
                                            <span
                                                className={`${
                                                    errors[item.name] ? 'text-red-500' : ''
                                                }`}>
                        {option.label}
                      </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                    if (item.type === 'select') {
                        return (
                            <div className="form-element">
                                {item.label && <div className="form-label">{item.label}</div>}
                                <select
                                    ref={item.ref}
                                    name={item.name}
                                    className={`form-select text-lg px-6 focus:ring-2 focus:ring-blue-600 border-0 rounded-lg h-14 bg-gray-100 placeholder-gray-300 hover:bg-white  hover:border-gray-400 ${
                                        errors[item.name] ? 'border border-red-500' : ''
                                    }`}>
                                    {item.options.map((option, j) => (
                                        <option key={j} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                {!alerts && errors[item.name] && (
                                    <div className="form-error">{errors[item.name].message}</div>
                                )}
                            </div>
                        )
                    }
                    if (item.type === 'textarea') {
                        return (
                            <>
                                <div className="form-element">
                                    {item.label && <div className="form-label">{item.label}</div>}
                                    <textarea
                                        ref={item.ref}
                                        name={item.name}
                                        className={`form-textarea text-lg px-6 focus:ring-2 focus:ring-blue-600 border-0 rounded-lg bg-gray-100 placeholder-gray-300 hover:bg-white  hover:border-gray-400${
                                            errors[item.name] ? 'border border-red-500' : ''
                                        }`}
                                        rows="3"
                                        placeholder={item.placeholder}></textarea>
                                    {!alerts && errors[item.name] && (
                                        <div className="form-error">
                                            {errors[item.name].message}
                                        </div>
                                    )}
                                </div>
                            </>
                        )
                    }
                    return (
                        <>
                            <div className="form-element">
                                {item.label && <div className="form-label text-base">{item.label}</div>}
                                <input
                                    ref={item.ref}
                                    name={item.name}
                                    type={item.type}
                                    className={`form-input text-xl px-6 focus:ring-2 focus:ring-blue-600 border-0 rounded-lg h-14 bg-gray-100 placeholder-gray-300 hover:bg-white border-0  hover:border-gray-400 ${
                                        errors[item.name] ? 'border-red-500' : ''
                                    }`}
                                    placeholder={item.placeholder}
                                />
                                {!alerts && errors[item.name] && (
                                    <div className="form-error">{errors[item.name].message}</div>
                                )}
                            </div>
                        </>
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
export default RecipientValidation
