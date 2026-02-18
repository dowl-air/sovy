import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "O projektu | České sovy",
    description: "Informace o cíli projektu České sovy a možnostech podpory.",
};

export default function OProjektuPage() {
    return (
        <article className="space-y-6">
            <h1 className="text-3xl font-bold">O projektu</h1>

            <p>Cílem projektu je nabídnout přehledné a srozumitelné informace o sovách v České republice a podpořit jejich ochranu.</p>

            <section className="card bg-base-100 shadow-sm ring-1 ring-base-200">
                <div className="card-body prose max-w-none">
                    <h2>Proč web vznikl</h2>
                    <p>
                        Ve veřejném prostoru často chybí jednoduché a praktické informace o tom, jak se chovat při setkání se zraněnou sovou. Tento
                        web slouží jako rychlý rozcestník.
                    </p>

                    <h2>Kontakt</h2>
                    <p>
                        Dotazy a spolupráce: <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                </div>
            </section>

            <a href="#" className="btn btn-primary">
                Podpořit projekt
            </a>
        </article>
    );
}
