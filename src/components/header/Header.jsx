import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="w-[900px] mx-auto flex justify-between py-5 px-[25px] shadow-2xl">
            <div className="logo text-4xl">
                <h1>Header</h1>
            </div>
            <nav className="flex gap-4">
                <Link to="/" className="text-[20px]">Home</Link>
                <Link to="/register" className="text-[20px]">Register</Link>
                <Link to="/login" className="text-[20px]">Login</Link>
            </nav>
        </div>
    )
}

export default Header
