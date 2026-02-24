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

import timeline from "@/assets/kalous-usaty/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/kalous-usaty"),
    title: "Kalous ušatý (Asio otus)",
    description: "Středně velká štíhlá sova s výraznými pernatými „oušky“. Jak kalouse ušatého poznat, slyšet a kde ho v ČR hledat.",
    openGraph: {
        title: "Kalous ušatý (Asio otus) | České sovy",
        description: "Středně velká štíhlá sova s výraznými pernatými „oušky“. Jak kalouse ušatého poznat, slyšet a kde ho v ČR hledat.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/kalous-usaty/images/kalous-usaty-main.jpg",
                alt: "Kalous ušatý (Asio otus)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Kalous ušatý je jedna z nejrozšířenějších sov severní polokoule. Profil shrnuje určovací znaky, hlas, ekologii, hnízdění i aktuální stav druhu v ČR a globálně.",
    keywords: ["kalous ušatý", "asio otus", "long-eared owl", "sova", "druhy sov", "hlas sov", "hnízdění sov"],
    twitter: {
        card: "summary_large_image",
        title: "Kalous ušatý (Asio otus) | České sovy",
        description: "Středně velká štíhlá sova s výraznými pernatými „oušky“. Jak kalouse ušatého poznat, slyšet a kde ho v ČR hledat.",
        images: ["https://www.ceskesovy.cz/druhy/kalous-usaty/images/kalous-usaty-main.jpg"],
    },
};

