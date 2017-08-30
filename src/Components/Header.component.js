import React from  'react';

class Header extends React.Component{
    render(){
        // console.log(this.props);
        return(
            <div>
                <h1>Test Header teg title{this.props.title}</h1>
                <h2>Test H t t {this.props.name}</h2>

            </div>
        );
    }
}



export default Header;