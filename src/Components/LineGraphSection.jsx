import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, Tooltip } from "recharts";
import dateFormat from 'dateformat';



function LineGraphSection(props) {

    return (
        <>
            <section className="graph">
                <div className="container-fluid graph-shadow">
                    <div className="row">
                        <div className="col-12 mx-auto LineChart">
                            <ResponsiveContainer width="100%" aspect={3}>
                                <LineChart data={props.GraphData} width={500} height={300}>
                                    <XAxis dataKey='_id' tick={{ fontSize: 12 }} interval={'preserveStartEnd'} strokeDasharray="3 3" stroke="white" />
                                    <YAxis strokeDasharray="3 3" stroke="white" tick={{ fontSize: 12 }} />
                                    <Tooltip contentStyle={{ backgroundColor: '#000021', color: 'white' }} />
                                    <Legend />
                                    <Line dataKey="total" stroke="#E83184" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default LineGraphSection;