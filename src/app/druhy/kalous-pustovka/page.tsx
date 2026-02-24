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

import timeline from "@/assets/kalous-pustovka/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/kalous-pustovka"),
    title: "Kalous pustovka (Asio flammeus)",
    description: "Sova otevřených luk a mokřadů, často aktivní i za dne. Jak kalouse pustovku poznat, slyšet a kde se v ČR objevuje.",
    openGraph: {
        title: "Kalous pustovka (Asio flammeus) | České sovy",
        description: "Sova otevřených luk a mokřadů, často aktivní i za dne. Jak kalouse pustovku poznat, slyšet a kde se v ČR objevuje.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/kalous-pustovka/images/kalous-pustovka-main.webp",
                alt: "Kalous pustovka (Asio flammeus)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Kalous pustovka je kosmopolitní sova otevřené krajiny. Profil shrnuje určovací znaky, hlas, hnízdění na zemi, potravu i aktuální ochranný status druhu.",
    keywords: ["kalous pustovka", "asio flammeus", "short-eared owl", "sova", "druhy sov", "hlas sov", "hnízdění sov"],
    twitter: {
        card: "summary_large_image",
        title: "Kalous pustovka (Asio flammeus) | České sovy",
        description: "Sova otevřených luk a mokřadů, často aktivní i za dne. Jak kalouse pustovku poznat, slyšet a kde se v ČR objevuje.",
        images: ["https://www.ceskesovy.cz/druhy/kalous-pustovka/images/kalous-pustovka-main.webp"],
    },
};

