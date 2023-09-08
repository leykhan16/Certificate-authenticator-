import { AiFillSafetyCertificate } from 'react-icons/ai'
//
export default function Header() {

    return (

        <>

            <nav className="position-relative navbar navbar-expand-lg navbar-light py-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <div className="d-flex align-items-center" style={{ fontSize: "32px" }}>
                            <b>
                            <span className="font-weight-bold text-black mr-3" style={{ color: "#006251" }}><AiFillSafetyCertificate /></span>
                            <span className="font-weight-bold text-black"><span style={{ color: "#006251" }}>Edu</span><span style={{ color: "#FBDC8E" }}>-Verify</span></span>
                            </b>
                        </div>
                    </a>
                    <button className="btn p-0 d-lg-none navbar-burger" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z" fill="#006251"></path>
                        </svg>
                    </button>
                    <ul className="collapse navbar-collapse d-none d-lg-flex position-absolute top-50 start-50 translate-middle navbar-nav" id="collapsibleNavbar">
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Company</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Testimonials</a></li>
                    </ul>
                    <div className="d-none d-lg-block"><a className="btn btn-secondary" href="#">Contact Us</a></div>
                </div>
            </nav>

        </>

    )

}