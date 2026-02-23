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

import timeline from "@/assets/sova-palena/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/sova-palena"),
    title: "Sova pálená (Tyto alba)",
    description: "Sova se srdcovitým obličejem a syčivým hlasem. Jak sovu pálenou poznat, kde ji hledat a proč je v ČR silně ohrožená.",
    openGraph: {
        title: "Sova pálená (Tyto alba) | České sovy",
        description: "Sova se srdcovitým obličejem a syčivým hlasem. Jak sovu pálenou poznat, kde ji hledat a proč je v ČR silně ohrožená.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/sova-palena/images/sova-palena-main.jpg",
                alt: "Sova pálená (Tyto alba)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Sova pálená je středně velká sova otevřené zemědělské krajiny, nápadná srdcovitým obličejovým závojem a syčivým hlasem. Profil shrnuje určovací znaky, hlas, hnízdění, potravu i hlavní rizika v české krajině.",
    keywords: ["sova pálená", "tyto alba", "western barn owl", "sova", "druhy sov", "hlas sov", "ochrana sov", "hnízdění sov"],
    twitter: {
        card: "summary_large_image",
        title: "Sova pálená (Tyto alba) | České sovy",
        description: "Sova se srdcovitým obličejem a syčivým hlasem. Jak sovu pálenou poznat, kde ji hledat a proč je v ČR silně ohrožená.",
        images: ["https://www.ceskesovy.cz/druhy/sova-palena/images/sova-palena-main.jpg"],
    },
};

