# Teknisk dokumentation for Tema 2 eksamensprojekt

Her står vores fælles retningslinjer for dette projekt.

## Navngivning:

Filer bliver navngivet efter hvad siden er til/handler om. Så hvis man laver en component fil til headeren eller hero section, kalder man den header.astro, hero.astro osv.
Component filerne navngives med stort forbogstav og resten småt og helst enkeltord.

## Branches

Vi navngiver branches ved at skrive "navn-" også hvad der laves på branchen.
Eksempelvis: navn-header.

## Arbejdsflow:

Vi aftaler inden vi starter på kodningen, hvordan fordelingen af siderne sker. Man går ikke ind på en andens fil og ændre, med mindre man har kommunikeret det til individet, som har sagt god for det. Man skriver hvad man har added/removed/fixed i commit-beskeden, hvis man har lavet større ændringer. Hvis det er mindre ændringer, så som ændring i font farve, er det tilladt bare at skrive "fixes" etc.
Når man merger en stor feature ind, kommunikerer man det til resten af gruppen via teams/messenger.

## 🚀 Project Structure

Vores astro projekt, med vores mapper og filer, er bygget op i denne struktur

```text
/
├── public/
│   ├── assets/
│   │   └── Layout.astro
│   │   └── Layout.astro
│   │   └── Layout.astro
├── src/
│   ├── components/
│   │   └── -----
│   ├── javascript/
│   │   └── AOSinit.jsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── general.css
└── package.json
```