export default function KalousUsatyPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "samec 220–305 g, samice 260–435 g" },
        { label: "Rozpětí křídel", value: "86–102 cm (v ČR často 90–100 cm)" },
        { label: "Délka těla", value: "31–40 cm (v ČR často 35–40 cm)" },
        { label: "Dožití", value: "ve volné přírodě obvykle nízké, rekordy výrazně vyšší" },
        { label: "Hnízdění", value: "březen–červen" },
        { label: "Počet vajec", value: "nejčastěji 3–5, rozsah běžně 3–7" },
        { label: "Potrava", value: "převážně drobní hlodavci, hlavně hraboši" },
        { label: "Rozšíření v ČR", value: "celoročně široce rozšířený, odhadem 4 000–7 000 párů" },
        { label: "Ochrana", value: "IUCN: málo dotčený (LC), trend globálně klesající" },
        { label: "Hlas", value: "samec tlumené opakované „hú“, mláďata pískavé žadonění" },
    ] as const;

    const heroGalleryImages = [
        { src: "/druhy/kalous-usaty/images/kalous-usaty-main.jpg", alt: "Kalous ušatý na větvi", loading: "eager", priority: true },
        { src: "/druhy/kalous-usaty/images/kalous-usaty-portret.jpg", alt: "Portrét kalouse ušatého" },
        { src: "/druhy/kalous-usaty/images/kalous-usaty-na-vetvi.jpg", alt: "Kalous ušatý v přirozeném prostředí" },
        { src: "/druhy/kalous-usaty/images/kalous-usaty-detail.jpg", alt: "Detail hlavy kalouse ušatého" },
        { src: "/druhy/kalous-usaty/images/kalous-usaty-v-letu.jpg", alt: "Kalous ušatý při letu" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/kalous-usaty/images/map.webp", alt: "Mapa výskytu kalouse ušatého" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Kalous ušatý",
        alternateName: ["Asio otus", "Long-eared owl"],
        description: "Středně velká sova okrajů lesů a otevřené krajiny, specialista na drobné hlodavce.",
        url: "https://www.ceskesovy.cz/druhy/kalous-usaty",
        sameAs: [
            "https://cs.wikipedia.org/wiki/Kalous_u%C5%A1at%C3%BD",
            "https://en.wikipedia.org/wiki/Long-eared_owl",
            "https://ebird.org/species/loeowl",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas kalouse ušatého – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/kalous-usaty/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas kalouse ušatého – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/kalous-usaty/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Sova s „oušky“",
            description: <>Typická štíhlá silueta a dlouhé pernaté štětičky na hlavě z něj dělají jednu z nejsnáze rozpoznatelných sov.</>,
        },
        {
            title: "Specialista na hraboše",
            description: <>Ve většině oblastí tvoří drobní hlodavci dominantní složku potravy, často naprosto převažující.</>,
        },
        {
            title: "Zimní společná nocoviště",
            description: <>Mimo hnízdění se často sdružuje do skupin, které přes den odpočívají v hustých jehličnanech.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak kalouse poznat v terénu",
            paragraphs: [
                <>
                    Kalous ušatý je <strong className="font-semibold text-base-content">středně velká, štíhlá sova</strong> s dlouhými křídly a
                    výrazným „X“ v obličejovém závoji. Oči jsou žlutooranžové až oranžové.
                </>,
                <>V klidu drží tělo vzpřímeně a díky kresbě dobře splývá s kmeny stromů. Při vyrušení se „natáhne“ a přitiskne ouška k hlavě.</>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    Obývá velkou část severní polokoule. Nejčastěji vyhledává <span className="font-semibold text-base-content">okraje lesů</span>a
                    mozaiku otevřené krajiny s nízkou vegetací, kde loví.
                </>,
                <>
                    Pro denní odpočinek potřebuje kryt v hustších skupinách stromů, často jehličnatých. V zimě bývá blíže sídlům a tvoří společná
                    nocoviště.
                </>,
                <>V ČR patří k nejběžnějším sovám, i když lokálně může trpět ztrátou vhodného prostředí a kolizemi v dopravě.</>,
            ],
            cta: {
                href: "#mapa-vyskytu",
                label: "Přejít na mapu výskytu",
            },
        },
        {
            title: "Hnízdění",
            paragraphs: [
                <>Nejčastěji využívá stará hnízda krkavcovitých ptáků (vran, havranů, strak), vlastní hnízdo zpravidla nestaví.</>,
                <>
                    Samice klade obvykle <span className="font-semibold text-primary/90">3–7 vajec</span>, inkubace trvá přibližně 27–28 dní a samec
                    během ní nosí potravu.
                </>,
                <>Mláďata opouštějí hnízdo brzy po vylíhnutí jako „větvení“ a plně vzletná bývají kolem pátého týdne.</>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>Potravu tvoří hlavně drobní savci, zejména hraboši; v některých regionech tvoří hlodavci drtivou většinu jídelníčku.</>,
                <>Doplňkově loví menší ptáky a příležitostně další drobnou kořist podle sezony a dostupnosti.</>,
                <>Loví převážně nízkým tichým letem nad otevřenými plochami a kořist vyhledává i sluchem.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>Globálně je druh veden jako málo dotčený (IUCN LC), ale celkový trend populace je v současném hodnocení klesající.</>,
                <>
                    Na lokální úrovni hraje roli úbytek vhodných biotopů, tlak intenzivního hospodaření a také
                    <span className="font-semibold text-primary/90"> kolize s dopravou</span>.
                </>,
                <>Pro stabilitu populací je důležité zachovat pestrou krajinu s dostatkem lovišť i klidných denních úkrytů.</>,
            ],
        },
    ] as const;

    const audioIntro = [
        <>Typický hlas samce je krátké, tlumené a pravidelně opakované „hú“, slyšitelné hlavně v toku.</>,
        <>
            Nahrávky níže pocházejí z databáze <span className="font-semibold text-primary/90">eBird / Macaulay Library</span>.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Hlas kalouse – ukázka 1",
            src: "/druhy/kalous-usaty/audio/zvuk1.mp3",
            sourceName: "eBird / Macaulay Library (ML59860611)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=loeowl&mediaType=audio",
        },
        {
            title: "Hlas kalouse – ukázka 2",
            src: "/druhy/kalous-usaty/audio/zvuk2.mp3",
            sourceName: "eBird / Macaulay Library (ML215162271)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=loeowl&mediaType=audio",
        },
    ] as const;

    const triviaItems = [
        <>Kalous ušatý často hnízdí v již hotových hnízdech jiných ptáků, hlavně krkavcovitých.</>,
        <>Mimo hnízdění bývá společenský a na zimních nocovištích může odpočívat více jedinců pohromadě.</>,
        <>Díky měkkému peří letí velmi tiše a na lovišti působí téměř neslyšně.</>,
        <>V Česku patří po puštíkovi obecném mezi nejhojnější sovy.</>,
    ] as const;

    const comparisonRows = [
        {
            species: "Kalous ušatý",
            size: "Střední",
            eyes: "Oranžové",
            voice: "Tlumené opakované „hú“",
            keyDifference: "Štíhlá postava, dlouhá ouška, zimní skupinová nocoviště",
            emphasized: true,
        },
        {
            species: "Kalous pustovka",
            size: "Střední",
            eyes: "Žluté",
            voice: "Krátké štěkavé a syčivé zvuky",
            keyDifference: "Kratší ouška a častější lov v otevřeném bezlesí",
        },
        {
            species: "Puštík obecný",
            size: "Střední až větší",
            eyes: "Tmavé",
            voice: "Hlubší houkání",
            keyDifference: "Bez oušek, výrazně kulatější hlava",
        },
    ] as const;

    const sources = [
        { label: "Wikipedia (CS) – Kalous ušatý", url: "https://cs.wikipedia.org/wiki/Kalous_u%C5%A1at%C3%BD" },
        { label: "Wikipedia (EN) – Long-eared owl", url: "https://en.wikipedia.org/wiki/Long-eared_owl" },
        { label: "eBird – Long-eared Owl (loeowl)", url: "https://ebird.org/species/loeowl" },
        { label: "eBird Media Catalog – Long-eared Owl audio", url: "https://media.ebird.org/catalog?taxonCode=loeowl&mediaType=audio" },
        { label: "Wikimedia Commons – Category: Asio otus", url: "https://commons.wikimedia.org/wiki/Category:Asio_otus" },
        {
            label: "Wikimedia Commons – Asio otus distribution map.png (map source)",
            url: "https://commons.wikimedia.org/wiki/File:Asio_otus_distribution_map.png",
        },
        { label: "IUCN Red List – Asio otus", url: "https://www.iucnredlist.org/details/22689507/0" },
        { label: "AOPK ČR – karta druhu Asio otus", url: "https://portal.nature.cz/w/druh-1030" },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Kalous ušatý"
                scientificName="Asio otus"
                englishName="Long-eared owl"
                lead="Štíhlá noční sova otevřené krajiny s výraznými „oušky“ a tlumeným, pravidelným houkáním."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je kalous výjimečný" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o kalousovi ušatém" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa světového areálu kalouse ušatého (<em>Asio otus</em>). Podklad je invertovaný a barvy výskytu vycházejí z
                        mapových kategorií zdrojového podkladu.
                    </>
                }
                images={mapGalleryImages}
            />

            <section className="-mt-4 rounded-xl border border-base-300 bg-base-100/70 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/80">Legenda mapy</h3>
                <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#1ECF64]" aria-hidden="true" />
                        <span>zelená – stálý / hnízdní výskyt</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#4DA3FF]" aria-hidden="true" />
                        <span>modrá – zimní (nehnízdní) výskyt</span>
                    </li>
                </ul>
            </section>

            <SpeciesComparisonTable title="Jak ho nepoplést" rows={comparisonRows} />
            <SpeciesTimelineCard title="Kdy mám šanci ho v ČR zaznamenat?" items={timeline} />

            <ObservationCtaCard
                title="Pozorovali jste kalouse ušatého?"
                description="Pošlete záznam a pomozte zpřesňovat přehled výskytu této běžné, ale často skryté sovy v české krajině."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20kalouse%20usateho"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Informace vycházejí z veřejně dostupných ornitologických podkladů pro druh <em>Asio otus</em>, z IUCN a z databáze
                        eBird/Macaulay Library.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
