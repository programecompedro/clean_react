import React, { useContext } from 'react';
import { Spinner } from '@/presentation/components/spinner/spinner';
import Styles from './form-status-styles.scss';
import ContextForm from '@/presentation/contexts/form/form-context';
export const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(ContextForm);
  return (
    <>
      <div data-testid="error-wrap" className={Styles.errorWrap}>
        {isLoading && <Spinner className={Styles.spinner} />}
        {errorMessage && <span className={Styles.error}>Erro</span>}
      </div>
    </>
  );
};
