import type { Metadata } from "next";

import { HeroLightboxGallery, MapLightboxGallery } from "@/components/lightbox-image-galleries";

import mainImage from "@/assets/vyr-velky/vyr-velky-bubo-bubo.jpg";
import image1 from "@/assets/vyr-velky/vyrvelky.jpg";
import image2 from "@/assets/vyr-velky/vyr-velky-hnizdeni.jpg";
import image3 from "@/assets/vyr-velky/vyr-velky.jpg";
import image4 from "@/assets/vyr-velky/vyr.jpg";
import mapImage from "@/assets/vyr-velky/map.webp";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/vyr-velky"),
    title: "Výr velký (Bubo bubo)",
    description: "Největší sova Evropy. Jak výra poznat, kdy houká, kde hnízdí a kdy máte největší šanci ho v ČR pozorovat.",
    openGraph: {
        title: "Výr velký (Bubo bubo) | České sovy",
        description: "Největší sova Evropy. Jak výra poznat, kdy houká, kde hnízdí a kdy máte největší šanci ho v ČR pozorovat.",
        images: [
            {
                url: mainImage.src,
                width: mainImage.width,
                height: mainImage.height,
                alt: "Výr velký (Bubo bubo)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Výr velký je největší sova Evropy, známý pro své hluboké houkání a impozantní vzhled. Tento profil nabízí praktické informace pro pozorovatele: jak výra poznat v terénu, kdy je nejaktivnější, jaké má hnízdní návyky, co jí a jak je chráněný v ČR.",
    keywords: ["výr velký", "bubo bubo", "sova", "druhy sov", "poznávání sov", "ochrana sov", "hnízdění výra", "potrava výra", "hlas výra"],
    twitter: {
        card: "summary_large_image",
        title: "Výr velký (Bubo bubo) | České sovy",
        description: "Největší sova Evropy. Jak výra poznat, kdy houká, kde hnízdí a kdy máte největší šanci ho v ČR pozorovat.",
        images: [
            {
                url: mainImage.src,
                width: mainImage.width,
                height: mainImage.height,
                alt: "Výr velký (Bubo bubo)",
            },
        ],
    },
};

export default function VyrVelkyPage() {
    const timeline = [
        { monthShort: "Led", monthFull: "Leden", nesting: false, voice: true, chicks: false, watch: "high" },
        { monthShort: "Úno", monthFull: "Únor", nesting: true, voice: true, chicks: false, watch: "high" },
        { monthShort: "Bře", monthFull: "Březen", nesting: true, voice: true, chicks: false, watch: "high" },
        { monthShort: "Dub", monthFull: "Duben", nesting: true, voice: false, chicks: true, watch: "medium" },
        { monthShort: "Kvě", monthFull: "Květen", nesting: true, voice: false, chicks: true, watch: "medium" },
        { monthShort: "Čvn", monthFull: "Červen", nesting: false, voice: false, chicks: true, watch: "medium" },
        { monthShort: "Čvc", monthFull: "Červenec", nesting: false, voice: false, chicks: true, watch: "low" },
        { monthShort: "Srp", monthFull: "Srpen", nesting: false, voice: false, chicks: false, watch: "low" },
        { monthShort: "Zář", monthFull: "Září", nesting: false, voice: false, chicks: false, watch: "medium" },
        { monthShort: "Říj", monthFull: "Říjen", nesting: false, voice: true, chicks: false, watch: "high" },
        { monthShort: "Lis", monthFull: "Listopad", nesting: false, voice: true, chicks: false, watch: "high" },
        { monthShort: "Pro", monthFull: "Prosinec", nesting: false, voice: true, chicks: false, watch: "high" },
    ] as const;

    const quickFacts = [
        { label: "Hmotnost", value: "samec 1,8–2,8 kg / samice 2,3–4,2 kg" },
        { label: "Rozpětí křídel", value: "150–188 cm" },
        { label: "Délka těla", value: "59–73 cm" },
        { label: "Dožití", value: "~20 let (divočina) / až 50+ let (zajetí)" },
        { label: "Hnízdění", value: "únor–květen" },
        { label: "Počet vajec", value: "nejčastěji 2–4" },
        { label: "Potrava", value: "savci, ptáci, obojživelníci" },
        { label: "Rozšíření v ČR", value: "roztroušeně po celém území" },
        { label: "Ochrana", value: "zvláště chráněný druh (ČR), chráněn v EU" },
        { label: "Hlas", value: "hluboké „ú-hu“, aktivita hlavně od podzimu do jara" },
    ] as const;

    const heroGalleryImages = [
        { src: mainImage.src, alt: "Výr velký u paty stromu s mláďaty", loading: "eager", priority: true },
        { src: image1.src, alt: "Detail hlavy výra velkého" },
        { src: image2.src, alt: "Výr velký v trávě" },
        { src: image3.src, alt: "Výr velký při noční aktivitě" },
        { src: image4.src, alt: "Silueta výra velkého za soumraku" },
    ] as const;

    const mapGalleryImages = [{ src: mapImage.src, alt: "Mapa výskytu Výra velkého ve světě" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Výr velký",
        alternateName: ["Bubo bubo", "Eurasian eagle-owl"],
        description: "Největší evropská sova s hlubokým hlasem, v ČR zvláště chráněný druh.",
        url: "https://www.ceskesovy.cz/druhy/vyr-velky",
        sameAs: ["https://cs.wikipedia.org/wiki/V%C3%BDr_velk%C3%BD", "https://en.wikipedia.org/wiki/Eurasian_eagle-owl"],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Typické houkání výra velkého",
            contentUrl: "https://www.ceskesovy.cz/druhy/vyr-velky/audio/houkani.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Typické houkání výra velkého – samice",
            contentUrl: "https://www.ceskesovy.cz/druhy/vyr-velky/audio/houkani_2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <header className="space-y-2">
                <h1 className="text-3xl font-bold md:text-4xl">
                    Výr velký{" "}
                    <span className="text-base-content/80">
                        (<em>Bubo bubo</em>)
                    </span>
                </h1>
                <p className="text-sm text-base-content/60">Eurasian eagle owl</p>
                <p className="mt-8 max-w-3xl text-lg md:text-2xl font-medium leading-snug text-base-content/90">
                    Největší sova Evropy. Noční obr se žhnoucíma očima a hlasem, který se nese krajinou kilometry daleko.
                </p>
            </header>

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />

                <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-primary/10 via-base-200/55 to-base-100 px-5 py-6 md:px-8 md:py-7">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/15 blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-info/10 blur-2xl" />

                    <div className="relative space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Proč je výr tak výjimečný</h2>

                        <div className="grid gap-3 text-sm leading-relaxed text-base-content/85 md:grid-cols-3">
                            <p className="rounded-xl bg-base-100/55 p-4 shadow-sm ring-1 ring-base-300/70">
                                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-primary">Silueta a hlas</span>
                                Největší sova Evropy. Mohutná postava, pronikavé oranžové oči a hluboké, pomalé{" "}
                                <span className="whitespace-nowrap">„úú-hu“</span>, které se nese nocí na kilometry.
                            </p>

                            <p className="rounded-xl bg-base-100/55 p-4 shadow-sm ring-1 ring-base-300/70">
                                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-primary">Vrcholový predátor</span>
                                Loví od hlodavců přes ježky až po jiné ptáky. Nebojí se skal, lomů ani krajiny, kterou vytvořil člověk.
                            </p>

                            <p className="rounded-xl bg-base-100/55 p-4 shadow-sm ring-1 ring-base-300/70">
                                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-primary">
                                    Kdy máš největší šanci ho slyšet
                                </span>
                                Od podzimu do jara je hlasově aktivní a intenzivně brání teritorium. Právě tehdy se noc ozývá jeho hlubokým houkáním.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Jak poznat výra v terénu</h2>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Výr velký působí v krajině <strong className="font-semibold text-base-content">mimořádně robustně</strong> – je to sova,
                            kterou si jen těžko spletete. Má dlouhé pernaté <em className="font-medium">„ušičky“</em>, širokou hlavu a nápadně
                            oranžové oči, které ve světle doslova svítí.
                        </p>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Proti ostatním sovám je <span className="font-semibold text-primary/90">výrazně větší</span>. Často sedí klidně na
                            vyvýšeném místě – na skále, balvanu nebo stromě – odkud pozoruje okolí. V siluetě působí těžce a sebejistě. Když roztáhne
                            křídla, rozpětí může přesáhnout 180 cm.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Výskyt a prostředí</h2>
                        <p className="text-base leading-relaxed text-base-content/85">
                            V Česku osidluje především skalnaté oblasti, lomy, okraje lesů i členitou kulturní krajinu. Vyhledává místa, kde má
                            dostatek klidu a zároveň otevřený prostor pro lov.
                        </p>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Hnízdní lokality bývají mimo hustě zastavěná území. Výskyt sahá od nížin po střední nadmořské výšky – klíčová je
                            <span className="font-semibold text-base-content"> kombinace úkrytu, vyvýšených stanovišť a dostatku kořisti</span>.
                        </p>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Výr je <span className="font-semibold text-primary/90">silně teritoriální</span>. Jeden pár může obývat rozsáhlé území,
                            které si pravidelně obhajuje hlasem i přítomností.
                        </p>
                        <a href="#mapa-vyskytu" className="btn btn-sm btn-outline w-fit">
                            Přejít na mapu výskytu
                        </a>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Hnízdění</h2>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Tok začíná už v zimě, často v lednu. V tichých večerech se krajinou nese hluboké houkání samce.
                        </p>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Snůška přichází nejčastěji od února do dubna. Samice klade obvykle dvě až čtyři vejce a inkubace trvá přibližně 34–36 dní.
                        </p>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Mláďata opouštějí bezprostřední okolí hnízda ještě před plnou schopností letu – šplhají po skalách, ukrývají se v okolí a
                            rodiče je dál krmí. Nejcitlivější období je <span className="font-semibold text-primary/90">od února do května</span>, kdy
                            může rušení znamenat opuštění snůšky.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Potrava</h2>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Výr je <strong className="font-semibold text-base-content">vrcholový noční predátor</strong>. Loví především savce střední
                            velikosti – hlodavce, potkany, zajíce – ale také ptáky. Podle dostupnosti může využít i obojživelníky nebo jiné menší
                            obratlovce.
                        </p>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Loví dvěma způsoby: tiše vyčkává na vyvýšeném místě a poté přepadne kořist, nebo aktivně patroluje krajinou nízkým, téměř
                            neslyšným letem.
                        </p>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Dokáže ulovit i jiné sovy nebo dravce, není to však běžná a dominantní složka jeho potravy – spíše příležitostná situace.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Ohrožení a ochrana</h2>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Přestože působí nezranitelně, jeho největším rizikem je člověk.
                        </p>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Mezi hlavní hrozby patří kolize s elektrickým vedením, rušení na hnízdištích a sekundární otravy z prostředí.
                        </p>
                        <p className="text-base leading-relaxed text-base-content/85">
                            V České republice je výr zvláště chráněný druh. Dlouhodobý monitoring ukazuje, že ochrana hnízdišť, zabezpečení vedení a
                            odpovědné chování lidí v přírodě mají přímý vliv na
                            <span className="font-semibold text-primary/90"> stabilitu populace</span>.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Hlas</h2>
                        <p className="text-base leading-relaxed text-base-content/85">
                            Typický hlas výra je hluboké, pomalé „ú-hu“, které se ozývá především při obhajobě teritoria a při komunikaci mezi
                            partnery.
                        </p>
                        <p className="text-base leading-relaxed text-base-content/85">
                            <span className="font-semibold text-base-content">Samec mívá hlubší, dunivější tón</span>. Samice zní o něco výše a
                            kratčeji. Za klidné noci může být houkání slyšitelné i několik kilometrů daleko – a právě to dává noční krajině její
                            zvláštní, pradávnou atmosféru.
                        </p>
                        <div className="space-y-4 mt-5">
                            <div className="rounded-xl border border-base-300 bg-base-200/35 p-4">
                                <p className="mb-2 text-sm font-semibold">Houkání – ukázka 1</p>
                                <audio controls preload="none" className="w-full">
                                    <source src="/druhy/vyr-velky/audio/houkani.mp3" type="audio/mp3" />
                                    Váš prohlížeč nepodporuje audio přehrávač.
                                </audio>
                                <p className="mt-2 text-xs text-base-content/60">
                                    Zdroj:{" "}
                                    <a href="https://ebird.org/species/eueowl1" target="_blank" rel="noopener noreferrer">
                                        eBird.org
                                    </a>
                                </p>
                            </div>

                            <div className="rounded-xl border border-base-300 bg-base-200/35 p-4">
                                <p className="mb-2 text-sm font-semibold">Houkání – ukázka 2</p>
                                <audio controls preload="none" className="w-full">
                                    <source src="/druhy/vyr-velky/audio/houkani_2.mp3" type="audio/mp3" />
                                    Váš prohlížeč nepodporuje audio přehrávač.
                                </audio>
                                <p className="mt-2 text-xs text-base-content/60">
                                    Zdroj:{" "}
                                    <a href="https://ebird.org/species/eueowl1" target="_blank" rel="noopener noreferrer">
                                        eBird.org
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold">Další tajemství nočního obra</h2>
                        <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-base-content/85">
                            <li>
                                Dokáže otočit hlavu až o <span className="font-semibold text-base-content">270°</span>, protože jeho oči jsou pevně
                                zasazené v lebce.
                            </li>
                            <li>Letí téměř neslyšně díky speciální stavbě letek, které tlumí proudění vzduchu.</li>
                            <li>Hnízdí přímo na zemi nebo na skalních římsách – nestaví klasické hnízdo.</li>
                            <li>
                                Patří mezi nejmohutnější noční predátory Evropy a stojí{" "}
                                <span className="font-semibold text-primary">na vrcholu potravního řetězce</span>.
                            </li>
                        </ul>
                    </section>
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <section className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-base-100 via-base-100 to-base-200/45 shadow-[0_14px_35px_-20px_rgba(16,185,129,0.55)]">
                        <div className="pointer-events-none absolute -right-12 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-info/15 blur-3xl" />

                        <div className="relative border-b border-base-300/70 px-5 pb-4 pt-5 md:px-6 md:pt-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">Klíčová data v terénu</p>
                            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Rychlý fakt box</h2>
                            <p className="mt-1 text-sm leading-relaxed text-base-content/70">
                                Nejdůležitější údaje pro rychlou orientaci při pozorování.
                            </p>
                        </div>

                        <ul className="relative space-y-2 px-4 pb-4 pt-4 md:px-5 md:pb-5" aria-label="Rychlá fakta o výru velkém">
                            {quickFacts.map((fact) => (
                                <li
                                    key={fact.label}
                                    className="grid gap-1 rounded-xl border border-base-300/60 bg-base-100/70 px-3 py-3 shadow-sm transition-colors duration-200 hover:border-primary/35 hover:bg-base-100 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:items-start md:gap-3"
                                >
                                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-base-content/60">
                                        {fact.label}
                                    </span>
                                    <span className="text-sm leading-snug text-base-content/90">{fact.value}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </aside>
            </section>

            <section id="mapa-vyskytu" className="">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Mapa výskytu</h2>
                    <div className="space-y-2">
                        <p className="text-sm text-base-content/75">
                            Orientační mapa výskytu Výra velkého (<em>Bubo bubo</em>). Vyskytuje se po celém území kontinentu.
                        </p>
                        <MapLightboxGallery images={mapGalleryImages} />
                    </div>
                </div>
            </section>

            <section className="card bg-base-100 shadow-sm ring-1 ring-base-300">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Jak ho nepoplést</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra text-sm">
                            <thead>
                                <tr>
                                    <th>Druh</th>
                                    <th>Velikost</th>
                                    <th>Oči</th>
                                    <th>Hlas</th>
                                    <th>Klíčový rozdíl</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="font-semibold">
                                    <td>Výr velký</td>
                                    <td>Velmi velký</td>
                                    <td>Oranžové</td>
                                    <td>Hluboké, pomalé houkání</td>
                                    <td>Masivní silueta a výrazné „ušičky"</td>
                                </tr>
                                <tr>
                                    <td>Kalous ušatý</td>
                                    <td>Střední</td>
                                    <td>Oranžové</td>
                                    <td>Vyšší, jemnější tóny</td>
                                    <td>Výrazně menší tělo a štíhlejší postava</td>
                                </tr>
                                <tr>
                                    <td>Puštík obecný</td>
                                    <td>Střední</td>
                                    <td>Tmavé</td>
                                    <td>Třesavé, často „hú-hůů"</td>
                                    <td>Bez „uší", kulatá hlava</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="card bg-base-100 shadow-sm ring-1 ring-base-300">
                <div className="card-body gap-4">
                    <h2 className="card-title text-2xl">Kdy mám šanci ho vidět?</h2>
                    <div data-testid="timeline-grid" className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
                        {timeline.map((item) => (
                            <div key={item.monthShort} data-testid="timeline-month" className="rounded-lg border border-base-300 bg-base-200/50 p-2">
                                <p className="font-semibold mb-2">
                                    <span>{item.monthFull}</span>
                                </p>
                                <div className="mt-1 space-y-1">
                                    {item.watch === "high" && (
                                        <span data-testid="timeline-badge-watch-high" className="badge badge-success badge-xs xl:w-full">
                                            vysoká
                                        </span>
                                    )}
                                    {item.watch === "medium" && (
                                        <span
                                            data-testid="timeline-badge-watch-medium"
                                            className="badge badge-outline badge-xs border-success/60 text-success xl:w-full"
                                        >
                                            střední
                                        </span>
                                    )}
                                    {item.watch === "low" && (
                                        <span data-testid="timeline-badge-watch-low" className="badge badge-ghost badge-xs xl:w-full">
                                            nižší
                                        </span>
                                    )}
                                    {item.nesting && (
                                        <span data-testid="timeline-badge-activity" className="badge badge-ghost badge-xs xl:w-full">
                                            hnízdění
                                        </span>
                                    )}
                                    {item.voice && (
                                        <span data-testid="timeline-badge-activity" className="badge badge-ghost badge-xs xl:w-full">
                                            hlas
                                        </span>
                                    )}
                                    {item.chicks && (
                                        <span data-testid="timeline-badge-activity" className="badge badge-ghost badge-xs xl:w-full">
                                            mláďata
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="card bg-primary/10 shadow-sm ring-1 ring-primary/40">
                <div className="card-body md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1">
                        <h2 className="card-title text-2xl">Viděli jste výra velkého?</h2>
                        <p className="text-sm text-base-content/80">Pošlete pozorování a pomozte zpřesnit mapu výskytu v ČR.</p>
                    </div>
                    <div className="card-actions">
                        <a href="mailto:info@ceskesovy.cz?subject=Pozorovani%20vyra%20velkeho" className="btn btn-primary">
                            Poslat pozorování
                        </a>
                    </div>
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold">Použité zdroje</h2>
                <p className="text-base leading-relaxed text-base-content/80">
                    Informace vycházejí z ověřených přehledových zdrojů o druhu <em>Bubo bubo</em>:
                </p>
                <ol className="list-decimal space-y-2 pl-6 text-sm leading-relaxed text-base-content/85">
                    <li>
                        Encyclopaedia Britannica –{" "}
                        <a href="https://www.britannica.com/animal/eagle-owl" target="_blank" rel="noopener noreferrer" className="link link-hover">
                            https://www.britannica.com/animal/eagle-owl
                        </a>
                    </li>
                    <li>
                        Wikipedia –{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/Eurasian_eagle-owl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link link-hover"
                        >
                            https://en.wikipedia.org/wiki/Eurasian_eagle-owl
                        </a>
                    </li>
                    <li>
                        BirdLife International –{" "}
                        <a href="https://www.birdlife.org" target="_blank" rel="noopener noreferrer" className="link link-hover">
                            https://www.birdlife.org
                        </a>
                    </li>
                    <li>
                        IUCN (Red List) –{" "}
                        <a href="https://www.iucnredlist.org/species/22688927" target="_blank" rel="noopener noreferrer" className="link link-hover">
                            https://www.iucnredlist.org/species/22688927
                        </a>
                    </li>
                </ol>
            </section>
        </article>
    );
}