export default function KalousPustovkaPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "206–475 g" },
        { label: "Rozpětí křídel", value: "85–110 cm" },
        { label: "Délka těla", value: "34–43 cm" },
        { label: "Dožití", value: "ve volné přírodě proměnlivé podle dostupnosti potravy" },
        { label: "Hnízdění", value: "březen–červen (v ČR nejčastěji duben–květen)" },
        { label: "Počet vajec", value: "nejčastěji 4–7, běžně 3–9" },
        { label: "Potrava", value: "hlavně drobní hlodavci, zejména hraboši" },
        { label: "Rozšíření v ČR", value: "pravidelně protahuje a zimuje, hnízdí velmi nepravidelně" },
        { label: "Ochrana", value: "IUCN: málo dotčený (LC), trend globálně klesající" },
        { label: "Hlas", value: "štěkavé „kev kev“, v toku rychlé bublavé „bu bu bu“" },
    ] as const;

    const heroGalleryImages = [
        { src: "/druhy/kalous-pustovka/images/kalous-pustovka-main.webp", alt: "Kalous pustovka na sloupku", loading: "eager", priority: true },
        { src: "/druhy/kalous-pustovka/images/kalous-pustovka-v-letu.webp", alt: "Kalous pustovka při letu nízko nad terénem" },
        { src: "/druhy/kalous-pustovka/images/kalous-pustovka-na-sloupu.webp", alt: "Kalous pustovka v otevřené krajině" },
        { src: "/druhy/kalous-pustovka/images/kalous-pustovka-portret.webp", alt: "Portrét kalouse pustovky se žlutýma očima" },
        { src: "/druhy/kalous-pustovka/images/kalous-pustovka-v-trave.webp", alt: "Kalous pustovka na travnaté ploše" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/kalous-pustovka/images/map.webp", alt: "Mapa výskytu kalouse pustovky" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Kalous pustovka",
        alternateName: ["Asio flammeus", "Short-eared owl"],
        description: "Středně velká sova otevřených ploch, často aktivní i za dne a hnízdící na zemi.",
        url: "https://www.ceskesovy.cz/druhy/kalous-pustovka",
        sameAs: [
            "https://cs.wikipedia.org/wiki/Kalous_pustovka",
            "https://en.wikipedia.org/wiki/Short-eared_owl",
            "https://ebird.org/species/sheowl",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas kalouse pustovky – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/kalous-pustovka/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas kalouse pustovky – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/kalous-pustovka/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Denní aktivita",
            description: <>Na rozdíl od řady jiných sov loví kalous pustovka často i za dne, hlavně v době toku a při krmení mláďat.</>,
        },
        {
            title: "Hnízdo na zemi",
            description: <>Hnízdí v otevřeném terénu přímo v travním porostu, často v okolí mokřadů a vlhkých luk.</>,
        },
        {
            title: "Sova bez výrazných oušek",
            description: <>Ouška jsou velmi krátká a často přilehlá, proto působí „hladší“ siluetou než kalous ušatý.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak kalouse pustovku poznat",
            paragraphs: [
                <>
                    Kalous pustovka je <strong className="font-semibold text-base-content">středně velká světlá sova</strong> s nápadně žlutýma očima
                    a tmavší maskou kolem nich. Oproti kalousovi ušatému má výrazně kratší ouška, často sotva patrná.
                </>,
                <>V letu působí lehce kymácivě, s dlouhými úzkými křídly. Často létá nízko nad porostem a kořist vyhledává i za denního světla.</>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    Patří mezi nejrozšířenější sovy světa, vyskytuje se na všech kontinentech kromě Austrálie a Antarktidy. Obývá hlavně
                    <span className="font-semibold text-base-content"> otevřenou krajinu</span>: tundru, stepi, louky a mokřady.
                </>,
                <>
                    V ČR druh pravidelně protahuje nebo zimuje, ale hnízdí jen sporadicky a značně nepravidelně. V období 2001–2003 bylo uváděno
                    hnízdění maximálně do pěti párů.
                </>,
                <>Lokálně reaguje na nabídku potravy a může se přesouvat nomádsky do oblastí s vyšší početností hlodavců.</>,
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
                    Hnízdní období na severní polokouli probíhá převážně od března do června, vrchol bývá v dubnu. Hnízdo je na zemi, skryté v nízké
                    vegetaci.
                </>,
                <>
                    Samice snáší obvykle <span className="font-semibold text-primary/90">4–7 vajec</span>, ale při gradaci hrabošů může být snůška
                    výrazně vyšší. Inkubace trvá přibližně 21–37 dní.
                </>,
                <>Mláďata opouštějí hnízdo brzy a po okolí se rozlézají ještě před plnou schopností letu.</>,
            ],
        },
        {
            title: "Potrava a lov",
            paragraphs: [
                <>Potrava je tvořena hlavně drobnými savci, zejména hraboši. Doplňkově loví i menší ptáky a další drobnou kořist.</>,
                <>
                    Nejčastěji loví nízkým tichým letem nad otevřenými plochami a kořist zvedá z povrchu. Aktivita bývá silná za soumraku, ale druh je
                    pravidelně aktivní i během dne.
                </>,
                <>V dobrých potravních podmínkách může ve stejné oblasti lovit více jedinců najednou.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>
                    Globálně je druh hodnocen jako málo dotčený (IUCN LC), ale současný trend populace je
                    <span className="font-semibold text-primary/90"> klesající</span>.
                </>,
                <>
                    V Česku je hnízdění vzácné a nepravidelné, proto je klíčové chránit vhodná stanoviště otevřené krajiny, zejména mokřady, vlhké
                    louky a rozsáhlejší travnaté plochy.
                </>,
                <>Citlivým obdobím je jaro, kdy rušení na hnízdištích na zemi může vést ke ztrátě snůšky.</>,
            ],
        },
    ] as const;

    const audioIntro = [
        <>Na hnízdišti je typické štěkavé „kev kev“. V toku samci předvádějí rychlé bublavé volání „bu bu bu“ často doplněné tleskáním křídel.</>,
        <>
            Nahrávky níže pocházejí z databáze <span className="font-semibold text-primary/90">eBird / Macaulay Library</span>.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Hlas kalouse pustovky – ukázka 1",
            src: "/druhy/kalous-pustovka/audio/zvuk1.mp3",
            sourceName: "eBird / Macaulay Library (ML198229341)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=sheowl&mediaType=audio",
        },
        {
            title: "Hlas kalouse pustovky – ukázka 2",
            src: "/druhy/kalous-pustovka/audio/zvuk2.mp3",
            sourceName: "eBird / Macaulay Library (ML410154191)",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=sheowl&mediaType=audio",
        },
    ] as const;

    const triviaItems = [
        <>Kalous pustovka téměř nesedá na stromech, odpočívá hlavně na zemi v hustší vegetaci.</>,
        <>V mimohnízdní době může nocovat ve skupinách i po desítkách jedinců.</>,
        <>V letech s vysokou početností hrabošů výrazně roste hnízdní úspěšnost i velikost snůšek.</>,
        <>
            Jeho latinské jméno <em>flammeus</em> odkazuje na „plamenně“ zbarvený odstín peří.
        </>,
    ] as const;

    const comparisonRows = [
        {
            species: "Kalous pustovka",
            size: "Střední",
            eyes: "Žluté",
            voice: "Štěkavé „kev kev“, bublavé tokové volání",
            keyDifference: "Krátká ouška, častý denní lov v otevřené krajině",
            emphasized: true,
        },
        {
            species: "Kalous ušatý",
            size: "Střední",
            eyes: "Oranžové",
            voice: "Tlumené opakované „hú“",
            keyDifference: "Delší ouška, častější vazba na okraje lesů",
        },
        {
            species: "Puštík obecný",
            size: "Střední až větší",
            eyes: "Tmavé",
            voice: "Hlubší houkání",
            keyDifference: "Bez oušek, robustnější kulatá hlava",
        },
    ] as const;

    const sources = [
        { label: "Wikipedia (CS) – Kalous pustovka", url: "https://cs.wikipedia.org/wiki/Kalous_pustovka" },
        { label: "Wikipedia (EN) – Short-eared owl", url: "https://en.wikipedia.org/wiki/Short-eared_owl" },
        { label: "eBird – Short-eared Owl (sheowl)", url: "https://ebird.org/species/sheowl" },
        { label: "eBird Media Catalog – Short-eared Owl audio", url: "https://media.ebird.org/catalog?taxonCode=sheowl&mediaType=audio" },
        { label: "IUCN Red List – Asio flammeus", url: "https://www.iucnredlist.org/species/22689531/202226582" },
        {
            label: "Wikimedia Commons – Category: Asio flammeus",
            url: "https://commons.wikimedia.org/wiki/Category:Asio_flammeus",
        },
        {
            label: "Wikimedia Commons – AsioFlammeusIUCN.svg (map source)",
            url: "https://commons.wikimedia.org/wiki/File:AsioFlammeusIUCN.svg",
        },
        {
            label: "BioLib – kalous pustovka (Asio flammeus)",
            url: "https://www.biolib.cz/cz/taxon/id8772/",
        },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Kalous pustovka"
                scientificName="Asio flammeus"
                englishName="Short-eared owl"
                lead="Sova otevřených luk, mokřadů a polí s krátkými oušky, nápadně žlutýma očima a častou aktivitou i za dne."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je kalous pustovka výjimečný" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o kalousovi pustovce" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa světového areálu kalouse pustovky (<em>Asio flammeus</em>). Podklad je invertovaný a jednotlivé kategorie
                        výskytu jsou sjednocené do zelené škály.
                    </>
                }
                images={mapGalleryImages}
            />

            <section className="-mt-4 rounded-xl border border-base-300 bg-base-100/70 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/80">Legenda mapy</h3>
                <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#1ECF64]" aria-hidden="true" />
                        <span>tmavě zelená – stálý výskyt</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#7BF2A9]" aria-hidden="true" />
                        <span>světle zelená – hnízdní výskyt</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#49D87A]" aria-hidden="true" />
                        <span>středně zelená – tahový výskyt</span>
                    </li>
                </ul>
            </section>

            <SpeciesComparisonTable title="Jak ho nepoplést" rows={comparisonRows} />
            <SpeciesTimelineCard title="Kdy mám šanci ho v ČR zaznamenat?" items={timeline} />

            <ObservationCtaCard
                title="Pozorovali jste kalouse pustovku?"
                description="Pošlete záznam a pomozte zpřesňovat přehled výskytu druhu, který v ČR pravidelně zimuje, ale hnízdí jen výjimečně."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20kalouse%20pustovky"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Informace vycházejí z veřejně dostupných ornitologických podkladů k druhu <em>Asio flammeus</em>, z IUCN a z databáze
                        eBird/Macaulay Library.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
