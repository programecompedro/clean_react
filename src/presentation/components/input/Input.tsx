import React from 'react';
import Styles from './input-styles.scss';
import FormContext from '@/presentation/contexts/form/form-context';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export const Input: React.FC<Props> = (props: Props) => {
  const value = React.useContext(FormContext);
  const error = value[`${props.name}Error`];
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

  const getStatus = (): string => {
    return '🔴';
  };
  const getTitle = (): string => {
    return error;
  };
  return (
    <>
      <div className={Styles.inputWrap}>
        <input {...props} readOnly onFocus={enableInput} />
        <span
          data-testid={`${props.name}`}
          title={getTitle()}
          className={Styles.status}
        >
          {getStatus()}
        </span>
      </div>
    </>
  );
};
