# :orange_square: Dokument zahtev


|                             |                                                                |
| :-------------------------- | :------------------------------------------------------------- |
| **Naziv projekta**          | Aplikacija produktivnosti in organizacije                               |
| **Člani projektne skupine** | Arne Gašperšič, Jan Merhar, Jure Mržek, Anže Rifelj Tričkovič, Klemen Kolar |
| **Kraj in datum**           | 26.03.2023                                  |

## Povzetek projekta

V tem projektu smo se odločili izdelati spletno aplikacijo za produktivnost z integriranimi funkcionalnostmi socialnega omrežja. Aplikacija uporabnikom ponuja orodja za izboljšanje produktivnosti z dodajanjem, urejanjem in brisanjem opravil, pregledovanjem uporabniških profilov in spremljanjem statističnih podatkov o produktivnosti. Aplikacija ima tudi dobro integriran vmesnik REST API, do katerega lahko dostopajo zunanji uporabniki. Uporabniki lahko opravila vnašajo in upravljajo z operacijami CRUD, aplikacija pa ponuja tudi časovnik, s katerim lahko uporabniki bolje organizirajo svoj čas. Poleg tega je aplikacija integrirana z Googlovim koledarjem, kar uporabnikom omogoča upravljanje zunanjih dogodkov v aplikaciji z uporabo operacij CRUD. Aplikacija ponuja tudi funkcionalnost družbenega omrežja, kot je iskanje drugih uporabnikov po uporabniškem imenu.

## 1. Uvod

 Cilji našega projekta so v grobem razviti aplikacijo ki deluje kot socialno omrežje in pomaga ljudem z organizacijo dela. Pričakujemo, da bodo ljudje našo aplikacijo uporabljali vsakodnevno za organizacijo svojega dela bodisi za šolo, službo, faks ali pa tudi pri domačih opravilih in podobno. V aplikaciji bodo tudi vključene funkcionalnosti socialnega omrežja, kjer bodo lahko prijatelji med seboj spremljali učinkovitost, kar jih bo tudi dodatno spodbudilo k delu in organizaciji le tega. Aplikacijo bomo tudi povezali z Google koledarjem z namenom, da ljudem olajšamo uporabo in jih s tem tudi dodatno motiviramo za uporabo naše aplikacije. Pričakujemo, da bodo naši uporabniki ostali aktivni dalj časa, saj je naša rešitev namenjena dolgotrajni uporabi. Sproti bomo seveda tudi skrbeli za odpravljanje hroščev, kateri bi lahko uporabnike odvrnili od nadaljne uporabe. S tem namenom bomo tudi implementirali možnosti za sporočanje napak s strani uporabnikov do nas razvijalcev, za možnost čimprejšnjega odpravljanja le teh.
  -->

Za projekt naše ekipe pri tem predmetu smo izbrali načrtovanje in izdelavo aplikacijo, ki deluje oz. ima lastnosti socialnega omrežja z implementacijo sledenja, ogleda uporabniških profilov in ogled statistik produktivnosti ter uporabnikom ponuja orodja, s katerimi bo poskrbel in izboljšal svojo produktivnost z dodajanjem, spreminjanjem in brisanjem opravil ter dobro integracijo Googlovih koledarskih storitev preko CRUD operacij. Aplikacija bo tudi ponujala svoj zunanji REST API vmesnik, do katerega bodo lahko dostopali tudi zunanji uporabniki, ki imajo uporabniški račun v naši spletni aplikaciji. S to aplikacijo želimo zbližati in spodbuditi težnjo k boljši produktivnosti tako doma kot v delovnem okolju ter istočasno povečati produktivnost z uporabo zunanjih storitev, ki že same po sebi slonijo na tem, da svojim uporabnikom olajšajo vsakdanja enostavne in malce težja opravila.
Naša spletna aplikacija za produktivnost bo ponujala vnos in upravljanje opravil po principu CRUD operacij, to je možnost vnosa opravila, pri čemer za vsako opravilo uporabnik navade naslednje podatke: ime novo dodanega opravila, opis tega opravila, ki pove o čem se gre pri opravilu oz. ponudi dodaten kontekst in na vse zadnje tudi čas ter datum opravila, ki je podan kot timestamp. Uporabniku ni na voljo le vnos novih opravil, temveč tudi samo spreminjanje le-teh, pri čemer mora navesti nove vrednosti za polja: ime opravila, opis opravila ter seveda čas in datum opravila, ki ga vnese s pomočjo grafičnih elementov spletne aplikacije. Ni mu potrebno spremeniti vseh vnosnih polj v obrazcu za spremembo opravila, saj lahko spremeni le določene lastnosti ter te tudi shrani. Prav tako lahko tudi dodana in morebitno spremenjena uporabniška opravila zbriše. Uporabniku tudi nudimo orodje za boljšo časovno organizacijo, saj je to eden izmed težav s katerimi se tudi mi, naša ekipa, osebno srečuje na vsakdanji ravni. To je seveda časovnik. Časovnik uporabniku omogoča, da si določi neko časovno obdobje, v katerem se bo popolnoma osredotočil na opravljanje nekega opravila oz. dogodka iz zunanjega Googlovega koledarja. Ko pa uporabnik zaključi z aktivnim časovnikom pa mu so ponujene naslednje tri opcije: začni pavzo, preskoči pavzo ali pa končaj časovnik. Sprva bo uporabnik imel pred definirane časovne intervale v časovniku, zato jih lahko tudi prilagodi sam svojim potrebam po pavzi in sami duraciji časovnika. Za še boljšo časovno organizacijo mu v okviru spletne aplikacije ponujamo tudi integracijo z Googlovim Calendarjem, za kar mora uporabnik imeti aktiven uporabniški račun pri Googlu, ki ima tudi vsebino v slovej Google koledarju. Preden pa lahko začne uporabljati storitve pa more še povezati svoj Google račun z našo spletno aplikacijo ter ji omogočiti dostop do njegovih dogodkov. Naša aplikacija omogoča uporabniku tudi CRUD operacije nad zunanjimi dogodki iz Googlovega koledarja. Te operacije so: vnos novega dogodka, sprememba obstoječega dogodka, izbris zunanjega dogodka ter na vse zadnje tudi samo prikaz uporabnikovih dogodkov v naši spletni aplikaciji. Poleg že omenjenih produktivnih orodij ponujamo tudi socialne funkcionalnosti. Tukaj ima uporabnik možnost iskanja drugih uporabnikov po uporabniškem imenu. Vsakega iskanega uporabnika lahko tudi začne slediti in ti sledeči uporabniku se mu prikažejo na njegovem pogledu vseh uporabnikov, ki mu sledijo. Prav tako lahko drugi uporabiku slediju našemu uporabniku, kar je prav tako vidno v nekem drugem pogledu. Za vsakega uporabnika, ki mu sledimo, lahko izbrišemo sleditev in obratno, lahko druge uporabnike nehamo slediti. Pri tem pa imamo možnost ogled raznih statistik za vsakega uporabnika, ki ga najdemo bodisi preko iskalnika uporabnika bodisi če se drug drugega sledimo. Ker seveda programerji delamo napake, ki jih sprva ne opazimo, obstaja možnost, da jih bo opazil kakšen uporabnik. Zato imamo tudi na voljo možnost podajanja poročil o raznih nepravilnih delovanjih, na katere lahko naivni uporabnik naleti. V vsa poročila o nepravilnem delovanju pa ima moč vpogledati naš razvijalec, ki ta nepravilna delovanja razišče ter jih odpravi oz. izbriše sporočilo, v primeru, da nepravilno delovanje ni bilo najdeno oz. ponovljena s strani razvijalca. Za naše analitične poizvedbe imamo na voljo izvoz podatkov iz produkcijske podatkovne baze v podatkovno skladišče. To ima moč opravljati le analitik, ki najprej prenese podatke v podatkovno skladišče ter jih pozneje tam analizira, manipulira ter išče informacije iz njih. Na vse zadnje pa še omogočamo kreiranje računov zaposlenih, tako da administrator dostopa do spletnega vmesnika, ker lahko ustvari nov račun zaposlenega.
Za našo aplikacijo morajo veljati tudi nefunkcionalne značilnosti. Zagotavljati moramo, da je strotitev dostopna 24 ur na dan, 7 dni na teden in 365 dni na leto z izjemo ustavitve delovanja zaradi popravkov in posodabljanja aplikacije, ali pa nepredvidenih napak v sistemu. Hkrati mora biti dovolj zmogljivo oz. moramo imeti zadosti močno infrastrukturo, da bo stregla 50 tisoč uporabnikom istočasno. Želimo tudi enostavno in hitro integracijo z zunanjimi vmesniki, zato smo se zavzeli za največ 30 sekundno okno, v katerem se za prenos podatkov iz Google Calendarja prenesejo vsi podatki za izboljšano uporabniško izkušnjo. Ne želimo preseči časa nedelovanja tedensko za več kot 30 minut. Pri čemer pa mora biti tudi uporabniški vmesnik estetsko dovršen, pregleden in enostaven za uporabo ter moramo zagotavljati dobro uporabniško izkušnjo. Seveda pa mora biti aplikacija dosegljiva celotnemu svetu, saj bomo tako lažje povečali število vseh uporabikov. Pri čemer moramo biti pazljivi, da omejimo uporabnikom dostop do izključno njihovih podatkov oz. do podatkov, nad katerim imajo avtorizacijo. Za vse to skrbi tudi GDPR, zaradi katerega je varnost še pomembnjejša. Seveda se bomo zaradi GDPR-ja izognili hrambo občutjlivih osebnih podatkov v našem podatkovnem skladišču.
V sklopu spletne aplikacije bomo ponujali tudi naš svoj zunanji CRUD REST API. Preko našega REST API vmesnika bomo zunanjim uporabnikom, ki imajo registriran uporabniški račun, omogočili branje opravil, spreminjanje opravil, brisanje oopravil ter na vse zadnje tudi dodajanje novih opravil. Imeli bomo REST API endpointe, do katerih bodo zunanji uporabniki dostopali tako, da bodo v glavo zahtevkov po podatkih podali svoje podatke za prijavo, ki bodo tudi primerno kodirani za varno komunikacijo preko spleta.

