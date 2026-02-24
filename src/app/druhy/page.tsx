import type { Metadata } from "next";

import { OwlCard } from "@/components/owl-card";

type OwlListItem = {
    commonName: string;
    scientificName: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    badgeLabel?: string;
};

const regularNestingOwls: readonly OwlListItem[] = [
    {
        commonName: "Výr velký",
        scientificName: "Bubo bubo",
        href: "/druhy/vyr-velky",
        imageSrc: "/druhy/vyr-velky/images/vyr-velky-bubo-bubo.webp",
        imageAlt: "Výr velký v lesním prostředí",
        description: "Největší evropská sova s hlubokým houkáním a velmi výraznou siluetou.",
        badgeLabel: "Největší sova",
    },
    {
        commonName: "Puštík obecný",
        scientificName: "Strix aluco",
        href: "/druhy/pustik-obecny",
        imageSrc: "/druhy/pustik-obecny/images/pustik-obecny-main.webp",
        imageAlt: "Puštík obecný na větvi",
        description: "Nejběžnější česká lesní sova, kterou často uslyšíš i v parcích a městské zeleni.",
        badgeLabel: "Nejběžnější druh",
    },
    {
        commonName: "Sova pálená",
        scientificName: "Tyto alba",
        href: "/druhy/sova-palena",
        imageSrc: "/druhy/sova-palena/images/sova-palena-main.webp",
        imageAlt: "Sova pálená se srdcovitým obličejem",
        description: "Světlá sova se srdcovitým závojem, v Česku silně ohrožená změnami krajiny.",
        badgeLabel: "Srdcovitý závoj",
    },
    {
        commonName: "Kalous ušatý",
        scientificName: "Asio otus",
        href: "/druhy/kalous-usaty",
        imageSrc: "/druhy/kalous-usaty/images/kalous-usaty-main.webp",
        imageAlt: "Kalous ušatý s výraznými pernatými oušky",
        description: "Štíhlá sova okrajů lesů a otevřené krajiny s typickými „oušky“.",
        badgeLabel: "Výrazná ouška",
    },
    {
        commonName: "Kulíšek nejmenší",
        scientificName: "Glaucidium passerinum",
        href: "/druhy/kulisek-nejmensi",
        imageSrc: "/druhy/kulisek-nejmensi/images/kulisek-nejmensi-main.webp",
        imageAlt: "Kulíšek nejmenší v detailu",
        description: "Nejmenší evropská sova, nenápadný lesní lovec s vysokým pískavým hlasem.",
        badgeLabel: "Nejmenší sova",
    },
    {
        commonName: "Sýček obecný",
        scientificName: "Athene noctua",
        href: "/druhy/sycek-obecny",
        imageSrc: "/druhy/sycek-obecny/images/sycek_main.webp",
        imageAlt: "Sýček obecný na posedu",
        description: "Malá sova kulturní krajiny, která vyžaduje cílenou ochranu vhodných biotopů.",
        badgeLabel: "Druh kulturní krajiny",
    },
    {
        commonName: "Sýc rousný",
        scientificName: "Aegolius funereus",
        href: "/druhy/syc-rousny",
        imageSrc: "/druhy/syc-rousny/images/syc-rousny-main.webp",
        imageAlt: "Sýc rousný na stromě",
        description: "Noční sova horských a podhorských lesů, nejaktivnější od soumraku do noci.",
        badgeLabel: "Horské lesy",
    },
    {
        commonName: "Puštík bělavý",
        scientificName: "Strix uralensis",
        href: "/druhy/pustik-belavy",
        imageSrc: "/druhy/pustik-belavy/images/pustik-belavy-main.webp",
        imageAlt: "Puštík bělavý v lese",
        description: "Velká světlá lesní sova s dlouhým ocasem, u nás vzácná, ale pravidelně hnízdící.",
        badgeLabel: "Vzácný hnízdič",
    },
] as const;

const occasionalNestingOwls: readonly OwlListItem[] = [
    {
        commonName: "Výreček malý",
        scientificName: "Otus scops",
        href: "/druhy/vyrecek-maly",
        imageSrc: "/druhy/vyrecek-maly/images/vyrecek_main.webp",
        imageAlt: "Výreček malý na větvi",
        description: "Drobounká tažná sova teplých oblastí, známá monotónním nočním pískáním.",
        badgeLabel: "Tažná sova",
    },
    {
        commonName: "Kalous pustovka",
        scientificName: "Asio flammeus",
        href: "/druhy/kalous-pustovka",
        imageSrc: "/druhy/kalous-pustovka/images/kalous-pustovka-main.webp",
        imageAlt: "Kalous pustovka v otevřené krajině",
        description: "Sova luk a mokřadů, která je nápadně aktivní i ve dne.",
        badgeLabel: "Aktivní i ve dne",
    },
] as const;

