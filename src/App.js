import React, { Component } from 'react';
import logo from './Logo_V2_41.gif';
import './App.css';
import Header from './Components/Header.component';
import Footter from './Footter/footter.Footter';
import Calculator from './Components/Calculator.component';

class App extends Component {

  constructor() {
      super();
      this.age = 22;
      this.name = "ball";
      this.state = {name: "NARET RUANBOA", age: 20};


  }
      onClick()
      {
          this.setState({name: "BALL"})

      }

      setAge(e){
          const age = e.target.value;
          this.setState({age: age});
      }






  getVal(){
    return "getVal";
  }



    render() {

        const  list =[
            <Header/>,
            <Header/>,
            <Header/>
        ];

        const myname = "Naret";
        const call = "1234";

        return (
      <dir>
      <div className="App">
        <div className="App-header"  >
          <img height={150} src={logo}  alt="logo"  />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
        <div className="App-header1">
        <h1 > 
          Naret Ruanboa 57021803
        </h1>
          <div>Hello, {myname}</div>
          <div>Cal 3+2 ={3+2}</div>
          <div>call function {(() => {return call})()}</div>
          <div>Call getVal method: {this.getVal()}</div>
          <div>Age: {this.age}</div>
          <div>Name: {this.name}</div>
        </div>

        <div>
          <form>
            fnum : <input></input>

          </form>
          <button>คำนวณ</button>
        </div>

        <div>
          <Header />
        </div>

        <div>
           list ############# {list}
        </div>

        <div>
          <Footter name="jjjjj"/>
        </div>

        <div>MYname {this.state.name}</div>
        <div>MYage {this.state.age}</div>
        <button onClick={this.onClick.bind(this)}>ENTER</button>
        <input onChange={this.setAge.bind(this)}></input>


        <div>
          <Header title="Test 1234" name="55555"/>
          <Header title={this.state.name}/>
        </div>


        <div>
          <Calculator/>
        </div>










      </dir>

    );

  }
}

export default App;