## 2. Uporabniške vloge

### - Prijavljeni zunanji uporabnik
Gre za naše stranke. Uporabljajo storitve za izboljšanje organizacije in produktivnosti, poročajo o nepravilnem delovanju, sledijo drugim uporabnikov in imajo pregled nad lastno in sledivčevo produktivnostjo.

### - Neprijavljeni uporbanik
Ima dostop do storitev izboljšanja produktivnosti (upravljanje in uporaba časovnika, urejanje seznama opravil) in do poročanja o nepravilnem delovanju.

### - Razvijalec
Zaposleni, ki dostopa do prijav nepravilnega delovanja in upravlja z njimi.

### - Analitik
Zaposeni, ki upravlja podatkovni tok izbranih podatkov o aktivnostih uporabnikov v podatkovno skladišče za namene podatkovne analitike.

### - Administrator
Zaposleni, ki kreira in upravlja račune zaposlenih.

## 3. Slovar pojmov

#### - Socialno omrežje
Spletna storitev, kjer se uporabniki med sabo povezujejo in kjer uporabniki delijo informacije, ki so relevantne za druge uporabnike, ki si jih lahko oglejujejo.

#### - Sledilec
Oseba, ki se poveže z uporabnikom na socialnem omrežju v smislu, da želi videvati informacije od sledenega uporabnika, ki se jih odloči s sledilcem deliti.

#### - Razvijalec
Zaposleni, ki je odgovoren za razvoj in vzdrževanje naše aplikacije.

#### - Časovnik
Orodje, ki je namenjeno odštevanju v naprej določene količine časa. Sestavljen je iz zaslona, kjer je prikazan trenutni čas, gumbov za začetek, ustavitev in resetiranje odštevanja in iz menuje, kjer je moč določiti količino časa, ki se bo odteval.

#### - Nepravilno delovanje
Napaka, kjer aplikacija ne deluje tako, kot je bil namen pri razvoj, ali pa ne deluje po željah uporabnika.

#### - Organizacija
Sposobnost imeti dobro načrtovan, pregleden in urejen pogled nad dogodki in njihovo obravnavo.

#### - Uporabniška vloga
Delitev uporabnikov na definirane skupine. Skupine se definirajo po skupinah uporabnikov, ki bodo aplikacijo uporabljali na enak in točno določen način.

#### - Opravilo
Aktivnost, ki jo je potrebno opraviti, ki ima neko stanje, ki prikazuje, če je aktivnost že opravljena ali ne, poleg tega pa vsebuje še podatke o času, do katerega uporabnik želi aktivnost opraviti.

#### - Dogodek
Navadno pomembnejša stvar za uporabnika, ki se zgodi ob točno definiranemu datumu in času in si jo uporabnik želi zabeležiti in imeti pregled nad vsemi dogodki, pri nas ima tak pregled na koledarju.

## 4. Diagram primerov uporabe

![DPU](https://teaching.lavbic.net/plantuml/png/VLNDSjem4BxxAJJqKWumWGQIz90PyjCCqvOmeVIGoMMnX14OhKUsIOUcZv27oBiaxzMLB1ax8RaGjFjzttvQBPjq9LK26jPi1k4gqfWh7cACccKQL4efeR8WBL5Sp26Fir_YJpQ8PQJMb6OXVGXTGUMf224Lx6_0AhhdLlT-8JDXugYvq4NiK-_RsV7bEKL1QxmlWhEOcC6_YYo46Ugp2g-0l0RiBHZ4Ofwn39cMqI9ZN6eHPX9L45WIQzpc2jHIiZkL9wXXfkIgmGOJTZlrYB6MIzZ4Iw7UeiOtqyJZHYBv03aQbu83lfPAfjHfEjhauEBdS5Ic5SGoSxJ1QF339svWkw42iGXjwkBozwjBtAcKPCNQfYUTG64ctCLnJW7sbKqiWAsCGOvfXWamZdHGyF8a8c23yN09RIzyXHZ5WjBdL5PnAEnUNLzV1O7f92YJRWoIMAuW97CiqSZpLIOtYjGbaugXZa39hKcBXfqDFoUDgMqHaFxp8wIueMP1qTTffuhxZcekernB6iwbs0VlLk75Yu4fVgUGc-yEzgKAkoRldC7EBFMF8Z8EnSRX3-jkjNbTQq73ysEkS4ESBIH8F2KNZjIhaRGe6AdOAbYRkwBHaR53zwle2TKNnHNByK5lvgYA7AOhU0zu_FQMMqXZLAPw_O4SuwJMFjH83JRgo9Get2gQ6XeP4UE6Chb_fOEtfJZo23cvCKF5LaWnq3j6vxsMSYneR3-l-nulSNRbmZ2zNJfvirwXzlYJXPsbZPFWa1MbiJ8G2rRfhNrf1kx7YLwqDY73xGpZvSkJUvczhUxqFc2utugPyogbJ_imCBk6jLgjXrEpd6YVi9PPRkuSq3gWx2dxR6xQ3CpYAC-7T3OhnWTwJIzdZvHsuWMytwncZsgdazg92WMtPCGk6SScSHFoOWS4eR_z9cjnl5SKfSraDeYpNw0wJGFgT9i5iTWmjZXhjotak4dhIwemphdms7QUj3s_dksMF9kX_rkqlb8hsV5E7ag_pjyk43ZD6h2_yrX6_WC0)

**Diagram primerov uporabe** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DPU.puml))

