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

import timeline from "@/assets/syc-rousny/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/syc-rousny"),
    title: "Sýc rousný (Aegolius funereus)",
    description: "Malá lesní sova severu a hor. Jak sýce rousného poznat, kdy se ozývá a kde máš v ČR největší šanci na záznam.",
    openGraph: {
        title: "Sýc rousný (Aegolius funereus) | České sovy",
        description: "Malá lesní sova severu a hor. Jak sýce rousného poznat, kdy se ozývá a kde máš v ČR největší šanci na záznam.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/syc-rousny/images/syc-rousny-main.webp",
                alt: "Sýc rousný (Aegolius funereus)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Sýc rousný je menší lesní sova vázaná na starší jehličnaté a smíšené porosty s dutinami. Profil shrnuje určovací znaky, hlas, biologii, hnízdění i praktické tipy pro etické noční pozorování.",
    keywords: ["sýc rousný", "aegolius funereus", "boreal owl", "tengmalm's owl", "sova", "druhy sov", "hlas sov", "lesní sova"],
    twitter: {
        card: "summary_large_image",
        title: "Sýc rousný (Aegolius funereus) | České sovy",
        description: "Malá lesní sova severu a hor. Jak sýce rousného poznat, kdy se ozývá a kde máš v ČR největší šanci na záznam.",
        images: ["https://www.ceskesovy.cz/druhy/syc-rousny/images/syc-rousny-main.webp"],
    },
};

