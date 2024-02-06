import React from "react";

import {
    MdNotifications,
    MdOutlineChat, MdPublic,
    MdSearch
} from "react-icons/md";

type Props = {};

export default function Navbar({} : Props) {
    return (
        <div className="p-5 rounded-xl flex items-center justify-between border shadow">
            <div className="font-bold text-white capitalize">
            </div>
            <div className="flex gap-20 items-center">
                <div className="flex gap-10 items-center p-2 rounded-xl bg-primary">
                    <MdSearch className="text-white"/>
                    <input
                    type="text"
                    placeholder="Search..."
                    />
                </div>
                <div>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/>
                </div>
            </div>
        </div>
    );
}
