'use client'

import React from "react";
import {Nav} from "@/components/ui/nav";

type Props = {}

import {
    Archive,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    Trash2,
    UserRound,
} from "lucide-react"

export default function SideNavbar({}: Props){
    return (
        <div>

            <Nav
                isCollapsed={false}
                links={[
                    {
                        title: "Dashboard",
                        label: "128",
                        icon: LayoutDashboard,
                        variant: "default",
                    },
                    {
                        title: "Users",
                        label: "9",
                        icon: UserRound,
                        variant: "ghost",
                    },
                    {
                        title: "Orders",
                        label: "",
                        icon: ShoppingCart,
                        variant: "ghost",
                    },
                    {
                        title: "Archive",
                        label: "",
                        icon: Archive,
                        variant: "ghost",
                    },
                    {
                        title: "Setting",
                        label: "23",
                        icon: Settings,
                        variant: "ghost",
                    },
                    {
                        title: "Trash",
                        label: "",
                        icon: Trash2,
                        variant: "ghost",
                    },
                ]}
            />
        </div>
    )
}

