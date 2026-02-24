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

import timeline from "@/assets/vyr-velky/timeline.json";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy/vyr-velky"),
    title: "Výr velký (Bubo bubo)",
    description: "Největší sova Evropy. Jak výra poznat, kdy houká, kde hnízdí a kdy máte největší šanci ho v ČR pozorovat.",
    openGraph: {
        title: "Výr velký (Bubo bubo) | České sovy",
        description: "Největší sova Evropy. Jak výra poznat, kdy houká, kde hnízdí a kdy máte největší šanci ho v ČR pozorovat.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/vyr-velky/images/vyr-velky-bubo-bubo.webp",
                alt: "Výr velký (Bubo bubo)",
            },
        ],
        locale: "cs_CZ",
        type: "article",
    },
    abstract:
        "Výr velký je největší sova Evropy, známý pro své hluboké houkání a impozantní vzhled. Tento profil nabízí praktické informace pro pozorovatele: jak výra poznat v terénu, kdy je nejaktivnější, jaké má hnízdní návyky, co jí a jak je chráněný v ČR.",
    keywords: ["výr velký", "bubo bubo", "sova", "druhy sov", "poznávání sov", "ochrana sov", "hnízdění výra", "potrava výra", "hlas výra"],
    twitter: {
        card: "summary_large_image",
        title: "Výr velký (Bubo bubo) | České sovy",
        description: "Největší sova Evropy. Jak výra poznat, kdy houká, kde hnízdí a kdy máte největší šanci ho v ČR pozorovat.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/vyr-velky/images/vyr-velky-bubo-bubo.webp",
                alt: "Výr velký (Bubo bubo)",
            },
        ],
    },
};

