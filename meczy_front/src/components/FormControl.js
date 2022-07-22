import styled from "styled-components"
import {Form} from "antd";
import {isEmpty} from "../utils"
import React from "react";


const CustomizeLabel = styled.div`
  font-family: 'Montserrat SemiBold';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`

const FormItem = styled(Form.Item)`
  margin: 8px 5px;
`

const FormControl = ({label, name, children, ...rest}) => {
    return (
        <FormItem
            label={!isEmpty(label) && <CustomizeLabel>{label}</CustomizeLabel>}
            name={name}
            {...rest}
        >
            {children}
        </FormItem>
    )
}

export default FormControl