## 5. Funkcionalne zahteve

### 5.1 Urejanje seznama opravil

Prijavljeni uporabnik in neprijavljeni uporabnik lahko dodaja in upravlja opravila. To izvaja preko grafičnega vmesnika spletne palikacije. Za vsako opravilo lahko določi in spreminja ime opravila, opis ter čas in datum opravila. Opravila lahko tudi izbriše ali jih pa opravi.

#### Pogostost uporabe

Zelo pogosto, saj je to glavna funkcionalnost naše spletne aplikacije, s katero bomo privedli nove uporabnike.

#### Osnovni tok

a) Vnos novega opravila po imenu

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Vnos in urejanje seznama opravil
2. Sistem prikaže vnosno polje za vnos imena opravila in še neopravljena opravila
3. Prijavljeni uporabnik in neprijavljeni uporabnik vnese ime opravila in ga potrdi
4. Sistem prikaže vnešeno opravilo poleg vseh ostalih

b) Spreminjanje lastnosti opravila

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Vnos in urejanje seznama opravil
2. Sistem prikaže vnosno polje za vnos imena opravila in še neopravljena opravila
3. Prijavljeni uporabnik in neprijavljeni uporabnik izbere na opravilo, ki ga želi spremeniti
4. Sistem pokaže vmesnik, kjer lahko spremeni lastnosti opravila
5. Prijavljeni uporabnik in neprijavljeni uporabnik vnese spremembe ter jih potrdi
6. Sistem zapre vmesnik in uveljavi spremembe

c) Brisanje opravila

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Vnos in urejanje seznama opravil
2. Sistem prikaže vnosno polje za vnos imena opravila in še neopravljena opravila
3. Prijavljeni uporabnik in neprijavljeni uporabnik izbere na opravilo, ki ga želi izbrisati ter pritisne na gumb za izbris
4. Sistem izbriše opravilo iz seznama

#### Izjemni tok

1. Uporabnik ne more dostopati do opravila, ker ga je že na drugem sistemu opravil
2. Uporabnik ne more spreminjati opravila, ker ga je že na drugem sistemu opravil
3. Uporabnik ne more brisati opravila, ker ga je že na drugem sistemu opravil

#### Pogoji

- Pri funkcionalnosti Vnos in urejanje seznama opravil mora biti uporabnik bodisi neprijavljeni uporabnik ali prijavljeni uporabnik

#### Posledice

- Dodajanje novega opravila ali
- Spreminjanje obsoječega opravila ali
- Brisanje obsoječega opravila.

#### Posebnosti

#### Prioriteta

Must have - opravila predstavljajo glavno funkcionalnost naše spletne aplikacije, zato je pomambno, da je implementirana.

#### Sprejemni test

a)

- Prijavi se kot prijavljeni uporabnik, izberi opravila in vnesi novo opravilo, rezultat je novo dodano opravilo
- Prijavi se kot neprijavljen uporabnik, izberi opravila in vnesi novo opravilo, rezultat je novo dodano opravilo

b)

- Prijavi se kot prijavljeni uporabnik, izberi opravila in spremeni obstoječe opravilo, rezultat je spremenjeno obstoječe opravilo
- Prijavi se kot neprijavljen uporabnik, izberi opravila in spremeni obstoječe opravilo, rezultat je spremenjeno obstoječe opravilo

c)

- Prijavi se kot prijavljeni uporabnik, izberi opravila in izbriši obstoječe opravilo, rezultat je izbrisano obstoječe opravilo
- Prijavi se kot neprijavljen uporabnik, izberi opravila in izbriši obstoječe opravilo, rezultat je izbrisano obstoječe opravilo

### 5.2 Konfiguriranje časovnika

Prijavljeni uporabnik in neprijavljeni uporabnik lahko uporablja časovnika. Za časovnik lahko določi poljubno časovno trajanje. Prav tako lahko nastavi čas za odmor po končanem odmoru.

#### Pogostost uporabe

Redko - mnogo uporabinkov bo uporabljajo to funkcionalnost s priveztimi nastavitvami, ki so prilagojene veliki večini uporabnikov ter uporablja že uporabnikom znane nastavitve.

#### Osnovni tok

a)

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Konfiguriranje časovnika
2. Sistem prikaže polje za spremembo časa časovnika in pavze
3. Prijavljeni uporabnik in neprijavljeni uporabnik določi nov čas časovnika in ga z pritiskom na gumb potrdi
4. Sistem uveljavi spremembe in spremeni čas časovnika

b)

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Konfiguriranje časovnika
2. Sistem prikaže polje za spremembo časa časovnika in pavze
3. Prijavljeni uporabnik in neprijavljeni uporabnik določi nov čas pavze in ga z pritiskom na gumb potrdi
4. Sistem uveljavi spremembe in spremeni čas časovnika

#### Izjemni tok

1. Uporabnik ne more nastaviti aktivirati časovnika, ko je ta že bil aktiviran.

#### Pogoji

- Pri funkcionalnosti Konfiguriranje časovnika mora biti uporabnik prijavljen kot prijavljeni uporabnik

#### Posledice

- Spremenitev trajanja časovnika ali
- Spremenitev trajanja pavze.

#### Posebnosti

- Zapis časa v formatu mm:ss.

#### Prioriteta

Won't have - nastavljanje časovnika ne daje velike teže pri sami uoprabnosti naše aplikacije, saj so že pred definirani časovniki prilagojeni večini uporabnikovim potrebam.

#### Sprejemni test

a)

- Prijavi se kot prijavljeni uporabnik, izberi časovnik in mu spremeni trajanje, rezultat je spremenjeno trajanje časovnika
- Prijavi se kot neprijavljen uporabnik, izberi časovnik in mu spremeni trajanje, rezultat je spremenjeno trajanje časovnika

b)

- Prijavi se kot prijavljeni uporabnik, izberi pavzo in ji spremeni trajanje, rezultat je spremenjeno trajanje pavze
- Prijavi se kot neprijavljen uporabnik, izberi pavzo in ji spremeni trajanje, rezultat je spremenjeno trajanje pavze

#### Alternativni tok

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Konfiguriranje časovnika
2. Sistem prikaže polje za spremembo časa časovnika in pavze
3. Prijavljeni uporabnik in neprijavljeni uporabnik določi nov čas časovnika in ga z pritiskom na gumb potrdi
4. Sistem uveljavi spremembe in spremeni čas časovnika
5. Sistem prikaže gumb za aktivacijo novo nastavljenega časovnika
6. Uporabnik aktivira časovnik

### 5.3 Uporaba časovnika

<!--
  - https://levelup.gitconnected.com/creating-browser-notification-in-javascript-79e91bfb76c8
 -->

Prijavljeni uporabnik in neprijavljeni uporabnik lahko potem, ko nastavi časovnik, tudi aktivira. Po končanem časovniku se uporabnika opozori z obvestilom in ga vpraša ali že nadaljevati s časovnikom za pavzo ali ponovi z istim časovnikom.

#### Pogostost uporabe

Zmerno pogosto - ta funkcionalnost je dodatni del aplikacije, ni pa glavna atrkcija za uporabnika.

#### Osnovni tok

a) Uporabnik požene časovnik

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Uporaba časovnika
2. Sistem prikaže časovnik in gumb za začetek le-tega
3. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne gumb za začetek časovnika
4. Sistem prične s časovnikom in začne z odštevanjem časa
5. Sistem po končanem časovniku uporabnika obvesti o koncu
6. Sistem uporabniku ponudi, da zaključi časovnik, začne pavzo ali preskoči pavzo

b) Uporabnik po končanem časovniku zaključi časovnik

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Uporaba časovnika
2. Sistem prikaže časovnik in gumb za začetek le-tega
3. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne gumb za začetek časovnika
4. Sistem prične s časovnikom in začne z odštevanjem časa
5. Sistem po končanem časovniku uporabnika obvesti o koncu
6. Sistem uporabniku ponudi, da zaključi časovnik, začne pavzo ali preskoči pavzo
7. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne na gumb za zaključitev časovnika
8. Sistem zaključi časovnik

