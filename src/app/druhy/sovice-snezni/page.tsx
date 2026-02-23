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

import timeline from "@/assets/sovice-snezni/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/sovice-snezni"),
    title: "Sovice sněžní (Bubo scandiacus)",
    description: "Ikonická bílá sova arktické tundry. Jak sovici sněžní poznat, kde hnízdí a kdy se může výjimečně objevit i ve střední Evropě.",
    openGraph: {
        title: "Sovice sněžní (Bubo scandiacus) | České sovy",
        description: "Ikonická bílá sova arktické tundry. Jak sovici sněžní poznat, kde hnízdí a kdy se může výjimečně objevit i ve střední Evropě.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/sovice-snezni/images/sovice-snezni-main.jpg",
                alt: "Sovice sněžní (Bubo scandiacus)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Sovice sněžní je výrazná denně i v noci aktivní sova arktických oblastí. Profil shrnuje určovací znaky, ekologii druhu, hnízdění na tundře i kontext vzácných pozorování ve střední Evropě.",
    keywords: ["sovice sněžní", "bubo scandiacus", "snowy owl", "arktická sova", "druhy sov", "poznávání sov", "vzácné sovy"],
    twitter: {
        card: "summary_large_image",
        title: "Sovice sněžní (Bubo scandiacus) | České sovy",
        description: "Ikonická bílá sova arktické tundry. Jak sovici sněžní poznat, kde hnízdí a kdy se může výjimečně objevit i ve střední Evropě.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/sovice-snezni/images/sovice-snezni-main.jpg",
                alt: "Sovice sněžní (Bubo scandiacus)",
            },
        ],
    },
};

