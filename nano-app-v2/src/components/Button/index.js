import {Button} from "react-bootstrap";
import PropTypes from 'prop-types'

export const ButtonStyle = ({className, style, size, variant, type, disabled, loading, children, onClick }) => {
   return  <Button className={className} size={size} variant={variant} type={type} disabled={loading || disabled} style={style} onClick={onClick}>
                {loading ? "Chargement..." : children}
           </Button>
};

/*Button.PropTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};*/
