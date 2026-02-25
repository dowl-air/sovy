import type { Metadata } from "next";
import Link from "next/link";
import { preload } from "react-dom";
import { OwlCard } from "@/components/owl-card";

export const metadata: Metadata = {
    title: "České sovy – Přehled a informace",
    description: "Informační web o sovách žijících v České republice: druhy, rozpoznávání, hlas i praktická pomoc při nálezu sovy.",
};

const featuredOwls = [
    {
        commonName: "Puštík obecný",
        scientificName: "Strix aluco",
        href: "/druhy/pustik-obecny",
        imageSrc: "/druhy/pustik-obecny/images/pustik-obecny-main.webp",
        imageAlt: "Puštík obecný na větvi",
        description: "Nejpočetnější česká sova s tmavýma očima a typickým nočním houkáním, častá v lesích i parcích.",
    },
    {
        commonName: "Kalous ušatý",
        scientificName: "Asio otus",
        href: "/druhy/kalous-usaty",
        imageSrc: "/druhy/kalous-usaty/images/kalous-usaty-main.webp",
        imageAlt: "Kalous ušatý s výraznými oušky",
        description: "Štíhlá sova s výraznými oušky, častá na okrajích lesů a v otevřené zemědělské krajině.",
    },
    {
        commonName: "Výr velký",
        scientificName: "Bubo bubo",
        href: "/druhy/vyr-velky",
        imageSrc: "/druhy/vyr-velky/images/vyr-velky-bubo-bubo.webp",
        imageAlt: "Výr velký v lesním prostředí",
        description: "Největší evropská sova s hlubokým houkáním a velmi výraznou siluetou.",
    },
] as const;

export default function Home() {
    preload("/owl-hero.jpg", { as: "image", fetchPriority: "high" });

    return (
        <div className="space-y-16 md:space-y-24">
            <section className="relative overflow-hidden rounded-2xl border border-primary/25 shadow-[0_20px_45px_-30px_rgba(16,185,129,0.55)]">
                <img
                    src="/owl-hero.jpg"
                    alt="Sova v nočním lese"
                    className="absolute inset-0 h-full w-full object-cover object-[70%_60%]"
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/75 via-black/60 to-emerald-950/75" />
                <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-8 h-56 w-56 rounded-full bg-info/15 blur-3xl" />

                <div className="relative px-6 py-24 md:px-10">
                    <div className="max-w-3xl space-y-6 rounded-xl p-6 text-white md:p-8">
                        <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">České sovy</h1>
                        <p className="text-lg text-white/90">
                            Noční vládci českých lesů. Naučte se je poznat podle hlasu, siluety i stop – a zjistěte, co dělat, když najdete zraněnou
                            sovu.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/druhy" className="btn btn-primary">
                                Prozkoumat druhy sov
                            </Link>
                            <Link
                                href="/pomoc-sovam"
                                className="btn btn-outline border-white/60 bg-black/30 text-white hover:border-white hover:bg-black/45"
                            >
                                Jak pomoci sovám
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="druhy" className="space-y-8 py-4">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold md:text-4xl">Přehled nejčastějších druhů sov v ČR</h2>
                    <p className="max-w-3xl text-base-content/80">Sovy, se kterými se v české krajině můžeš setkat nejčastěji.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {featuredOwls.map((owl) => (
                        <OwlCard key={owl.href} {...owl} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link href="/druhy" className="btn btn-primary btn-wide sm:btn-md">
                        Prohlédnout všechny české sovy
                    </Link>
                </div>
            </section>

            <div className="divider my-0" />

            <section className="rounded-2xl bg-base-200/50 px-6 py-10 md:px-8 md:py-14">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold md:text-4xl">Další sekce</h2>
                    <div className="flex flex-wrap gap-3">
                        <a href="#druhy" className="btn btn-outline btn-sm">
                            Druhy
                        </a>
                        <a href="#mista" className="btn btn-outline btn-sm">
                            Místa
                        </a>
                        <a href="#pomoc" className="btn btn-outline btn-sm">
                            Pomoc sovám
                        </a>
                        <a href="#kontakt" className="btn btn-outline btn-sm">
                            Kontakt
                        </a>
                    </div>
                </div>
            </section>

            <section id="mista" className="card bg-base-100 shadow-md ring-1 ring-base-300">
                <div className="card-body py-10">
                    <h2 className="card-title text-3xl">Místa pozorování</h2>
                    <p>
                        Sovy lze nejčastěji zaslechnout na okrajích lesů, v klidných parcích a v otevřené krajině s remízky. Nejlepší čas bývá
                        soumrak. Pozorujte vždy s respektem a z bezpečné vzdálenosti.
                    </p>
                </div>
            </section>

            <section id="pomoc" className="card bg-base-100 shadow-md ring-1 ring-base-300">
                <div className="card-body py-10">
                    <h2 className="card-title text-3xl">Pomoc sovám</h2>
                    <p>Rychlý postup při nálezu zraněné sovy najdete na samostatné stránce s praktickými kroky.</p>
                    <div className="card-actions justify-start">
                        <Link href="/pomoc-sovam" className="btn btn-primary btn-sm">
                            Zobrazit postup
                        </Link>
                    </div>
                </div>
            </section>

            <section id="kontakt" className="card bg-base-100 shadow-md ring-1 ring-base-300">
                <div className="card-body py-10">
                    <h2 className="card-title text-3xl">Kontakt</h2>
                    <p>
                        Pro dotazy, spolupráci nebo sdílení pozorování napište na{" "}
                        <a href="mailto:info@example.com" className="link link-hover font-semibold">
                            info@example.com
                        </a>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
}
