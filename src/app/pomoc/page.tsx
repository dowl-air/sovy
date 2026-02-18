import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Co dělat při nálezu sovy | České sovy",
    description: "Praktický postup při nálezu zraněné sovy včetně kontaktování záchranné stanice.",
};

export default function CoDelatPage() {
    return (
        <article className="space-y-6">
            <h1 className="text-3xl font-bold">Co dělat při nálezu zraněné sovy</h1>

            <div className="card bg-base-100 shadow-sm ring-1 ring-base-200">
                <div className="card-body">
                    <ol className="list-decimal space-y-2 pl-6">
                        <li>Zachovat klid.</li>
                        <li>Nedotýkat se bez ochrany.</li>
                        <li>Umístit do krabice s větracími otvory.</li>
                        <li>Kontaktovat nejbližší záchrannou stanici.</li>
                    </ol>
                </div>
            </div>

            <div className="alert alert-warning">
                <span>Nikdy sovu nekrmte ani nepodávejte vodu.</span>
            </div>
        </article>
    );
}
