import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: 5px;
  width: 450px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: palevioletred;
  font-size: 25px;
  text-align: center;
  padding: 1em 1em;
  margin: 0;
`;

const LoginItem = styled.div`
  color: #ffff;
  padding: 1em 1em;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
`;

const FormField = styled.section`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  color: #ffff;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 100%;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  padding: 1rem;
  border: 1px solid palevioletred;
  border-radius: 0.28571429rem;
`;

const Button = styled.button`
  width: 100%;
  font-size: 1em;
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  border: 2px solid palevioletred;
  border-radius: 0.28571429rem;
  padding: 1rem;
`;

const LoginForm = () => (
  <Wrapper>
    <Title>Admin Login</Title>
    <LoginItem>
      <Form>
        <FormField>
          <Input id="login-id" type="text" placeholder="Id" />
        </FormField>
        <FormField>
          <Input id="login-password" type="password" placeholder="Password" />
        </FormField>
      </Form>
      <Button type="submit" primary>
        Login
      </Button>
    </LoginItem>
  </Wrapper>
);

export default LoginForm;
