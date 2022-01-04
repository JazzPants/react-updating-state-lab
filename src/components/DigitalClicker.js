// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }
    // increment = () => { //persist function
    //     const newCount = this.state.timesClicked + 1
    //     this.setState({ //asynchronous
    //         count: newCount
    //     })
    // }

    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked + 1
        }))
    }

    render() {
        return(<button onClick={this.handleClick}>
            {this.state.timesClicked}
            </button>)
        
        }
}



export default DigitalClicker;
