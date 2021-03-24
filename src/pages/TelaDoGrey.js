import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
import Grey from './grey.jpg';
import { InputText } from 'primereact/inputtext';



export const TelaDoGrey = () => {
  return(
    <div className="App">
      <header className="App-header">
        <h1>
          BOM CHEIRO PERFUMES
        </h1>
        <div className='divisoria'>
          <img src={Grey} class="grey"/>
          <h2>
            The One Grey Dolce&Gabbana- Perfume Masculino- Eau de Toilette - 50ml
          </h2>
          <p>
            O The One Grey é o perfume mais recente da gama The One for Men da Dolce&Gabbana.<br/>
            Ele celebra a elegância moderna e o carisma.<br/><br/>
            Apresentando uma nova faceta da personalidade do homem The One, o The One Grey<br/>
            narra uma história iniciada pela The One for Men Eau de Toilette, seguida pela<br/>
            The One for Men Eau de Parfum, uma composição mais profunda e intensa imaginada<br/>
            para os conhecedores de perfume.<br/><br/>
            O The One Grey - Eau de Toilette Intense adiciona um novo capítulo ousado à<br/>
            narrativa, baseando-se na herança olfativa da gama The One for Men para formar uma<br/>
            nova interpretação marcante.
          </p>
          <h2>
            R$438,90
          </h2>
          <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">CEP</label>
          </span>
          <br/>
          <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">N° do Cartão</label>
          </span>
          <br/>
          <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">Validade</label>
          </span>
          <br/>
          <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">CVV</label>
          </span>
          <br/>
          <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">Email</label>
          </span>
          <br/>
          <Link className="divisoria1" to='/fim'> Finalizar Compra </Link>
        </div>
        <br/>
        <Link className="divisoria1" to='/'> Voltar </Link>
      </header>
    </div>
  );
};