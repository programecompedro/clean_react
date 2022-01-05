import React from 'react';
import { Spinner } from '@/presentation/components/spinner/spinner';
import Styles from './form-status-styles.scss';

export const FormStatus: React.FC = () => {
  return (
    <>
      <span className={Styles.link}>Criar conta</span>
      <div className={Styles.errorWrap}>
        <Spinner className={Styles.spinner} />
        <span className={Styles.error}>Erro</span>
      </div>
    </>
  );
};
