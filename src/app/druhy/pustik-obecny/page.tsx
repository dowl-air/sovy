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

import timeline from "@/assets/pustik-obecny/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/pustik-obecny"),
    title: "Puštík obecný (Strix aluco)",
    description: "Nejběžnější noční sova českých lesů i parků. Jak puštíka poznat, kdy se ozývá a kde ho v ČR nejčastěji najít.",
    openGraph: {
        title: "Puštík obecný (Strix aluco) | České sovy",
        description: "Nejběžnější noční sova českých lesů i parků. Jak puštíka poznat, kdy se ozývá a kde ho v ČR nejčastěji najít.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/pustik-obecny/images/pustik-obecny-main.webp",
                alt: "Puštík obecný (Strix aluco)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Puštík obecný je středně velká lesní sova bez pernatých oušek, typická kulatou hlavou, tmavýma očima a výrazným nočním hlasem. Profil shrnuje určovací znaky, hlas, hnízdění, potravu i praktické informace k ochraně druhu v české krajině.",
    keywords: ["puštík obecný", "strix aluco", "tawny owl", "sova", "druhy sov", "hlas sov", "hnízdění", "ochrana sov"],
    twitter: {
        card: "summary_large_image",
        title: "Puštík obecný (Strix aluco) | České sovy",
        description: "Nejběžnější noční sova českých lesů i parků. Jak puštíka poznat, kdy se ozývá a kde ho v ČR nejčastěji najít.",
        images: ["https://www.ceskesovy.cz/druhy/pustik-obecny/images/pustik-obecny-main.webp"],
    },
};

