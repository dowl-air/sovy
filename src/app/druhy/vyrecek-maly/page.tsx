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

import timeline from "@/assets/vyrecek-maly/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/vyrecek-maly"),
    title: "Výreček malý (Otus scops)",
    description: "Drobounká tažná sova s monotónním pískáním. Jak výrečka poznat, kdy ho v ČR nejspíš uslyšíte a kde ho hledat.",
    openGraph: {
        title: "Výreček malý (Otus scops) | České sovy",
        description: "Drobounká tažná sova s monotónním pískáním. Jak výrečka poznat, kdy ho v ČR nejspíš uslyšíte a kde ho hledat.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/vyrecek-maly/images/vyrecek_main.jpg",
                alt: "Výreček malý (Otus scops)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Výreček malý je nejmenší česká 'ouškatá' sova a výrazný noční hlas teplých oblastí. Profil přináší praktické informace k určování, hlasu, biologii druhu, hnízdění, migraci i ochraně v českém prostředí.",
    keywords: ["výreček malý", "otus scops", "evropský výreček", "sova", "druhy sov", "hlas sov", "tažná sova", "ochrana sov", "pozorování sov"],
    twitter: {
        card: "summary_large_image",
        title: "Výreček malý (Otus scops) | České sovy",
        description: "Drobounká tažná sova s monotónním pískáním. Jak výrečka poznat, kdy ho v ČR nejspíš uslyšíte a kde ho hledat.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/vyrecek-maly/images/vyrecek_main.jpg",
                alt: "Výreček malý (Otus scops)",
            },
        ],
    },
};

