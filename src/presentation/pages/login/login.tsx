import React, { useState } from 'react';
import Styles from './login-styles.scss';
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader as Header,
} from '@/presentation/components/';
import ContextForm from '@/presentation/contexts/form/form-context';

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};
export const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: '',
  });

  return (
    <div className={Styles.login}>
      <Header />
      <ContextForm.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite sua senha" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
          <button className={Styles.submit} type="submit">
            Entrar
          </button>
        </form>
      </ContextForm.Provider>

      <Footer />
    </div>
  );
};
