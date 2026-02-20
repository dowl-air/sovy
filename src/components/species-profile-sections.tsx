import type { ReactNode } from "react";

import { MapLightboxGallery } from "@/components/lightbox-image-galleries";

type FactItem = {
    label: string;
    value: string;
};

type HighlightItem = {
    title: string;
    description: ReactNode;
};

type SpeciesSectionItem = {
    id?: string;
    title: string;
    paragraphs: readonly ReactNode[];
    cta?: {
        href: string;
        label: string;
    };
};

type AudioSampleItem = {
    title: string;
    src: string;
    sourceName: string;
    sourceUrl: string;
};

type MapImageItem = {
    src: string;
    alt: string;
    loading?: "eager" | "lazy";
    priority?: boolean;
};

type ComparisonRow = {
    species: string;
    size: string;
    eyes: string;
    voice: string;
    keyDifference: string;
    emphasized?: boolean;
};

type TimelineItem = {
    monthShort: string;
    monthFull: string;
    watch: string;
    nesting: boolean;
    voice: boolean;
    chicks: boolean;
};

type SourceItem = {
    label: string;
    url: string;
};

export function SpeciesHeroHeader({
    commonName,
    scientificName,
    englishName,
    lead,
}: {
    commonName: string;
    scientificName: string;
    englishName: string;
    lead: ReactNode;
}) {
    return (
        <header className="space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl">
                {commonName}{" "}
                <span className="text-base-content/80">
                    (<em>{scientificName}</em>)
                </span>
            </h1>
            <p className="text-sm text-base-content/60">{englishName}</p>
            <p className="mt-8 max-w-3xl text-lg md:text-2xl font-medium leading-snug text-base-content/90">{lead}</p>
        </header>
    );
}

