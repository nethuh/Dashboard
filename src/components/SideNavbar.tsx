'use client';

import React, {useState} from "react";
import {Nav} from "@/components/ui/nav";

type Props = {}

import {
    Archive,
    ChevronRight,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    Trash2,
    UserRound,
} from "lucide-react"
import {Button} from "@/components/ui/button";

export default function SideNavbar({}: Props){
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="relative min-w-[51px ] border-r px-3 pb-10 pt-24">
            <div className="absolute right-[-20px] top-7">
            <Button
                onClick={toggleSidebar}
                variant='secondary'
                className="p-2 rounded-full">
                <ChevronRight/>
            </Button>
            </div>
            <Nav
                isCollapsed={isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/",
                        icon: LayoutDashboard,
                        variant: "default",
                    },
                    {
                        title: "Users",
                        href: "/",
                        icon: UserRound,
                        variant: "ghost",
                    },
                    {
                        title: "Orders",
                        href: "/",
                        icon: ShoppingCart,
                        variant: "ghost",
                    },
                    {
                        title: "Archive",
                        href: "/",
                        icon: Archive,
                        variant: "ghost",
                    },
                    {
                        title: "Setting",
                        href: "/",
                        icon: Settings,
                        variant: "ghost",
                    },
                    {
                        title: "Trash",
                        href: "/",
                        icon: Trash2,
                        variant: "ghost",
                    },
                ]}
            />
        </div>
    )
}

