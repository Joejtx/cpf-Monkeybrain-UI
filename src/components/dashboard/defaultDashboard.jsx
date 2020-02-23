import React from 'react';
import { DashboardCard } from '../card/card'
import { CpfDashboard } from './dashboardClass';

const dashDetails = {
    "details": [
        {
            title: "Welcome, Mr IVAN LEE",
            moreInfo: "CPF Account Number: S1234567C",
            value: ""
            
        },
        {
            title: "Ordinary Account (OA)",
            moreInfo: "",
            value: "$2000.00"
        },
        {
            title: "Special Account (SA)",
            moreInfo: "",
            value: "$2000.00"
        },
        {
            title: "Medisave Account (MA)",
            moreInfo: "",
            value: "$3200.00"
        }
    ]
}

const DefaultDashboard = function() {
    return(
        <div>
            {
                dashDetails.details.map((elem) => 
                    <DashboardCard title={elem.title} value={elem.value} moreInfo={elem.moreInfo}/>
                )
            }
        </div>
    );
}

export const MainDashboard = function() {
    return(
        <div>
            <CpfDashboard Component={<DefaultDashboard />} />
        </div>
    );
}