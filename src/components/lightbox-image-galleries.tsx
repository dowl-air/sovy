"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

type LightboxImage = {
    src: string;
    alt: string;
    priority?: boolean;
    loading?: "eager" | "lazy";
};

type HeroGalleryProps = {
    images: readonly LightboxImage[];
};

type MapGalleryProps = {
    images: readonly LightboxImage[];
};

export function HeroLightboxGallery({ images }: HeroGalleryProps) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = useMemo(() => images.map((image) => ({ src: image.src })), [images]);
    const heroSizes = "(min-width: 1280px) 740px, (min-width: 1024px) 58vw, 100vw";
    const thumbSizes = "(min-width: 1280px) 250px, (min-width: 1024px) 20vw, 50vw";

    if (images.length === 0) {
        return null;
    }

    const openAt = (slideIndex: number) => {
        setIndex(slideIndex);
        setOpen(true);
    };

    return (
        <>
            <div className="grid gap-4 lg:grid-cols-[1.45fr_1fr]">
                <button
                    type="button"
                    className="card h-80 sm:h-96 lg:h-136 overflow-hidden bg-base-100 shadow-md ring-1 ring-base-300 cursor-zoom-in"
                    onClick={() => openAt(0)}
                    aria-label={`Zobrazit obrázek na celou obrazovku: ${images[0].alt}`}
                >
                    <Image
                        src={images[0].src}
                        alt={images[0].alt}
                        className="h-full w-full object-cover"
                        loading={images[0].loading ?? "eager"}
                        priority={images[0].priority}
                        fetchPriority="high"
                        sizes={heroSizes}
                        width={1600}
                        height={1000}
                    />
                </button>

                <div className="grid h-56 sm:h-72 lg:h-136 grid-cols-2 grid-rows-2 gap-4 self-stretch">
                    {images.slice(1).map((image, imageIndex) => (
                        <button
                            key={image.src}
                            type="button"
                            className="card h-full overflow-hidden bg-base-100 shadow-sm ring-1 ring-base-300 cursor-zoom-in"
                            onClick={() => openAt(imageIndex + 1)}
                            aria-label={`Zobrazit obrázek na celou obrazovku: ${image.alt}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover"
                                loading={image.loading ?? "lazy"}
                                sizes={thumbSizes}
                                width={900}
                                height={900}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} plugins={[Zoom]} />
        </>
    );
}

export function MapLightboxGallery({ images }: MapGalleryProps) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = useMemo(() => images.map((image) => ({ src: image.src })), [images]);
    const mapSizes = images.length > 1 ? "(min-width: 768px) 50vw, 100vw" : "100vw";

    return (
        <>
            <div className={images.length > 1 ? "grid gap-3 md:grid-cols-2" : "grid gap-3"}>
                {images.map((image, imageIndex) => (
                    <button
                        key={image.src}
                        type="button"
                        className="overflow-hidden rounded-xl border border-base-300 bg-base-200/30 cursor-zoom-in"
                        onClick={() => {
                            setIndex(imageIndex);
                            setOpen(true);
                        }}
                        aria-label={`Otevřít mapu na celou obrazovku: ${image.alt}`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            className="h-auto w-full object-contain"
                            loading={image.loading ?? "lazy"}
                            sizes={mapSizes}
                            quality={80}
                            width={1400}
                            height={900}
                        />
                    </button>
                ))}
            </div>

            <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} plugins={[Zoom]} />
        </>
    );
}
