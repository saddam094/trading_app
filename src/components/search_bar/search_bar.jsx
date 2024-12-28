import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';


export const SearchBar = () => {
    
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <div className="h-12 w-full bg-slate-900 outline-slate-400 outline rounded-full px-7 flex items-center mt-2">
                <SearchIcon className="text-slate-400 mr-3" />
                <input type="text" value={search} onChange={handleSearchChange} placeholder="Search Your Game....." className="bg-transparent text-slate-400 cursor-auto w-full outline-none"/>
            </div>
        </>
    );
}