c) Uporabnik po končanem časovniku začne pavzo

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Uporaba časovnika
2. Sistem prikaže časovnik in gumb za začetek le-tega
3. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne gumb za začetek časovnika
4. Sistem prične s časovnikom in začne z odštevanjem časa
5. Sistem po končanem časovniku uporabnika obvesti o koncu
6. Sistem uporabniku ponudi, da zaključi časovnik, začne pavzo ali preskoči pavzo
7. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne na gumb za pavzo
8. Sistem prične s pavzo in začne z odštevanjem časa
9. Sistem po končani pavzi uporabnika obvesti o koncu
10. Sistem uporabniku ponudi, da zaključi časovnik, začne pavzo ali preskoči pavzo

d) Uporabnik po končanem časovniku preskoči pavzo

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Uporaba časovnika
2. Sistem prikaže časovnik in gumb za začetek le-tega
3. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne gumb za začetek časovnika
4. Sistem prične s časovnikom in začne z odštevanjem časa
5. Sistem po končanem časovniku uporabnika obvesti o koncu
6. Sistem uporabniku ponudi, da zaključi časovnik, začne pavzo ali preskoči pavzo
7. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne na gumb za preskok pavze
8. Sistem prične s časovnikom in začne z odštevanjem časa
9. Sistem po končanem časovniku uporabnika obvesti o koncu
10. Sistem uporabniku ponudi, da zaključi časovnik, začne pavzo ali preskoči pavzo

#### Izjemni tok

1. Uporabnik ne more spremeniti trajanja časovnika, ko je bil časovnik aktiviran.
2. Uporabnik ne more spremeniti trajanja pavze, ko je bil časovnik aktiviran.
3. Uporabnik ne more prekočiti pavze, ko je bila pavza aktivirana.

#### Pogoji

- Pri funkcionalnosti Uporaba časovnika mora biti uporabnik prijavljen kot neprijavljen uporabnik ali prijavljen uporabnik

#### Posledice

- Začetek odštevanja časovnika ali
- Začetek odštevanja pavze ali
- Preskok odštevanja pavze ali
- Zaključek izvajanja časovnika.

#### Posebnosti

- Zapis časa v formatu mm:ss.

#### Prioriteta

Won't have - časovnik in njegova uporaba ne predstavlja glavnega dela aplikacije, prav tako ni glavna prodajna vrednost naše spletne aplikacije, četudi bi ga imeli, imajo uporabniki verjetno će svoje sisteme beleženje časa.

#### Sprejemni test

a)

- Prijavi se kot prijavljeni uporabnik, izberi časovnik in zaženi nov časovnik, rezultat je pognan nov časovnik
- Prijavi se kot neprijavljen uporabnik, izberi časovnik in zaženi nov časovnik, rezultat je pognan nov časovnik

b)

- Prijavi se kot prijavljeni uporabnik, izberi časovnik in zaženi nov časovnik in po konca časovnika ga zaključi, rezultat je zaključitev aktivnega časovnika
- Prijavi se kot neprijavljen uporabnik, izberi časovnik in zaženi nov časovnik in po konca časovnika ga zaključi, rezultat je zaključitev aktivnega časovnika

c)

- Prijavi se kot prijavljeni uporabnik, izberi časovnik in zaženi nov časovnik in po koncu časovnika poženi pavzo, rezultat je pognana pavza
- Prijavi se kot neprijavljen uporabnik, izberi časovnik in zaženi nov časovnik in po koncu časovnika poženi pavzo, rezultat je pognana pavza

d)

- Prijavi se kot prijavljeni uporabnik, izberi časovnik in zaženi nov časovnik in po koncu časovnika preskoči pavzo, rezultat je ponovno pognan časovnik
- Prijavi se kot neprijavljen uporabnik, izberi časovnik in zaženi nov časovnik in po koncu časovnika preskoči pavzo, rezultat je ponovno pognan časovnik

### 5.4 Ogled dogodkov na koledarju

Prijavljeni uporabnik se lahko poveže z Google Calendarjem preko naše spletne aplikacije. Tukaj mu je omogočen ogled današnjih dogodkov iz njegovega Google računa.

#### Pogostost uporabe

Dokaj pogosto - ogled dogodkov uporabniku razširi uporabniško izkušnjo, tako da poleg opravil prikaže še dogodke in kdaj ima uporabnik prosti čas.

#### Osnovni tok

1. Prijavljeni uporabnik izbere funkcionalnost Ogled dogodkov na koledarju
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke

#### Izjemni tok

1. Uporabnik ne ogledati dogodkov, če ni povezan v Google Calendar

#### Pogoji

- Pri funkcionalnosti Ogled dogodkov na koledarju mora biti uporabnik prijavljen kot prijavljeni uporabnik
- Pri funkcionalnosti Ogled dogodkov na koledarju mora biti uporabnik prijavljen v storitvi Google Calendar
- Pri funkcionalnosti Ogled dogodkov na koledarju mora uporabnik omogočiti dostop spletni aplikaciji do zunanjega vmesnika Google Calendar

#### Posledice

- Ogled dogodkov na koledarju.

#### Posebnosti

- Moramo imeti odprt razvijalski račun pri Googlu.

#### Prioriteta

Must have - dogodki iz koledarja pripomorejo k uporabniški izkušnji in bojši zadržitvi uoprabnika na naši platformi, zaradi česa bo še bolj uporabljal našo spletno aplikacijo.

#### Sprejemni test

- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poveži Google račun s spletno aplikacijo, poglej na dogodke, rezultat je prikaz dogodki
- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poglej na dogodke, rezultat je prikaz dogodki

### 5.5 Uporavljanje dogodkov na koledarju

Prijavljeni uporabnik iz izpisa Googlovih dogodkov lahko uporabnik upravlja le-te. S klikom na dogodek lahko spremeni ime, opis, datum in čas ter trajanje samega dogodka. Lahko ga tudi izbriše. To se uveljavi preko zunanjega Google API-ja.

#### Pogostost uporabe

Redko - uporabnik sam po sebi vnaša in spreminja dogodke že v zunanji aplikaciji za koledar.

#### Osnovni tok

a) Urejanje dogodkov

1. Prijavljeni uporabnik izbere funkcionalnost Ogled dogodkov na koledarju
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke
4. Uporabnik pritisne na dogodek
5. Sistem odpre okno za urejanje z vnosnimi polji
6. Uporabnik spremeni podrobnosti dogodka
7. Uporabnik potrdi spremembe s klikom na gumb
8. Sistem uveljavi spremembe
9. Sistem prikaže uveljavljene spremembe

b) Brisanje dogodkov

1. Prijavljeni uporabnik izbere funkcionalnost Ogled dogodkov na koledarju
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke
4. Uporabnik pritisne na gumb za izbris ob dogodku
5. Sistem izbriše dogodek
6. Sistem prikaže dogodke brez izbrisanega

#### Izjemni tok

1. Uporabnik ne ogledati dogodkov, če ni povezan v Google Calendar
2. Uporabnik ne more izbrisati z dogodkom, če je bil spremenjen v Google Calendar
3. Uporabnik ne more spremeniti dogodka, če je bil spremenjen v Google Calendar

#### Pogoji

- Pri funkcionalnosti Uporavljanje dogodkov na koledarju mora biti uporabnik prijavljen kot prijavljeni uporabnik
- Pri funkcionalnosti Uporavljanje dogodkov na koledarju mora biti uporabnik prijavljen v storitvi Google Calendar
- Pri funkcionalnosti Uporavljanje dogodkov na koledarju mora uporabnik omogočiti dostop spletni aplikaciji do zunanjega vmesnika Google Calendar

