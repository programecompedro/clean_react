import React, { useState, useEffect } from 'react';
import Styles from './login-styles.scss';
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader as Header,
} from '@/presentation/components/';
import ContextForm from '@/presentation/contexts/form/form-context';
import { Validation } from '@/protocols/validation';

type Props = {
  validation: Validation;
};

export const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    validation.validate({ email: state.email });
  }, [state.email]);

  useEffect(() => {
    validation.validate({ password: state.password });
  }, [state.password]);

  return (
    <div className={Styles.login}>
      setState
      <Header />
      <ContextForm.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite sua senha" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button
            data-testid="submit"
            disabled
            className={Styles.submit}
            type="submit"
          >
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </ContextForm.Provider>
      <Footer />
    </div>
  );
};
