"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
    label: string;
    href: string;
    match: (pathname: string) => boolean;
};

const navItems: NavItem[] = [
    {
        label: "Druhy",
        href: "/druhy",
        match: (pathname) => pathname.startsWith("/druhy"),
    },
    {
        label: "Pomoc sovám",
        href: "/pomoc",
        match: (pathname) => pathname.startsWith("/pomoc"),
    },
    //TODO: přidat mapu
    /* {
        label: "Soví mapa",
        href: "/mapa",
        match: (pathname) => pathname.startsWith("/mapa"),
    }, */
    {
        label: "O projektu",
        href: "/o-projektu",
        match: (pathname) => pathname.startsWith("/o-projektu"),
    },
];

export function MainNav() {
    const pathname = usePathname();

    return (
        <nav aria-label="Hlavní navigace">
            <ul className="menu menu-horizontal gap-1 px-0">
                {navItems.map((item) => {
                    const isActive = item.match(pathname);

                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className={[
                                    "relative text-sm md:text-base",
                                    "after:absolute after:left-3 after:right-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform",
                                    "hover:after:scale-x-100",
                                    isActive ? "font-bold text-primary after:scale-x-100" : "text-base-content/80",
                                ].join(" ")}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
