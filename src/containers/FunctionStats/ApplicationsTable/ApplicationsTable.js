import React, {Component} from "react";
import ApplicationsTableRow from "../../../components/ApplicationsTableRow/ApplicationsTableRow";
import axios from 'axios';
import config from '../../../config/config';

class ApplicationsTable extends Component {
    state = {
        rows: [
            {
                name: "",
                id: "1"
            }
        ]
    };

    updateApplicationsTableHandler = () => {
        axios.get(config.getapplicationurl)
            .then( response => {
                if (response.data.Items !== null) {
                    const rows = response.data.Items;
                    this.setState({rows: rows});
                }
            })
            .catch( error => {
                console.log(error)
            })
    }

    componentDidMount = () => {
        this.updateApplicationsTableHandler()
    }

    applicationTableRows = () => {
        let rows = null;
        if (this.state.rows) {
            rows = this.state.rows.map(row => (
                <ApplicationsTableRow name={row.name} key={row.id} />    
            ))
        }
        return rows;
    }

    render() {
        return(
            <>
                <h1>Applications</h1>
                <button onClick={this.updateApplicationsTableHandler}>update</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.applicationTableRows()}                        
                    </tbody>
                </table>
            </>
        );
    }
    
};


export default ApplicationsTable;



