import React, {Component} from 'react'

class ProductQuantity  extends Component{
    constructor (pops){
        super (pops);
        this.state = {
            count:0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
    if(this.state.count < 10) {
        this.setState({
            count: this.state.count + 1,
        
        })
    }
}
    decrement(){
        if(this.state.count) {
          this.setState({
            count: this.state.count - 1,
           
          })
        }
    }

    render(){
        return(
            <div>
                <button disable="true" className="decrement_btn" onClick={this.decrement}>-</button>
                <input value={this.state.count} readOnly/>
                <button disable="true" className="increment_btn" onClick={this.increment}>+</button>
            </div> 
        )
    
    }
}
    export default ProductQuantity 