#### Posledice

- Sprememba dogodka iz Google Calendar ali
- Izbris dogodka iz Google Calendar.

#### Posebnosti

- Moramo imeti odprt razvijalski račun pri Googlu.

#### Prioriteta

Could have - upravljanje dogodkov ne predstavlja močne vloge pri funkcionalnosti naše spletne aplikacije, težko je replicirati vse funkcionalnosti, ki jih ponuja Google Calendar, zaradi česar uporabniki sploh uporabljajo to storitev.

#### Sprejemni test

a)

- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poveži Google račun s spletno aplikacijo, poglej na dogodke, izberi dogodek in ga uredi, rezultat je spremenjen obstoječi dogodek
- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poglej na dogodke, izberi dogodek in ga uredi, rezultat je spremenjen obstoječi dogodek

b)

- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poveži Google račun s spletno aplikacijo, poglej na dogodke, izberi dogodek in ga izbriši, rezultat je izbrisan obstoječi dogodek
- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poglej na dogodke, izberi dogodek in ga izbriši, rezultat je izbrisan obstoječi dogodek

#### Alternativni tok 1

1. Prijavljeni uporabnik izbere funkcionalnost Ogled dogodkov na koledarju
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke
4. Uporabnik pritisne na dogodek
5. Sistem odpre okno za urejanje z vnosnimi polji
6. Uporabnik spremeni podrobnosti dogodka
7. Uporabnik potrdi spremembe s klikom na gumb
8. Sistem uveljavi spremembe
9. Sistem ponovno prikaže vse dogodke na voljo

#### Alternativni tok 2

1. Prijavljeni uporabnik izbere funkcionalnost Ogled dogodkov na koledarju
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke
4. Uporabnik pritisne na dogodek
5. Sistem odpre okno za urejanje z vnosnimi polji
6. Uporabnik izbriše dogodek
7. Sistem uveljavi spremembe
8. Sistem ponovno prikaže vse dogodke na voljo

### 5.6 Iskanje uporabnikov

Prijavljeni uporabnik lahko išče po uporabnikih s pomočjo uporabniških imen. Pri tem lahko na prikazu najdenih uporabnikov tudi obiščemo uporabniški račun oz. mu začnemo slediti brez obiska le-tega.

#### Pogostost uporabe

Redko - do iskanja uporabnika pride, kadar želi neki uporabnik pogledati statistiko za nekega uporabnika, ki mu še ne sledi oz. išče uporabnika, k imu želi začeti sleditil

#### Osnovni tok

1. Prijavljeni uporabnik izbere funkcionalnost Iskanje uporabnikov po uporabniškem računu
2. Sistem prikaže vmesnik z iskalnim poljem
3. Prijavljeni uporabnik vnese iskano uporabniško ime v vnosno polje
4. Prijavljeni uporabnik pritisne na gumb za iskanje
5. Sistem izpiše uporabnike, ki se ujemajo na to iskano uporabniško ime

#### Izjemni tok

#### Pogoji

- Pri funkcionalnosti Iskanje uporabnikov mora biti uporabnik prijavljen kot prijavljen uporabnik

#### Posledice

- Prikaz podatkov uporabnikov.

#### Posebnosti

#### Prioriteta

Should have - iskanje uporabnikov predstavlja najpommebnejši del socialnih funkcionalnosti naše spletne aplikacije, saj tako najdemo in tudi začnemo slediti drugim uporabnikom.

#### Sprejemni test

- Prijavi se kot prijavljeni uporabnik, vnesi ime iskanega uporabnika v iskalnik in pritisni gumb za iskanje, rezultat je prikaz uporabnikove aktivnosti
- Prijavi se kot razvijalec, odpri upravljanje poročil o nepravilnem delovanju in pritisni na uporanbikovo uporabniško ime, rezultat je prikaz uporabnikove aktivnosti

### 5.7 Sledenje uporabnikom

Prijavljeni uporabnik lahko potem, ko začne slediti drugim, pogleda vse uporabnike, katerim sledi. Iz tega pogleda lahko tudi odpira podrobnosti uporabniške račune oz. jim tudi preneha slediti.

#### Pogostost uporabe

Dokaj pogosto - funkcionalnost omogoča pregled vseh uporanbikov, ki jim nekdo sledi in nato ogled njihovih statistik. 

#### Osnovni tok

1. Prijavljeni uporabnik izbere funkcionalnost Sledenje uporabnikom
2. Sistem prikaže seznam uporabnikom, ki jim uporabnik še ne sledi
3. Prijavljeni uporabnik klikne na gumb za sledenje ob nekem uporabniku
4. Sistem potrdi uspešno sleditev

#### Izjemni tok

#### Pogoji

- Pri funkcionalnosti Sledenje uporabnikom mora biti uporabnik prijavljen kot prijavljeni uporabnik

#### Posledice

- Dodajanje uporabnika na uporabnikom, ki jim neki uporabnik sledi.

#### Posebnosti

#### Prioriteta

Could have - sledenje uporabnikom ni najpomembnejši del naše spletne aplikacije, toda poomaga uporanbikom vstati v stiku z njhovimi najljubšimo so-uporabniki na naši platformi.

#### Sprejemni test

- Prijavi se kot prijavljeni uporabnik, vnesi ime uporabnika, ki mu že slesi, v iskalnik in pritisni gumb za iskanje, rezultat je seznam iskanih uporabnikov
- Prijavi se kot prijavljeni uporabnik, vnesi ime uporabnika, ki mu že sledi, v iskalnik in pritisni gumb za iskanje in odpri uporabnikov račun, rezultat je seznam iskanih uporabnikov

#### Alternativni tok

1. Prijavljeni uporabnik izbere funkcionalnost Iskanje uporabnikov
2. Sistem prikaže seznamo uporabnikov in poleg imen gumb za sledenje
3. Uporabnik pritisne na gumb za sledenje
4. Sistem potrdi sledenje izbranega uporabnika

### 5.8 Poročanje o nepravilnem delovanju

Prijavljen in neprijavljen uporabnik lahko poroča o nepravilnostih ali napakah, na katere naleti med uporabo spletne aplikacije. To stori tako, da izpolni obrazec za prijavo napak, kjer napako poimenujejo ter jo tudi opišejo. Te podrobnosti o napakah so vidne tudi razvijalcem.

#### Pogostost uporabe

Redko - večina uoprabnikov verjetno ne bo nikoli uporabilo te funkcionalnosti, ker bo poskrbljeno z unit testi, da bo napak kar se da malo.

#### Osnovni tok

1. Prijavljen in neprijavljen uporabnik izbere funkcionalnost Poročanje o nepravilnem delovanju
2. Sistem prikaže okno z vnosnimi polji za ime napake ter njen opis
3. Prijavljen in neprijavljen uporabnik vnese ime napake in opis
4. Prijavljen in neprijavljen uporabnik pritisne gumb za poročanje napake
5. Sistem zabeleži napako

#### Izjemni tok

#### Pogoji

- Pri funkcionalnosti Poročanje o nepravilnem delovanju mora biti uporabnik prijavljen kot neprijavljeni uporabnik ali prijavljeni uporabnik

#### Posledice

- Novo poročilo o napaki.

#### Posebnosti

#### Prioriteta

Should have - obstaja visoka verjetnost, da bomo pri implementaciji zgrešili številne napake, zato je poročanje o napakah zaželjeno, saj tako odkrijemo napake, ki sos se nam skrile med testiranjem.

#### Sprejemni test

- Prijavi se kot prijavljen uporabnik, zaznaj neko nepravilnost, napiši in oddaj poročilo o nepravilnosti, rezultat je oddano poročilo o napakah
- Prijavi se kot neprijavljen uporabnik, zaznaj neko nepravilnost, napiši in oddaj poročilo o nepravilnosti, rezultat je oddano poročilo o napakah