export default function PustikObecnyPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "obvykle 385–800 g (samci bývají lehčí)" },
        { label: "Rozpětí křídel", value: "81–105 cm" },
        { label: "Délka těla", value: "37–46 cm" },
        { label: "Dožití", value: "běžně kolem 5 let, doloženě přes 18 let ve volné přírodě" },
        { label: "Hnízdění", value: "únor–červen" },
        { label: "Počet vajec", value: "nejčastěji 2–5 (obvykle 3–5)" },
        { label: "Potrava", value: "hlodavci, další menší savci a ptáci, doplňkově bezobratlí" },
        { label: "Rozšíření v ČR", value: "od nížin po hory, na většině území nejpočetnější sova" },
        { label: "Ochrana", value: "IUCN: málo dotčený (LC), v ČR běžný lesní druh" },
        { label: "Hlas", value: "samec „húú… hu-hu-húú“, samice kontaktově „kivik“" },
    ] as const;

    const heroGalleryImages = [
        { src: "/druhy/pustik-obecny/images/pustik-obecny-main.webp", alt: "Puštík obecný v detailu", loading: "eager", priority: true },
        { src: "/druhy/pustik-obecny/images/pustik-obecny-portret.webp", alt: "Portrét puštíka obecného" },
        { src: "/druhy/pustik-obecny/images/pustik-obecny-korist.webp", alt: "Puštík obecný s ulovenou kořistí" },
        { src: "/druhy/pustik-obecny/images/pustik-obecny-ve-stromu.webp", alt: "Puštík obecný odpočívající ve stromě" },
        { src: "/druhy/pustik-obecny/images/pustik-obecny-detail.webp", alt: "Puštík obecný v lesním prostředí" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/pustik-obecny/images/map.webp", alt: "Mapa výskytu puštíka obecného" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Puštík obecný",
        alternateName: ["Strix aluco", "Tawny owl"],
        description: "Středně velká lesní sova s kulatou hlavou bez oušek, aktivní hlavně v noci.",
        url: "https://www.ceskesovy.cz/druhy/pustik-obecny",
        sameAs: [
            "https://cs.wikipedia.org/wiki/Pu%C5%A1t%C3%ADk_obecn%C3%BD",
            "https://en.wikipedia.org/wiki/Tawny_owl",
            "https://ebird.org/species/tawowl1",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas puštíka obecného – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/pustik-obecny/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas puštíka obecného – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/pustik-obecny/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Nejčastější sova Česka",
            description: <>Na většině území ČR jde o nejpočetnější sovu. Ozývá se v lesích, parcích i klidnějších částech měst.</>,
        },
        {
            title: "Typický noční hlas",
            description: <>Teritoriální houkání samce a kontaktové „kivik“ samice patří k nejznámějším nočním zvukům české krajiny.</>,
        },
        {
            title: "Mistr lesního lovu",
            description: <>Loví převážně v noci z posedu i krátkým letem, nejčastěji drobné savce, ale potravně je velmi přizpůsobivý.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak poznat puštíka v terénu",
            paragraphs: [
                <>
                    Puštík obecný je <strong className="font-semibold text-base-content">kompaktní středně velká sova bez pernatých „oušek“</strong>.
                    Má širokou kulatou hlavu, tmavé oči a výrazný obličejový disk.
                </>,
                <>
                    Zbarvení je variabilní od rezavohnědého po šedohnědé, ale silueta zůstává typická: robustní trup, krátký ocas a zaoblená křídla. V
                    letu působí těžším dojmem než menší druhy.
                </>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    Areál druhu pokrývá velkou část Evropy a zasahuje na západní Sibiř. V ČR se puštík vyskytuje od nížin po vyšší polohy a lokálně je
                    velmi běžný.
                </>,
                <>
                    Preferuje <span className="font-semibold text-base-content">listnaté a smíšené lesy</span>, ale využívá i parky, aleje a hřbitovy,
                    pokud má dostatek úkrytů a kořisti.
                </>,
                <>Hnízdí hlavně ve stromových dutinách, ochotně obsazuje i budky a výjimečně hnízdí v budovách.</>,
            ],
            cta: {
                href: "#mapa-vyskytu",
                label: "Přejít na mapu výskytu",
            },
        },
        {
            title: "Hnízdění",
            paragraphs: [
                <>Páry bývají dlouhodobě stálé a teritorium obhajují po celý rok. Tok začíná už v zimě, častěji od února.</>,
                <>
                    Samice klade obvykle <span className="font-semibold text-primary/90">3–5 vajec</span>, inkubace trvá přibližně 28–30 dní a
                    zpočátku ji zajišťuje hlavně samice, zatímco samec nosí potravu.
                </>,
                <>Mláďata opouštějí hnízdo dříve, než plně létají; několik dní šplhají po okolní vegetaci a rodiče je dále krmí.</>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>
                    Potravně je puštík velmi pružný. Převládají menší savci a ptáci, podle místních podmínek přibývají i obojživelníci nebo
                    bezobratlí.
                </>,
                <>Loví hlavně v noci z posedu, odkud podniká rychlé výpady. V období péče o mláďata může část lovu probíhat i za dne.</>,
                <>V lesních biotopech je důležitým predátorem, který může lokálně ovlivňovat i menší druhy sov.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>Globálně je druh hodnocen jako málo dotčený (IUCN LC) a populační trend je stabilní.</>,
                <>
                    Lokálně ho ohrožují kolize s dopravou, úrazy na vedení a ztráta starých doupných stromů. V urbanizovaných oblastech může vadit i
                    noční hluk.
                </>,
                <>V české krajině pomáhá ochrana doupných stromů a vhodně umístěné budky v lesích i parcích.</>,
            ],
        },
    ] as const;

    const audioIntro = [
        <>Puštík je hlasitá noční sova. Samec se ozývá hlubším teritoriálním houkáním, samice často odpovídá kontaktovým „kivik“.</>,
        <>
            Nahrávky níže jsou z databáze <span className="font-semibold text-primary/90">eBird / Macaulay Library</span>.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Hlas puštíka – ukázka 1",
            src: "/druhy/pustik-obecny/audio/zvuk1.mp3",
            sourceName: "eBird / Macaulay Library (ML243339011)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=tawowl1&mediaType=audio",
        },
        {
            title: "Hlas puštíka – ukázka 2",
            src: "/druhy/pustik-obecny/audio/zvuk2.mp3",
            sourceName: "eBird / Macaulay Library (ML118511671)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=tawowl1&mediaType=audio",
        },
    ] as const;

    const triviaItems = [
        <>Patří mezi nejlépe známé noční hlasy Evropy; legendární „houkání sovy“ je často právě puštík.</>,
        <>Mladí ptáci po opuštění dutiny ještě několik dní neumějí jistě létat, ale rodiče je dál aktivně krmí.</>,
        <>V jedné lokalitě mohou žít barevně odlišní jedinci (rezaví i šedí), přesto jde o tentýž druh.</>,
        <>Ve městech využívá staré parky a aleje, pokud má klidné denní úkryty a dostatek potravy.</>,
    ] as const;

    const comparisonRows = [
        {
            species: "Puštík obecný",
            size: "Střední",
            eyes: "Tmavé",
            voice: "Hluboké houkání + „kivik“",
            keyDifference: "Kulatá hlava bez „uší“, robustní silueta",
            emphasized: true,
        },
        {
            species: "Kalous ušatý",
            size: "Střední",
            eyes: "Oranžové",
            voice: "Vyšší, jemnější tóny",
            keyDifference: "Výrazná pernatá „ouška“ a štíhlejší postava",
        },
        {
            species: "Sova pálená",
            size: "Střední",
            eyes: "Tmavé",
            voice: "Syčení, skřek",
            keyDifference: "Srdcovitý obličejový závoj a světlejší tvář",
        },
    ] as const;

    const sources = [
        { label: "Wikipedia (CS) – Puštík obecný", url: "https://cs.wikipedia.org/wiki/Pu%C5%A1t%C3%ADk_obecn%C3%BD" },
        { label: "Wikipedia (EN) – Tawny owl", url: "https://en.wikipedia.org/wiki/Tawny_owl" },
        { label: "eBird – Tawny Owl (tawowl1)", url: "https://ebird.org/species/tawowl1" },
        { label: "eBird Media Catalog – Tawny Owl audio", url: "https://media.ebird.org/catalog?taxonCode=tawowl1&mediaType=audio" },
        { label: "Wikimedia Commons – StrixAlucoIUCN.svg (map source)", url: "https://commons.wikimedia.org/wiki/File:StrixAlucoIUCN.svg" },
        { label: "IUCN Red List – Strix aluco (2024)", url: "https://www.iucnredlist.org/species/22725469/264546097" },
        { label: "Lesy ČR – program Vracíme sovy lesu", url: "https://lesycr.cz/zapojte-se-do-programu-vracime-sovy-lesu/" },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Puštík obecný"
                scientificName="Strix aluco"
                englishName="Tawny owl"
                lead="Nejčastější noční hlas českých lesů. Sova, kterou spíš uslyšíš než uvidíš."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je puštík výjimečný" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o puštíkovi obecném" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa světového areálu puštíka obecného (<em>Strix aluco</em>) ve vysokém rozlišení. Podklad je invertovaný a výskyt
                        je sjednocen projektovou zelenou.
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
                title="Slyšeli jste puštíka obecného?"
                description="Pošlete pozorování a pomozte doplnit aktuální mapu výskytu v české krajině."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20pustika%20obecneho"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Informace vycházejí z veřejně dostupných ornitologických podkladů pro druh <em>Strix aluco</em>, z IUCN a z databáze
                        eBird/Macaulay Library.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