export default function SovaPalenaPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "obvykle 200–400 g" },
        { label: "Rozpětí křídel", value: "80–95 cm" },
        { label: "Délka těla", value: "33–39 cm" },
        { label: "Dožití", value: "v přírodě obvykle nižší, doloženě až ~17 let" },
        { label: "Hnízdění", value: "březen–srpen (často 1–2 snůšky podle potravy)" },
        { label: "Počet vajec", value: "obvykle 3–8, výjimečně více" },
        { label: "Potrava", value: "hlavně drobní hlodavci, doplňkově ptáci a obojživelníci" },
        { label: "Rozšíření v ČR", value: "hlavně nižší polohy, ostrůvkovitě" },
        { label: "Ochrana", value: "zvláště chráněný druh (ČR), silně ohrožený" },
        { label: "Hlas", value: "drsné syčení a pronikavý skřek (nehouká)" },
    ] as const;

    const heroGalleryImages = [
        { src: "/druhy/sova-palena/images/sova-palena-main.jpg", alt: "Sova pálená v detailu", loading: "eager", priority: true },
        { src: "/druhy/sova-palena/images/sova-palena-let.jpg", alt: "Sova pálená při letu" },
        { src: "/druhy/sova-palena/images/sova-palena-posed.jpg", alt: "Sova pálená na posedu" },
        { src: "/druhy/sova-palena/images/sova-palena-skotsko.jpg", alt: "Sova pálená v otevřené krajině" },
        { src: "/druhy/sova-palena/images/sova-palena-guttata.jpg", alt: "Sova pálená poddruhu guttata v klidovém postoji" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/sova-palena/images/map.webp", alt: "Mapa výskytu sovy pálené" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Sova pálená",
        alternateName: ["Tyto alba", "Western barn owl"],
        description: "Středně velká sova se srdcovitým závojem, specialista na lov drobných hlodavců v otevřené krajině.",
        url: "https://www.ceskesovy.cz/druhy/sova-palena",
        sameAs: [
            "https://cs.wikipedia.org/wiki/Sova_p%C3%A1len%C3%A1",
            "https://en.wikipedia.org/wiki/Western_barn_owl",
            "https://ebird.org/species/brnowl",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas sovy pálené – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/sova-palena/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas sovy pálené – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/sova-palena/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Srdcovitý obličejový závoj",
            description: <>Jedna z nejsnáze rozpoznatelných sov: světlý „obličej“ ve tvaru srdce, tmavé oči a tichý vlnivý let.</>,
        },
        {
            title: "Specialista na hlodavce",
            description: <>V potravě dominují drobní savci, zejména hraboši. Úspěch hnízdění silně závisí na jejich aktuální početnosti.</>,
        },
        {
            title: "Druh lidských staveb",
            description: <>Často hnízdí v kostelních věžích, stodolách a budkách. Nedostatek bezpečných hnízdišť je dnes klíčový problém.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak poznat sovu pálenou v terénu",
            paragraphs: [
                <>
                    Sova pálená je <strong className="font-semibold text-base-content">středně velká, štíhlá sova s dlouhými nohami</strong>. Na první
                    pohled zaujme světlým obličejovým závojem ve tvaru srdce a tmavýma očima.
                </>,
                <>
                    V letu působí lehce, často „houpavě“ a velmi tiše. Na rozdíl od puštíků a výrů
                    <span className="font-semibold text-primary/90"> typicky nehouká</span>, častější je drsné syčení a pronikavý táhlý skřek.
                </>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    Celosvětově jde o velmi široce rozšířený druh, vázaný hlavně na otevřenou krajinu. Vyhledává pole, louky, pastviny a okraje sídel,
                    kde snadno loví drobné savce.
                </>,
                <>
                    V Česku hnízdí pravidelně, ale v nízkých stavech, hlavně v
                    <span className="font-semibold text-base-content"> nižších a teplejších polohách</span>. Populace je ostrůvkovitá a citlivá na
                    změny zemědělské krajiny.
                </>,
                <>Důležitá jsou klidná denní úkrytová místa a vhodné dutiny ve stavbách nebo kvalitní budky.</>,
            ],
            cta: {
                href: "#mapa-vyskytu",
                label: "Přejít na mapu výskytu",
            },
        },
        {
            title: "Hnízdění",
            paragraphs: [
                <>Tok začíná obvykle na přelomu zimy a jara. Sova pálená hnízdí hlavně v dutinách staveb; klasické hnízdo nestaví.</>,
                <>
                    Vejce klade přímo na podklad nebo vývržkovou drť. Běžná snůška má
                    <span className="font-semibold text-primary/90"> 3–8 vajec</span>, při dobré potravní nabídce může pár zahnízdit i dvakrát za rok.
                </>,
                <>
                    Inkubace trvá přibližně 30–34 dní. Mláďata jsou na rodičích závislá delší dobu a při nedostatku potravy může být hnízdní úspěšnost
                    výrazně nižší.
                </>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>
                    Základ potravy tvoří <strong className="font-semibold text-base-content">drobní zemní savci</strong>, zejména hraboši, myši a
                    rejskové. Doplňkově loví ptáky, obojživelníky a menší plazy.
                </>,
                <>Kořist lokalizuje především sluchem. Loví nízkým pomalým letem nad terénem nebo z posedů, odkud sleduje pohyb v trávě.</>,
                <>V období krmení mláďat může lovit i za dne, jinak je aktivita nejvyšší od soumraku do noci.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>
                    Hlavní rizika v české krajině: úbytek vhodných hnízdišť, technické pasti v budovách, kolize s dopravou a horší potravní podmínky v
                    intenzivně obhospodařovaných plochách.
                </>,
                <>
                    Sova pálená je v ČR zvláště chráněná jako
                    <span className="font-semibold text-primary/90"> silně ohrožený druh</span>. Praktická ochrana stojí na bezpečných budkách, úpravě
                    rizikových objektů a podpoře pestré otevřené krajiny.
                </>,
                <>Klíčové je omezit rušení během hnízdění a dlouhodobě zlepšovat podmínky pro drobné savce, které tvoří hlavní kořist.</>,
            ],
        },
    ] as const;

    const audioIntro = [
        <>
            Hlas sovy pálené je odlišný od většiny našich sov. Místo klasického houkání se častěji ozývá syčivými a drsnými skřeky, které bývají velmi
            nápadné v tiché noci.
        </>,
        <>
            Nahrávky níže pocházejí z databáze <span className="font-semibold text-primary/90">eBird / Macaulay Library</span>.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Hlas sovy pálené – ukázka 1",
            src: "/druhy/sova-palena/audio/zvuk1.mp3",
            sourceName: "eBird / Macaulay Library (ML356577711)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=brnowl&mediaType=audio",
        },
        {
            title: "Hlas sovy pálené – ukázka 2",
            src: "/druhy/sova-palena/audio/zvuk2.mp3",
            sourceName: "eBird / Macaulay Library (ML50147)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=brnowl&mediaType=audio",
        },
    ] as const;

    const triviaItems = [
        <>Srdcovitý obličejový závoj funguje jako akustický „sběrač“ zvuku a pomáhá přesně lokalizovat kořist i v úplné tmě.</>,
        <>Sova pálená patří mezi nejrozšířenější sovy světa, ale lokálně může rychle ubývat při změnách hospodaření v krajině.</>,
        <>Mláďata se na hnízdě často ozývají hlasitým syčením, které může znít překvapivě „hadovitě“.</>,
        <>V evropské krajině je dlouhodobě důležitá ochrana hnízdních míst ve stodolách, věžích a dalších tradičních objektech.</>,
    ] as const;

    const comparisonRows = [
        {
            species: "Sova pálená",
            size: "Střední",
            eyes: "Tmavé",
            voice: "Syčení, pronikavý skřek",
            keyDifference: "Srdcovitý obličejový závoj, štíhlá postava",
            emphasized: true,
        },
        {
            species: "Puštík obecný",
            size: "Střední až velký",
            eyes: "Tmavé",
            voice: "Hlubší houkání",
            keyDifference: "Kulatější obličejový disk, robustnější silueta",
        },
        {
            species: "Sýček obecný",
            size: "Malý",
            eyes: "Žluté",
            voice: "„Kuík“, varovné „či-či-či“",
            keyDifference: "Menší tělo, výrazné bílé obočí",
        },
    ] as const;

    const sources = [
        { label: "Wikipedia (CS) – Sova pálená", url: "https://cs.wikipedia.org/wiki/Sova_p%C3%A1len%C3%A1" },
        { label: "Wikipedia (EN) – Western barn owl", url: "https://en.wikipedia.org/wiki/Western_barn_owl" },
        { label: "eBird – Western Barn Owl (brnowl)", url: "https://ebird.org/species/brnowl" },
        { label: "eBird Media Catalog – Western Barn Owl audio", url: "https://media.ebird.org/catalog?taxonCode=brnowl&mediaType=audio" },
        {
            label: "Wikimedia Commons – Schleiereule-Tyto alba-World.png (map source)",
            url: "https://commons.wikimedia.org/wiki/File:Schleiereule-Tyto_alba-World.png",
        },
        { label: "IUCN Red List – Tyto alba", url: "https://www.iucnredlist.org/species/22688504/0" },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Sova pálená"
                scientificName="Tyto alba"
                englishName="Western barn owl"
                lead="Noční lovec otevřené krajiny se srdcovitým obličejem a hlasem, který si nespleteš s žádnou jinou sovou."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je sova pálená výjimečná" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o sově pálené" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa světového výskytu sovy pálené (<em>Tyto alba</em>) ve vysokém rozlišení. Podklad je invertovaný a výskyt je
                        sjednocen projektovou zelenou.
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
            <SpeciesTimelineCard title="Kdy mám šanci ji v ČR zaznamenat?" items={timeline} />

            <ObservationCtaCard
                title="Máte záznam sovy pálené?"
                description="Pošlete pozorování a pomozte upřesňovat výskyt tohoto silně ohroženého druhu v ČR."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20sovy%20palene"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Informace vycházejí z veřejně dostupných ornitologických podkladů pro druh <em>Tyto alba</em> a z databáze eBird/Macaulay
                        Library.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
