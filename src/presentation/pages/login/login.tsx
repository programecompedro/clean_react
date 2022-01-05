import React from 'react';
import Styles from './login-styles.scss';
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader as Header,
} from '@/presentation/components/';

export const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite sua senha" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
      </form>
      <Footer />
    </div>
  );
};
