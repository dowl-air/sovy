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

import timeline from "@/assets/sycek-obecny/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/sycek-obecny"),
    title: "Sýček obecný (Athene noctua)",
    description: "Malá sova kulturní krajiny, která dříve bývala běžná. Jak sýčka poznat, kde ho hledat a proč v ČR výrazně ubýval.",
    openGraph: {
        title: "Sýček obecný (Athene noctua) | České sovy",
        description: "Malá sova kulturní krajiny, která dříve bývala běžná. Jak sýčka poznat, kde ho hledat a proč v ČR výrazně ubýval.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/sycek-obecny/images/sycek_main.jpg",
                alt: "Sýček obecný (Athene noctua)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Sýček obecný je drobná, převážně stálá sova otevřené zemědělské krajiny. Profil shrnuje určovací znaky, hlas, ekologii, hnízdění, ohrožení v české krajině i praktické tipy pro pozorování.",
    keywords: ["sýček obecný", "athene noctua", "little owl", "sova", "druhy sov", "hlas sov", "pták roku 2018", "ochrana sov"],
    twitter: {
        card: "summary_large_image",
        title: "Sýček obecný (Athene noctua) | České sovy",
        description: "Malá sova kulturní krajiny, která dříve bývala běžná. Jak sýčka poznat, kde ho hledat a proč v ČR výrazně ubýval.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/sycek-obecny/images/sycek_main.jpg",
                alt: "Sýček obecný (Athene noctua)",
            },
        ],
    },
};

