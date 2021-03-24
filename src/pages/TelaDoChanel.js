import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
import Chanel from './chanel.jpg';
import { InputText } from 'primereact/inputtext';



export const TelaDoChanel = () => {
  return(
    <div className="App">
      <header className="App-header">
        <h1>
          BOM CHEIRO PERFUMES
        </h1>
        <div className='divisoria'>
          <img src={Chanel} class="chanel"/>
          <h2>
            Perfume Chanel N°5 L'eau Eau De Parfum 60ml
          </h2>
          <p>
            A eau de parfum baseia sua inspiração no perfume com quem partilha<br/>
            sua assinatura de florais e aldeídos.Este buquê floral composto ao<br/>
            redor da rosa de maio e do jasmim é ornamentado em seu topo por<br/>
            notas de hesperídeas. Os aldeídos lhe conferem uma presença única e<br/>
            o toque macio de baunilha, um rastro infinitamente sensual.
          </p>
          <h2>
            R$894,90
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
        <br/>
      </header>
    </div>
  );
};