import React from "react";
import icone from "../../imgs/luacheia.png"
import { Cabecalho, Icone } from "./styled";

export default function Header(){
    return(
        <Cabecalho>
            <h1>SpaceShop</h1>
            <Icone src={icone}/>  
        </Cabecalho>
    )
}