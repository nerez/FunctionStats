import React, {Component} from "react";


class LambdaFunctionsTableRow extends Component {
    
    getHidden = () => {
        let hidden = "";
        if (this.props.hidden != null) {
            hidden = this.props.hidden ? "True" : "False";
        }
        return hidden;
    }

    render() {
        return (
            <tr>
                <td>{this.props.arn}</td>
                <td>{this.props.functionName}</td>   
                <td>{this.props.runtime}</td>
                <td>{this.props.memory}</td>
                <td>{this.getHidden()}</td>
            </tr>
        );
    }
};

export default LambdaFunctionsTableRow;