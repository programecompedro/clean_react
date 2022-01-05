import React from 'react';
import Styles from './login-styles.scss';
import { LoginHeader as Header } from '../../components/login-header/LoginHeader';
import { Footer } from '@/presentation/components/footer/Footer';
import { Input } from '@/presentation/components/input/Input';
import { FormStatus } from '@/presentation/components/form-status/FormStatus';

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
