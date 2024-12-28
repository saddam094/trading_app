import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import { DrawerSection } from "../drawer_section/drawer_section.jsx"

export const Header = () => {

    return (
        <>
            <div className="header flex w-full items-center justify-between px-10  bg-slate-900 fixed">
                <div className="w-48 h-16 flex items-center justify-between">
                    <DrawerSection />
                    <img
                        src={logo}
                        alt="logo"
                        className="w-32 h-10 rounded-sm"
                    />
                </div>

                <div className="flex w-48 justify-between items-center ">
                    <Link className="text-white font-serif text-lg"> Sign in </Link>
                    <div className="flex w-28 h-10 bg-blue-700 text-white font-serif text-lg rounded-md items-center justify-center">
                        Register
                    </div>
                </div>
            </div>
        </>
    );
};