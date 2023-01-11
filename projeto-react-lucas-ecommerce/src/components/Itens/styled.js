import styled, { createGlobalStyle } from "styled-components";

export const ContainerProdutos = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
padding-top: 10px;
width: 850px;

`
export const Produtos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-serif; ;
margin: 7px;
padding-bottom: px;
background-color: rgba(169, 169, 169, 0.6);
font-size: 10px;
font-weight: bold;
color: black;
width: 170px;

`
export const Imagem = styled.img`
height: 160px;
width: 160px;
`

export const Botao = styled.button`
background-color: darkgrey;
padding: 0.4%;
border: none;
width: 100%;
height: 20px;
:hover{
    border: 1.5px solid whitesmoke;
    cursor: pointer;
}



`