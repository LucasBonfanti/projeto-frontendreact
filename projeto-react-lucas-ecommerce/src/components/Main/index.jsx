import React from "react";
import { useState } from "react";
import Carrinho from "../Carrinho";
import Filtros from "../Filtros";
import ListaItens from "../ListaItens";
import { CointainerMain } from "./styled";
import { Botao, ContainerProdutos, Imagem, Produtos } from "../Itens/styled";
import { ContainerFiltros, Escrito, TituloFiltros } from "../Filtros/styled";
import { ContainerLista, Ordenar, Paragrafo, Selecao } from "../ListaItens/styled"
import { ContainerCarrinho } from "../Carrinho/styled";




export default function Main({produtos}){

    

    const [inputMinimo, setInputMinimo] = useState(0)
    const [inputMaximo, setInputMaximo] = useState(70)
    const [pesquisa, setPesquisa] = useState('')

    const handleInputMinimo = (event) => {
        setInputMinimo(event.target.value)
    }

    const handleInputMaximo = (event) => {
        setInputMaximo(event.target.value)
    }

    const handleInputPesquisa  = (event) =>{
        setPesquisa(event.target.value)
    }

    const [selected, setSelected] = useState('Escolher')

    const handleOptions = (event) =>{
        setSelected(event.target.value)
        console.log(event.target.value)
    };

    const itensFiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLocaleLowerCase()))

    const itensMinimo = itensFiltrados.filter((produto) => produto.preco >= inputMinimo);

    const itens = itensMinimo.filter((produto) => produto.preco <= inputMaximo)

const [carrinho, setCarrinho] = useState([])
   
const handleAddToCart = (id) =>{

    const produto = produtos.find(produto => produto.id === id)
    const produtoAdicionado = carrinho.find((i) => i.item.id === id);
    
    if(produtoAdicionado){
        const novoCarrinho = carrinho.map((i) => (
        i.item.id === id ? {...i,quantity: i.quantity+1,} :  i
        ));
        setCarrinho(novoCarrinho);
        return
    
        
             
    }

    const carrinhoItem = {
        item: produto,
        quantity: 1
    }
    const novoCarrinho = [...carrinho, carrinhoItem]
    setCarrinho(novoCarrinho)
 
}

const handleRemoveFromCart = (id) =>{
    const produtoAdicionado = carrinho.find((i) => i.item.id === id);
    if(produtoAdicionado && produtoAdicionado.quantity > 1){
        const novoCarrinho = carrinho.map((i) => {
            if (i.item.id === id)
        return (({
                 ...i,
                 quantity: i.quantity-1,
             }));
             return i;
         });
         setCarrinho(novoCarrinho);
         return
    }

    const novoCarrinho = carrinho.filter(i => i.item.id !== id)
    setCarrinho(novoCarrinho)
}


    const carrinhoTotal = carrinho.reduce((total, current) => {
        return total + (current.item.preco * current.quantity)
    } , 0)


   
    return(
        <CointainerMain>

{/* filtros */}
    <ContainerFiltros>
        <TituloFiltros>Filtros</TituloFiltros>
        <Escrito>Valor minímo</Escrito>
        <input type="number" value={inputMinimo} onChange={handleInputMinimo}></input>

        <Escrito>Valor máximo</Escrito>
        <input type="number" value={inputMaximo} onChange={handleInputMaximo}></input>
        <Escrito>Buscar por nome:</Escrito>
        <input type="text" placeholder='Buscar' value={pesquisa} onChange={handleInputPesquisa} ></input>
    </ContainerFiltros>

    <ContainerLista>
        <Selecao>
        <Paragrafo>Quantidade de itens: 6</Paragrafo>
        <Ordenar>
        <Paragrafo>Ordenar por</Paragrafo>
        <select onChange={handleOptions} value={selected}>
            <option>Escolher</option>
            <option value={0}>Maior valor</option>
            <option value={1}>Menor valor</option>
        </select>
        </Ordenar>
        </Selecao>

 {/* Produtos */}

    <ContainerProdutos>
        {itens.map((produto) => (
    <Produtos key={produto.id}>
    <Imagem src={produto.img}/>
    <h2>{produto.nome}</h2>
    <h3>R$: {produto.preco},00</h3>
    <Botao onClick={() => handleAddToCart(produto.id)}>Adicionar ao carrinho</Botao>
</Produtos>
))}

            
    </ContainerProdutos>
    </ContainerLista>


    <ContainerCarrinho>
        <h2>Carrinho</h2> 
        {carrinho.map((item) => (
            <ul>
               <p>
                {item.quantity} x {item.item.nome} R$:{item.item.preco},00
               </p>
                <button onClick={() => handleRemoveFromCart(item.item.id)}>Remover</button>
            </ul>
        ))
        }
        <p>Total: R${carrinhoTotal},00</p>
    </ContainerCarrinho>
        
        </CointainerMain>
    )
}