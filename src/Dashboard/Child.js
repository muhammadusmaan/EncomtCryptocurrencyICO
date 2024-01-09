import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min'
import { forwardRef } from "react";
import { AppName, CoinName } from "../utils/Constant";
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import { useState, useEffect } from "react";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';


const Child = forwardRef(({ ...otherProps }, ref) => {

    const [historyList, setHistoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [row, setRow] = useState();


    const makeRow = () => {
        var data =
            Array.isArray(historyList) && historyList.length > 0 ?
                historyList.map((data, id) => ({
                    id: id + 1,
                    firstname: data.userID.firstname,
                    coin: data.coin + '  ' + CoinName,
                    price: data.price,
                    rate: data.packageDetail.rate + '  ' + CoinName,
                    paymenttype: data.paymenttype,
                    gateway_id: data.gateway_id,
                    package_name: data.packageDetail.package_name,
                    signature: data.signature,
                    status: data.status,
                    date: data.date,

                })) : '';
        setRow(data);
    }

    const columns = [
        {
            dataField: "id",
            text: "Sr"
        },
        {
            dataField: "firstname",
            text: "User Name",
            // filter: textFilter(),

        },
        {
            dataField: "coin",
            text: "Purchased Coin",
        },
        {
            dataField: "price",
            text: "Payment"
        },
        {
            dataField: "rate",
            text: "Rate/USD"
        },
        {
            dataField: "paymenttype",
            text: "Payment Method"
        },
        {
            dataField: "gateway_id",
            text: "Gateway ID",
            style: {
                columnWidth: '200px'
            }
        },
        {
            dataField: "package_name",
            text: "Package Name"
        },
        {
            dataField: "signature",
            text: "Transaction Hash",
            style: {
                columnWidth: '200px'
            }
        },
        {
            dataField: "status",
            text: "Status"
        },
        {
            dataField: "date",
            text: "Date"
        },


    ];

    useEffect(() => {
        getPurchaseHistory()
    }, [])

    async function getPurchaseHistory() {
        setIsLoading(true);
        try {
            const History = await axios.get(`${Api_Url}/purchasehistory/${userToken.user._id}`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);
            setHistoryList(History.data)
            makeRow();
        }
        catch {
            setIsLoading(false);
        }
    }

    const MyExportCSV = (props) => {
        const handleClick = () => {
            props.onExport();
        };
        return (
            <div>
                <input
                    ref={ref}
                    hidden
                    className="btn btn-success"
                    onClick={handleClick}
                ></input>
            </div>
        );
    };

    return (
        <div className="App">
            <h1>Child component with table</h1>
            <ToolkitProvider
                keyField="id"
                data={row}
                columns={columns}
                exportCSV
            >
                {(props) => (
                    <div>
                        <BootstrapTable
                            striped
                            keyField='id'
                            data={row ? row : ''}
                            columns={columns}
                            filter={filterFactory()}
                            pagination={paginationFactory()} />

                        <hr />
                        <MyExportCSV {...props.csvProps} />
                    </div>
                )}
            </ToolkitProvider>
        </div>
    );
});
export default Child;
