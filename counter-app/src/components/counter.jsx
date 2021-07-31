import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };
    
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
        console.log("Constructor", this);
    }

    handleIncrement() {
        console.log("Increment Clicked!", this.state.count);
    }
    
    render() { 
        return (
            <React.Fragment> 
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"></button>
            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    
    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : this.state.count;
    }
}



export default Counter;