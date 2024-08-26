import React from 'react';
import Formulario from '../componets/Formulario';
import Lista from '../componets/Lista';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
