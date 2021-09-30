import React from 'react';

class Demo extends React.Component{
    constructor(props){
        super(props)
        this.state = {name:'ばちこり'}
    }

    handleClick(name){
        this.setState({name:name})
    }

    render(){
        return(
            <dev>
                <h2>this is demo!</h2>

                <button onClick={()=>{this.handleClick('はなころ')}}>
                    {this.state.name}
                </button>

                {this.props.demo}
            </dev>
        )
    }
}

export default Demo;