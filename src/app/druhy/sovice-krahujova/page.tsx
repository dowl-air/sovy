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

import timeline from "@/assets/sovice-krahujova/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/sovice-krahujova"),
    title: "Sovice krahujová (Surnia ulula)",
    description: "Denně aktivní sova boreálních lesů. Jak sovici krahujovou poznat, kde žije a proč se jí říká jestřábí sova.",
    openGraph: {
        title: "Sovice krahujová (Surnia ulula) | České sovy",
        description: "Denně aktivní sova boreálních lesů. Jak sovici krahujovou poznat, kde žije a proč se jí říká jestřábí sova.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/sovice-krahujova/images/sovice-krahujova-main.jpg",
                alt: "Sovice krahujová (Surnia ulula)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Sovice krahujová je středně velká sova severních jehličnatých lesů. Profil shrnuje určovací znaky, ekologii, hnízdění a kontext vzácných výskytů ve střední Evropě.",
    keywords: ["sovice krahujová", "surnia ulula", "northern hawk-owl", "sova", "druhy sov", "poznávání sov", "boreální les"],
    twitter: {
        card: "summary_large_image",
        title: "Sovice krahujová (Surnia ulula) | České sovy",
        description: "Denně aktivní sova boreálních lesů. Jak sovici krahujovou poznat, kde žije a proč se jí říká jestřábí sova.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/sovice-krahujova/images/sovice-krahujova-main.jpg",
                alt: "Sovice krahujová (Surnia ulula)",
            },
        ],
    },
};

