import React, { Component } from 'react';

class Counter extends Component {  

    formatValue = () => {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    }

    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        return classes + (this.props.counter.value === 0 ? "warning" : "primary");
    }

    constructor() {
        super();
        console.log("Component Created.");
    }

    componentDidMount() {
        console.log("Component Mounted. Make AJAX calls here.");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Previous properties", prevProps);
        console.log("Previous state", prevState);
    }

    render() { 
        const {counter, onDelete, onDecrement, onIncrement} = this.props;
        return (
            <div>
                <span className="badge m-2 badge-primary">{counter.name}</span>
                <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
                <button
                    onClick={() => onIncrement(counter)}
                    className="btn btn-secondary m-2 btn-sm"
                >Increment</button>                
                <button
                    onClick={() => onDecrement(counter)}
                    className="btn btn-secondary m-2 btn-sm"
                >Decrement</button>                
                <button
                    onClick={() => onDelete(counter.id)}
                    className="btn btn-danger m-2 btn-sm"
                >Delete</button>    
            </div>
        );
    }
}
 
export default Counter;