export default function SycekObecnyPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "obvykle 160–250 g" },
        { label: "Rozpětí křídel", value: "50–57 cm" },
        { label: "Délka těla", value: "19–25 cm" },
        { label: "Dožití", value: "až 15–16 let (často výrazně méně)" },
        { label: "Hnízdění", value: "duben–červenec" },
        { label: "Počet vajec", value: "nejčastěji 4–5 (obvykle 3–6)" },
        { label: "Potrava", value: "hmyz, žížaly, drobní savci a další drobní obratlovci" },
        { label: "Rozšíření v ČR", value: "silně ostrůvkovité, lokálně na nízkých stavech" },
        { label: "Ochrana", value: "ČR: kriticky ohrožený v červeném seznamu, zvláště chráněný" },
        { label: "Hlas", value: "tokové „kuík“ (samec), varovné výbušné „či-či-či“" },
    ] as const;

    const heroGalleryImages = [
        { src: "/druhy/sycek-obecny/images/sycek_main.jpg", alt: "Sýček obecný na vyvýšeném posedu", loading: "eager", priority: true },
        { src: "/druhy/sycek-obecny/images/sycek_portrait.jpg", alt: "Portrét sýčka obecného" },
        { src: "/druhy/sycek-obecny/images/sycek_let.jpg", alt: "Sýček obecný v letu" },
        { src: "/druhy/sycek-obecny/images/sycek_par.jpg", alt: "Pár sýčků obecných" },
        { src: "/druhy/sycek-obecny/images/sycek_mlade.jpg", alt: "Mladý sýček obecný" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/sycek-obecny/images/map.webp", alt: "Mapa výskytu sýčka obecného" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Sýček obecný",
        alternateName: ["Athene noctua", "Little owl"],
        description: "Drobná sova otevřené kulturní krajiny. V ČR výrazně ubývala a vyžaduje aktivní ochranu biotopů.",
        url: "https://www.ceskesovy.cz/druhy/sycek-obecny",
        sameAs: [
            "https://cs.wikipedia.org/wiki/S%C3%BD%C4%8Dek_obecn%C3%BD",
            "https://en.wikipedia.org/wiki/Little_owl",
            "https://ebird.org/species/litowl1",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas sýčka obecného – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/sycek-obecny/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas sýčka obecného – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/sycek-obecny/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Sova blízká člověku",
            description: <>Často žije u stodol, statků, sadů a pastvin. Ráda sedá na komíny, sloupky a střechy, odkud aktivně loví.</>,
        },
        {
            title: "Výrazný noční hlas",
            description: (
                <>
                    V době toku se samec ozývá hlubším <span className="whitespace-nowrap">„kuík… kuík…“</span>. Hlas je dobrý orientační znak i bez
                    vizuálního kontaktu.
                </>
            ),
        },
        {
            title: "Druh zemědělské krajiny v problémech",
            description: (
                <>V Česku došlo v posledních dekádách k prudkému poklesu. Klíčová je ochrana hnízdišť, pastvin a bezpečných loveckých ploch.</>
            ),
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak poznat sýčka v terénu",
            paragraphs: [
                <>
                    Sýček obecný je <strong className="font-semibold text-base-content">malá, robustní sova</strong> se zavalitým tělem, krátkým
                    ocasem, žlutýma očima a výrazným bílým „obočím“, které mu dává přísný výraz.
                </>,
                <>
                    Typicky sedává na otevřených vyvýšených místech a aktivní bývá i přes den. Při rozrušení často „podřepává“ a při pozorování okolí
                    výrazně otáčí hlavou.
                </>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    Areál sahá přes velkou část Evropy, severní Afriky a Asie. V ČR dnes přežívá hlavně v
                    <span className="font-semibold text-primary/90"> ostrůvkovitých populacích</span> teplejších nížinných oblastí.
                </>,
                <>
                    Potřebuje pestrou otevřenou krajinu se <strong className="font-semibold text-base-content">stabilně nízkou vegetací</strong>{" "}
                    (pastviny, kosené louky), vhodné dutiny a dostatek posedů.
                </>,
                <>Důležité jsou také staré sady, aleje, hospodářské budovy a mozaika biotopů, kde může lovit bez překážek.</>,
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
                    Hnízdí v dutinách stromů, budovách i budkách. Vlastní hnízdo nestaví; samice klade obvykle
                    <span className="font-semibold text-primary/90"> 4–5 bílých vajec</span>.
                </>,
                <>
                    Inkubace trvá přibližně <strong className="font-semibold text-base-content">24–29 dní</strong>, převážně ji zajišťuje samice,
                    zatímco samec nosí potravu.
                </>,
                <>Mláďata opouštějí hnízdo zhruba po 30–35 dnech a ještě několik týdnů zůstávají v péči rodičů.</>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>
                    Potravní spektrum je široké: brouci, cvrčci, škvory, žížaly, drobní savci, plazi i menší ptáci. Ve střední Evropě bývají biomasově
                    důležití <strong className="font-semibold text-base-content">malí hlodavci</strong>.
                </>,
                <>Loví z posedů i přímo na zemi. Nejaktivnější je za šera a v noci, v období krmení mláďat ale pravidelně loví i přes den.</>,
                <>Úspěch hnízdění silně souvisí s dostupností kořisti a strukturou okolní vegetace.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>Celosvětově je druh veden jako málo dotčený (IUCN LC), ale ve střední Evropě místy výrazně ubyl.</>,
                <>
                    Hlavní hrozby: <span className="font-semibold text-base-content">zjednodušování krajiny</span>, úbytek pastvin a dutin, technické
                    pasti, kolize s dopravou a predace.
                </>,
                <>
                    V ČR je sýček dlouhodobě <span className="font-semibold text-primary/90">kriticky ohrožený</span>; klíčové je cílené managementové
                    hospodaření a bezpečné hnízdní možnosti.
                </>,
            ],
        },
    ] as const;

    const audioIntro = [
        <>Sýček má bohatý hlasový repertoár. V terénu nejčastěji uslyšíš tokové volání samce, které bývá rytmické a nese se do větší vzdálenosti.</>,
        <>
            Nahrávky níže pocházejí z databáze <span className="font-semibold text-primary/90">eBird/Macaulay Library</span>.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Hlas sýčka – ukázka 1",
            src: "/druhy/sycek-obecny/audio/zvuk1.mp3",
            sourceName: "eBird / Macaulay Library (ML651213824)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=litowl1&mediaType=audio",
        },
        {
            title: "Hlas sýčka – ukázka 2",
            src: "/druhy/sycek-obecny/audio/zvuk2.mp3",
            sourceName: "eBird / Macaulay Library (ML651171621)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=litowl1&mediaType=audio",
        },
    ] as const;

    const triviaItems = [
        <>Ve 30. a 40. letech 20. století šlo v ČR pravděpodobně o nejběžnější sovu; později následoval prudký pokles.</>,
        <>Sýček je výrazně teritoriální a páry často setrvávají dlouhodobě na stejném území, pokud mají dostupné hnízdiště i potravu.</>,
        <>
            Patří k druhům, u nichž <span className="font-semibold text-base-content">krátkostébelná loviště</span> v okolí hnízda rozhodují o
            přežívání mláďat.
        </>,
        <>V Česku byl sýček zvolen Ptákem roku 2018, aby upozornil na stav ptáků zemědělské krajiny.</>,
    ] as const;

    const comparisonRows = [
        {
            species: "Sýček obecný",
            size: "Malý až střední",
            eyes: "Žluté",
            voice: "„Kuík“, varovné „či-či-či“",
            keyDifference: "Robustní postava, výrazné bílé obočí, častý výskyt u sídel",
            emphasized: true,
        },
        {
            species: "Výreček malý",
            size: "Malý",
            eyes: "Žluté",
            voice: "Monotónní pískání „ťu…ťu…“",
            keyDifference: "Nápadná pernatá „ouška“, silně tažný",
        },
        {
            species: "Puštík obecný",
            size: "Střední až velký",
            eyes: "Tmavé",
            voice: "Hluboké houkání",
            keyDifference: "Výrazně větší lesní sova s tmavými očima",
        },
    ] as const;

    const sources = [
        { label: "Wikipedia (CS) – Sýček obecný", url: "https://cs.wikipedia.org/wiki/S%C3%BD%C4%8Dek_obecn%C3%BD" },
        { label: "Wikipedia (EN) – Little owl", url: "https://en.wikipedia.org/wiki/Little_owl" },
        { label: "eBird – Little Owl (litowl1)", url: "https://ebird.org/species/litowl1" },
        { label: "eBird Media Catalog – Little Owl audio", url: "https://media.ebird.org/catalog?taxonCode=litowl1&mediaType=audio" },
        { label: "BirdLife/ČSO – Pták roku 2018: sýček obecný", url: "https://www.birdlife.cz/ptak-roku-2018-sycek-obecny" },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Sýček obecný"
                scientificName="Athene noctua"
                englishName="Little owl"
                lead="Dříve běžná sova českého venkova. Dnes symbol toho, jak rychle se může změnit krajina i osud druhu."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je sýček výjimečný" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o sýčkovi obecném" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa světového areálu sýčka obecného (<em>Athene noctua</em>) v plném rozlišení. Barvy byly invertovány a výskyt je
                        sjednocen stejnou zelenou jako na stránce výra velkého.
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
                title="Máte záznam sýčka obecného?"
                description="Pošlete pozorování a pomozte sledovat vývoj populací této kriticky ohrožené sovy v ČR."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20sycka%20obecneho"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Text vychází z veřejně dostupných ornitologických zdrojů k druhu <em>Athene noctua</em> a z databáze eBird/Macaulay Library.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