### 5.9 Ogled zaslona produktivnosti

Prijavljen, neprijavljen uporabnik in razvijalec lahko vidi aktivnosti drugih uporabnikov. Pri tem imajo na vpogled koliko opravil in navad je opravil skozi različna časovna obdobja enega meseca in enega leta.

#### Pogostost uporabe

Zmerno pogosto - ogled statistk uporabnikov in primerjanje med seboj, kar pomeni tudi večkratno obiskovanje enega in istega profila.

#### Osnovni tok

1. Prijavljen, neprijavljen uporabnik in razvijalec izbere funkcionalnost Ogled aktivnostih
2. Sistem prikaže koliko opravil in navad je naredil v roku enega meseca ter enega leta

#### Izjemni tok

#### Pogoji

- Pri funkcionalnosti Ogled zaslona produktivnosti mora biti kot neprijavljeni uporabnik ali prijavljeni uporabnik

#### Posledice

- Prikaz statistik produktivnosti izbranega uporabnika.

#### Posebnosti

#### Prioriteta

Should have - ogled aktivnosti uprabnikom prikazuje kako sami napredujejo in kako napredujejo tudi ostali uporabniki naše spletne aplikacije in pomaga pri izboljšanju motivacije za naše uporabnike.

#### Sprejemni test

- Prijavi se kot prijavljen uporabnik, odpri iskalnik uporabikov, vnesi uporabniško ime in odpri profil nekega uporabnika, rezultat je prikaz produktivnosti izbranega uporabnika
- Prijavi se kot prijavljen uporabnik, poglej seznam uporabnikov, ki nam sledijo, izberi uporabik in odpri profil izbranega uporabnika, rezultat je prikaz produktivnosti izbranega uporabnika

#### Alternativni tok

1. Razvijalec izbere Upravljanje poročanih nepravilnih delovanj
2. Sistem prikaže vsa aktivna poročila o napakah skupaj z gumboma za pozitiven in negativen odziv in imenom uporabnika
3. Razvijalec pritisne na ime uporabnika
4. Sistem mu na ogled da aktivnosti uporabnika

### 5.10 Shranjevanje podatkov o aktivnosti uporabnikov za analitiko

Analitik lahko preneša specifične podatke, ki se uporabljajo za analizo iz produkcijske podatkovne baze v podatkovno skladišče, kjer tudi lahko dostopa do podatkov iz podatkovnega skladišča.

#### Pogostost uporabe

Občasno - prenos statistik se ne bo dogajal na dnevi ali tedenski ravni, temveč na daljše časovno obdobje.

#### Osnovni tok

1. Analitik izbere funkcionalnost Shranjevanje podatkov o aktivnosti uporabnikov za analitiko
2. Sistem prikaže polji za izbiro časovnega obdobja in gumb za prenos
3. Analitik vnese začetni in končni datum za prenos podatkov
4. Analitik pritisne na gumb za prenos podatkov
5. Sistem prenese izbrane podatke v podatkovno skladišče

#### Izjemni tok

1. Povezava s podatkovnim skladiščem ni na voljo
2. Izbrani časovni razpon nima podatkov za prenos

#### Pogoji

- Pri funkcionalnosti Shranjevanje podatkov o aktivnosti uporabnikov za analitiko mora biti uporabnik prijavljen kot analitik

#### Posledice

- Novi podatki v podatkovnem skladišču.

#### Posebnosti

- Moramo imeti vzpostavljeno podatkovno skladišče na neki drugi lokaciji kot strežnik.

#### Prioriteta

Must have - podatki predstavljajo pomemben del samega delovanja spletne aplikacije, medtem ko nam analiza poda boljši vpogled v to, kako uporabniki uporabljajo našo spletno aplikacijo.

#### Sprejemni test

- Prijavi se kot analitik, izberi izvoz analitike in jo izvozi, rezultat je izvožena analitika v podatkovno skladišče
- Prijavi se kot analitik, izberi izvoz analitike ter določi časovno obdobje za katero bodo podatki izvoženi in jih izvozi, rezultat je izvožena analitika v podatkovno skladišče

### 5.11 Upravljanje poročanih nepravilnih delovanj

Razvijalec lahko vpogleda nad vsemi poročilo na napakah v spletni aplikaciji, ki jih uporabniki prijavijo. Na voljo ima uporabniški vmesnik, kjer lahko za vsako poročilo podajo pozitiven odziv, kar pomeni, da je bila napaka diagnosticirana in odpravljena oz. zavrne, ko ne more napake zaznati.

#### Pogostost uporabe

Pogosto - razvijalci bodo pogosto gledali za nova poročila o napakah za kar se da hitro odpravo le-teh.

#### Osnovni tok

1. Razvijalec izbere Upravljanje poročanih nepravilnih delovanj
2. Sistem prikaže vsa aktivna poročila o napakah skupaj z gumboma za pozitiven in negativen odziv in imenom uporabnika
3. Razvijalec pritisne na gumb za bodisi pozitiven odziv bodisi negativen odziv
4. Sistem zabeleži opravljeno poročilo in ga izbriše

#### Izjemni tok

#### Pogoji

- Pri funkcionalnosti Upravljanje poročanih nepravilnih delovanj mora biti uporabnik prijavljen kot razvijalec

#### Posledice

- Pozitiven odziv na poročilo o napaki ali
- Negativen odziv na poročilo o napaki.

#### Posebnosti

#### Prioriteta

Should have - edini način, kako lahko dostopamo do pročil, ki so jih uporanbiki je tukaj in tako lahko odkrijemo, diagnosticiramo in odpravimo napake.

#### Sprejemni test

- Uporabnik se prijavi kot razvijalec, odpre poročila o napakah, preveri napako in se pozitivno odzove, rezultat je izbris odprtega poročila o napakah
- Uporabnik se prijavi kot razvijalec, odpre poročila o napakah, preveri napako toda je ne najde in se negativno odzove, rezultat je izbris odprtega poročila o napakah

### 5.12 Upravljanje računov zaposlenih

Administrator lahko ustvarja račune za zaposlene, v tem primeru za razvijalce in analitike. To stori preko obrazca v spletni aplikaciji.

#### Pogostost uporabe

Občasno - dodajanje novih računov je predvsem odvisno od količine novo zaposlenih programerjev, kar običajno ni pogosto.

#### Osnovni tok

1. Administrator izbere Upravljanje računov zaposlenih
2. Sistem prikaže vnosni obrazec za ustvarjanje računa zaposlenega
3. Sistem zapolni obrazec z vnosnimi polji in gumbom za potrditev
4. Administrator izpolni obrazec in ga potrdi s pritiskom na gumb potrdi
5. Sistem doda prodajalca
6. Sistem pošlje potrdilo o dodajanju zaposlenega

#### Izjemni tok

1. Račun zaposlenega že obstaja

#### Pogoji

- Pri funkcionalnosti Upravljanje računov zaposlenih mora biti uporabnik prijavljen kot razvijalec

#### Posledice

- Nov uporabniški račun zaposlenega.

#### Posebnosti

#### Prioriteta

Must have - Upravljanje računov zaposlenih je pommebno, saj nam omogoča dodeljevanje računov našim zaposlenim, s čimer jim omogočimo boljši in lažji razvoj spletne aplikacije.

#### Sprejemni test

- Uporabnik se prijavi kot administrator, izbere vnos novega uporabnika, vnese podatke o novem uporabniku in vnese zaposlenega, rezultat je nov uporabniški račun zaposlenega
- Uporabnik se prijavi kot administrator, izbere vnos novega uporabnika, vnese podatke o novem uporabniku, toda uorabnik že obstaja zato spremeni podatke in vnese zaposlenega, rezultat je nov uporabniški račun zaposlenega

### 5.13 Vnos dogodkov na koledar

