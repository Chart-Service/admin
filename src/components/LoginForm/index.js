import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  border: 1px solid palevioletred;
  border-radius: 0.25rem;
  padding: 1rem;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;

const LoginItem = styled.div`
  color: #ffff;
  padding: 25px 25px 0;
  margin: 20px 20px 0;
  border-radius: 3px;
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

const Button = styled.button`
  width: 100%;
  font-size: 1em;
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  border: 2px solid palevioletred;
  border-radius: 0.25rem;
  padding: 1rem;
`;

const Title = styled.h1`
  color: palevioletred;
  font-size: 20px;
  text-align: center;
  padding: 20px 20px 0;
  margin: 0;
`;

const Wrapper = styled.section`
  border-radius: 5px;
  width: 450px;
  display: flex;
  flex-direction: column;
`;

const LoginForm = () => (
  <Wrapper>
    <Title>Admin Login</Title>
    <LoginItem>
      <Form>
        <FormField>
          <Input id="login-id" type="text" placeholder="id" />
        </FormField>
        <FormField>
          <Input id="login-password" type="password" placeholder="password" />
        </FormField>
      </Form>
      <Button type="submit" primary>
        로그인
      </Button>
    </LoginItem>
  </Wrapper>
);

export default LoginForm;