export default function VyrVelkyPage() {
    const quickFacts = [
        { label: "Hmotnost", value: "samec 1,8–2,8 kg / samice 2,3–4,2 kg" },
        { label: "Rozpětí křídel", value: "150–188 cm" },
        { label: "Délka těla", value: "59–73 cm" },
        { label: "Dožití", value: "~20 let (divočina) / až 50+ let (zajetí)" },
        { label: "Hnízdění", value: "únor–květen" },
        { label: "Počet vajec", value: "nejčastěji 2–4" },
        { label: "Potrava", value: "savci, ptáci, obojživelníci" },
        { label: "Rozšíření v ČR", value: "roztroušeně po celém území" },
        { label: "Ochrana", value: "zvláště chráněný druh (ČR), chráněn v EU" },
        { label: "Hlas", value: "hluboké „ú-hu“, aktivita hlavně od podzimu do jara" },
    ] as const;

    const heroGalleryImages = [
        { src: "/druhy/vyr-velky/images/vyr-velky-bubo-bubo.webp", alt: "Výr velký u paty stromu s mláďaty", loading: "eager", priority: true },
        { src: "/druhy/vyr-velky/images/vyrvelky.webp", alt: "Výr velký za letu při lovu" },
        { src: "/druhy/vyr-velky/images/vyr-velky-hnizdeni.webp", alt: "Mláďata výra velkého" },
        { src: "/druhy/vyr-velky/images/vyr-velky.webp", alt: "Výr velký za letu" },
        { src: "/druhy/vyr-velky/images/vyr.webp", alt: "Výr velký stojící" },
    ] as const;

    const mapGalleryImages = [{ src: "/druhy/vyr-velky/images/map.webp", alt: "Mapa výskytu Výra velkého ve světě" }] as const;

    const highlights = [
        {
            title: "Silueta a hlas",
            description: (
                <>
                    Největší sova Evropy. Mohutná postava, pronikavé oranžové oči a hluboké, pomalé <span className="whitespace-nowrap">„úú-hu“</span>
                    , které se nese nocí na kilometry.
                </>
            ),
        },
        {
            title: "Vrcholový predátor",
            description: <>Loví od hlodavců přes ježky až po jiné ptáky. Nebojí se skal, lomů ani krajiny, kterou vytvořil člověk.</>,
        },
        {
            title: "Kdy máš největší šanci ho slyšet",
            description: <>Od podzimu do jara je hlasově aktivní a intenzivně brání teritorium. Právě tehdy se noc ozývá jeho hlubokým houkáním.</>,
        },
    ] as const;

    const contentSections = [
        {
            title: "Jak poznat výra v terénu",
            paragraphs: [
                <>
                    Výr velký působí v krajině <strong className="font-semibold text-base-content">mimořádně robustně</strong> – je to sova, kterou si
                    jen těžko spletete. Má dlouhé pernaté <em className="font-medium">„ušičky“</em>, širokou hlavu a nápadně oranžové oči, které ve
                    světle doslova svítí.
                </>,
                <>
                    Proti ostatním sovám je <span className="font-semibold text-primary/90">výrazně větší</span>. Často sedí klidně na vyvýšeném místě
                    – na skále, balvanu nebo stromě – odkud pozoruje okolí. V siluetě působí těžce a sebejistě. Když roztáhne křídla, rozpětí může
                    přesáhnout 180 cm.
                </>,
            ],
        },
        {
            title: "Výskyt a prostředí",
            paragraphs: [
                <>
                    V Česku osidluje především skalnaté oblasti, lomy, okraje lesů i členitou kulturní krajinu. Vyhledává místa, kde má dostatek klidu
                    a zároveň otevřený prostor pro lov.
                </>,
                <>
                    Hnízdní lokality bývají mimo hustě zastavěná území. Výskyt sahá od nížin po střední nadmořské výšky – klíčová je
                    <span className="font-semibold text-base-content"> kombinace úkrytu, vyvýšených stanovišť a dostatku kořisti</span>.
                </>,
                <>
                    Výr je <span className="font-semibold text-primary/90">silně teritoriální</span>. Jeden pár může obývat rozsáhlé území, které si
                    pravidelně obhajuje hlasem i přítomností.
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
                <>Tok začíná už v zimě, často v lednu. V tichých večerech se krajinou nese hluboké houkání samce.</>,
                <>Snůška přichází nejčastěji od února do dubna. Samice klade obvykle dvě až čtyři vejce a inkubace trvá přibližně 34–36 dní.</>,
                <>
                    Mláďata opouštějí bezprostřední okolí hnízda ještě před plnou schopností letu – šplhají po skalách, ukrývají se v okolí a rodiče
                    je dál krmí. Nejcitlivější období je <span className="font-semibold text-primary/90">od února do května</span>, kdy může rušení
                    znamenat opuštění snůšky.
                </>,
            ],
        },
        {
            title: "Potrava",
            paragraphs: [
                <>
                    Výr je <strong className="font-semibold text-base-content">vrcholový noční predátor</strong>. Loví především savce střední
                    velikosti – hlodavce, potkany, zajíce – ale také ptáky. Podle dostupnosti může využít i obojživelníky nebo jiné menší obratlovce.
                </>,
                <>
                    Loví dvěma způsoby: tiše vyčkává na vyvýšeném místě a poté přepadne kořist, nebo aktivně patroluje krajinou nízkým, téměř
                    neslyšným letem.
                </>,
                <>Dokáže ulovit i jiné sovy nebo dravce, není to však běžná a dominantní složka jeho potravy – spíše příležitostná situace.</>,
            ],
        },
        {
            title: "Ohrožení a ochrana",
            paragraphs: [
                <>Přestože působí nezranitelně, jeho největším rizikem je člověk.</>,
                <>Mezi hlavní hrozby patří kolize s elektrickým vedením, rušení na hnízdištích a sekundární otravy z prostředí.</>,
                <>
                    V České republice je výr zvláště chráněný druh. Dlouhodobý monitoring ukazuje, že ochrana hnízdišť, zabezpečení vedení a odpovědné
                    chování lidí v přírodě mají přímý vliv na
                    <span className="font-semibold text-primary/90"> stabilitu populace</span>.
                </>,
            ],
        },
    ] as const;

    const audioIntro = [
        <>Typický hlas výra je hluboké, pomalé „ú-hu“, které se ozývá především při obhajobě teritoria a při komunikaci mezi partnery.</>,
        <>
            <span className="font-semibold text-base-content">Samec mívá hlubší, dunivější tón</span>. Samice zní o něco výše a kratčeji. Za klidné
            noci může být houkání slyšitelné i několik kilometrů daleko – a právě to dává noční krajině její zvláštní, pradávnou atmosféru.
        </>,
    ] as const;

    const audioSamples = [
        {
            title: "Houkání – ukázka 1",
            src: "/druhy/vyr-velky/audio/houkani.mp3",
            sourceName: "eBird.org",
            sourceUrl: "https://ebird.org/species/eueowl1",
        },
        {
            title: "Houkání – ukázka 2",
            src: "/druhy/vyr-velky/audio/houkani_2.mp3",
            sourceName: "eBird.org",
            sourceUrl: "https://ebird.org/species/eueowl1",
        },
    ] as const;

    const triviaItems = [
        <>
            Dokáže otočit hlavu až o <span className="font-semibold text-base-content">270°</span>, protože jeho oči jsou pevně zasazené v lebce.
        </>,
        <>Letí téměř neslyšně díky speciální stavbě letek, které tlumí proudění vzduchu.</>,
        <>Hnízdí přímo na zemi nebo na skalních římsách – nestaví klasické hnízdo.</>,
        <>
            Patří mezi nejmohutnější noční predátory Evropy a stojí <span className="font-semibold text-primary">na vrcholu potravního řetězce</span>.
        </>,
    ] as const;

    const comparisonRows = [
        {
            species: "Výr velký",
            size: "Velmi velký",
            eyes: "Oranžové",
            voice: "Hluboké, pomalé houkání",
            keyDifference: 'Masivní silueta a výrazné „ušičky"',
            emphasized: true,
        },
        {
            species: "Kalous ušatý",
            size: "Střední",
            eyes: "Oranžové",
            voice: "Vyšší, jemnější tóny",
            keyDifference: "Výrazně menší tělo a štíhlejší postava",
        },
        {
            species: "Puštík obecný",
            size: "Střední",
            eyes: "Tmavé",
            voice: 'Třesavé, často „hú-hůů"',
            keyDifference: 'Bez „uší", kulatá hlava',
        },
    ] as const;

    const sources = [
        { label: "Encyclopaedia Britannica", url: "https://www.britannica.com/animal/eagle-owl" },
        { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eurasian_eagle-owl" },
        { label: "BirdLife International", url: "https://www.birdlife.org" },
        { label: "IUCN (Red List)", url: "https://www.iucnredlist.org/species/22688927" },
    ] as const;

    return (
        <article className="space-y-10">
            <SpeciesHeroHeader
                commonName="Výr velký"
                scientificName="Bubo bubo"
                englishName="Eurasian eagle owl"
                lead="Největší sova Evropy. Noční obr se žhnoucíma očima a hlasem, který se nese krajinou kilometry daleko."
            />

            <section className="space-y-6">
                <HeroLightboxGallery images={heroGalleryImages} />
                <SpeciesHighlights title="Proč je výr tak výjimečný" highlights={highlights} />
            </section>

            <section className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.75fr]">
                <div className="space-y-8 lg:pr-4">
                    <SpeciesContentSections sections={contentSections} />
                    <SpeciesAudioSection title="Hlas" intro={audioIntro} samples={audioSamples} />
                    <SpeciesTriviaSection title="Další tajemství nočního obra" items={triviaItems} />
                </div>

                <aside className="space-y-4 lg:sticky lg:top-24">
                    <QuickFactsCard facts={quickFacts} ariaLabel="Rychlá fakta o výru velkém" />
                </aside>
            </section>

            <SpeciesMapSection
                id="mapa-vyskytu"
                title="Mapa výskytu"
                description={
                    <>
                        Orientační mapa výskytu Výra velkého (<em>Bubo bubo</em>). Vyskytuje se po celém území kontinentu.
                    </>
                }
                images={mapGalleryImages}
            />

            <SpeciesComparisonTable title="Jak ho nepoplést" rows={comparisonRows} />
            <SpeciesTimelineCard title="Kdy mám šanci ho vidět?" items={timeline} />

            <ObservationCtaCard
                title="Viděli jste výra velkého?"
                description="Pošlete pozorování a pomozte zpřesnit mapu výskytu v ČR."
                href="mailto:info@ceskesovy.cz?subject=Pozorovani%20vyra%20velkeho"
                label="Poslat pozorování"
            />

            <SourcesList
                title="Použité zdroje"
                intro={
                    <>
                        Informace vycházejí z ověřených přehledových zdrojů o druhu <em>Bubo bubo</em>:
                    </>
                }
                sources={sources}
            />
        </article>
    );
}
