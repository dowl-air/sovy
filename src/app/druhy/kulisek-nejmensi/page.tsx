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

import timeline from "@/assets/kulisek-nejmensi/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/kulisek-nejmensi"),
    title: "Kulíšek nejmenší (Glaucidium passerinum)",
    description: "Nejmenší evropská sova. Jak kulíška nejmenšího poznat, kdy se ozývá a kde ho v ČR hledat.",
    openGraph: {
        title: "Kulíšek nejmenší (Glaucidium passerinum) | České sovy",
        description: "Nejmenší evropská sova. Jak kulíška nejmenšího poznat, kdy se ozývá a kde ho v ČR hledat.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/kulisek-nejmensi/images/kulisek-nejmensi-main.webp",
                alt: "Kulíšek nejmenší (Glaucidium passerinum)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Kulíšek nejmenší je nejmenší sova Evropy. Profil shrnuje určovací znaky, hlas, hnízdění, potravu a současný stav druhu v České republice i v Evropě.",
    keywords: ["kulíšek nejmenší", "glaucidium passerinum", "eurasian pygmy owl", "sova", "druhy sov", "hlas sov", "hnízdění sov"],
    twitter: {
        card: "summary_large_image",
        title: "Kulíšek nejmenší (Glaucidium passerinum) | České sovy",
        description: "Nejmenší evropská sova. Jak kulíška nejmenšího poznat, kdy se ozývá a kde ho v ČR hledat.",
        images: ["https://www.ceskesovy.cz/druhy/kulisek-nejmensi/images/kulisek-nejmensi-main.webp"],
    },
};

