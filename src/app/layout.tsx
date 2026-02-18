import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";

//@ts-ignore
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "České sovy",
        template: "%s | České sovy",
    },
    description: "Informační web o sovách žijících v České republice.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="cs" data-theme="forest">
            <head>
                <link rel="icon" type="image/png" href="/icon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/icon/favicon.svg" />
                <link rel="shortcut icon" href="/icon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="České sovy" />
                <link rel="manifest" href="/icon/site.webmanifest" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
                <div className="flex min-h-screen flex-col">
                    <header className="navbar sticky top-0 z-50 border-b border-base-300/60 bg-base-100/85 backdrop-blur">
                        <div className="container mx-auto flex w-full max-w-6xl items-center justify-between px-4">
                            <Link href="/">
                                <div className="w-30">
                                    <Image
                                        src="/logo-white.png"
                                        alt="Logo České sovy"
                                        width={770}
                                        height={460}
                                        objectFit="contain"
                                        className="inline-block mr-2"
                                    />
                                </div>
                            </Link>
                            <MainNav />
                        </div>
                    </header>

                    <main className="container mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</main>

                    <footer className="bg-base-200/70 py-10 text-base-content">
                        <div className="container mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-3">
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">České sovy</h3>
                                <p className="text-sm text-base-content/80">Praktický průvodce poznáváním sov a jejich ochranou v české krajině.</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold uppercase tracking-wide">Rychlé odkazy</h3>
                                <ul className="space-y-1 text-sm">
                                    <li>
                                        <Link href="/druhy/vyr-velky" className="link link-hover">
                                            Druhy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/co-delat" className="link link-hover">
                                            Pomoc sovám
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/o-projektu" className="link link-hover">
                                            O projektu
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold uppercase tracking-wide">Kontakt a zdroje</h3>
                                <p className="text-sm">
                                    <a href="mailto:info@ceskesovy.cz" className="link link-hover">
                                        info@ceskesovy.cz
                                    </a>
                                </p>
                                <p className="text-xs text-base-content/70">
                                    Informace mají edukativní charakter. Při nálezu zraněného živočicha vždy kontaktujte záchrannou stanici.
                                </p>
                            </div>
                        </div>
                        <div className="container mx-auto mt-8 w-full max-w-6xl px-4">
                            <div className="border-t border-base-300/70 pt-4 text-center text-xs text-base-content/70">
                                © 2026 České sovy. Všechna práva vyhrazena.
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
