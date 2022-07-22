import React from "react";
import styled, {css} from "styled-components";
import {useNavigate} from "react-router-dom"
import {Button, Form,} from "antd";
import FormControl from "../components/FormControl";
import TextField from "../components/TextField";
import MButton from "../components/Button";
import IconUser from "../icones/iconUser"
import Report from "../icones/Report"



const Container = styled.div`
      min-height: 100vh;
      display: flex;
      flex-direction: row;
      background: white;
`

const SideLeft = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width : 40%;
`

const SideRight = styled.div`
       background: #2E79B7;
       width : 60%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
`

const FormContent = styled(Form)`
        margin : 0 auto;
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 10px 8px;
`


const Title = styled.div`
      font-family: 'Montserrat Bold';
      font-weight: 900;
      font-size: 28px;
      line-height: 30px;
      margin-bottom: 10px;
      color: #292D32;
`

const SubTitle = styled.div`
      font-style: normal;
      font-family: 'Montserrat Medium';
      font-weight: 300;
      font-size: 18px;
      line-height: 30px;
      color: #939487;
`

const FormTitle = styled.div`
      margin : 10px 10px 40px 10px;
`

const ReportIcon = styled(Report)`
    margin-top : 14px;
`

function Login() {

    const navigate = useNavigate()

    const [form] = Form.useForm();

    const onFinish = (values) => {
        //alert('Success: '+ values.username);
        navigate("/home")
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="App">
            <Container>
                <SideLeft>
                    <FormContent hideRequiredMark form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" layout="vertical" scrollToFirstError name="login">
                        <FormTitle>
                            <Title>Connexion</Title>
                            <SubTitle>Munir de vos accés pour se connecter</SubTitle>
                        </FormTitle>
                                <FormControl
                                    label="Nom d'utilisateur"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Ce champs est requis',
                                        },
                                    ]}
                                >
                                    <TextField large type="text" />
                                </FormControl>

                                <FormControl
                                    label="Mot de passe"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Ce champs est requis',
                                        },
                                    ]}
                                >
                                    <TextField large type="password" />
                                </FormControl>
                                <FormControl>
                                    <MButton primary large htmlType="submit">
                                        Se connecter
                                    </MButton>
                                </FormControl>


                    </FormContent>
                </SideLeft>
                <SideRight>
                    <ReportIcon />
                </SideRight>
            </Container>

        </div>
    );
}

export default Login;

