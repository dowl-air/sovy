import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
    title: "Pomoc sovám – praktický rozcestník",
    description:
        "Praktická pomoc sovám: sova v nouzi, postup při nálezu mláděte, nárazu do okna i situaci u silnice, prevence v krajině a další možnosti zapojení.",
    keywords: [
        "pomoc sovám",
        "sova v nouzi",
        "mládě sovy na zemi",
        "sova narazila do okna",
        "sova u silnice",
        "jak pomoci sově",
        "záchranná stanice",
    ],
    alternates: {
        canonical: "https://www.ceskesovy.cz/pomoc-sovam",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Pomoc sovám – praktický rozcestník | České sovy",
        description: "Rychlé postupy pro nejčastější krizové situace: mládě na zemi, náraz do okna, sova u silnice.",
        url: "https://www.ceskesovy.cz/pomoc-sovam",
        siteName: "České sovy",
        locale: "cs_CZ",
        type: "article",
        images: [
            {
                url: "https://www.ceskesovy.cz/owl-hero.jpg",
                alt: "Sova v nočním lese",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pomoc sovám – praktický rozcestník | České sovy",
        description: "Co dělat, když najdete sovu v nouzi: rychlé kroky a nejčastější situace.",
        images: ["https://www.ceskesovy.cz/owl-hero.jpg"],
    },
};

type HelpOption = {
    id: string;
    title: string;
    href: string;
    accentClass: string;
    icon: string;
    points: readonly string[];
    subtitle?: string;
    ctaLabel?: string;
};

type EmergencyFaqEntry = {
    id: string;
    question: string;
    answerText: string;
    href: string;
    showWarning?: boolean;
};

const helpOptions: readonly HelpOption[] = [
    {
        id: "sova-v-nouzi",
        title: "Našel jsem sovu v nouzi",
        href: "/sova-v-nouzi",
        accentClass: "from-error/85 to-warning/85",
        icon: "🚨",
        subtitle: "Rychlá pomoc při nálezu zraněné nebo opuštěné sovy",
        ctaLabel: "Zjistit co dělat",
        points: ["Rychlý postup krok za krokem", "Kontakty na záchranné stanice", "Co rozhodně nedělat"],
    },
    {
        id: "pomoc-v-prirode",
        title: "Chci pomoci sovám v přírodě",
        href: "/pomoc-v-prirode",
        accentClass: "from-info/85 to-success/85",
        icon: "🌿",
        ctaLabel: "Zjistit jak pomoci",
        points: ["Šetrné sekání louky", "Úpravy zahrady", "Omezení světelného znečištění"],
    },
    {
        id: "stavba-hnizda",
        title: "Postavte sovám hnízdo",
        href: "/stavba-hnizda-pro-sovy",
        accentClass: "from-warning/90 to-orange-400/90",
        icon: "🪺",
        ctaLabel: "Zjistit postup stavby",
        points: ["Typ budky podle druhu", "Rozměry a umístění", "Kdy budku instalovat"],
    },
    {
        id: "podporte-ochranu",
        title: "Podpořte ochranu sov",
        href: "/podporte-ochranu-sov",
        accentClass: "from-primary/85 to-info/85",
        icon: "💚",
        ctaLabel: "Zjistit možnosti podpory",
        points: ["Ověřené organizace", "Konkrétní projekty", "Jednorázová i pravidelná pomoc"],
    },
    {
        id: "zapojte-se",
        title: "Zapojte se osobně",
        href: "/zapojte-se-osobne",
        accentClass: "from-secondary/85 to-primary/85",
        icon: "🧭",
        ctaLabel: "Zjistit možnosti zapojení",
        points: ["Dobrovolnictví", "Monitoring a hlášení pozorování", "Pomoc záchranným stanicím"],
    },
] as const;

const getOptionById = (id: HelpOption["id"]) => helpOptions.find((option) => option.id === id);

const topRowOptions = [getOptionById("sova-v-nouzi"), getOptionById("pomoc-v-prirode")].filter((option): option is HelpOption => Boolean(option));

const bottomRowOptions = [getOptionById("stavba-hnizda"), getOptionById("zapojte-se"), getOptionById("podporte-ochranu")].filter(
    (option): option is HelpOption => Boolean(option),
);

const emergencyFaqEntries: readonly EmergencyFaqEntry[] = [
    {
        id: "mlade-na-zemi",
        question: "Mládě sovy na zemi",
        answerText: "Ve většině případů rodiče jsou poblíž. Než zasáhnete, ověřte, zda mládě skutečně potřebuje pomoc.",
        href: "/sova-v-nouzi?situace=mlade-na-zemi",
        showWarning: true,
    },
    {
        id: "naraz-do-okna",
        question: "Sova narazila do okna",
        answerText: "Sova může být jen otřesená. Zjistěte, kdy stačí klid a kdy je nutné kontaktovat záchrannou stanici.",
        href: "/sova-v-nouzi?situace=naraz-do-okna",
    },
    {
        id: "u-silnice",
        question: "Sova u silnice",
        answerText: "Zraněné sovy u silnic jsou časté. Nejdřív zajistěte vlastní bezpečí a zjistěte, jak postupovat bez rizika.",
        href: "/sova-v-nouzi?situace=u-silnice",
    },
] as const;

type RingCardProps = {
    option: HelpOption;
    className?: string;
    large?: boolean;
    emergency?: boolean;
    thickFrame?: boolean;
};

function RingCard({ option, className = "", large = false, emergency = false, thickFrame = false }: RingCardProps) {
    return (
        <Link
            href={option.href}
            className={cn(
                "group relative block overflow-hidden rounded-4xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl",
                emergency || thickFrame ? "p-2" : large ? "p-1.75" : "p-1.5",
                className,
            )}
        >
            <div className={cn("absolute inset-0 rounded-4xl bg-linear-to-br", emergency ? "from-error to-error/70" : option.accentClass)} />
            <div
                className={cn(
                    "relative rounded-[1.65rem] border bg-base-100 px-6 py-6 shadow-[0_14px_30px_-24px_rgba(0,0,0,0.9)]",
                    emergency ? "border-error/80" : "border-base-200/70",
                    thickFrame ? "h-full md:h-[90%]" : "h-full",
                )}
            >
                <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-base-200 text-2xl">{option.icon}</span>
                    <h2 className={cn("font-bold leading-tight", large ? "text-2xl" : "text-xl")}>{option.title}</h2>
                </div>
                {option.subtitle ? <p className="mb-3 text-sm font-medium text-base-content/75">{option.subtitle}</p> : null}

                <ul className="space-y-1 text-sm text-base-content/80">
                    {option.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                    {option.ctaLabel ?? "Zjistit více"} <span aria-hidden="true">→</span>
                </div>
            </div>
        </Link>
    );
}

export default function PomocPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: emergencyFaqEntries.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answerText,
            },
        })),
    };

    return (
        <div className="space-y-14 md:space-y-16">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <header className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-base-100 via-base-100 to-primary/10 px-6 py-10 shadow-[0_20px_45px_-30px_rgba(16,185,129,0.55)] md:px-10 md:py-14">
                <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-8 h-56 w-56 rounded-full bg-info/10 blur-3xl" />

                <div className="relative max-w-4xl space-y-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/90">Pomoc sovám</p>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">Pomozte sovám správně.</h1>
                </div>
            </header>

            <section className="space-y-6" aria-label="Možnosti pomoci sovám">
                <div className="grid gap-5 md:grid-cols-2">
                    {topRowOptions.map((option) => (
                        <RingCard
                            key={option.id}
                            option={option}
                            large={option.id === "sova-v-nouzi"}
                            emergency={option.id === "sova-v-nouzi"}
                            thickFrame
                            className="h-full md:min-h-76"
                        />
                    ))}
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {bottomRowOptions.map((option) => (
                        <RingCard key={option.id} option={option} />
                    ))}
                </div>
            </section>

            <p className="text-sm text-base-content/70">
                Potřebujete jednat okamžitě? Začněte stránkou{" "}
                <Link href="/sova-v-nouzi" className="link link-hover font-semibold text-error">
                    Našel jsem sovu v nouzi
                </Link>
                .
            </p>

            <Faq
                title="Nejčastější situace"
                defaultOpenIndex={0}
                items={emergencyFaqEntries.map((item) => ({
                    id: item.id,
                    question: item.question,
                    answer: (
                        <div className="space-y-3">
                            <p>{item.answerText}</p>
                            {item.showWarning ? <p className="text-sm font-semibold">❗ Většina mláďat není opuštěná.</p> : null}
                            <Link href={item.href} className="btn btn-primary btn-sm btn-outline">
                                Zjistit co dělat
                            </Link>
                        </div>
                    ),
                }))}
            />
        </div>
    );
}
