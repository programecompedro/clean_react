import React from 'react';
import Styles from './login-styles.scss';
import { Spinner } from '@/presentation/components/spinner/spinner';
import { LoginHeader as Header } from '../../components/login-header/LoginHeader';
import { Footer } from '@/presentation/components/footer/Footer';
import { Input } from '@/presentation/components/input/Input';

export const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite sua senha" />
        <Input type="password" name="password" placeholder="Digite sua senha" />

        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  );
};
