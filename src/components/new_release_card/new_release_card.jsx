import { Link } from "react-router-dom";


export const NewReleaseCard = ({ data }) => {

    const { tag, title, about, buttonTag, image } = data;

    return (
        <>
            <div className="h-52 w-96 bg-slate-700 mr-5 rounded-xl px-3 py-3 space-y-2 justify-between">
                <span className="bg-white px-3 rounded-sm">
                    {tag}
                </span>
                <div className="flex text-white justify-between">
                    <div className="w-1/2 space-y-1 justify-around">
                        <p className="text-lg font-semibold">{title}</p>
                        <p className="text-md font-thin">{about}</p>
                        <p><Link className="text-sm font-thin underline">Read More</Link></p>
                        <button className="bg-none outline outline-1 rounded-sm px-3">
                            {buttonTag}
                        </button>
                    </div>

                    {/* image */}
                    <div className="h-36 bg-slate-600 border-white outline rounded-lg">
                        <img src={image} alt="crown" className="h-36 w-40"></img>
                    </div>
                </div>
            </div>
        </>
    );
}