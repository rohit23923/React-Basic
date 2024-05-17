import logo from "../images/react-logo.png"
import { useNavigate } from "react-router-dom"

const Nav = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="nav">

                <div className="logo">
                    <div className="imglogo">
                        <img src={logo} className="logo" alt="react logo" />
                    </div>
                </div>

                <div className="reactAbout">
                    <div className="points" onClick={() => { navigate("/") }}>Home</div>
                    <div className="points" onClick={() => { navigate("/aboutReact") }}>About React</div>
                    <div className="points" onClick={() => { navigate("/download-React") }}>Download React</div>
                </div>
            </div>
        </>
    )
}

export default Nav