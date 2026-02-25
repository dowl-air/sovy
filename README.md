# České sovy

Statický web postavený na Next.js (App Router), Tailwind CSS a DaisyUI.

## Obsah MVP

- Domovská stránka: `/`
- Detaily druhů:
    - `/druhy/vyr-velky`
    - `/druhy/kalous-pustovka`
    - `/druhy/sycek-obecny`
    - `/druhy/vyrecek-maly`
    - `/druhy/syc-rousny`
    - `/druhy/sovice-snezni`
- Postup při nálezu: `/pomoc`
- O projektu: `/o-projektu`

## UI poznámka: časová osa aktivity druhu

Na detailu druhu (`/druhy/vyr-velky`) používá sekce „Kdy mám šanci ho vidět?“ jednotnou legendu badge:

- Aktivita (`hnízdění`, `hlas`, `mláďata`) má neutrální styl.
- Šance pozorování používá jednu škálu: `top` (silná), `střední` (outline), `nižší` (tlumená).

## Lokální vývoj

```bash
pnpm dev
```

## Produkční build

```bash
pnpm build
pnpm start
```

Projekt je navržen jako čistě statický základ bez API routes a bez dynamických parametrů.

## Nasazení

Web je připraven pro okamžité nasazení např. na Vercel.