export default function SoviceKrahujovaPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "obvykle 280–370 g" },
        { label: "Rozpětí křídel", value: "69–82 cm" },
        { label: "Délka těla", value: "35–45 cm" },
        { label: "Aktivita", value: "často loví i za dne" },
        { label: "Hnízdění", value: "jaro až začátek léta" },
        { label: "Počet vajec", value: "nejčastěji 3–11 (může být i více)" },
        { label: "Potrava", value: "hlodavci, menší savci a ptáci" },
        { label: "Rozšíření", value: "sever Eurasie a Severní Ameriky" },
        { label: "Rozšíření v ČR", value: "vzácné zálety, pravidelně nehnízdí" },
        { label: "Ochrana", value: "globálně IUCN: málo dotčený (LC)" },
    ] as const;

    const heroGalleryImages = [
        {
            src: "/druhy/sovice-krahujova/images/sovice-krahujova-main.jpg",
            alt: "Sovice krahujová na otevřené větvi",
            loading: "eager",
            priority: true,
        },
        { src: "/druhy/sovice-krahujova/images/sovice-krahujova-2.jpg", alt: "Sovice krahujová při pozorování okolí" },
        { src: "/druhy/sovice-krahujova/images/sovice-krahujova-3.jpg", alt: "Portrét sovice krahujové" },
        { src: "/druhy/sovice-krahujova/images/sovice-krahujova-4.jpg", alt: "Sovice krahujová v otevřeném boreálním lese" },
        { src: "/druhy/sovice-krahujova/images/sovice-krahujova-5.jpg", alt: "Sovice krahujová v zimním prostředí" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/sovice-krahujova/images/map.webp", alt: "Mapa světového výskytu sovice krahujové" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Sovice krahujová",
        alternateName: ["Surnia ulula", "Northern hawk-owl"],
        description: "Středně velká denně aktivní sova severních boreálních lesů s dlouhým ocasem a jestřábí siluetou.",
        url: "https://www.ceskesovy.cz/druhy/sovice-krahujova",
        sameAs: [
            "https://cs.wikipedia.org/wiki/Sovice_krahujov%C3%A1",
            "https://en.wikipedia.org/wiki/Northern_hawk-owl",
            "https://ebird.org/species/nohowl",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas sovice krahujové – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/sovice-krahujova/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas sovice krahujové – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/sovice-krahujova/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Sova, která připomíná dravce",
            description: <>Dlouhý ocas, kratší špičatá křídla a přímý let jí dávají „jestřábí“ siluetu, podle které dostala i anglické jméno.</>,
        },
        {
            title: "Často aktivní za dne",
            description: (
                <>Patří k málu sov, které pravidelně loví i při denním světle. Nejlépe funguje kombinace vyhlížení z posedu a rychlého útoku.</>
            ),
        },
        {
            title: "Druh severních lesů",
            description: <>Typická je pro boreální pás Evropy, Asie i Severní Ameriky. Do střední Evropy zaletuje jen výjimečně.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak poznat sovici krahujovou",
            paragraphs: [
                <>
                    Sovice krahujová je <strong className="font-semibold text-base-content">středně velká sova s nápadně dlouhým ocasem</strong>. Má
                    světlý obličejový disk s tmavým lemem, žluté oči a kontrastně proužkované spodní partie těla.
                </>,
                <>
                    V letu působí méně „sovím“ dojmem než jiné druhy: let je přímočařejší a silueta připomíná menšího dravce. V terénu často sedí na
                    vrcholcích stromů, odkud aktivně sleduje okolí.
                </>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    Druh obývá především <span className="font-semibold text-primary/90">severní boreální lesy</span> Eurasie a Severní Ameriky,
                    zejména otevřenější jehličnaté porosty, paseky, mokřadní okraje a spáleniště.
                </>,
                <>
                    V zimě nebo při výkyvech dostupnosti kořisti může podnikat irupční přesuny jižněji. Ve střední Evropě je proto spíše vzácným
                    hostem než pravidelným hnízdičem.
                </>,
                <>V ČR jde o výjimečný druh s ojedinělými pozorováními, nejčastěji v chladné části roku.</>,
            ],
            cta: {
                href: "#mapa-vyskytu",
                label: "Přejít na mapu výskytu",
            },
        },
        {
            title: "Hnízdění",
            paragraphs: [
                <>Tok začíná brzy na jaře. Pár následně využívá otevřené dutiny, zlomy stromů nebo stará hnízda větších ptáků.</>,
                <>
                    Samice klade podle potravní nabídky obvykle <span className="font-semibold text-primary/90">3–11 vajec</span>, v některých letech
                    může být snůška vyšší.
                </>,
                <>
                    Inkubaci zajišťuje převážně samice, zatímco samec nosí potravu. Rodiče bývají u hnízda velmi obranní a reagují hlasitě i útočnými
                    výpady.
                </>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>
                    Základ jídelníčku tvoří <strong className="font-semibold text-base-content">drobní savci</strong>, hlavně hraboši a další
                    hlodavci. Doplňkově loví i menší ptáky.
                </>,
                <>
                    Typická lovecká strategie je vyhlížení z otevřeného posedu a rychlý skluzový útok. Díky výbornému sluchu dokáže zachytit kořist i
                    pod sněhem.
                </>,
                <>Úspěšnost hnízdění i početnost lokálně silně kolísají podle cyklů drobných savců.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>
                    Globálně je druh veden jako <span className="font-semibold text-primary/90">málo dotčený (IUCN LC)</span>, ale jeho výskyt je
                    řídký a místně velmi proměnlivý.
                </>,
                <>Citlivý je hlavně na změny struktury boreálních lesů, zánik vhodných hnízdních míst a dlouhodobé změny abundance kořisti.</>,
                <>Každý ověřený záznam mimo hlavní severní areál je cenný pro monitoring irupcí a změn rozšíření.</>,
            ],
        },
    ] as const;

    const triviaItems = [
        <>
            Je jediným žijícím druhem rodu <span className="font-semibold text-base-content">Surnia</span>.
        </>,
        <>Na rozdíl od mnoha jiných sov je výrazně aktivní i během dne.</>,
        <>I přes „jestřábí“ vzhled patří mezi pravé sovy (Strigidae).</>,
        <>V období hnízdění dokáže hnízdo bránit mimořádně agresivně.</>,
    ] as const;

    const audioIntro = [
        <>
            Sovice krahujová se ozývá různě podle situace. V terénu bývá nápadné hlavně rychlé varovné volání typu
            <span className="whitespace-nowrap"> „ki-ki-ki“</span>.
        </>,
        <>
            V době toku samec používá i rytmické pískání. Ukázky níže pocházejí z databáze
            <span className="font-semibold text-primary/90"> eBird / Macaulay Library</span>.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Hlas sovice krahujové – ukázka 1",
            src: "/druhy/sovice-krahujova/audio/zvuk1.mp3",
            sourceName: "eBird / Macaulay Library (ML432200831)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=nohowl&mediaType=audio",
        },
        {
            title: "Hlas sovice krahujové – ukázka 2",
            src: "/druhy/sovice-krahujova/audio/zvuk2.mp3",
            sourceName: "eBird / Macaulay Library (ML262604091)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=nohowl&mediaType=audio",
        },
    ] as const;

    const comparisonRows = [
        {
            species: "Sovice krahujová",
            size: "Střední",
            eyes: "Žluté",
            voice: "Rychlé „ki-ki-ki“, varovné volání",
            keyDifference: "Dlouhý ocas a denní aktivita",
            emphasized: true,
        },
        {
            species: "Sovice sněžní",
            size: "Velká",
            eyes: "Žluté",
            voice: "Hlubší štěkavé/chraplavé volání",
            keyDifference: "Světlé až bílé zbarvení, arktická tundra",
        },
        {
            species: "Sýc rousný",
            size: "Malý až střední",
            eyes: "Žluté",
            voice: "Rytmické pískání samce",
            keyDifference: "Kulatější silueta bez dlouhého ocasu",
        },
    ] as const;

    const sources = [
        { label: "Wikipedia (CS) – Sovice krahujová", url: "https://cs.wikipedia.org/wiki/Sovice_krahujov%C3%A1" },
        { label: "Wikipedia (EN) – Northern hawk-owl", url: "https://en.wikipedia.org/wiki/Northern_hawk-owl" },
        { label: "eBird – Northern Hawk-Owl (nohowl)", url: "https://ebird.org/species/nohowl" },
        { label: "eBird Media Catalog – Northern Hawk-Owl audio", url: "https://media.ebird.org/catalog?taxonCode=nohowl&mediaType=audio" },
        { label: "Wikimedia Commons – SurniaUlulaIUCN.svg", url: "https://commons.wikimedia.org/wiki/File:SurniaUlulaIUCN.svg" },
        { label: "IUCN Red List – Surnia ulula", url: "https://www.iucnredlist.org/species/22689189/93221920" },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Sovice krahujová"
                scientificName="Surnia ulula"
                englishName="Northern hawk-owl"
                lead="Severní sova s dravčí siluetou. V boreálních lesích loví často za dne a v Evropě i Severní Americe patří k výrazným irupčním druhům."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je sovice krahujová výjimečná" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o sovici krahujové" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa světového areálu sovice krahujové (<em>Surnia ulula</em>) ve stejném vizuálním stylu jako ostatní druhové
                        profily.
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

            <SpeciesComparisonTable title="Jak ji nepoplést" rows={comparisonRows} />
            <SpeciesTimelineCard title="Kdy je nejvyšší aktivita?" items={timeline} />

            <ObservationCtaCard
                title="Máte pozorování sovice krahujové?"
                description="Pošlete záznam a pomozte doplnit přehled vzácných výskytů tohoto druhu v ČR."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20sovice%20krahujove"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Text vychází z veřejně dostupných zdrojů k druhu <em>Surnia ulula</em> a z mapových podkladů Wikimedia Commons/IUCN.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
