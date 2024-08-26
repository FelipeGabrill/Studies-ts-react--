import React from 'react';
import Formulario from '../componets/Formulario';
import Lista from '../componets/Lista';
import style from './App.module.scss';
import { Cronometro } from '../componets/Cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
