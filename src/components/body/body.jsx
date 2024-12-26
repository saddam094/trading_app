// import { BottumNavbar } from "../bottum_navbar/bottum_navbar";
import Dashboard from "../dashboard/dashboard";
import { NewRelease } from "../new_release/new_release";
import { SearchBar } from "../search_bar/search_bar";


export const Body = () => {
    return (
        <>
            <div className="bg-slate-800 px-10 py-20">
                {/* New Release Updates */}
                <NewRelease />

                {/* Search Bar */}
                <SearchBar />

                {/* Nav Bar */}
                {/* <BottumNavbar /> */}
                <Dashboard /> 
            </div>
        </>
    );
}