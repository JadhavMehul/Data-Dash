import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import SideBarMaster from '../../components/SideBarMaster'
import data from '../../data'
import { FirebaseFirestore } from '../../firebase'

export default function master_sheet({BlogData}) {

    const sortingValue = 'SYMBOL '
    // const [sortingValue, setSortingValue] = useState('SYMBOL ')


    const tableData = BlogData[0];
    let allData = [];

    for (var key in tableData) {
        var element = tableData[key];
        if(key != "Date") {
            allData.push(element)
        }
    }

    var ts = tableData.Date;
    var date_ts = new Date(ts)
    var date = date_ts.getDate() + "/" + date_ts.getMonth() + "/" + date_ts.getFullYear()

    return (
        <>
            <Header
                PageTitle="Data Dash | Home"
                PageDescription={data.meta.PageDescription} 
                PageViewport={data.meta.PageViewport} 
                OGType={data.meta.OGType} 
                OGSiteName={data.meta.OGSiteName} 
                OGImage={data.meta.OGImage} 
                TwitterCard={data.meta.TwitterCard} 
                TwitterTitle={data.meta.TwitterTitle} 
                TwitterDescription={data.meta.TwitterDescription} 
                FavIcon={data.meta.FavIcon}
            />
            <Navbar />
            <div className="grid_container">
                <div className="item2">
                    <SideBarMaster />
                </div>
                <div className="item3 mt-5">

                    <h3 className="ml-5" style={{color: "red"}}><p>Date:- {date}</p></h3>

                    {/* <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                            Sort Table
                        </button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={() => setSortingValue('SYMBOL ')}>Symbol: Alphabetical Order</button>
                            <button className="dropdown-item" onClick={() => setSortingValue('NT1')}>Daily Volitality: Largest to Smallest</button>
                            <button className="dropdown-item" onClick={() => setSortingValue('Yearly Volitality')}>Yearly Volitality: Largest to Smallest</button>
                        </div>
                    </div> */}

                    <table className="table table-striped">
                        <thead className="thead-dark t_head">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Symbol</th>
                                <th scope="col">P1</th>
                                <th scope="col">P2</th>
                                <th scope="col">NT1</th>
                                <th scope="col">NT2</th>
                                <th scope="col">NT3</th>
                                <th scope="col">C1</th>
                                <th scope="col">C2</th>
                                <th scope="col">C1%</th>
                                <th scope="col">C2%</th>
                                <th scope="col">TV1</th>
                                <th scope="col">TV2</th>
                                <th scope="col">TV3</th>
                                {/* <th scope="col">C1</th>
                                <th scope="col">C2</th>
                                <th scope="col">C1%</th>
                                <th scope="col">C2%</th> */}
                                <th scope="col">DQ1</th>
                                <th scope="col">DQ2</th>
                                <th scope="col">DQ3</th>
                                <th scope="col">C1</th>
                                <th scope="col">C2</th>
                                <th scope="col">C1%</th>
                                <th scope="col">C2%</th>
                                <th scope="col">COI1</th>
                                <th scope="col">COI2</th>
                                <th scope="col">OIC1</th>
                                <th scope="col">OIC2</th>
                                <th scope="col">OIC3</th>
                                <th scope="col">C1</th>
                                <th scope="col">C2</th>
                                <th scope="col">C1%</th>
                                <th scope="col">C2%</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allData.sort((a, b) => a[sortingValue] < b[sortingValue] ? 1 : -1).map((data, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data['SYMBOL ']}</td>
                                        <td>{data['P1']}</td>
                                        <td>{data['P2']}</td>
                                        <td>{(data['NT1'])}</td>
                                        <td>{(data['NT2'])}</td>
                                        <td>{(data['NT3'])}</td>
                                        <td>{(data['NT2']) - (data['NT1'])}</td>
                                        <td>{(data['NT3']) - (data['NT2'])}</td>
                                        <td>{(((data['NT2']) - (data['NT1'])) / (data['NT1'])).toFixed(2)}</td>
                                        <td>{(((data['NT3']) - (data['NT2'])) / (data['NT2'])).toFixed(2)}</td>
                                        <td>{(data['TV1'])}</td>
                                        <td>{(data['TV2'])}</td>
                                        <td>{(data['TV3'])}</td>
                                        {/* <td>{(data['TV2']) - (data['TV1'])}</td>
                                        <td>{(data['TV3']) - (data['TV2'])}</td>
                                        <td> </td>
                                        <td> </td> */}
                                        <td>{(data['DQ1'])}</td>
                                        <td>{(data['DQ2'])}</td>
                                        <td>{(data['DQ3'])}</td>
                                        <td>{(data['DQ2']) - (data['DQ1'])}</td>
                                        <td>{(data['DQ3']) - (data['DQ2'])}</td>
                                        <td>{(((data['DQ2']) - (data['DQ1'])) / (data['DQ1'])).toFixed(2)}</td>
                                        <td>{(((data['DQ3']) - (data['DQ2'])) / (data['DQ2'])).toFixed(2)}</td>
                                        <td>{(data['COI1'])}</td>
                                        <td>{(data['COI2'])}</td>
                                        <td>{(data['OIC1'])}</td>
                                        <td>{(data['OIC2'])}</td>
                                        <td>{(data['OIC3'])}</td>
                                        <td>{(data['OIC2']) - (data['OIC1'])}</td>
                                        <td>{(data['OIC3']) - (data['OIC2'])}</td>
                                        <td>{(((data['OIC2']) - (data['OIC1'])) / (data['OIC1'])).toFixed(2)}</td>
                                        <td>{(((data['OIC3']) - (data['OIC2'])) / (data['OIC2'])).toFixed(2)}</td>
                                    </tr>
                                ))
                            }
                            
                            
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}


export async function getStaticProps(context) {
    const querySnap = await FirebaseFirestore.collection("masterSheet").orderBy('Date','desc').get()
    const BlogData = querySnap.docs.map(docSnap => {
      return { ...docSnap.data(),Date:docSnap.data().Date.toMillis() }
    })
    return{
      props: {
        BlogData 
      },
      revalidate: 3600
    };
}