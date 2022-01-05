import React, { memo } from 'react';
import Styles from './login-header-styles.scss';
import { Logo } from '@/presentation/components/logo/logo';

export const LoginHeader: React.FC = memo(() => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  );
});
