import React, {Component} from "react";
import LambdaFunctionsTableRow from "../../../components/LambdaFunctionsTableRow/LambdaFunctionsTableRow";
import axios from 'axios';
import config from '../../../config/config';

class LambdaFunctionsTable extends Component {
    state = {
        rows: [
            {
                arn: null,
                name: null,
                memory: null,
                runtime: null,
                hidden: null,
                id : "1"
            }
        ]
    };

    updateLambdaFunctionsTableHandler = () => {
        axios.get(config.getlambdaurl)
            .then( response => {
                const rows = response.data.Items;
                this.setState({rows: rows})
            })
            .catch( error => {
                console.log(error)
            })
    }

    componentDidMount = () => {
        this.updateLambdaFunctionsTableHandler()
    }

    lambdaFunctionsTableRows = () => {
        let rows = null;
        if (this.state.rows) {
            rows = this.state.rows.map(row => (
                <LambdaFunctionsTableRow key={row.id} arn={row.arn} functionName={row.name} runtime={row.runtime} memory={row.memory} hidden={row.hidden} />    
            ))
        }
        return rows;
    }

    render() {
        return(
            <>
                <h1>Lambda Functions</h1>
                <button onClick={this.updateLambdaFunctionsTableHandler}>update</button>
                <table>
                    <thead>
                        <tr>
                            <th>ARN</th>
                            <th>Function Name</th>
                            <th>Runtime</th>
                            <th>Memory (MB)</th>
                            <th>Hidden</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.lambdaFunctionsTableRows()}
                    </tbody>
                </table>
            </>
        );
    }
};


export default LambdaFunctionsTable;