export default function KulisekNejmensiPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "obvykle 47–83 g (samice bývají těžší)" },
        { label: "Rozpětí křídel", value: "34–45 cm" },
        { label: "Délka těla", value: "15–19 cm" },
        { label: "Dožití", value: "v přírodě běžně několik let" },
        { label: "Hnízdění", value: "duben–červen" },
        { label: "Počet vajec", value: "3–8 (často 4–7)" },
        { label: "Potrava", value: "drobní savci a ptáci, doplňkově hmyz" },
        { label: "Rozšíření v ČR", value: "hlavně jihozápadní Čechy, Beskydy a Javorníky" },
        { label: "Ochrana", value: "IUCN: málo dotčený (LC), v ČR silně ohrožený" },
        { label: "Hlas", value: "vysoké monotónní pískání, v toku i krátký trylek" },
    ] as const;

    const heroGalleryImages = [
        {
            src: "/druhy/kulisek-nejmensi/images/kulisek-nejmensi-main.webp",
            alt: "Kulíšek nejmenší v lesním prostředí",
            loading: "eager",
            priority: true,
        },
        { src: "/druhy/kulisek-nejmensi/images/kulisek-nejmensi-portret.webp", alt: "Portrét kulíška nejmenšího" },
        { src: "/druhy/kulisek-nejmensi/images/kulisek-nejmensi-na-vetvi.webp", alt: "Kulíšek nejmenší na větvi" },
        { src: "/druhy/kulisek-nejmensi/images/kulisek-nejmensi-detail.webp", alt: "Kulíšek nejmenší v detailu" },
        { src: "/druhy/kulisek-nejmensi/images/kulisek-nejmensi-v-lese.webp", alt: "Kulíšek nejmenší ve smrkovém lese" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/kulisek-nejmensi/images/map.webp", alt: "Mapa výskytu kulíška nejmenšího" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Kulíšek nejmenší",
        alternateName: ["Glaucidium passerinum", "Eurasian pygmy owl"],
        description: "Nejmenší sova Evropy, vázaná na starší lesní porosty jehličnatých i smíšených lesů.",
        url: "https://www.ceskesovy.cz/druhy/kulisek-nejmensi",
        sameAs: [
            "https://cs.wikipedia.org/wiki/Kul%C3%AD%C5%A1ek_nejmen%C5%A1%C3%AD",
            "https://en.wikipedia.org/wiki/Eurasian_pygmy_owl",
            "https://ebird.org/species/eupowl1",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas kulíška nejmenšího – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/kulisek-nejmensi/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas kulíška nejmenšího – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/kulisek-nejmensi/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Nejmenší evropská sova",
            description: <>Měří jen okolo 15–19 cm, ale loví překvapivě odvážně i kořist větší, než bys čekal podle velikosti.</>,
        },
        {
            title: "Denní aktivita v době hnízdění",
            description: <>Na rozdíl od řady jiných sov bývá v toku a při péči o mláďata aktivní i za denního světla.</>,
        },
        {
            title: "Vysoký pískavý hlas",
            description: <>Samec se ozývá monotónním, dobře slyšitelným pískáním, které je důležité pro vymezování teritoria.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak kulíška poznat v terénu",
            paragraphs: [
                <>
                    Kulíšek nejmenší je <strong className="font-semibold text-base-content">drobná sova s kulatou hlavou</strong>, žlutýma očima a bez
                    pernatých oušek. Hřbet má tmavě hnědý se světlým skvrněním, spodek světlý s podélným tmavým proužkováním.
                </>,
                <>
                    Silueta je kompaktní, ocas poměrně krátký. V korunách je nenápadný, ale při hlasové aktivitě se dá dobře lokalizovat podle
                    opakovaného pískání.
                </>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    V Evropě obývá hlavně boreální lesy severu a horské oblasti střední Evropy. Typické jsou
                    <span className="font-semibold text-base-content"> starší jehličnaté a smíšené lesní porosty</span> s dutinami po datlovitých
                    ptácích.
                </>,
                <>V ČR je rozšíření ostrůvkovité. Hlavní jádra jsou v jihozápadních Čechách a na Moravě zejména v Beskydech a Javorníkách.</>,
                <>V AOPK podkladech je uváděn jako druh citlivý na úbytek vhodných stanovišť a závislý na šetrném lesním hospodaření.</>,
            ],
            cta: {
                href: "#mapa-vyskytu",
                label: "Přejít na mapu výskytu",
            },
        },
        {
            title: "Hnízdění",
            paragraphs: [
                <>Hnízdí v dutinách, často ve starých otvorech po strakapoudech. Snůška bývá na konci dubna nebo začátkem května.</>,
                <>
                    Samice klade obvykle <span className="font-semibold text-primary/90">3–8 bílých vajec</span>, sedí přibližně 28 dní a samec jí
                    nosí potravu.
                </>,
                <>Mláďata opouštějí dutinu přibližně po měsíci a ještě několik týdnů zůstávají pod dohledem rodičů.</>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>V potravě převažují drobní savci (hlodavci a hmyzožravci) a menší ptáci, místy i hmyz.</>,
                <>Kulíšek loví z vyvýšených posedů a kořist dokáže ukládat do zásob, zejména v chladnější části roku.</>,
                <>Přestože je malý, má silné pařáty a zvládá ulovit i relativně velkou kořist.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>Globálně je veden jako málo dotčený (IUCN LC) a celkový populační trend je hodnocen jako stabilní.</>,
                <>
                    V české krajině jde o <span className="font-semibold text-primary/90">silně ohrožený druh</span> citlivý na úbytek starších lesů a
                    dutinových stromů.
                </>,
                <>Praktická ochrana stojí na zachování vhodných lesních struktur, klidu na hnízdištích a lokálně i na podpoře hnízdních budek.</>,
            ],
        },
    ] as const;

    const audioIntro = [
        <>Hlas kulíška je na sovu nezvykle vysoký: opakované pískání, které samec používá hlavně při obhajobě teritoria.</>,
        <>
            Nahrávky níže jsou z databáze <span className="font-semibold text-primary/90">eBird / Macaulay Library</span>.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Hlas kulíška – ukázka 1",
            src: "/druhy/kulisek-nejmensi/audio/zvuk1.mp3",
            sourceName: "eBird / Macaulay Library (ML59173671)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=eupowl1&mediaType=audio",
        },
        {
            title: "Hlas kulíška – ukázka 2",
            src: "/druhy/kulisek-nejmensi/audio/zvuk2.mp3",
            sourceName: "eBird / Macaulay Library (ML385722501)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=eupowl1&mediaType=audio",
        },
    ] as const;

    const triviaItems = [
        <>Kulíšek nejmenší je nejdrobnější sova Evropy, ale chová se jako plnohodnotný lesní predátor.</>,
        <>V době hnízdění je často slyšet i přes den, hlavně ráno a večer.</>,
        <>Dokáže vytvářet potravní zásoby, které využívá v období horší dostupnosti kořisti.</>,
        <>V ČR patří mezi zvláště chráněné druhy a jeho výskyt je důležitým ukazatelem kvality lesních biotopů.</>,
    ] as const;

    const comparisonRows = [
        {
            species: "Kulíšek nejmenší",
            size: "Velmi malý",
            eyes: "Žluté",
            voice: "Vysoké monotónní pískání",
            keyDifference: "Nejmenší evropská sova, aktivní i za dne",
            emphasized: true,
        },
        {
            species: "Sýček obecný",
            size: "Malý",
            eyes: "Žluté",
            voice: "„Kuík“ a varovné „či-či-či“",
            keyDifference: "Robustnější postava a častější vazba na kulturní krajinu",
        },
        {
            species: "Sýc rousný",
            size: "Malý až střední",
            eyes: "Žluté",
            voice: "Rytmické pískání v toku",
            keyDifference: "Větší hlava a výrazný obličejový disk",
        },
    ] as const;

    const sources = [
        { label: "Wikipedia (CS) – Kulíšek nejmenší", url: "https://cs.wikipedia.org/wiki/Kul%C3%AD%C5%A1ek_nejmen%C5%A1%C3%AD" },
        { label: "Wikipedia (EN) – Eurasian pygmy owl", url: "https://en.wikipedia.org/wiki/Eurasian_pygmy_owl" },
        { label: "eBird – Eurasian Pygmy-Owl (eupowl1)", url: "https://ebird.org/species/eupowl1" },
        { label: "eBird Media Catalog – Eurasian Pygmy-Owl audio", url: "https://media.ebird.org/catalog?taxonCode=eupowl1&mediaType=audio" },
        {
            label: "Wikimedia Commons – Chevêchette (114136663).jpeg",
            url: "https://commons.wikimedia.org/wiki/File:Chev%C3%AAchette_(114136663).jpeg",
        },
        {
            label: "Wikimedia Commons – GlaucidiumPasserinumIUCN.svg (map source)",
            url: "https://commons.wikimedia.org/wiki/File:GlaucidiumPasserinumIUCN.svg",
        },
        { label: "IUCN Red List – Glaucidium passerinum (2024)", url: "https://www.iucnredlist.org/species/22689194/264567511" },
        { label: "AOPK ČR – karta druhu Glaucidium passerinum", url: "https://portal.nature.cz/w/druh-1174" },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Kulíšek nejmenší"
                scientificName="Glaucidium passerinum"
                englishName="Eurasian pygmy owl"
                lead="Nejmenší evropská sova – nenápadný lesní lovec s překvapivě výrazným hlasem."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je kulíšek výjimečný" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o kulíškovi nejmenším" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa světového areálu kulíška nejmenšího (<em>Glaucidium passerinum</em>) ve vysokém rozlišení. Podklad je
                        invertovaný a výskyt je sjednocen projektovou zelenou.
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
                title="Slyšeli jste kulíška nejmenšího?"
                description="Pošlete pozorování a pomozte zpřesnit přehled výskytu této drobné lesní sovy v ČR."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20kuliska%20nejmensiho"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Informace vycházejí z veřejně dostupných ornitologických podkladů pro druh <em>Glaucidium passerinum</em>, z IUCN a z databáze
                        eBird/Macaulay Library.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
