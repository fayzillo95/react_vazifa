import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    const menuItems = [
        { id: 1, path: "/", label: "Home" },
        { id: 2, path: "/register", label: "Register" },
        { id: 3, path: "/login", label: "Login" },
    ];

    return (
        <div className="w-[900px] mx-auto flex justify-between bg-gray-800 py-5 items-center shadow-2xl px-[50px]">
            <h1>Header</h1>
            <div className="flex items-center">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={`block px-4 rounded-lg transition-colors duration-200 ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-700"
                                }`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Header;