export default function SoviceSnezniPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "samci obvykle 1,6–2,0 kg / samice 2,0–2,5 kg" },
        { label: "Rozpětí křídel", value: "125–150 cm" },
        { label: "Délka těla", value: "52–71 cm" },
        { label: "Dožití", value: "běžně kolem 10 let, výjimečně více" },
        { label: "Hnízdění", value: "květen–červenec (arktická tundra)" },
        { label: "Počet vajec", value: "obvykle 3–7, podle nabídky kořisti i více" },
        { label: "Potrava", value: "hlavně lumíci, dále ptáci a drobní savci" },
        { label: "Rozšíření v ČR", value: "mimořádně vzácně zaletuje, pravidelně nehnízdí" },
        { label: "Ochrana", value: "globálně IUCN: zranitelný (VU)" },
        { label: "Hlas", value: "hlubší štěkavé a chraplavé volání, výraznější v době hnízdění" },
    ] as const;

    const heroGalleryImages = [
        { src: "/druhy/sovice-snezni/images/sovice-snezni-main.jpg", alt: "Sovice sněžní v zimním prostředí", loading: "eager", priority: true },
        { src: "/druhy/sovice-snezni/images/sovice-snezni-2.jpg", alt: "Sovice sněžní na otevřeném pobřeží" },
        { src: "/druhy/sovice-snezni/images/sovice-snezni-3.jpg", alt: "Sovice sněžní sedící na písečné duně" },
        { src: "/druhy/sovice-snezni/images/sovice-snezni-4.jpg", alt: "Samec sovice sněžní v detailu" },
        { src: "/druhy/sovice-snezni/images/sovice-snezni-5.jpg", alt: "Sovice sněžní v letu" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/sovice-snezni/images/map.webp", alt: "Mapa světového výskytu sovice sněžní" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Sovice sněžní",
        alternateName: ["Bubo scandiacus", "Snowy owl"],
        description: "Velká arktická sova s výrazným bílým zbarvením. Ve střední Evropě je vzácným zimním hostem.",
        url: "https://www.ceskesovy.cz/druhy/sovice-snezni",
        sameAs: [
            "https://cs.wikipedia.org/wiki/Sovice_sn%C4%9B%C5%BEn%C3%AD",
            "https://en.wikipedia.org/wiki/Snowy_owl",
            "https://ebird.org/species/snwowl1",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas sovice sněžní – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/sovice-snezni/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Hlas sovice sněžní – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/sovice-snezni/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Bílá ikona severu",
            description: <>Mohutná sova tundry, která loví i za dne a díky světlému zbarvení patří mezi nejlépe rozpoznatelné sovy světa.</>,
        },
        {
            title: "Specialista na otevřenou krajinu",
            description: <>Nejlépe jí vyhovují bezlesé pláně. Často sedí nízko na terénních nerovnostech a aktivně sleduje pohyb kořisti.</>,
        },
        {
            title: "V Česku jen vzácný host",
            description: <>U nás nehnízdí pravidelně. Pozorování bývají výjimečná, nejčastěji v zimním období při výraznějších irupcích.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak poznat sovici sněžní",
            paragraphs: [
                <>
                    Sovice sněžní je <strong className="font-semibold text-base-content">velká, robustní a nápadně světlá sova</strong>. Dospělí samci
                    bývají téměř bílí, samice a mladí ptáci mají obvykle výraznější tmavé příčné kresby.
                </>,
                <>
                    Oproti většině našich sov působí v otevřené krajině velmi „seversky“: má kulatější hlavu bez pernatých „uší“, široká křídla a
                    výrazně husté opeření včetně běháků, které ji chrání v mrazu.
                </>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    Hnízdí v arktické tundře severní Eurasie a Severní Ameriky. Mimo hnízdní období se přesouvá na jižněji položená otevřená
                    stanoviště, pobřeží, mokřady nebo zemědělské pláně.
                </>,
                <>
                    V Česku jde o <span className="font-semibold text-primary/90">mimořádně vzácný záletový druh</span>. Většina pozorování připadá na
                    pozdní podzim a zimu, kdy se část populace při nedostatku potravy přesouvá dál na jih.
                </>,
                <>V terénu ji hledej spíše na otevřených plochách než v lese. Často vyčkává na zemi, nízkých vyvýšeninách nebo sloupcích.</>,
            ],
            cta: {
                href: "#mapa-vyskytu",
                label: "Přejít na mapu výskytu",
            },
        },
        {
            title: "Hnízdění",
            paragraphs: [
                <>Hnízdění je úzce navázané na cykly početnosti lumíků. V letech s dostatkem potravy může být reprodukční úspěch výrazně vyšší.</>,
                <>Hnízdo je jednoduchý důlek na zemi. Samice klade nejčastěji 3–7 vajec, ale při potravní špičce může být snůška větší.</>,
                <>
                    Mláďata se líhnou postupně, a proto bývá v jednom hnízdě patrný{" "}
                    <span className="font-semibold text-base-content">věkový rozdíl</span>. Rodiče intenzivně brání hnízdiště proti predátorům.
                </>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>
                    Základ jídelníčku tvoří především <strong className="font-semibold text-base-content">lumíci a další drobní hlodavci</strong>.
                    Tam, kde jsou méně dostupní, loví častěji vodní a pobřežní ptáky.
                </>,
                <>
                    Loví ve dne i v noci, často vyhlíží kořist z vyvýšeného bodu. V otevřené tundře je výhodou její výborný zrak i sluch a velmi tichý
                    let.
                </>,
                <>Potravní podmínky silně ovlivňují nejen počet vajec, ale i to, zda pár v daném roce vůbec zahnízdí.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>
                    Sovice sněžní je celosvětově vedena jako <span className="font-semibold text-primary/90">zranitelný druh (IUCN VU)</span>. Mezi
                    hlavní rizika patří změny arktických ekosystémů, rušení, kolize a lokálně i nedostatek potravy.
                </>,
                <>Protože jde o druh vázaný na severní otevřenou krajinu, citlivě reaguje na změny klimatu i krajinné struktury.</>,
                <>Každé ověřené pozorování ve střední Evropě je cenné pro monitoring pohybu populace mimo hlavní hnízdní areál.</>,
            ],
        },
    ] as const;

    const triviaItems = [
        <>Na rozdíl od většiny sov bývá výrazně aktivní i za denního světla.</>,
        <>Silné opeření prstů a běháků funguje jako „zimní boty“ pro arktické podmínky.</>,
        <>Barva peří se mění s věkem i pohlavím – samci bývají bělejší, samice kreslenější.</>,
        <>Při obraně hnízda dokáže být vůči vetřelcům překvapivě odvážná a velmi důrazná.</>,
    ] as const;

    const audioIntro = [
        <>Hlas sovice sněžní je proměnlivý. V terénu může znít jako hlubší chraplavé volání nebo kratší štěkavé kontaktní hlasové projevy.</>,
        <>
            Nejvýrazněji se ozývá v hnízdním období. Nahrávky níže pocházejí z databáze
            <span className="font-semibold text-primary/90"> eBird / Macaulay Library</span>.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Hlas sovice sněžní – ukázka 1",
            src: "/druhy/sovice-snezni/audio/zvuk1.mp3",
            sourceName: "eBird / Macaulay Library",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=snwowl1&mediaType=audio",
        },
        {
            title: "Hlas sovice sněžní – ukázka 2",
            src: "/druhy/sovice-snezni/audio/zvuk2.mp3",
            sourceName: "eBird / Macaulay Library",
            sourceUrl: "https://media.ebird.org/catalog?taxonCode=snwowl1&mediaType=audio",
        },
    ] as const;

    const comparisonRows = [
        {
            species: "Sovice sněžní",
            size: "Velká",
            eyes: "Žluté",
            voice: "Hlubší štěkavé/chraplavé volání",
            keyDifference: "Bílé zbarvení, arktický druh otevřené krajiny",
            emphasized: true,
        },
        {
            species: "Výr velký",
            size: "Velmi velký",
            eyes: "Oranžové",
            voice: "Hluboké pomalé houkání",
            keyDifference: "Výrazné pernaté „uši“, tmavší zbarvení",
        },
        {
            species: "Sýček obecný",
            size: "Malý až střední",
            eyes: "Žluté",
            voice: "„Kuík“, varovné „či-či-či“",
            keyDifference: "Výrazně menší, častěji kulturní krajina u sídel",
        },
    ] as const;

    const sources = [
        { label: "Wikipedia (CS) – Sovice sněžní", url: "https://cs.wikipedia.org/wiki/Sovice_sn%C4%9B%C5%BEn%C3%AD" },
        { label: "Wikipedia (EN) – Snowy owl", url: "https://en.wikipedia.org/wiki/Snowy_owl" },
        { label: "eBird – Snowy Owl (snwowl1)", url: "https://ebird.org/species/snwowl1" },
        { label: "eBird Media Catalog – Snowy Owl audio", url: "https://media.ebird.org/catalog?taxonCode=snwowl1&mediaType=audio" },
        { label: "Wikimedia Commons – BuboScandiacusIUCN.svg", url: "https://commons.wikimedia.org/wiki/File:BuboScandiacusIUCN.svg" },
        { label: "IUCN Red List – Bubo scandiacus", url: "https://www.iucnredlist.org/species/22689021" },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Sovice sněžní"
                scientificName="Bubo scandiacus"
                englishName="Snowy owl"
                lead="Bílá sova severu. Většinu života tráví na tundře, ale v některých zimách dokáže překvapit i pozorovatele ve střední Evropě."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je sovice sněžní tak výjimečná" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o sovici sněžní" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa světového areálu sovice sněžní (<em>Bubo scandiacus</em>) ve vizuálním stylu sjednoceném s ostatními profily.
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
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#F39B2F]" aria-hidden="true" />
                        <span>oranžová – zimní (nehnízdní) výskyt</span>
                    </li>
                </ul>
            </section>

            <SpeciesComparisonTable title="Jak ji nepoplést" rows={comparisonRows} />
            <SpeciesTimelineCard title="Kdy mám šanci ji zaznamenat?" items={timeline} />

            <ObservationCtaCard
                title="Máte záznam sovice sněžní?"
                description="Pošlete pozorování a pomozte zpřesnit přehled o výjimečných výskytech tohoto druhu v ČR."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20sovice%20snezni"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Text vychází z veřejně dostupných zdrojů pro druh <em>Bubo scandiacus</em>, včetně referenčních stránek druhu a mapových
                        podkladů Wikimedia Commons.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
