import React from 'react';


function App2 (props){

    const modificarNome = (event) => {
        console.log(event.target.value)
    }
  
    const criaComboBox = () => {
        const opcoes = ["Fulano", "Cicrano", "Neide", "Júlia"]
        const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

        return (
        <select>
            {comboBoxOpcoes}
        </select>
        )
    }

    const MeuComboBox = () => criaComboBox()

        return(
          <>
                <input type="text" value={props.nome} onChange={modificarNome}/>
                <h1>Meu nome é {props.nome} e a minha idade é {props.idade}</h1>
                <MeuComboBox/>  {/*como componente*/}
          </>
        )
}
export default App2;