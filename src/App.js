import React from 'react';
// import logo from './logo.svg';
import './App.css';




class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      click: null
    }
  }  

  render() {
    console.log(this.state);

    let redEndncido = '';
    if(this.state.click === 'red') redEndncido = 'encendido';
    let yellowEndncido = '';
    if(this.state.click === 'yellow') yellowEndncido = 'encendido';
    let greenEndncido = '';
    if(this.state.click === 'green') greenEndncido = 'encendido';

    return (

      <>

        <div id="barra"></div>
        <div id="semaforo">
          <div className={"luz roja "+redEndncido} onClick={() => this.setState({click: 'red'})}>
          </div>
          <div className={"luz amarilla "+yellowEndncido} onClick={() => this.setState({click: 'yellow'})}>
          </div>
          <div className={"luz verde "+greenEndncido} onClick={() => this.setState({click: 'green'})}>
          </div>
        </div>

      </>
    )
  }
}
  export default App;