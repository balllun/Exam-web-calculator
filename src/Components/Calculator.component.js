import React from  'react';

class Calculator extends React.Component{

    constructor(){
        super();
        this.state = {num1:"0" ,num2:"0"};


    }

    setNum1(n1){
        const num1 = n1.target.value;
        this.setState({num1: num1});
    }

    setNum2(n2){
        const num2 = n2.target.value;
        this.setState({num2: num2})
    }


    render(){
        // console.log(this.props);
        return(
            <div>
                <h1>Naret Ruanboa 57021803</h1>
                <h2>CALCULATOR</h2>
                <div> num1: <input onChange={this.setNum1.bind(this)}/></div>
                <div> num2: <input onChange={this.setNum2.bind(this)}/></div>
                <h1> SUM = {this.state.num1+this.state.num2}</h1>

            </div>









        );
    }
}



export default Calculator;