export default function SycRousnyPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "obvykle 95–210 g" },
        { label: "Rozpětí křídel", value: "54–62 cm" },
        { label: "Délka těla", value: "22–27 cm" },
        { label: "Dožití", value: "v přírodě běžně nižší, maximum přes 15 let" },
        { label: "Hnízdění", value: "březen–červen" },
        { label: "Počet vajec", value: "nejčastěji 3–7" },
        { label: "Potrava", value: "hlavně drobní hlodavci, doplňkově menší ptáci" },
        { label: "Rozšíření v ČR", value: "hlavně horské a podhorské lesy" },
        { label: "Ochrana", value: "zvláště chráněný druh (ČR), v Evropě místy citlivý na hospodaření v lese" },
        { label: "Hlas", value: "samčí rytmické pískání, nejvýrazněji v předjaří" },
    ] as const;

    const heroGalleryImages = [
        { src: "/druhy/syc-rousny/images/syc-rousny-main.webp", alt: "Sýc rousný na větvi", loading: "eager", priority: true },
        { src: "/druhy/syc-rousny/images/syc-rousny-1.webp", alt: "Sýc rousný v zimním lese" },
        { src: "/druhy/syc-rousny/images/syc-rousny-2.webp", alt: "Detail sýce rousného" },
        { src: "/druhy/syc-rousny/images/syc-rousny-3.webp", alt: "Sýc rousný při noční aktivitě" },
        { src: "/druhy/syc-rousny/images/syc-rousny-4.webp", alt: "Sýc rousný v přirozeném prostředí" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/syc-rousny/images/map.webp", alt: "Mapa výskytu sýce rousného" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Sýc rousný",
        alternateName: ["Aegolius funereus", "Boreal Owl", "Tengmalm's Owl"],
        description: "Menší lesní sova se silnou hlasovou aktivitou v předjaří, v ČR vázaná hlavně na horské a podhorské lesy.",
        url: "https://www.ceskesovy.cz/druhy/syc-rousny",
        sameAs: [
            "https://cs.wikipedia.org/wiki/S%C3%BDc_rousn%C3%BD",
            "https://en.wikipedia.org/wiki/Boreal_owl",
            "https://ebird.org/species/borowl",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas sýce rousného – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/syc-rousny/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas sýce rousného – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/syc-rousny/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Noční hlas horských lesů",
            description: <>V době toku se samec ozývá pravidelným pískáním, které je v tiché noci překvapivě daleko slyšet.</>,
        },
        {
            title: "Specialista na dutiny",
            description: <>Často hnízdí ve starých dutinách po datlech. Bez starších stromů a doupných možností v krajině dlouhodobě nepřežije.</>,
        },
        {
            title: "Nenápadná, ale přítomná sova",
            description: <>Přes den bývá skrytý, v noci aktivně loví. Nejlepší šance je od zimy do jara při cíleném, nerušivém poslechu.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak poznat sýce rousného v terénu",
            paragraphs: [
                <>
                    Sýc rousný je <strong className="font-semibold text-base-content">menší kulatohlavá sova bez pernatých „uší“</strong>. Má nápadně
                    světlý obličejový disk, žluté oči a jemně skvrnitý hnědavý hřbet.
                </>,
                <>
                    Ve srovnání s puštíkem působí kompaktněji a „dětským“ dojmem hlavy. V terénu bývá nejspolehlivějším určovacím znakem
                    <span className="font-semibold text-primary/90"> hlas samce</span>, ne vizuální kontakt.
                </>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    Celosvětově obývá rozsáhlý pás severní Eurasie a Severní Ameriky. V Evropě je navázaný hlavně na jehličnaté a smíšené lesy od
                    podhůří po horské polohy.
                </>,
                <>
                    V České republice se vyskytuje především v
                    <span className="font-semibold text-base-content"> horských a podhorských lesních komplexech</span>, kde je dostatek dutin,
                    klidových zón a drobných hlodavců.
                </>,
                <>Mimo hnízdní období se může objevit i níže, ale reprodukčně je nejúspěšnější ve stabilních lesních biotopech.</>,
            ],
            cta: {
                href: "#mapa-vyskytu",
                label: "Přejít na mapu výskytu",
            },
        },
        {
            title: "Hnízdění",
            paragraphs: [
                <>Tok začíná už v zimě. Samci obsazují teritorium a opakovaným voláním lákají samici k vhodné dutině.</>,
                <>
                    Nejčastěji využívá staré doupné dutiny po datlech, případně budky. Snůška bývá obvykle
                    <span className="font-semibold text-primary/90"> 3–7 vajec</span>, podle potravní nabídky může kolísat.
                </>,
                <>O mláďata pečuje pár několik týdnů po opuštění dutiny. Úspěch hnízdění silně závisí na gradaci hrabošů a dalších drobných savců.</>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>
                    Jádro potravy tvoří <strong className="font-semibold text-base-content">drobní hlodavci</strong> (hraboši, myšice), které loví z
                    posedů i aktivním nízkým letem mezi stromy.
                </>,
                <>
                    Při nižší dostupnosti savčí kořisti přidává menší ptáky. V horských zimách může být potravně velmi závislý na aktuálním stavu
                    populace hlodavců.
                </>,
                <>Jeho lovecká aktivita vrcholí po setmění a v druhé polovině noci, kdy je v lese nejmenší rušení.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>
                    Lokálně mu škodí <span className="font-semibold text-base-content">úbytek starších porostů a doupných stromů</span>, intenzivní
                    zásahy v období hnízdění a fragmentace lesních celků.
                </>,
                <>
                    V ČR je druh zvláště chráněný. Praktická ochrana stojí na ponechávání doupných stromů, vhodném umístění budek a omezení rušení v
                    citlivých lokalitách.
                </>,
                <>
                    Pro dlouhodobé přežití je klíčová pestrá lesní struktura a stabilní potravní základna,
                    <span className="font-semibold text-primary/90"> ne jen jednorázové zásahy</span>.
                </>,
            ],
        },
    ] as const;

    const audioIntro = [
        <>
            Hlas sýce rousného je v terénu nejspolehlivější určovací znak. Samec volá rytmicky, často dlouhé minuty z jednoho místa v korunách stromů.
        </>
    ] as const;

    const audioSamples = [
        {
            title: "Hlas sýce rousného – ukázka 1",
            src: "/druhy/syc-rousny/audio/zvuk1.mp3",
            sourceName: "eBird / Macaulay Library (ML429788251)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=borowl&mediaType=audio",
        },
        {
            title: "Hlas sýce rousného – ukázka 2",
            src: "/druhy/syc-rousny/audio/zvuk2.mp3",
            sourceName: "eBird / Macaulay Library (ML386916601)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=borowl&mediaType=audio",
        },
    ] as const;

    const triviaItems = [
        <>V češtině „sýc“, v angličtině často „Boreal Owl“ nebo „Tengmalm's Owl“ – jde o tentýž druh.</>,
        <>Samci bývají výrazně hlasově aktivní hlavně v zimě a časném jaru, kdy obsazují teritoria.</>,
        <>
            Je to typický příklad druhu, kde rozhoduje kvalita <span className="font-semibold text-base-content">lesního mikrohabitat</span>: dutiny,
            klid a dostatek kořisti.
        </>,
        <>Při monitoringu je zásadní etika: nepoužívat nadměrný playback a nevyvolávat zbytečný stres v hnízdní době.</>,
    ] as const;

    const comparisonRows = [
        {
            species: "Sýc rousný",
            size: "Malý až střední",
            eyes: "Žluté",
            voice: "Rytmické pískání samce",
            keyDifference: "Kulatá hlava bez „uší“, lesní druh vázaný na dutiny",
            emphasized: true,
        },
        {
            species: "Sýček obecný",
            size: "Malý",
            eyes: "Žluté",
            voice: "„Kuík“, pestřejší hlasové projevy",
            keyDifference: "Častěji kulturní krajina a blízkost sídel",
        },
        {
            species: "Puštík obecný",
            size: "Střední až velký",
            eyes: "Tmavé",
            voice: "Hlubší, táhlejší houkání",
            keyDifference: "Výrazně robustnější silueta a jiný obličejový disk",
        },
    ] as const;

    const sources = [
        { label: "Wikipedia (CS) – Sýc rousný", url: "https://cs.wikipedia.org/wiki/S%C3%BDc_rousn%C3%BD" },
        { label: "Wikipedia (EN) – Boreal owl", url: "https://en.wikipedia.org/wiki/Boreal_owl" },
        { label: "eBird – Boreal Owl (borowl)", url: "https://ebird.org/species/borowl" },
        { label: "eBird Media Catalog – Boreal Owl audio", url: "https://media.ebird.org/catalog?taxonCode=borowl&mediaType=audio" },
        { label: "Wikimedia Commons – AegoliusFunereusIUCN.svg", url: "https://commons.wikimedia.org/wiki/File:AegoliusFunereusIUCN.svg" },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Sýc rousný"
                scientificName="Aegolius funereus"
                englishName="Boreal owl"
                lead="Tichý noční lovec horských lesů. Víc než očima ho často najdeš ušima."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je sýc rousný výjimečný" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o sýci rousném" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa světového výskytu sýce rousného (<em>Aegolius funereus</em>) ve vysokém rozlišení. Podklad je invertovaný a
                        výskyt je sjednocen zelenou barvou projektu.
                    </>
                }
                images={mapGalleryImages}
            />

            <SpeciesComparisonTable title="Jak ho nepoplést" rows={comparisonRows} />
            <SpeciesTimelineCard title="Kdy mám šanci ho v ČR zaznamenat?" items={timeline} />

            <ObservationCtaCard
                title="Slyšeli jste sýce rousného?"
                description="Pošlete pozorování a pomozte upřesnit aktuální výskyt tohoto lesního druhu v ČR."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20syce%20rousneho"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Informace vycházejí z veřejně dostupných ornitologických podkladů pro druh <em>Aegolius funereus</em> a z databáze
                        eBird/Macaulay Library.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
