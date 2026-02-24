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
    metadataBase: new URL("https://www.ceskesovy.cz"),
    description: "Informační web o sovách žijících v České republice, jejich poznávání a ochraně.",
    keywords: ["sovy", "ptáci", "ochrana přírody", "poznávání zvířat", "česká fauna"],
    manifest: "/icon/site.webmanifest",
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "96x96",
            url: "/icon/favicon-96x96.png",
        },
        {
            rel: "icon",
            type: "image/svg+xml",
            url: "/icon/favicon.svg",
        },
        {
            rel: "shortcut icon",
            url: "/icon/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/icon/apple-touch-icon.png",
        },
    ],
    appleWebApp: {
        title: "České sovy",
        capable: true,
    },
    applicationName: "České sovy",
    authors: [
        {
            name: "Daniel Pátek",
            url: "https://www.ceskesovy.cz/o-projektu#autor",
        },
    ],
    publisher: "České sovy",
    creator: "Ing. Daniel Pátek",
    category: "Příroda a zvířata",
    classification: "Zoologie, Ornitologie",
    generator: "Next.js",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "České sovy",
        description: "Informační web o sovách žijících v České republice, jejich poznávání a ochraně.",
        url: "https://www.ceskesovy.cz",
        siteName: "České sovy",
        locale: "cs_CZ",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "České sovy",
        description: "Informační web o sovách žijících v České republice, jejich poznávání a ochraně.",
        creator: "@ceskesovy",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const currentYear = new Date().getFullYear();

    return (
        <html lang="cs" data-theme="forest">
            <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
                <div className="flex min-h-screen flex-col">
                    <header className="navbar sticky top-0 z-50 border-b border-base-300/60 bg-base-100/85 backdrop-blur">
                        <div className="container mx-auto flex w-full max-w-7xl items-center justify-between px-4">
                            <Link href="/">
                                <div className="w-30">
                                    <Image
                                        src="/logo-white.png"
                                        alt="Logo České sovy"
                                        width={770}
                                        height={460}
                                        className="inline-block mr-2 object-contain"
                                    />
                                </div>
                            </Link>
                            <MainNav />
                        </div>
                    </header>

                    <main className="container mx-auto w-full max-w-7xl flex-1 px-4 py-10">{children}</main>

                    <footer className="bg-base-200/70 py-10 text-base-content">
                        <div className="container mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-3">
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">České sovy</h3>
                                <p className="text-sm text-base-content/80">Praktický průvodce poznáváním sov a jejich ochranou v české krajině.</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold uppercase tracking-wide">Rychlé odkazy</h3>
                                <ul className="space-y-1 text-sm">
                                    <li>
                                        <Link href="/druhy" className="link link-hover">
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
                                © {currentYear} České sovy. Všechna práva vyhrazena.
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
