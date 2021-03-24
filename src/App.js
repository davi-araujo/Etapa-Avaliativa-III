import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Chanel from './chanel.jpg';
import Jaguar from './jaguar.jpg';
import Grey from './grey.jpg';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <h1>
            BOM CHEIRO PERFUMES
          </h1>
          <div class="divisoria">
            <img src={Grey} class="grey"/>
            <p>
              The One Grey Dolce&Gabbana- Perfume Masculino- Eau de Toilette - 50ml
              <br/>
              R$438,90
            </p>
            <br/>
            <Link className="divisoria1" to='/grey'> Comprar </Link>
          </div> 
          <div class="divisoria">
            <img src={Chanel} class="chanel"/>
            <p>
            <br/>Perfume Chanel N°5 L'eau Eau De Parfum 60ml
            <br/>
            R$894,90
            </p>
            <br/>
            <Link className="divisoria1" to='/chanel'> Comprar </Link>
          </div>
          <div class="divisoria">
            <img src={Jaguar} class="jaguar"/>
            <p>
              <br/>Jaguar Jaguar Stance Eau De Toilette 60ml
              <br/>
              R$437,90
           </p>
           <br/>
           <Link className="divisoria1" to='/jaguar'> Comprar </Link>
          </div>
          <br/><br/><br/>
        </div>
        </header>
    </div>
  );
}

export default App;
