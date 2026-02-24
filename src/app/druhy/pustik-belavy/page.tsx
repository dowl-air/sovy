import type { Metadata } from "next";

import { HeroLightboxGallery } from "@/components/lightbox-image-galleries";
import {
    ObservationCtaCard,
    QuickFactsCard,
    SourcesList,
    SpeciesAudioSection,
    SpeciesComparisonTable,
    SpeciesContentSections,
    SpeciesHeroHeader,
    SpeciesHighlights,
    SpeciesMapSection,
    SpeciesTimelineCard,
    SpeciesTriviaSection,
} from "@/components/species-profile-sections";

import timeline from "@/assets/pustik-belavy/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/pustik-belavy"),
    title: "Puštík bělavý (Strix uralensis)",
    description: "Velká světlá lesní sova s dlouhým ocasem. Jak puštíka bělavého poznat, kde se v ČR vzácně vyskytuje a kdy je nejaktivnější.",
    openGraph: {
        title: "Puštík bělavý (Strix uralensis) | České sovy",
        description: "Velká světlá lesní sova s dlouhým ocasem. Jak puštíka bělavého poznat, kde se v ČR vzácně vyskytuje a kdy je nejaktivnější.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/pustik-belavy/images/pustik-belavy-main.webp",
                alt: "Puštík bělavý (Strix uralensis)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Puštík bělavý je velká lesní sova se světlým zbarvením, tmavýma očima a nápadně dlouhým ocasem. Profil shrnuje určovací znaky, hlas, hnízdění, potravu i současný stav druhu v české krajině.",
    keywords: ["puštík bělavý", "strix uralensis", "ural owl", "sova", "druhy sov", "hlas sov", "hnízdění sov", "ochrana sov"],
    twitter: {
        card: "summary_large_image",
        title: "Puštík bělavý (Strix uralensis) | České sovy",
        description: "Velká světlá lesní sova s dlouhým ocasem. Jak puštíka bělavého poznat, kde se v ČR vzácně vyskytuje a kdy je nejaktivnější.",
        images: ["https://www.ceskesovy.cz/druhy/pustik-belavy/images/pustik-belavy-main.webp"],
    },
};