export function SpeciesHighlights({ title, highlights }: { title: string; highlights: readonly HighlightItem[] }) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-primary/10 via-base-200/55 to-base-100 px-5 py-6 md:px-8 md:py-7">
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-info/10 blur-2xl" />

            <div className="relative space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>

                <div className="grid gap-3 text-sm leading-relaxed text-base-content/85 md:grid-cols-3">
                    {highlights.map((highlight) => (
                        <p key={highlight.title} className="rounded-xl bg-base-100/55 p-4 shadow-sm ring-1 ring-base-300/70">
                            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-primary">{highlight.title}</span>
                            {highlight.description}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function SpeciesContentSections({ sections }: { sections: readonly SpeciesSectionItem[] }) {
    return (
        <>
            {sections.map((section) => (
                <section key={section.title} id={section.id} className="space-y-3">
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                    {section.paragraphs.map((paragraph, index) => (
                        <p key={`${section.title}-${index}`} className="text-base leading-relaxed text-base-content/85">
                            {paragraph}
                        </p>
                    ))}
                    {section.cta ? (
                        <a href={section.cta.href} className="btn btn-sm btn-outline w-fit">
                            {section.cta.label}
                        </a>
                    ) : null}
                </section>
            ))}
        </>
    );
}

export function SpeciesAudioSection({ title, intro, samples }: { title: string; intro: readonly ReactNode[]; samples: readonly AudioSampleItem[] }) {
    return (
        <section className="space-y-3">
            <h2 className="text-2xl font-semibold">{title}</h2>
            {intro.map((paragraph, index) => (
                <p key={`audio-intro-${index}`} className="text-base leading-relaxed text-base-content/85">
                    {paragraph}
                </p>
            ))}

            <div className="space-y-4 mt-5">
                {samples.map((sample) => (
                    <div key={sample.src} className="rounded-xl border border-base-300 bg-base-200/35 p-4">
                        <p className="mb-2 text-sm font-semibold">{sample.title}</p>
                        <audio controls preload="none" className="w-full">
                            <source src={sample.src} type="audio/mp3" />
                            Váš prohlížeč nepodporuje audio přehrávač.
                        </audio>
                        <p className="mt-2 text-xs text-base-content/60">
                            Zdroj:{" "}
                            <a href={sample.sourceUrl} target="_blank" rel="noopener noreferrer">
                                {sample.sourceName}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function SpeciesTriviaSection({ title, items }: { title: string; items: readonly ReactNode[] }) {
    return (
        <section className="space-y-3">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-base-content/85">
                {items.map((item, index) => (
                    <li key={`trivia-${index}`}>{item}</li>
                ))}
            </ul>
        </section>
    );
}

export function QuickFactsCard({ facts, ariaLabel }: { facts: readonly FactItem[]; ariaLabel: string }) {
    return (
        <section className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-base-100 via-base-100 to-base-200/45 shadow-[0_14px_35px_-20px_rgba(16,185,129,0.55)]">
            <div className="pointer-events-none absolute -right-12 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-info/15 blur-3xl" />

            <div className="relative border-b border-base-300/70 px-5 pb-4 pt-5 md:px-6 md:pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">Klíčová data v terénu</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Rychlý fakt box</h2>
                <p className="mt-1 text-sm leading-relaxed text-base-content/70">Nejdůležitější údaje pro rychlou orientaci při pozorování.</p>
            </div>

            <ul className="relative space-y-2 px-4 pb-4 pt-4 md:px-5 md:pb-5" aria-label={ariaLabel}>
                {facts.map((fact) => (
                    <li
                        key={fact.label}
                        className="grid gap-1 rounded-xl border border-base-300/60 bg-base-100/70 px-3 py-3 shadow-sm transition-colors duration-200 hover:border-primary/35 hover:bg-base-100 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:items-start md:gap-3"
                    >
                        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-base-content/60">{fact.label}</span>
                        <span className="text-sm leading-snug text-base-content/90">{fact.value}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export function SpeciesMapSection({
    id,
    title,
    description,
    images,
}: {
    id: string;
    title: string;
    description: ReactNode;
    images: readonly MapImageItem[];
}) {
    return (
        <section id={id}>
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <div className="space-y-2">
                    <p className="text-sm text-base-content/75">{description}</p>
                    <MapLightboxGallery images={images} />
                </div>
            </div>
        </section>
    );
}

export function SpeciesComparisonTable({ title, rows }: { title: string; rows: readonly ComparisonRow[] }) {
    return (
        <section className="card bg-base-100 shadow-sm ring-1 ring-base-300">
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra text-sm">
                        <thead>
                            <tr>
                                <th>Druh</th>
                                <th>Velikost</th>
                                <th>Oči</th>
                                <th>Hlas</th>
                                <th>Klíčový rozdíl</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.species} className={row.emphasized ? "font-semibold" : undefined}>
                                    <td>{row.species}</td>
                                    <td>{row.size}</td>
                                    <td>{row.eyes}</td>
                                    <td>{row.voice}</td>
                                    <td>{row.keyDifference}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export function SpeciesTimelineCard({ title, items }: { title: string; items: readonly TimelineItem[] }) {
    return (
        <section className="card bg-base-100 shadow-sm ring-1 ring-base-300">
            <div className="card-body gap-4">
                <h2 className="card-title text-2xl">{title}</h2>
                <div data-testid="timeline-grid" className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
                    {items.map((item) => (
                        <div key={item.monthShort} data-testid="timeline-month" className="rounded-lg border border-base-300 bg-base-200/50 p-2">
                            <p className="font-semibold mb-2">
                                <span>{item.monthFull}</span>
                            </p>
                            <div className="mt-1 space-y-1">
                                {item.watch === "high" ? (
                                    <span data-testid="timeline-badge-watch-high" className="badge badge-success badge-xs xl:w-full">
                                        vysoká
                                    </span>
                                ) : null}
                                {item.watch === "medium" ? (
                                    <span
                                        data-testid="timeline-badge-watch-medium"
                                        className="badge badge-outline badge-xs border-success/60 text-success xl:w-full"
                                    >
                                        střední
                                    </span>
                                ) : null}
                                {item.watch === "low" ? (
                                    <span data-testid="timeline-badge-watch-low" className="badge badge-ghost badge-xs xl:w-full">
                                        nižší
                                    </span>
                                ) : null}
                                {item.nesting ? (
                                    <span data-testid="timeline-badge-activity" className="badge badge-ghost badge-xs xl:w-full">
                                        hnízdění
                                    </span>
                                ) : null}
                                {item.voice ? (
                                    <span data-testid="timeline-badge-activity" className="badge badge-ghost badge-xs xl:w-full">
                                        hlas
                                    </span>
                                ) : null}
                                {item.chicks ? (
                                    <span data-testid="timeline-badge-activity" className="badge badge-ghost badge-xs xl:w-full">
                                        mláďata
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ObservationCtaCard({ title, description, href, label }: { title: string; description: string; href: string; label: string }) {
    return (
        <section className="card bg-primary/10 shadow-sm ring-1 ring-primary/40">
            <div className="card-body md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className="text-sm text-base-content/80">{description}</p>
                </div>
                <div className="card-actions">
                    <a href={href} className="btn btn-primary">
                        {label}
                    </a>
                </div>
            </div>
        </section>
    );
}

export function SourcesList({ title, intro, sources }: { title: string; intro: ReactNode; sources: readonly SourceItem[] }) {
    return (
        <section className="space-y-3">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-base leading-relaxed text-base-content/80">{intro}</p>
            <ol className="list-decimal space-y-2 pl-6 text-sm leading-relaxed text-base-content/85">
                {sources.map((source) => (
                    <li key={source.url}>
                        {source.label} –{" "}
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="link link-hover">
                            {source.url}
                        </a>
                    </li>
                ))}
            </ol>
        </section>
    );
}
