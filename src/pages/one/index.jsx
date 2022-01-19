import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
class One extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (<div>
            这是one页面
        </div>)
    }
}

export default One