import React from "react";

import {
    MdSearch
} from "react-icons/md";

type Props = {};

export default function Navbar({} : Props) {
    return (
        <div className="p-5 rounded-xl flex items-center justify-between border shadow">
            <div className="font-bold text-white capitalize">
            </div>
            <div className="flex gap-20 items-center">
                <div className="flex gap-10 items-center p-2
                rounded-xl bg-primary">
                    <MdSearch className="text-white"/>
                    <input
                    />
                </div>
            </div>
        </div>
    );
}
