import Link from "next/link";

type OwlCardProps = {
    commonName: string;
    scientificName: string;
    description: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    statusLabel?: string;
};

export function OwlCard({ commonName, scientificName, description, href, imageSrc, imageAlt, statusLabel }: OwlCardProps) {
    return (
        <article className="card h-full bg-base-100 shadow-md ring-1 ring-base-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary/35">
            <figure className="aspect-4/3 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                />
            </figure>

            <div className="card-body gap-3">
                {statusLabel ? <div className="badge badge-primary badge-outline w-fit">{statusLabel}</div> : null}

                <h3 className="card-title text-xl leading-tight md:text-2xl">
                    <Link href={href} className="hover:underline">
                        {commonName}
                    </Link>
                </h3>

                <p className="text-sm text-base-content/70">
                    <em>{scientificName}</em>
                </p>

                <p className="text-sm leading-relaxed text-base-content/85">{description}</p>

                <div className="card-actions mt-auto justify-end pt-2">
                    <Link href={href} className="btn btn-primary btn-sm">
                        Detail druhu
                    </Link>
                </div>
            </div>
        </article>
    );
}