Prijavljeni uporabnik lahko vnaša dogodke v Google Calendar. Pri tem lahko dodeli novemu dogodku ime, opis, datum in čas ter trajanje samega dogodka. To se uveljavi v Google Calendar preko zunanjega Google API-ja.

#### Pogostost uporabe

Občasno - dodajanje novih dogodkov pri tej funkcionalnosti je omejeno glede na zunanji vir in ne omogoča vseh fukncionalnosti spletne aplikacije ponudnika koledarja.

#### Osnovni tok

1. Prijavljeni uporabnik izbere funkcionalnost Vnos dogodkov na koledar
2. Sistem prikaže vnosno polje za dogodek s polji za ime, opis, datum in čas ter tranjanje dogodka
3. Sistem prikaže gumb za potrditev vnosa dogodka
4. Uporabnik vnese ime, opis, datum in čas ter trajanje dogodka
5. Uporabnik pritisne na gub za potrditev vnosa dogodka
6. Sistem doda dogodek preko Google API-ja
7. Sistem prikaže dodani dogodek poleg ostalih dogodkov

#### Izjemni tok

1. Uporabnik ne more dodajati dogodkov, če ni povezan v Google Calendar

#### Pogoji

- Pri funkcionalnosti Vnos dogodkov na koledar mora biti uporabnik prijavljen kot prijavljeni uporabnik
- Pri funkcionalnosti Vnos dogodkov na koledar mora biti uporabnik prijavljen v storitvi Google Calendar
- Pri funkcionalnosti Vnos dogodkov na koledar mora uporabnik omogočiti dostop spletni aplikaciji do zunanjega vmesnika Google Calendar

#### Posledice

- Dodajanje dogodka v Google Calendar

#### Posebnosti

- Moramo imeti odprt razvijalski račun pri Googlu.

#### Prioriteta

Won't have - pri vnosu dogodkov ima zunanji odjemalec dodobra izdelan uporabniški vmesnik, s katerim težko konkuriramo, če si ne vzamemo ogromne količine časa za implementacijo le-tega, zato vomo zaenkrat to implementacijo preskočili.

#### Sprejemni test

- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar vnos dogodka, poveži Google račun s spletno aplikacijo, vnesi podatke o dogodku in ga vnesi, rezultat je nov dogodek na koledarju
- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar vnos dogodka, vnesi podatke o dogodku in ga vnesi, rezultat je nov dogodek na koledarju

### 5.14 Prijava in odjava

Prijava in odjava uoprabnikom omogoča, da dostopajo do svojih shranjenih opravil ter dogodkov iz koledarja. V kolikor je uopranbik neprijavljen uporabnik, bo imel opravila shranjena le znotraj okna svojega brskalnika in ne bodo sinhronizirana v oblaku. Prijavjleni uporabnik pa se pri odjavi spremeni v neprijavljenega uporabniko, ki mu niso vidna opravila in dogodke prijavljenega uporabnika.

#### Pogostost uporabe

Pogosto - večina uporabnikov se bo pred uporabo sistema najprej

#### Osnovni tok

a) Prijava

1. Neprijavljeni uporabnik izbere funkcionalnost Prijava in odjava
2. Sistem prikaže neprijavljenemu uporabniku obrazec za prijavo z gumbom za prijavo
3. Neprijavljeni uporabnik vnese svoje prijavne podatke
4. Neprijavljeni uporabnik pritisne gumb za prijavo
5. Sistem overi uporabnikove podatke
6. Sistem neprijavljenega uprabnika prijavi,
7. Sistem spremeni uporabnika v prijavljenega uporabnika

b) Odjava

1. Prijavljeni uporabnik izbere funkcionalnost Prijava in odjava
2. Sistem prikaže gumb za odjavo
3. Prijavljeni uporabnik pritisne na gumb za odjavo
4. Sistem odjavi uporabnika
5. Sistem spremeni uporabnika v neprijavljenega uporabnika

#### Izjemni tok

a)

- Uporabnik je že prijavljen, zato se ne more ponovno prijaviti
- Uporabnik je vnesel nepravilno uporabniško ime, za se ne more prijaviti
- Uporabnik je vnesel nepravilno uporabniško geslo, za se ne more prijaviti

b)

- Uporabnik je že odjavljen, zato se ne more ponovno odjaviti

#### Pogoji

- Pri funkcionalnosti Prijava in odjava mora imeti uporabnik veljaven uporabniški račun, če se želi prijaviti v sistem
- Pri funkcionalnosti Prijava in odjava mora biti uporabnik prijavljen v sistem z veljavnim uporabniškim računom, da se lahko iz njega odjavi

#### Posledice

- Prijavljeni uoprabnik se spremeni v neprijavljeni uporabnik, ko pride do odjave
- Neprijavljeni uporabnik se spremeni v prijavljenega uporabnik pri uspešni prijavi

#### Posebnosti

#### Prioriteta

Must have - prijava in odjava predstavljata ključni del spletne aplikacije, saj tako uporabniki dostopajo do vseh njihovih funkcionalnosti, z izjemo tistih, ki se ne sinhronizirajo z uporabnikovim računom.

#### Sprejemni testi

- Prijavi se kot neprijavljeni uporabnik, izberi obrazec za prijavo, vnese prijavne podatke in potrdi prijavo, rezultat je prijava v sistem
- Prijavi se kot prijavljeni uporabnik, pritisni na gumb za odjavo, rezultat je odjava iz sistema


## 6. Nefunkcionalne zahteve

### - Aplikacija naj je razpoložljiva 24 ur na dan z izjemo največ 30 minut ob popravilih.
Ker gre za spletno storitev, ki jo bodo uporabljali po celem svetu, naj je na voljo za uporabo čez celoten dan. Ob nedelovanju zaradi popravil v programu je lahko program nerazpoložljiv največ 30 minut, v tem primeru uporabnik na stran dobi sporočilo o nedelovanju zaradi popravljanja.

### - Aplikacija mora biti zmožna streči najmanj 50.000 hkratnim uporabnikom.
Ker pričakujemo, da se bo uporaba aplikacije ražširila na veliko število uporabnikov, mora biti aplikacija pripravljena tudi na veliko števio hkratnih uporabnikov. Počasnejše delovanje ob bolj obremenjenih delih dneva bi lahko odvrnilo uporabnike. Pri te zahtevi naj se upošteva tudi to, da povprečna uporaba aplikacije večino časa preprosta in ne zahteva veliko računalniških virov s strani strežnikov sistema.

### - Apikacija naj potrebuje za prenos podatkov preko vmesnika Google Calendarja največ 30 sekund. 
Čas dostopa do vseh željenih podatkov preko vmesnika Google Calendarja in prenos le-teh ne sme trajati predolgo časa in s tem povzročiti to, da postane uporaba funkcionalnosti dostopa do Google Calendarja nezaželena.

### - Povprečni čas med odpovedjo (MTBF) naj ni manjši od dveh mesecev.
Zaradi ugleda in uporabnosti aplikacije se ne sme pripetiti, da bi aplikacija pogosto prenehala delovati in bi bila za daljše časovno obdobje neuporabna. Težave in krajši padci delovanja so pričakovani, na njih se je treba pripraviti in preprečiti daljša in pogosta nedelovanja.

### - Uporabniški vmesnik mora biti dovolj enostaven in vizualno estetski, da ga bo 85% preizkuševalcev ocenilo kot kvalitetnega.
Želimo, da je naš uporabniški vmesnik do aplikacije uporaben, preprost za uporabnika in hkrati uporabniku tudi privalčen ter vizualno estetski. Če vmesnik dosega te standarde, bomo preverili s najemom zunajnih preizkuševalcev.

### - Čas nalaganja zaslonske maske ne sme presežti 15 sekund.
Zaradi stremenja k dobrem ugledu in visoki uporabnosti si ne želimo opazno predolgotrajnega časa, potrebnega za popolno naložitev katere koli zaslonske maske.