export default function PustikBelavyPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "samec 540–730 g / samice 720–1200 g" },
        { label: "Rozpětí křídel", value: "obvykle kolem 110–134 cm" },
        { label: "Délka těla", value: "zhruba 50–64 cm" },
        { label: "Dožití", value: "ve volné přírodě přes 15 let" },
        { label: "Hnízdění", value: "březen–červen" },
        { label: "Počet vajec", value: "nejčastěji 2–4 (rozptyl 1–5)" },
        { label: "Potrava", value: "hlodavci a další drobní savci, ptáci, doplňkově hmyz" },
        { label: "Rozšíření v ČR", value: "velmi vzácně hlavně Beskydy, Šumava a Český les" },
        { label: "Ochrana", value: "IUCN: málo dotčený (LC), v ČR velmi vzácný druh" },
        { label: "Hlas", value: "samec hluboké „hu-hauhauhau“, samice kratší ostré volání" },
    ] as const;

    const heroGalleryImages = [
        { src: "/druhy/pustik-belavy/images/pustik-belavy-main.webp", alt: "Puštík bělavý v detailu", loading: "eager", priority: true },
        { src: "/druhy/pustik-belavy/images/pustik-belavy-portret.webp", alt: "Puštík bělavý při kroužkování" },
        { src: "/druhy/pustik-belavy/images/pustik-belavy-nocni-lov.webp", alt: "Puštík bělavý při nočním lovu" },
        { src: "/druhy/pustik-belavy/images/pustik-belavy-ve-stromu.webp", alt: "Puštík bělavý na větvi" },
        { src: "/druhy/pustik-belavy/images/pustik-belavy-let.webp", alt: "Puštík bělavý zblízka se světlým zbarvením" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/pustik-belavy/images/map.webp", alt: "Mapa výskytu puštíka bělavého" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Puštík bělavý",
        alternateName: ["Strix uralensis", "Ural owl"],
        description: "Velká lesní sova se světlým zbarvením a dlouhým ocasem, v ČR velmi vzácná.",
        url: "https://www.ceskesovy.cz/druhy/pustik-belavy",
        sameAs: [
            "https://cs.wikipedia.org/wiki/Pu%C5%A1t%C3%ADk_b%C4%9Blav%C3%BD",
            "https://en.wikipedia.org/wiki/Ural_owl",
            "https://ebird.org/species/uraowl1",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas puštíka bělavého – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/pustik-belavy/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas puštíka bělavého – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/pustik-belavy/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Druhá největší sova ČR",
            description: <>Působí mohutněji než puštík obecný, je světlejší a má nápadně dlouhý ocas.</>,
        },
        {
            title: "Silně teritoriální hnízdič",
            description: <>V době hnízdění umí hnízdo velmi důrazně bránit a bývá výrazně hlasově aktivní.</>,
        },
        {
            title: "Vzácný, ale lokálně na vzestupu",
            description: <>V Česku zůstává velmi vzácný, přesto v některých oblastech po reintrodukcích znovu přibývá.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak poznat puštíka bělavého",
            paragraphs: [
                <>
                    Puštík bělavý je <strong className="font-semibold text-base-content">velká, světlá lesní sova</strong> s kulatou hlavou bez oušek
                    a výrazně delším ocasem než u puštíka obecného.
                </>,
                <>
                    Oči jsou tmavé, obličejový disk světlejší a spodina těla má podélné tmavé pruhy. V terénu působí klidně, ale při obraně hnízda
                    bývá velmi razantní.
                </>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    V Evropě obývá hlavně severní a severovýchodní část kontinentu, izolované populace jsou v Karpatech a východních Alpách. Dále
                    zasahuje hluboko do severní Asie.
                </>,
                <>
                    V ČR jde o <span className="font-semibold text-primary/90">velmi vzácný druh</span>, vázaný hlavně na rozsáhlejší starší lesní
                    celky v Beskydech a v oblasti Šumavy a Českého lesa.
                </>,
                <>
                    Potřebuje staré porosty a doupné stromy, případně stará hnízda větších dravců. Stav druhu výrazně souvisí s kvalitou lesního
                    hospodaření.
                </>,
            ],
            cta: {
                href: "#mapa-vyskytu",
                label: "Přejít na mapu výskytu",
            },
        },
        {
            title: "Hnízdění",
            paragraphs: [
                <>
                    Hnízdí v dutinách stromů, torzech kmenů nebo ve starých hnízdech dravců. Snůška bývá nejčastěji
                    <span className="font-semibold text-primary/90"> 2–4 vejce</span>.
                </>,
                <>Inkubace trvá zhruba 27–34 dní a sedí převážně samice. Mláďata jsou po vylétnutí ještě několik týdnů dokrmována rodiči.</>,
                <>Tok i hlasová aktivita vrcholí na přelomu zimy a jara, kdy je zároveň nejvyšší citlivost druhu na rušení kolem hnízdišť.</>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>Základ tvoří drobní savci, hlavně hlodavci. Podle nabídky bere i menší ptáky a příležitostně hmyz.</>,
                <>Loví převážně z posedu a využívá okraje lesních světlin, mýtin a průseků. Aktivní je hlavně v noci, ale místy loví i za dne.</>,
                <>Úspěch hnízdění je silně navázaný na dostupnost kořisti v daném roce.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>Globálně je puštík bělavý veden jako málo dotčený (IUCN LC), v části Evropy ale závisí na zachování starých lesních struktur.</>,
                <>V ČR je velmi vzácný a výskyt je omezený na několik oblastí. Největší hrozbou je ztráta vhodných biotopů a hnízdních možností.</>,
                <>Klíčová opatření jsou ochrana starých porostů, hnízdních lokalit a dlouhodobý monitoring populace.</>,
            ],
        },
    ] as const;

    const audioIntro = [
        <>Hlas puštíka bělavého je hluboký, rytmický a v jarním období dobře slyšitelný na větší vzdálenost.</>,
        <>
            Nahrávky níže jsou z databáze <span className="font-semibold text-primary/90">eBird / Macaulay Library</span>.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Hlas puštíka bělavého – ukázka 1",
            src: "/druhy/pustik-belavy/audio/zvuk1.mp3",
            sourceName: "eBird / Macaulay Library (ML60712291)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=uraowl1&mediaType=audio",
        },
        {
            title: "Hlas puštíka bělavého – ukázka 2",
            src: "/druhy/pustik-belavy/audio/zvuk2.mp3",
            sourceName: "eBird / Macaulay Library (ML65389031)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=uraowl1&mediaType=audio",
        },
    ] as const;

    const triviaItems = [
        <>Ve srovnání s puštíkem obecným je bělavý druh výrazně větší a má zřetelně delší ocas.</>,
        <>V některých oblastech střední Evropy byl druh podpořen reintrodukčními programy a sítí hnízdních budek.</>,
        <>V době hnízdění patří mezi nejodvážnější evropské sovy při obraně mláďat.</>,
        <>V české krajině je jeho výskyt omezený, takže i jednotlivé nálezy mají vysokou ochranářskou hodnotu.</>,
    ] as const;

    const comparisonRows = [
        {
            species: "Puštík bělavý",
            size: "Velký",
            eyes: "Tmavé",
            voice: "Rytmické hlubší „hu-hauhauhau“",
            keyDifference: "Světlé zbarvení a dlouhý ocas",
            emphasized: true,
        },
        {
            species: "Puštík obecný",
            size: "Střední",
            eyes: "Tmavé",
            voice: "Hluboké „húú“ + „kivik“",
            keyDifference: "Kratší ocas a menší silueta",
        },
        {
            species: "Výr velký",
            size: "Velmi velký",
            eyes: "Oranžové",
            voice: "Velmi hluboké „ú-hu“",
            keyDifference: "Výrazná pernatá ouška a mohutnější postava",
        },
    ] as const;

    const sources = [
        { label: "Wikipedia (CS) – Puštík bělavý", url: "https://cs.wikipedia.org/wiki/Pu%C5%A1t%C3%ADk_b%C4%9Blav%C3%BD" },
        { label: "Wikipedia (EN) – Ural owl", url: "https://en.wikipedia.org/wiki/Ural_owl" },
        { label: "eBird – Ural Owl (uraowl1)", url: "https://ebird.org/species/uraowl1" },
        { label: "eBird Media Catalog – Ural Owl audio", url: "https://media.ebird.org/catalog?taxonCode=uraowl1&mediaType=audio" },
        { label: "Wikimedia Commons – StrixUralensisIUCN.svg (map source)", url: "https://commons.wikimedia.org/wiki/File:StrixUralensisIUCN.svg" },
        { label: "IUCN Red List – Strix uralensis", url: "https://www.iucnredlist.org/species/22689108/0" },
        { label: "AOPK ČR – karta druhu Strix uralensis", url: "https://portal.nature.cz/w/druh-1398" },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Puštík bělavý"
                scientificName="Strix uralensis"
                englishName="Ural owl"
                lead="Velká světlá lesní sova se silným hlasem, která v Česku patří k nejvzácnějším druhům."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je puštík bělavý výjimečný" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o puštíkovi bělavém" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa světového areálu puštíka bělavého (<em>Strix uralensis</em>) ve vysokém rozlišení. Podklad je invertovaný a
                        výskyt je sjednocen projektovou zelenou.
                    </>
                }
                images={mapGalleryImages}
            />

            <section className="-mt-4 rounded-xl border border-base-300 bg-base-100/70 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/80">Legenda mapy</h3>
                <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#1ECF64]" aria-hidden="true" />
                        <span>zelená – výskyt druhu</span>
                    </li>
                </ul>
            </section>

            <SpeciesComparisonTable title="Jak ho nepoplést" rows={comparisonRows} />
            <SpeciesTimelineCard title="Kdy mám šanci ho v ČR zaznamenat?" items={timeline} />

            <ObservationCtaCard
                title="Máte záznam puštíka bělavého?"
                description="Pošlete pozorování a pomozte upřesnit aktuální výskyt tohoto vzácného druhu v ČR."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20pustika%20belaveho"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Informace vycházejí z veřejně dostupných odborných podkladů k druhu <em>Strix uralensis</em>, z IUCN a z databáze
                        eBird/Macaulay Library.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
