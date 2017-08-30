import React from  'react';

class Footter extends React.Component{
    render(){
        return(
            <div>
                <h1>Footter</h1>
                <p>
                    {this.props.name}
                </p>
            </div>
        );
    }
}

export default Footter;