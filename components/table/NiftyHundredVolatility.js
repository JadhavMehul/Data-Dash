import React, { useState } from 'react'

export default function NiftyHundredVolatility(props) {
    const allData = props.data
    const [sortingValue, setSortingValue] = useState('Daily Volitality')

    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    Sort Table
                </button>
                <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={() => setSortingValue('Symbol')}>Symbol: Alphabetical Order</button>
                    <button className="dropdown-item" onClick={() => setSortingValue('Daily Volitality')}>Daily Volitality: Largest to Smallest</button>
                    <button className="dropdown-item" onClick={() => setSortingValue('Yearly Volitality')}>Yearly Volitality: Largest to Smallest</button>
                </div>
            </div>

            <table className="table table-striped w-75">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Daily Volitality</th>
                        <th scope="col">Yearly Volitality</th>
                        <th scope="col">Daily Volitality in %</th>
                        <th scope="col">Yearly Volitality in %</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.sort((a, b) => a[sortingValue] < b[sortingValue] ? 1 : -1).map((data, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.Symbol}</td>
                                <td>{data['Daily Volitality']}</td>
                                <td>{data['Yearly Volitality']}</td>
                                <td>{(data['Daily Volitality'] * 100).toFixed(2)}</td>
                                <td>{(data['Yearly Volitality'] * 100).toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}