### - Uporabnik ne sme dostopati do podatkov, za ketere nima pooblastila.
Vsaka uporabniška lahko dostopa zgolj do jasno definirane skupine podatkov, za katere imajo pooblastilo. Do vseh ostalih podatkov pa naj uporabnik nima dostopa.

### - Za podatkovno skladišče naj se uporabi rešitev Azure Synapse Analytics.
Zaradi že zakupljene licence naj se za podatkovno skladišče uporabi Microsoftovo Azure Synapse Analytics.

### - Aplikacija mora biti dosegljiva na javno dostopnem spletnem naslovu.
Preko javno dostopnega spletnega naslova bodo lahko uporabniki dostopali do aplikacije.

### - Za transakcijsko podatkovno bazo naj se uporablja SUPB MongoDB.
Ker imajo naši razvijalci veliko znanja in izkušenj s SUPBjem MongoDB bi bilo smiselno in učinkovito, da ga uporabimo pri implementaciji.

### - Osebni podatki naj so varovani skladno z GDPR.
Da ostajamo skladni z zakonodajo, bodo podatki varovani skladno z uredbo GDPR.

### - V podatkovnem skladišču naj se ne hrani občutljivih osebnih podatkov uporabnikov.
Za dolgotrajno shrambo podatkov naj se ne potrebuje tistih, ki bi lahko bili etično sporni za takšno shranjevanje.

### - Za zagotovitev varnosti podatkov o naših uporabnikih naj se razvijalci držijo svojih moralnih odgovornosti za razvoj varne rešitve
Od razvijalcev se zahteva, da po najboljših močeh razvijejo zanesljivo rešitev brez varnostnih lukenj, ki so razvijalcu poznane, vendar nima motivacije za njihovo odpravo.

## 7. Prototipi vmesnikov

### Osnutki zaslonskih mask

#### Izboljšanje produktivnosti

<!-- Opravila -->

##### Opravila

1. Prijavljen uporabnik
<!-- https://wireframe.cc/GscRlh -->

![](https://i.imgur.com/ns9Fb5v.png)

2. Neprijavljen uporabnik
<!-- https://wireframe.cc/hPRvmx -->

![](https://i.imgur.com/PMA2b3w.png)

<!-- Časovnik -->

##### Časovnik

1. Prijavljen uporabnik
<!-- https://wireframe.cc/AoxM2Q -->

![](https://i.imgur.com/sEPaRBl.png)

2. Neprijavljen uporabnik
<!-- https://wireframe.cc/icDAyR -->

![](https://i.imgur.com/TAqfGwk.png)

#### Poročanje o nedolovanju

<!-- Prijavi napako -->

1. Prijavljen uporabnik
<!-- https://wireframe.cc/kMSk7s -->

![](https://i.imgur.com/I8utBys.png)

2. Neprijavljen uporabnik
<!-- https://wireframe.cc/4hmo12 -->

![](https://i.imgur.com/7KYgZ8y.png)

#### Ogled aktivnosti sledilcev

<!-- Sledilci, samo prikaz sledilcev -->

<!-- https://wireframe.cc/g39o2v -->

![](https://i.imgur.com/4qO3BZd.png)

#### Sledenje uporabnikom

<!-- Prikaz uporabnikov, katerim sledimo -->
<!-- https://wireframe.cc/IeplU4 -->

![](https://i.imgur.com/SdGOBz9.png)

#### Upravljanje računov zaposlenih

<!-- Vnesi zaposlenega -->
<!-- Administrator -->
<!-- https://wireframe.cc/Swa9jQ -->

![](https://i.imgur.com/JyZ9vPc.png)

#### Shranjevanje podatkov o aktivnostih uporabnikov za analitiko

<!-- Prenos podatkov za analitiko -->
<!-- Analitik -->
<!-- https://wireframe.cc/s1fsu1 -->

![](https://i.imgur.com/TVI9s4W.png)

#### Upravljanje poročanih nepravilnih delovanj

<!-- Upravljanje poročil o napakah -->
<!-- Razvijalec -->

<!-- https://wireframe.cc/urO5IK -->

![](https://i.imgur.com/kDkfqrL.png)

#### Ogled zaslona produktivnosti

<!-- Moj profil oz. profil uporabnika -->

1. Prijavljen uporabnik
<!-- https://wireframe.cc/LQ6br0 -->

![](https://i.imgur.com/FqSdJQ8.png)

2. Razvijalec
<!-- https://wireframe.cc/yC9VPc -->

![](https://i.imgur.com/rdaU8bP.png)

#### Izboljšanje organizacije

<!-- Koledar -->
<!-- Uporabnik -->
<!-- https://wireframe.cc/OBrhep  -->

![](https://i.imgur.com/ud6D9Yp.png)

### Vmesniki do zunanjih sistemov

#### Ogled dogodkov na koledarju

<!--
 https://developers.google.com/calendar/api/v3/reference/events/list
 -->

Googlov API omogoča pregled dogodkov tako, da ponuja funkcijo

`Events.list(calendarId: string): Event[]`,

ki prejme identifikator koledarja in vrne tabelo Event objektov.

#### Vnos dogodka v Google Calendar

<!-- https://developers.google.com/calendar/api/v3/reference/events/insert -->

Googlov API omogoča dodajanje dogodkov tako, da ponuja funkcijo

`Events.insert(calendarId: string, body: Event): Event`,

ki prejme identifikator koledarja in Event objekt ter vrne Event objekt.

#### Urejanje dogodka iz Google Calendar

<!-- https://developers.google.com/calendar/api/v3/reference/events/patch -->

Googlov API omogoča brisanje dogodkov tako, da ponuja funkcijo

`Events.patch(calendarId: string, eventId: string, body: Event): Event`,

ki prejme identifikator koledarja, identifikator dogodka in Event objekt ter vrne Event objekt.

#### Brisanje dogodka iz Google Calendar

<!-- https://developers.google.com/calendar/api/v3/reference/events/delete -->

Googlov API omogoča brisanje dogodkov tako, da ponuja funkcijo

`Events.delete(calendarId: string, eventId: String): void`,

ki prejme identifikator koledarja in identifikator dogodka in vrne prazno telo.

#### Ogled opravil

Naš sistem omogoča dostop do vseh uporabnikovih opravil, ki bo ponujal funkcijo

`opravila(uporabnik: string): string`,

ki prejme šifro uporabnika in vrne JSON objekt, ki vsebuje tabelo elementov z naslednjimi lastnostmi:

- identifikator opravila,
- ime opravila,
- opis opravila,
- čas in datum opravila v obliki timestamp.

#### Dodajanje opravila

Naš sistem omogoča dodajanje opravila, ki bo ponujal funkcijo

`dodaj_opravilo(uporabik: string, opravilo: string): string`,

ki prejme identifikator uporabnika in JSON podatke o opravilu in vrne objekt dodanega opravila z naslednjimi lastnostmi:

- identifikator opravila,
- ime opravila,
- opis opravila,
- čas in datum opravila v obliki timestamp.

#### Urejanje opravila

Naš sistem omogoča spreminjanje opravila, ki bo ponujal funkcijo

`posodobi_opravilo(opravilo: string): string`,

ki prejme identifikator opravila in vrne JSON objekt posodobljenega opravila z naslednjimi lastnostmi:

- identifikator opravila,
- ime opravila,
- opis opravila,
- čas in datum opravila v obliki timestamp.

#### Izbris opravila

Naš sistem omogoča spreminjanje opravila, ki bo ponujal funkcijo

`izbrisi_opravilo(opravilo: string): string`,

ki prejme identifikator opravila in vrne JSON objekt izbrisanega opravila z naslednjimi lastnostmi:

- identifikator opravila,
- ime opravila,
- opis opravila,
- čas in datum opravila v obliki timestamp.
