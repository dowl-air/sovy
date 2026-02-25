import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type FaqItem = {
    id: string;
    question: string;
    answer: ReactNode;
};

type FaqProps = {
    title?: string;
    items: readonly FaqItem[];
    defaultOpenIndex?: number;
    className?: string;
};

export function Faq({ title, items, defaultOpenIndex = 0, className }: FaqProps) {
    return (
        <section className={cn("space-y-4", className)}>
            {title ? <h2 className="text-2xl font-bold md:text-3xl">{title}</h2> : null}

            <div className="space-y-3">
                {items.map((item, index) => (
                    <details
                        key={item.id}
                        className="collapse collapse-arrow overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-base-100 via-base-100 to-primary/5 transition-all duration-300 hover:border-primary/45"
                        open={index === defaultOpenIndex}
                    >
                        <summary className="collapse-title py-5 text-lg font-semibold">{item.question}</summary>
                        <div className="collapse-content border-t border-base-300/60 pt-4 text-sm leading-relaxed text-base-content/80">
                            {item.answer}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
