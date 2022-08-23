import Link from 'next/link'
import React from 'react'
import data from '../data'

export default function SideBarMaster() {
    return (
        <div className="sidebar_btn">
            <p>
                <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    <i className="fas fa fa-bars"></i>
                </button>
            </p>
            <div style={{minHeight: "120px"}}>
                <div className="collapse width" id="collapseWidthExample">
                    <div style={{width: "220px"}}>
                        {
                            data.data.map((data, index) => (
                                <div className="mx-2 list_type" key={index}>
                                    <p className="px-2">
                                        <Link href={`${data.collection}`}>
                                            <a>{data.name}</a>
                                        </Link>        
                                    </p>
                                    <hr/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
