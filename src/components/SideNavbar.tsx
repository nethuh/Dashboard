/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
    Archive,
    ChevronRight,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    Trash2,
    UserRound,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 768;

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 shadow">
            {!mobileWidth && (
                <div className="absolute right-[-20px] top-7">
                    <Button
                        onClick={toggleSidebar}
                        variant="secondary"
                        className=" rounded-full p-2"
                    >
                        <ChevronRight />
                    </Button>
                </div>
            )}
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/",
                        icon: LayoutDashboard,
                        variant: "default",
                    },
                    {
                        title: "Users",
                        href: "/user",
                        icon: UserRound,
                        variant: "ghost",
                    },
                    {
                        title: "Orders",
                        href: "/orders",
                        icon: ShoppingCart,
                        variant: "ghost",
                    },
                    {
                        title: "Archive",
                        href: "/archive",
                        icon: Archive,
                        variant: "ghost",
                    },
                    {
                        title: "Setting",
                        href: "/setting",
                        icon: Settings,
                        variant: "ghost",
                    },
                    {
                        title: "Trash",
                        href: "/trash",
                        icon: Trash2,
                        variant: "ghost",
                    },
                ]}
            />
        </div>
    );
}
