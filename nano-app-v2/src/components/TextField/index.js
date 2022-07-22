import {Form} from "react-bootstrap";

export const TextField = ({labelInput, type, placeholder, controlId, style }) => {
    return (
        <Form.Group className="mb-3" controlId={controlId} style={style}>
            {labelInput && <Form.Label>{labelInput}</Form.Label>}
            <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
    )
}

