// Navbar component file

import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-lg sticky-top navbar-light bg-light" bg="light" expand="lg">
                <h2>
                    <Link href="/">
                        <a className="navbar-brand">Data Dash</a>
                    </Link>
                </h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" style={{color:"black"}}>
                            <Link href="/">
                                <a className="nav-link"><i className="fas fa-home"></i> Home</a>
                            </Link>
                        </li>
                        <li className="nav-item active" style={{color:"black"}}>
                            <Link href="/dataPage">
                                <a className="nav-link"><i className="fas fa fa-bars"></i> Data</a>
                            </Link>
                        </li>
                        <li className="nav-item active" style={{color:"black"}}>
                            <Link href="/contact">
                                <a className="nav-link"><i className="fas fa-address-card"></i> Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