export default function VyrecekMalyPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "obvykle 70–90 g" },
        { label: "Rozpětí křídel", value: "47–54 cm" },
        { label: "Délka těla", value: "19–21 cm" },
        { label: "Dožití", value: "až ~12 let" },
        { label: "Hnízdění", value: "květen–červenec" },
        { label: "Počet vajec", value: "2–8 (nejčastěji 4–5)" },
        { label: "Potrava", value: "hlavně hmyz a další bezobratlí" },
        { label: "Rozšíření v ČR", value: "extrémně vzácný, převážně jihovýchod Moravy" },
        { label: "Ochrana", value: "zvláště chráněný druh (ČR), IUCN: málo dotčený (LC)" },
        { label: "Hlas", value: "monotónní pískání „ťu/ďu“, opakované v pravidelném rytmu" },
    ] as const;

    const heroGalleryImages = [
        { src: "/druhy/vyrecek-maly/images/vyrecek_main.jpg", alt: "Výreček malý na větvi ve večerním světle", loading: "eager", priority: true },
        { src: "/druhy/vyrecek-maly/images/vyrecek_leti.jpg", alt: "Výreček malý v letu" },
        { src: "/druhy/vyrecek-maly/images/vyrecek_krmi.webp", alt: "Výreček malý při krmení mláděte" },
        { src: "/druhy/vyrecek-maly/images/vyrecek.jpeg", alt: "Detail výrečka malého v krycím zbarvení" },
        { src: "/druhy/vyrecek-maly/images/vyrecekmaly.jpeg", alt: "Výreček malý v klidovém postoji" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/vyrecek-maly/images/map.webp", alt: "Mapa výskytu výrečka malého" }] as const;

    const jsonLdTaxon = {
        "@context": "https://schema.org",
        "@type": "Taxon",
        name: "Výreček malý",
        alternateName: ["Otus scops", "Eurasian scops owl", "European scops owl"],
        description: "Malá tažná sova s typickým monotónním pískáním, v ČR velmi vzácná.",
        url: "https://www.ceskesovy.cz/druhy/vyrecek-maly",
        sameAs: [
            "https://cs.wikipedia.org/wiki/V%C3%BDre%C4%8Dek_mal%C3%BD",
            "https://en.wikipedia.org/wiki/European_scops_owl",
            "https://ebird.org/species/eursco1",
        ],
    };

    const jsonLdAudio = [
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Typický hlas výrečka malého – ukázka 1",
            contentUrl: "https://www.ceskesovy.cz/druhy/vyrecek-maly/audio/zvuk1.mp3",
            encodingFormat: "audio/mpeg",
        },
        {
            "@context": "https://schema.org",
            "@type": "AudioObject",
            name: "Typický hlas výrečka malého – ukázka 2",
            contentUrl: "https://www.ceskesovy.cz/druhy/vyrecek-maly/audio/zvuk2.mp3",
            encodingFormat: "audio/mpeg",
        },
    ];

    const highlights = [
        {
            title: "Nejmenší „ouškatá“ sova",
            description: <>Drobounký noční lovec s pernatými „oušky“, který se přes den dokonale ztrácí v kůře stromů.</>,
        },
        {
            title: "Hlas, který nepřeslechneš",
            description: (
                <>
                    Samci volají monotónním rytmickým tónem <span className="whitespace-nowrap">„ťu… ťu… ťu…“</span>, často dlouhé minuty bez pauzy.
                </>
            ),
        },
        {
            title: "Vzácný host české noci",
            description: <>V ČR je mimořádně vzácný. Největší šanci na záznam máš v teplých oblastech jihovýchodní Moravy během pozdního jara.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak poznat výrečka v terénu",
            paragraphs: [
                <>
                    Výreček malý je nenápadný velikostí i zbarvením. Ve dne sedí strnule podél kmene a díky šedo-hnědému kreslení působí jako kus
                    kůry. Právě to je jeho <span className="font-semibold text-primary/90">největší maskovací trik</span>.
                </>,
                <>
                    V porovnání s běžnějšími sovami působí <strong className="font-semibold text-base-content">jemněji a štíhleji</strong>. Má drobnou
                    hlavu s pernatými „oušky“, žluté oči a úzká křídla uzpůsobená pro aktivní noční lov v otevřenější krajině.
                </>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    V evropském měřítku hnízdí hlavně v jižní a východní Evropě a dál na východ do Asie. Na zimu pravidelně táhne do Afriky jižně od
                    Sahary.
                </>,
                <>
                    Vyhledává <span className="font-semibold text-base-content">teplé, mozaikovité prostředí</span>: staré sady, rozvolněné doubravy,
                    aleje, okraje vesnic, vinice a další biotopy s dutinami i bohatou nabídkou velkého hmyzu.
                </>,
                <>
                    V České republice je výreček dlouhodobě <span className="font-semibold text-primary/90">velmi vzácný</span>. Záznamy se vážou
                    hlavně na nejteplejší regiony, zejména jihovýchod Moravy.
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
                    Po jarním návratu obsazují samci teritorium hlasem a lákají samici k vybrané dutině. Výreček si
                    <strong className="font-semibold text-base-content"> vlastní hnízdo nestaví</strong>.
                </>,
                <>
                    Hnízdí v dutinách stromů, ve škvírách zdí nebo ve vhodných budkách. Snůška bývá nejčastěji
                    <span className="font-semibold text-primary/90"> 4–5 vajec</span>, ale může kolísat přibližně od 2 do 8.
                </>,
                <>
                    Inkubace trvá zhruba <span className="font-semibold text-base-content">24–26 dní</span>. Mláďata opouštějí hnízdní dutinu
                    přibližně po třech týdnech, ale rodiče je dál krmí a vedou při prvních loveckých pokusech.
                </>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>
                    Základ jídelníčku tvoří <strong className="font-semibold text-base-content">velký hmyz a další bezobratlí</strong> (kobylky,
                    sarančata, brouci, můry, cvrčci). Loví hlavně za soumraku a v noci.
                </>,
                <>
                    Typicky vyhlíží kořist z posedu a rychlým výpadem ji sbírá ze země nebo vegetace. V některých podmínkách může ulovit i menší
                    obratlovce.
                </>,
                <>
                    Dostupnost hmyzu <span className="font-semibold text-primary/90">zásadně ovlivňuje úspěšnost hnízdění</span> – proto je pro druh
                    klíčová pestrá a šetrně obhospodařovaná krajina.
                </>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>
                    V globálním měřítku je druh veden jako málo dotčený (LC), ale lokálně může ubývat tam, kde mizí vhodné biotopy i potravní nabídka.
                </>,
                <>
                    Rizikem je <span className="font-semibold text-base-content">zánik starých stromů s dutinami</span>, intenzivní zemědělství,
                    pokles velkého hmyzu a zjednodušování venkovské krajiny.
                </>,
                <>
                    V ČR jde o <span className="font-semibold text-primary/90">zvláště chráněný a velmi vzácný druh</span>. Ochrana starých sadů,
                    dutinových stromů, mozaiky biotopů a šetrného nočního režimu krajiny je pro jeho návrat zásadní.
                </>,
            ],
        },
    ] as const;

    const audioIntro = [
        <>
            Nejspolehlivější určovací znak výrečka je <strong className="font-semibold text-base-content">hlas</strong>: monotónní, pravidelně
            opakovaný tón, který se v tiché noci nese překvapivě daleko.
        </>,
        <>
            Volá především samec v době obhajoby teritoria a námluv. Aktivita
            <span className="font-semibold text-primary/90"> kulminuje v teplých jarních a časně letních nocích</span>.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Hlas výrečka – ukázka 1",
            src: "/druhy/vyrecek-maly/audio/zvuk1.mp3",
            sourceName: "eBird.org",
            sourceUrl: "https://ebird.org/species/eursco1",
        },
        {
            title: "Hlas výrečka – ukázka 2",
            src: "/druhy/vyrecek-maly/audio/zvuk2.mp3",
            sourceName: "eBird.org",
            sourceUrl: "https://ebird.org/species/eursco1",
        },
    ] as const;

    const triviaItems = [
        <>Při denním odpočinku se dokáže proměnit v „část kmene“ – i z několika metrů ho často přehlédneš.</>,
        <>
            Patří mezi pravidelně tažné evropské sovy a každoročně překonává
            <span className="font-semibold text-base-content"> velké vzdálenosti mezi hnízdišti a zimovišti</span>.
        </>,
        <>
            Přestože je malý, při lovu je <span className="font-semibold text-primary/90">velmi efektivní</span> a specializovaný na větší noční hmyz.
        </>,
        <>V českých podmínkách je každý potvrzený výskyt cenný pro monitoring a ochranu druhu.</>,
    ] as const;

    const comparisonRows = [
        {
            species: "Výreček malý",
            size: "Malý",
            eyes: "Žluté",
            voice: "Monotónní pískání v pravidelném rytmu",
            keyDifference: "Velmi drobná „ouškatá“ sova, silně tažná",
            emphasized: true,
        },
        {
            species: "Sýček obecný",
            size: "Malý až střední",
            eyes: "Žluté",
            voice: "Pestřejší, kratší volání",
            keyDifference: "Bez výrazných pernatých „oušek“, robustnější postava",
        },
        {
            species: "Kalous ušatý",
            size: "Střední",
            eyes: "Oranžové",
            voice: "Hlubší a méně monotónní",
            keyDifference: "Výrazně větší silueta a delší tělo",
        },
    ] as const;

    const sources = [
        { label: "AOPK ČR – karta druhu Otus scops", url: "https://portal.nature.cz/publik_syst/nd_nalez-public.php?idTaxon=1294" },
        { label: "Wikipedia (EN) – Eurasian scops owl", url: "https://en.wikipedia.org/wiki/European_scops_owl" },
        { label: "Wikipedia (CS) – Výreček malý", url: "https://cs.wikipedia.org/wiki/V%C3%BDre%C4%8Dek_mal%C3%BD" },
        { label: "eBird – Eurasian Scops-Owl", url: "https://ebird.org/species/eursco1" },
    ] as const;

    return (
        <article className="space-y-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTaxon) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAudio) }} />

            <SpeciesHeroHeader
                commonName="Výreček malý"
                scientificName="Otus scops"
                englishName="Eurasian scops owl"
                lead="Drobounká sova s velkým hlasem. V teplé jarní noci ji často dřív uslyšíš, než uvidíš."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je výreček tak fascinující" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další zajímavosti" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o výrečkovi malém" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa výskytu výrečka malého (<em>Otus scops</em>) v rámci jeho palearktického areálu.
                    </>
                }
                images={mapGalleryImages}
            />

            <section className="-mt-4 rounded-xl border border-base-300 bg-base-100/70 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/80">Legenda mapy</h3>
                <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#9BE46A]" aria-hidden="true" />
                        <span>světle zelená – hnízdiště</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#1F8F3A]" aria-hidden="true" />
                        <span>tmavě zelená – nejčastější výskyt</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#D64545]" aria-hidden="true" />
                        <span>červená – migrace</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-black/10 bg-[#F39B2F]" aria-hidden="true" />
                        <span>oranžová – zimoviště</span>
                    </li>
                </ul>
            </section>

            <SpeciesComparisonTable title="Jak ho nepoplést" rows={comparisonRows} />
            <SpeciesTimelineCard title="Kdy mám šanci ho v ČR zaznamenat?" items={timeline} />

            <ObservationCtaCard
                title="Slyšeli jste výrečka malého?"
                description="Pošlete pozorování a pomozte zpřesnit současné rozšíření tohoto vzácného druhu v ČR."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20vyrecka%20maleho"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Text vychází z veřejně dostupných ornitologických a ochranářských podkladů k druhu <em>Otus scops</em>.
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
