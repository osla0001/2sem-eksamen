# Teknisk dokumentation for Tema 2 eksamensprojekt

I dette projekt, har vi arbejdet med re-design af Bakkefest hemmeside. Denne fil, indeholder vores fælles retningslinjer for dette projekt, med korte forklaringer af projektets opbygning og funktionalitet.

## Indholdsfortegnelse

- [Navngivning](#navngivning)
- [Branches](#branches)
- [Arbejdsflow](#arbejdsflow)
- [Projektstruktur](#projektstruktur)
- [CSS](#css)
  - [Skrifttyper](#skrifttyper)
  - [Farver](#farver)
  - [Styles](#styles)
  - [Media querys](#media-querys)
- [Komponenter](#komponenter)
  - [Hero og HeroSmall](#herosmall)
  - [Header og Footer](#footer)
  - [Banner](#banner)
  - [Burger](#burger)
  - [ButtonArrow og ButtonText](#buttonarrow-og-buttontext)
  - [PinkPulse og PinkPulseInstagram](#pinkpulse-og-pinkpulseinstagram)
  - [Posters](#posters)
  - [ProgramCard og ProgramView](#programcard-og-programview)
  - [TimeSchedule](#timeschedule)
  - [Playlist](#playlist)
  - [Sponsor](#sponsor)
  - [WhoAreWe](#whoarewe)
  - [Anniversary](#anniversary)
  - [PracticalSection og PracticalInfoBox](#practicalsection-og-practicalinfobox)
  - [FoodDrinkSection og FoodDrinkInfo](#fooddrinksection-og-fooddrinkinfo)
  - [Frivillig-komponenter](#frivillig-komponenter)
- [Pages](#pages)
  - [index.astro](#indexastro)
  - [program.astro](#programastro)
  - [frivillig.astro](#frivilligastro)
  - [be-volunteer.astro](#be-volunteerastro)
  - [praktisk.astro](#praktiskastro)
  - [bagbakkefest.astro](#bagbakkefestastro)
- [Komponenter og layout](#komponenter-og-layout)
  - [Komponenter](#komponenter-1)
  - [Layout](#layout)
  - [Slots](#slots)
  - [Props](#props)
- [Scripts](#scripts)
  - [ProgramCard.astro](#programcardastro)
  - [Burger.astro](#burgerastro)
  - [Hero.astro](#heroastro)
  - [ProgramView.astro](#programviewastro)
  - [Anniversary.astro](#anniversaryastro)
  - [Burger-menu (Burger.astro)](#burger-menu-burgerastro)
  - [Nedtælling (Hero.astro)](#nedtælling-heroastro)
  - [Dropdown-kort og grid-placering (ProgramView.astro)](#dropdown-kort-og-grid-placering-programviewastro)
- [Databasebrug](#databasebrug)
  - [Hentning af data (ProgramView- og ProgramCard.astro)](#hentning-af-data-programview--og-programcardastro)
  - [Brug af data (ProgramCard.astro)](#brug-af-data-programcardastro)
  - [Udvidet brug i dropdown (ProgramView.astro)](#udvidet-brug-i-dropdown-programviewastro)
- [Konklusion](#konklusion)

## Navngivning:

Filer bliver navngivet efter hvad siden er til/handler om. Så hvis man laver en component fil til headeren eller hero section, kalder man den header.astro, hero.astro osv.
Component filerne navngives med stort forbogstav og resten småt og helst enkeltord. Derudover, er vores asset filer navngivet med små bogstaver, og en konkret beskrivelse af hvad filen indholder.

## Branches

Vi navngiver branches ved at skrive "navn-" også hvad der laves på branchen.
Eksempelvis: navn-header.

## Arbejdsflow:

Vi aftaler inden vi starter på kodningen, hvordan fordelingen af siderne sker. Man går ikke ind på en andens fil og ændre, med mindre man har kommunikeret det til individet, som har sagt god for det. Man skriver hvad man har added/removed/fixed i commit-beskeden, hvis man har lavet større ændringer. Hvis det er mindre ændringer, så som ændring i font farve, er det tilladt bare at skrive "fixes" etc.
Når man merger en stor feature ind, kommunikerer man det til resten af gruppen via teams/messenger.

## Projektstruktur

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
│   │   └── Anniversary.astro
│   │   └── Banner.astro
│   │   └── Burger.astro
│   │   └── ButtonArrow.astro
│   │   └── ButtonText.astro
│   │   └── FoodDrinkInfo.astro
│   │   └── FoodDrinkSection.astro
│   │   └── Footer.astro
│   │   └── Header.astro
│   │   └── Hero.astro
│   │   └── HeroSmall.astro
│   │   └── PinkPulse.astro
│   │   └── PinkPulseInstagram.astro
│   │   └── Playlist.astro
│   │   └── Posters.astro
│   │   └── PracticalInfoBoxsters.astro
│   │   └── PracticalInfoSection.astro
│   │   └── ProgramCard.astro
│   │   └── ProgramView.astro
│   │   └── Sponsor.astro
│   │   └── SubmittedVoulenteer.astro
│   │   └── TimeSchedule.astro
│   │   └── Voulenteer.astro
│   │   └── VoulenteerClick.astro
│   │   └── VoulenteerForm.astro
│   │   └── WhoAreWe.astro
│   ├── javascript/
│   │   └── AOSinit.jsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── bagbakkefest.astro
│   │   └── be-volunteer.astro
│   │   └── frivillig.astro
│   │   └── index.astro
│   │   └── praktisk.astro
│   │   └── program.astro
│   └── styles/
│       └── general.css
│
├── .gitignore
│
├── .prettierrc.mjs
│
├── astro.config.mjs
│
├── package-lock.json
│
├── package.json
│
└── README.md
```

## CSS

Vores CSS struktur er bygget op, henholdsvis efter hvert enkelt komponent - dog har vi en generel CSS fil som samler den CSS som går igen på alle sider.

### Skrifttyper

Vores skrifttyper er embedded i vores layout.astro fil. Vi bruger som overordnet Owners Wide som overskrift, og Owners Narrow som underoverskrifter. Som P benytter vi Neue Hass Grotesk, alle skrifttyper er hentet fra Adobe webfonts.

### Farver

I vores html har vi stylet farvevariabler som følgende:

```css
html {
  --variable: #000000;
  --pink: #e71a73;
  --yellow: #fffd87;
  --green: #3f4e3e;
  --light_pink: #fff5fa;
  --gray: #31302e;
}
```

### Styles

Vi har, som det første i vores CSS, lavet et reset, for at fjerne margin og padding, samt indstille billeder til at være responsive og fjerne standard styles for dem.

Derudover, har vi en white_space class, som bruges til at lave mellemrum i vores sektioner, og en text_margin class, som samler vores sektioner i midten på siden.

### Media querys

Til sidst i vores CSS, har vi samlet overordnede CSS i media querys, for at skabe responsivitet på vores site.

### Måleenheder

Vi bruger px til præcis kontrol over vores whitespace på siden og bruger rem til vores tekst, så den er skalerbar og tilgængelig ift. brugeren indstillinger.

## Komponenter

Projektet består af følgende komponenter, som hver især varetager specifikke UI-elementer og funktioner:

### Hero og HeroSmall

Viser store billedsektioner øverst på udvalgte sider. Bruges til at skabe blikfang og præsentere temaet. `HeroSmall` er en kompakt version med video til undersiderne bagbakkefest og program.

### Header og Footer

`Header` indeholder navigationsmenuen og burger-menu til mobilvisning.
`Footer` afslutter siden med kontaktinfo, sociale links og evt. nyhedsbrev.

### Banner

Et simpelt komponent til visning af det visuelle banner – med tekst af Bakkefest slogan "Danmarks bedste sommerfest".

### Burger

Styrer animation med script og visning af mobilmenu (burgermenu).

### ButtonArrow og ButtonText

To forskellige knap-komponenter:

- `ButtonArrow`: Knap med pil til at navigere til et link.
- `ButtonText`: Almindelig tekstbaseret knap.

### PinkPulse og PinkPulseInstagram

Viser en visuel identitet for Bakkefest gennem puls-animerede elementer og integration med Instagram feed.

### Posters

En sektion af plakater, som illustrerer kunstnerene som spiller til Bakkefest.

### ProgramCard og ProgramView

- `ProgramCard`: Viser information om enkelte arrangementer i programmet.
- `ProgramView`: Viser en samlet visning over dagenes program.

### TimeSchedule

Viser tidsskemaer i visuel og letlæselig form. Typisk brugt til dagens program eller sceneoversigt med hensyn til ældre.

### Playlist

En sektion, der viser en Spotify-afspilningsliste og gør det muligt at høre musik relateret til festivalen direkte på siden.

### Sponsor

Viser sponsorer i et grid-layout. Et billedgalleri af logoer, brugt til at vise partnere af Bakkefest.

### WhoAreWe

Et informativt komponent der fortæller om holdet bag Bakkefest. Tekst og billede er centreret omkring konceptet "Bag Bakkefest".

### Anniversary

Et dekorativt komponent til at fejre jubilæum med grafik og tekst.

### PracticalSection og PracticalInfoBox

Komponenter brugt til at præsentere praktisk information i accordion-kasser, som fx "Find vej", "Parkering" m.m.

### FoodDrinkSection og FoodDrinkInfo

To komponenter der omhandler mad og drikke til festivalen – både oversigt og detaljerede beskrivelser i accordion-kasser.

### Frivillig-komponenter

Der er flere komponenter knyttet til frivillig-tilmelding:

- `VolunteerForm`: Indeholder selve formularen.
- `VolunteerClick`: Håndterer interaktion med frivillig-tilmeldingskomponenten, som går igen på siderne.
- `Volunteer` og `Volunteer2`: Viser information til interesserede frivillige.
- `SubmittedVolunteer`: Vises efter gennemført tilmelding.

## Pages

Projektets sider er defineret i `pages/` og udgør hovednavigationen på hjemmesiden:

### index.astro

Forsiden for Bakkefest med introduktion, hero, program og stemningsskabende indhold. Bygger på `Hero`, `Playlist`, `PinkPulse`, `WhoAreWe` og andre nøglekomponenter.

### program.astro

Viser dagens program med komponenterne `ProgramCard`, `TimeSchedule` og `ProgramView`.

### frivillig.astro

Side målrettet frivillige – hvordan man tilmelder sig og hvilke opgaver, man kan hjælpe med. Bruger `Volunteer`, `VolunteerForm`, `SubmittedVolunteer` m.fl.

### be-volunteer.astro

En engelsk version af frivillig-siden, sandsynligvis rettet mod internationale brugere eller deltagere.

### praktisk.astro

Viser praktisk information om festivalen – typisk brug af `PracticalInfoBox` og `PracticalSection`.

### bagbakkefest.astro

Fortæller om idéen og teamet bag Bakkefest. Bruger `WhoAreWe`, `Anniversary` og lignende storytelling-komponenter.

## Komponenter og layout

### Komponenter

I Astro er en komponent en genanvendelig fil med .astro-endelse. Den fungerer som en separat byggeklods, som kan sættes sammen til at lave en komplet fil. Det kan bruges både til lokale og globale komponenter gennem siderne.

### Layout

Et layout er et specielt type komponent, der bruges til at strukturere sider og genbruge fælles elementer. Eksempelvis head-elementet og body.

### Slots

Vi benytter slot til at indsætte dynamisk indhold i et komponent. Det er sektionen, hvor det indhold man vil indsætte inde for vinkelparenteserne.

#### Props

Const bruges sammen med Astro.props til at modtage og bruge egenskaber i et komponent. Props gør det muligt at sende data fra et forælder-komponent eller en side til et anden komponent. Det er en måde for komponenter og sider at kommunikere og sende data.

## Scripts

I denne sektion, beskriver vi vores brug af scripts, hvad de er brugt til og hvordan de er bygget op.

### ProgramCard.astro

- Formatterer starttidspunktet ved at slice `hh:mm:ss` til `hh.mm`.

### Burger.astro

- Indeholder burger-menuen.
- JavaScript-scriptet håndterer klik:

  - Animerer burger-ikonet.
  - Viser/skjuler menuen.
  - Tilføjer eller fjerner `no-scroll` på `<body>` for at forhindre scrolling.
  - Lukker menuen hvis brugeren klikker på et link.

### Hero.astro

- Viser en nedtælling til festivalens start.
- Scriptet opdaterer hvert sekund:

  - Viser dage, timer, minutter og sekunder.
  - Hvis tiden er udløbet, vises "00d 00t 00m 00s".

### ProgramView\.astro

- Importerer `ProgramCard.astro`.
- Mapper hvert event til en komponent + en dropdown.
- Dropdown åbnes/lukkes med `toggleDropdown(idx)`:

  - Justerer placering i grid afhængigt af skærmbredde.
  - Lytter til `resize` og klik udenfor for at opdatere/lukke dropdown.

### Anniversary.astro

- Indeholder et script der loader Flickr's embed-kode:

```html
<script
  async
  src="//embedr.flickr.com/assets/client-code.js"
  charset="utf-8"
></script>
```

Bruges til at vise billeder direkte fra Flickr.

### Burger-menu (Burger.astro)

```js
// Aktiverer og deaktiverer mobilmenu og tilhørende animationer
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    burger.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});
```

### Nedtælling (Hero.astro)

```js
// Opdaterer countdown hvert sekund frem mod festivaldatoen
const countdownDate = new Date("Jul 11, 2025 16:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}t ${minutes}m ${seconds}s`;

  if (distance < 0) {
    timer.innerHTML = "00d 00t 00m 00s";
  }
}, 1000);
```

### Dropdown-kort og grid-placering (ProgramView\.astro)

```js
// Toggler visning af dropdown-beskrivelser i programmet
function toggleDropdown(idx) {
  document
    .querySelectorAll(".dropdown-row")
    .forEach((el) => (el.style.display = "none"));
  const dropdown = document.getElementById(`dropdown-${idx}`);

  if (dropdown) {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
    const columns = getColumns();
    const gridRow = Math.floor(idx / columns) + 2;
    dropdown.style.gridRow = gridRow;
  }
}

// Genberegner placering ved resize
window.addEventListener("resize", () => {
  document
    .querySelectorAll(".dropdown-row[style*='display: block']")
    .forEach((dropdown) => {
      const idx = Number(dropdown.id.replace("dropdown-", ""));
      const columns = getColumns();
      const gridRow = Math.floor(idx / columns) + 2;
      dropdown.style.gridRow = gridRow;
    });
});

// Luk dropdown hvis man klikker udenfor
window.addEventListener("mousedown", (event) => {
  const openDropdown = document.querySelector(
    ".dropdown-row[style*='display: block']",
  );
  if (
    openDropdown &&
    !openDropdown.contains(event.target) &&
    !event.target.classList.contains("card-click")
  ) {
    openDropdown.style.display = "none";
  }
});
```

---

## Databasebrug

I dette projekt har vi gjort brug af supabase, til at lave et database-sæt omkring festivallens events. Dataerne er opdelt i følgende katagorier:

- id: automatisk genereret for at identificere indholdet enkeltvis
- created_at: automatisk generet for at se tidspunktet for oprettelse
- name: kort navn / overskrift på eventet
- description: beskrivelse af eventet
- img: billede af eventet
- spotify: link til spotify embed
- title: en kort beskrivende overskrift af eventet
- time_start: tidspunktet for eventet
- day: dagen for evenetet

### Hentning af data (ProgramView- og ProgramCard.astro)

```ts
const url = "https://yhioxktrqmlazkwnvbit.supabase.co/rest/v1/events?select=*";
const key = "[Supabase API-nøgle]";

const options = {
  headers: {
    apikey: key,
  },
};

const data = await fetch(url, options).then((res) => res.json());
```

- Bruger Supabase API til at hente alle events.
- Data mappes og vises via `ProgramCard`.

### Brug af data (ProgramCard.astro)

```ts
const { event } = Astro.props;
const formattedTime = event.time_start.slice(0, 5).replace(":", ".");
```

- Viser navn, billede og formateret tidspunkt.

### Udvidet brug i dropdown (ProgramView\.astro)

```astro
<h2>{event.name}</h2>
<h4>
  OPLEV {event.name} SPILLE KL. {event.time_start.slice(0, 5).replace(":", ".")}
  {event.day}
</h4>
<p>{event.description}</p>
<iframe src={event.spotify}></iframe>
```

- Viser beskrivelse og indlejret Spotify-afspiller for hvert event.

## Konklusion

Dette dokumentation har haft til formål at skabe et klart overblik over det tekniske setup bag vores Bakkefest-hjemmeside. Ved at opstille tydelige navngivningskonventioner, struktur og arbejdsmetoder har vi sikret en effektiv og velfungerende samarbejdsproces. Projektet er opbygget med komponentbaseret struktur i Astro, integrerer ekstern data via Supabase og benytter scripts til interaktiv funktionalitet. Denne struktur har gjort det muligt at bygge en skalérbar, moderne og brugervenlig weboplevelse med fokus på både design og funktionalitet.
