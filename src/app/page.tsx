import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "České sovy – Přehled a informace",
    description: "Informační web o sovách žijících v České republice.",
};

export default function Home() {
    return (
        <div className="space-y-16 md:space-y-24">
            <section className="relative overflow-hidden rounded-2xl">
                <img
                    src="/owl-hero.jpg"
                    alt="Sova v nočním lese"
                    className="absolute inset-0 h-full w-full object-cover object-[70%_80%]"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/75 via-black/60 to-emerald-950/75" />

                <div className="relative px-6 py-24 md:px-10">
                    <div className="max-w-3xl space-y-6 rounded-xl p-6 text-white md:p-8">
                        <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">České sovy</h1>
                        <p className="text-lg text-white/90">
                            Noční vládci českých lesů. Naučte se je poznat podle hlasu, siluety i stop – a zjistěte, co dělat, když najdete zraněnou
                            sovu.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/druhy/vyr-velky" className="btn btn-primary">
                                Prozkoumat druhy sov
                            </Link>
                            <a href="#pomoc" className="btn btn-outline border-white/60 bg-black/30 text-white hover:border-white hover:bg-black/45">
                                Jak pomoci sovám
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="druhy" className="space-y-8 py-4">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold md:text-4xl">Přehled hlavních druhů sov</h2>
                    <p className="max-w-3xl text-base-content/80">
                        Krátký přehled několika druhů, které můžete v české krajině pozorovat nebo zaslechnout.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <article className="card md:col-span-2 bg-base-100 shadow-md ring-1 ring-primary/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <figure className="aspect-4/3 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1200&q=80"
                                alt="Výr velký"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </figure>
                        <div className="card-body">
                            <div className="badge badge-primary badge-outline">Největší sova ČR</div>
                            <h3 className="card-title text-2xl">Výr velký</h3>
                            <p>Dominantní noční lovec s rozpětím křídel až 180 cm, typický hlubokým houkáním a výraznou siluetou.</p>
                            <div className="card-actions justify-end">
                                <Link href="/druhy/vyr-velky" className="btn btn-primary btn-sm">
                                    Detail druhu
                                </Link>
                            </div>
                        </div>
                    </article>

                    <article className="card bg-base-100 shadow-md ring-1 ring-base-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <figure className="aspect-4/3 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&w=1000&q=80"
                                alt="Puštík obecný"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">Puštík obecný</h3>
                            <p>Častý noční obyvatel lesů i parků, známý svým snadno rozpoznatelným hlasem.</p>
                        </div>
                    </article>

                    <article className="card bg-base-100 shadow-md ring-1 ring-base-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <figure className="aspect-4/3 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1000&q=80"
                                alt="Sýček obecný"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">Sýček obecný</h3>
                            <p>Menší kriticky ohrožená sova kulturní krajiny, aktivní často i za šera.</p>
                        </div>
                    </article>
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
                        <Link href="/co-delat" className="btn btn-primary btn-sm">
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