const rareVisitorOwls: readonly OwlListItem[] = [
    {
        commonName: "Sovice sněžní",
        scientificName: "Bubo scandiacus",
        href: "/druhy/sovice-snezni",
        imageSrc: "/druhy/sovice-snezni/images/sovice-snezni-main.webp",
        imageAlt: "Sovice sněžní v zimním prostředí",
        description: "Arktická bílá sova, která se u nás objevuje jen výjimečně při zimních irupcích.",
        badgeLabel: "Arktický host",
    },
    {
        commonName: "Sovice krahujová",
        scientificName: "Surnia ulula",
        href: "/druhy/sovice-krahujova",
        imageSrc: "/druhy/sovice-krahujova/images/sovice-krahujova-main.webp",
        imageAlt: "Sovice krahujová s dlouhým ocasem",
        description: "Denně aktivní sova boreálních lesů, v Česku patří mezi mimořádně vzácné zatoulance.",
        badgeLabel: "Denní aktivita",
    },
] as const;

const byCommonName = (a: OwlListItem, b: OwlListItem) => a.commonName.localeCompare(b.commonName, "cs");

const regularNestingOwlsSorted = [...regularNestingOwls].sort(byCommonName);
const occasionalNestingOwlsSorted = [...occasionalNestingOwls].sort(byCommonName);
const rareVisitorOwlsSorted = [...rareVisitorOwls].sort(byCommonName);
const allOwls = [...regularNestingOwlsSorted, ...occasionalNestingOwlsSorted, ...rareVisitorOwlsSorted];

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ceskesovy.cz/druhy"),
    title: "Sovy v Česku – přehled druhů",
    description:
        "Přehled 12 druhů sov spojených s Českem. Rozcestník na detailní profily: pravidelně hnízdící, příležitostně hnízdící i vzácně zalétající sovy.",
    openGraph: {
        title: "Sovy v Česku – přehled druhů | České sovy",
        description: "Rozcestník druhů sov v ČR: pravidelně hnízdící, příležitostně hnízdící a vzácně zalétající druhy s odkazy na detailní profily.",
        images: [
            {
                url: "https://www.ceskesovy.cz/druhy/vyr-velky/images/vyr-velky-bubo-bubo.webp",
                alt: "Sovy v Česku",
            },
        ],
        locale: "cs_CZ",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sovy v Česku – přehled druhů | České sovy",
        description: "12 druhů sov přehledně na jednom místě s odkazy na detailní profily.",
        images: ["https://www.ceskesovy.cz/druhy/vyr-velky/images/vyr-velky-bubo-bubo.webp"],
    },
    keywords: ["sovy v Česku", "druhy sov", "sovy ČR", "přehled sov", "výr velký", "sova pálená", "puštík obecný"],
    alternates: {
        canonical: "https://www.ceskesovy.cz/druhy",
    },
};

export default function DruhyPage() {
    const itemListJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Sovy v Česku",
        description: "Přehled druhů sov s odkazy na detailní profily.",
        itemListElement: allOwls.map((owl, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://www.ceskesovy.cz${owl.href}`,
            name: owl.commonName,
        })),
    };

    return (
        <div className="space-y-14 md:space-y-16">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

            <header className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-base-100 via-base-100 to-primary/10 px-6 py-10 shadow-[0_20px_45px_-30px_rgba(16,185,129,0.55)] md:px-10 md:py-14">
                <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-8 h-56 w-56 rounded-full bg-info/10 blur-3xl" />

                <div className="relative max-w-4xl space-y-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/90">Přehled druhů</p>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">Sovy v Česku</h1>
                    <p className="text-base leading-relaxed text-base-content/80 md:text-lg">
                        Rozcestník všech 12 druhů sov spojených s Českem. Najdeš zde pravidelně hnízdící druhy, příležitostné hnízdiče i vzácné
                        zatoulance. Každá karta vede na detailní profil s rozpoznávacími znaky, hlasem a mapou výskytu.
                    </p>
                </div>
            </header>

            <section className="space-y-6" aria-labelledby="pravidelne-hnizdici">
                <div className="space-y-2">
                    <h2 id="pravidelne-hnizdici" className="text-3xl font-semibold">
                        Pravidelně hnízdící sovy
                    </h2>
                    <p className="text-base-content/75">Druhy, které u nás hnízdí pravidelně a tvoří základ české soví fauny.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {regularNestingOwlsSorted.map((owl) => (
                        <OwlCard key={owl.href} {...owl} statusLabel={owl.badgeLabel} />
                    ))}
                </div>
            </section>

            <section className="space-y-6" aria-labelledby="prilezitostne-hnizdici">
                <div className="space-y-2">
                    <h2 id="prilezitostne-hnizdici" className="text-3xl font-semibold">
                        Příležitostně hnízdící
                    </h2>
                    <p className="text-base-content/75">Druhy s nepravidelným nebo lokálně omezeným hnízděním na území ČR.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {occasionalNestingOwlsSorted.map((owl) => (
                        <OwlCard key={owl.href} {...owl} statusLabel={owl.badgeLabel} />
                    ))}
                </div>
            </section>

            <section className="space-y-6" aria-labelledby="vzácně-zaletaji">
                <div className="space-y-2">
                    <h2 id="vzácně-zaletaji" className="text-3xl font-semibold">
                        Vzácně zalétají
                    </h2>
                    <p className="text-base-content/75">Severské druhy, které se v Česku objevují jen výjimečně.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rareVisitorOwlsSorted.map((owl) => (
                        <OwlCard key={owl.href} {...owl} statusLabel={owl.badgeLabel} />
                    ))}
                </div>
            </section>
        </div>
    );
}
