import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    render() { 
        const {onDelete, onIncrement, onDecrement, onReset, counters} = this.props;
        return ( 
            <div>
                <button 
                    className="btn btn-primary bit-sm m-2"
                    onClick={onReset}
                >Reset</button>
                { counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    counter={counter}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />) }
            </div>
         );
    }
}
 
export default Counters;