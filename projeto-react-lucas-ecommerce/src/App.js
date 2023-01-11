import React from "react";
import Header from "./components/Header";
import ListaItens from "./components/ListaItens";
import Main from "./components/Main";
import { GlobalStyle } from "./GlobalStyle";
import astronauta from './imgs/astronauta.png'
import constelacao from './imgs/constelacao.png'
import foguete from './imgs/foguete.png'
import lua from './imgs/lua.png'
import meia from './imgs/meia.png'
import sistema from './imgs/sistema.png'

function App() {
  const produtos = [{
    id: 1,
    nome: 'Camiseta Astronauta',
    preco:40.00,
    img: astronauta
},

{
    id: 2,
    nome: 'Camiseta Constelação', 
    preco: 25.00,
    img: constelacao
},

{
    id: 3,
    nome: 'Camiseta Foguete',
    preco: 45.00,
    img: foguete
},

 {
    id: 4,
    nome: 'Camiseta Lua',
    preco: 35.00,
    img: lua
},

{
    id: 5,
    nome: 'Meia Universo',
    preco: 10.00,
    img: meia
},

{
    id: 6,
    nome: 'Camiseta Sistema',
    preco: 70.00,
    img: sistema
},
]
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Main produtos={produtos} />
    </div>
  );
}

export default App;
