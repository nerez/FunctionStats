import React, { Component } from 'react';
import ApplicationsTable from './ApplicationsTable/ApplicationsTable';
import LambdaFunctionsTable from './LambdaFunctionsTable/LambdaFunctionsTable';

class FunctionStats extends Component {
    render() {
        return (
            <>
                <ApplicationsTable />
                <LambdaFunctionsTable />
            </>
        ) 
          
    }
};

export default FunctionStats;