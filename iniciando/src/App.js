import React from 'react';

function ComponenteFuncional(){
  return (
    <h1>Teste</h1>
  )
}

class App extends React.Component{

    state = {
      nome : 'Wandir Pereira'
    }

    /*
    //ligamos a variável this.modificarNome da classe à variável this.modificarNome da função
    constructor() {
        super()
        this.modificarNome = this.modificarNome.bind(this)
    }

    //se não usarmos arrow-function temos que criar um construtor, 
    //pois o this passa a referenciar à função modificarNome e não mais à classe
    modificarNome (event)  {
          this.setState({
            nome : event.target.value
          })
    }

    */

    modificarNome = (event) => {
      this.setState({
        nome : event.target.value
      })
  }

  criaComboBox = () => {
    const opcoes = ["Fulano", "Cicrano", "Neide", "Júlia"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return (
      <select>
          {comboBoxOpcoes}
      </select>
    )
  }
componentDidMount(){
  console.log('Executou o componentDidMount')
}
  render(){

      console.log('Executou o render')
        const MeuComboBox = () => this.criaComboBox()

        /*
        //retornando componentes na forma de array
        // cria criaComboBox com chama Javascript
            return(
            <>
                <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
                <h1>Teste from App {this.state.nome}</h1>
                {this.criaComboBox()}   
            </>
            )
          }
        */
      
        return(
          <>
                <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Meu nome é {this.props.nome} e a minha idade é {this.props.idade}</h1>
                <MeuComboBox/>  {/*como componente*/}
          </>
        )
  }
}
export default App;