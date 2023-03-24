# :orange_square: Dokument zahtev


|                             |                                                                |
| :-------------------------- | :------------------------------------------------------------- |
| **Naziv projekta**          | Aplikacija produktivnosti in organizacije                               |
| **Člani projektne skupine** | Arne Gašperšič, Jan Merhar, Jure Mržek, Anže Rifelj Tričkovič, Klemen Kolar |
| **Kraj in datum**           | :dart: **TO-DO** kraj, datum                                   |

## Povzetek projekta

<!-- yan -->

:dart: **TO-DO**

- Povzetek je, kot že vemo, celoten dokument, strnjen v največ 150 besed.

## 1. Uvod

<!-- yan -->

:dart: **TO-DO**

- V uvodu opišite problemsko domeno (kateri problem bo naša aplikacija reševala) in kratek pregled glavnih funkcionalnosti (kaj vse bo aplikacija počela).

## 2. Uporabniške vloge

<!-- yan -->

:dart: **TO-DO**

- Opredelite glavne tipe uporabnikov vaše aplikacije glede na funkcionalnosti, ki jih imajo na voljo.
- Zelo pomembno je, da uporabniške vloge konsistentno imenujete. Na primer, če ste definirali vlogo **učitelj**, morate povsod uporabljati samostalnik **učitelj**, ne pa morda **profesor** ali **pedagog**. Tehniška besedila žal ne morejo dosegati leposlovnih standardov, tudi če so še tako dobro napisana.

## 3. Slovar pojmov

<!-- yan -->

:dart: **TO-DO**

- Natančno opredelite vse têrmine, ki jih boste uporabljali v nadaljevanju dokumenta.

## 4. Diagram primerov uporabe

<!-- Anže -->

:dart: **TO-DO**

- Narišite diagram primerov uporabe v jeziku UML.
- Diagram predstavlja interakcijo med akterji in funkcionalnostmi (kdo lahko kaj počne).
- Akterji so tipično uporabniške vloge, lahko pa gre tudi za zunanje komponente (sistemi), ki komunicirajo z našo aplikacijo.
- Za izdelavo uporabite ogrodje PlantUML, in sicer [Use Case Diagram](https://plantuml.com/use-case-diagram).
- V poročilo vključite **izvorno kodo diagrama v jeziku PlantUML**, ki naj bo prisotna v repozitoriju, sliko diagrama pa vključite s povezavo (in ne preko neposredne vključitve binarne datoteke) preko storitve [`https://teaching.lavbic.net/plantuml`](https://teaching.lavbic.net/plantuml), kot prikazuje spodnji primer.
- Diagram naj bo **jasno berljiv**.

![DPU](https://teaching.lavbic.net/plantuml/svg/VP9DJiCm48NtFiKeRCWYbP8c4c9HzGTOLofXWTYuoJGrTUngOgj8m64u3FV2ZbCf0jIDfRptlPdesVFES3AsbN2tBXdh3a8TEV4MjhmwDAIjgYijDO4XhZfdeJ8ZgiOTjz8yufjPID6erjbGkGDfHDaEAzuXl3COpLtrSqzxOT3hccgae5qL3ykR-vLJEP4-1N4hNP9zZiRoocXQZd81-Gtykv19t1am6aWqUmEr8AoCq8gnFWHHUTJ4jqeS88rWiO4o_UjamSdEphDLNBsA5zM9pc0x93SfOtuwLur4Y9xuznS48EeRERSJhKcqI2_AzWjmYA_TvWjGDa3P9MWwGDDBK3v0-IMe6A32tGGhCqXyZyd7pFV3oXII6LoxFuvxBtnaCNDd7aDIwvDocY_4ATCO9lOu6G9m2-uHeQgzLJWh6BatXAgahN5malxA_CumdCrTohtW7m00)

**Diagram primerov uporabe** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DPU.puml))

## 5. Funkcionalne zahteve

<!-- Jan -->

V tem razdelku podrobno opišite posamezne funkcionalnosti, ki jih vaša aplikacija ponuja svojim uporabnikom. Za vsako funkcionalnost navedite naslednje podatke:

### 5.1 Vnos in upravljanje opravila

Prijavljeni uporabnik in neprijavljeni uporabnik lahko dodaja in upravlja opravila. To izvaja preko grafičnega vmesnika spletne palikacije. Za vsako opravilo lahko določi in spreminja ime opravila, opis ter čas in datum opravila. Opravila lahko tudi izbriše ali jih pa opravi.

#### Osnovni tok

a) Vnos novega opravila po imenu

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Vnos in upravljanje opravila
2. Sistem prikaže vnosno polje za vnos imena opravila in še neopravljena opravila
3. Prijavljeni uporabnik in neprijavljeni uporabnik vnese ime opravila in ga potrdi
4. Sistem prikaže vnešeno opravilo poleg vseh ostalih

b) Spreminjanje lastnosti opravila

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Vnos in upravljanje opravila
2. Sistem prikaže vnosno polje za vnos imena opravila in še neopravljena opravila
3. Prijavljeni uporabnik in neprijavljeni uporabnik izbere na opravilo, ki ga želi spremeniti
4. Sistem pokaže vmesnik, kjer lahko spremeni lastnosti opravila
5. Prijavljeni uporabnik in neprijavljeni uporabnik vnese spremembe ter jih potrdi
6. Sistem zapre vmesnik in uveljavi spremembe

c) Brisanje opravila

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Vnos in upravljanje opravila
2. Sistem prikaže vnosno polje za vnos imena opravila in še neopravljena opravila
3. Prijavljeni uporabnik in neprijavljeni uporabnik izbere na opravilo, ki ga želi izbrisati ter pritisne na gumb za izbris
4. Sistem izbriše opravilo iz seznama

#### Izjemni tok

1. Uporabnik ne more dostopati do opravila, ker ga je že na drugem sistem opravil
2. Uporabnik ne more spreminjati opravila, ker ga je že na drugem sistem opravil
3. Uporabnik ne more brisati opravila, ker ga je že na drugem sistem opravil

#### Pogoji

- Pri funkcionalnosti Vnos in upravljanje opravila mora biti uporabnik bodisi neprijavljeni uporabnik ali prijavljeni uporabnik

#### Posledice

- Dodajanje novega opravila ali
- Spreminjanje obsoječega opravila ali
- Brisanje obsoječega opravila.

#### Posebnosti

#### Prioriteta

Must have

#### Sprejemni test

a)

- Prijavi se kot prijavljeni uporabnik, izberi opravila in vnesi novo opravilo
- Prijavi se kot neprijavljen uporabnik, izberi opravila in vnesi novo opravilo

b)

- Prijavi se kot prijavljeni uporabnik, izberi opravila in spremeni obstoječe opravilo
- Prijavi se kot neprijavljen uporabnik, izberi opravila in spremeni obstoječe opravilo

c)

- Prijavi se kot prijavljeni uporabnik, izberi opravila in izbriši obstoječe opravilo
- Prijavi se kot neprijavljen uporabnik, izberi opravila in izbriši obstoječe opravilo

### 5.2 Nastavitev časovnika

Prijavljeni uporabnik in neprijavljeni uporabnik lahko uporablja časovnika. Za časovnik lahko določi poljubno časovno trajanje. Prav tako lahko nastavi čas za odmor po končanem odmoru.

#### Osnovni tok

a)

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Nastavitev časovnika
2. Sistem prikaže polje za spremembo časa časovnika in pavze
3. Prijavljeni uporabnik in neprijavljeni uporabnik določi nov čas časovnika in ga z pritiskom na gumb potrdi
4. Sistem uveljavi spremembe in spremeni čas časovnika

b)

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Nastavitev časovnika
2. Sistem prikaže polje za spremembo časa časovnika in pavze
3. Prijavljeni uporabnik in neprijavljeni uporabnik določi nov čas pavze in ga z pritiskom na gumb potrdi
4. Sistem uveljavi spremembe in spremeni čas časovnika

#### Izjemni tok

1. Uporabnik ne more nastaviti aktivirati časovnika, ko je ta že bil aktiviran.

#### Pogoji

- Pri funkcionalnosti Nastavitev časovnika mora biti uporabnik prijavljen kot prijavljeni uporabnik

#### Posledice

- Spremenitev trajanja časovnika ali
- Spremenitev trajanja pavze.

#### Posebnosti

- Zapis časa v formatu mm:ss.

#### Prioriteta

Won't have

#### Sprejemni test

a)

- Prijavi se kot prijavljeni uporabnik, izberi časovnik in mu spremeni trajanje
- Prijavi se kot neprijavljen uporabnik, izberi časovnik in mu spremeni trajanje

b)

- Prijavi se kot prijavljeni uporabnik, izberi pavzo in ji spremeni trajanje
- Prijavi se kot neprijavljen uporabnik, izberi pavzo in ji spremeni trajanje

#### Alternativni tok

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Nastavitev časovnika
2. Sistem prikaže polje za spremembo časa časovnika in pavze
3. Prijavljeni uporabnik in neprijavljeni uporabnik določi nov čas časovnika in ga z pritiskom na gumb potrdi
4. Sistem uveljavi spremembe in spremeni čas časovnika
5. Sistem prikaže gumb za aktivacijo novo nastavljenega časovnika
6. Uporabnik aktivira časovnik

### 5.3 Prižig časovnika

<!--
  - https://levelup.gitconnected.com/creating-browser-notification-in-javascript-79e91bfb76c8
 -->

Prijavljeni uporabnik in neprijavljeni uporabnik lahko potem, ko nastavi časovnik, tudi aktivira. Po končanem časovniku se uporabnika opozori z obvestilom in ga vpraša ali že nadaljevati s časovnikom za pavzo ali ponovi z istim časovnikom.

#### Osnovni tok

a) Uporabnik požene časovnik

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Prižig časovnika
2. Sistem prikaže časovnik in gumb za začetek le-tega
3. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne gumb za začetek časovnika
4. Sistem prične s časovnikom in začne z odštevanjem časa
5. Sistem po končanem časovniku uporabnika obvesti o koncu
6. Sistem uporabniku ponudi, da zaključi časovnik, začne pavzo ali preskoči pavzo

b) Uporabnik po končanem časovniku zaključi časovnik

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Prižig časovnika
2. Sistem prikaže časovnik in gumb za začetek le-tega
3. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne gumb za začetek časovnika
4. Sistem prične s časovnikom in začne z odštevanjem časa
5. Sistem po končanem časovniku uporabnika obvesti o koncu
6. Sistem uporabniku ponudi, da zaključi časovnik, začne pavzo ali preskoči pavzo
7. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne na gumb za zaključitev časovnika
8. Sistem zaključi časovnik

c) Uporabnik po končanem časovniku začne pavzo

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Prižig časovnika
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

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Prižig časovnika
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

- Pri funkcionalnosti Prižig časovnika mora biti uporabnik prijavljen kot neprijavljen uporabnik ali prijavljen uporabnik

#### Posledice

- Začetek odštevanja časovnika ali
- Začetek odštevanja pavze ali
- Preskok odštevanja pavze ali
- Zaključek izvajanja časovnika.

#### Posebnosti

- Zapis časa v formatu mm:ss.

#### Prioriteta

Won't have

#### Sprejemni test

a)

- Prijavi se kot prijavljeni uporabnik, izberi časovnik in zaženi nov časovnik
- Prijavi se kot neprijavljen uporabnik, izberi časovnik in zaženi nov časovnik

b)

- Prijavi se kot prijavljeni uporabnik, izberi časovnik in zaženi nov časovnik in po konca časovnika ga zaključi
- Prijavi se kot neprijavljen uporabnik, izberi časovnik in zaženi nov časovnik in po konca časovnika ga zaključi

c)

- Prijavi se kot prijavljeni uporabnik, izberi časovnik in zaženi nov časovnik in po koncu časovnika poženi pavzo
- Prijavi se kot neprijavljen uporabnik, izberi časovnik in zaženi nov časovnik in po koncu časovnika poženi pavzo

d)

- Prijavi se kot prijavljeni uporabnik, izberi časovnik in zaženi nov časovnik in po koncu časovnika preskoči pavzo
- Prijavi se kot neprijavljen uporabnik, izberi časovnik in zaženi nov časovnik in po koncu časovnika preskoči pavzo

### 5.4 Prikaz dogodkov iz Google Calendar

Prijavljeni uporabnik se lahko poveže z Google Calendarjem preko naše spletne aplikacije. Tukaj mu je omogočen ogled današnjih dogodkov iz njegovega Google računa.

#### Osnovni tok

1. Prijavljeni uporabnik izbere funkcionalnost Prikaz dogodkov iz Google Calendar
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke

#### Izjemni tok

1. Uporabnik ne ogledati dogodkov, če ni povezan v Google Calendar

#### Pogoji

- Pri funkcionalnosti Prikaz dogodkov iz Google Calendar mora biti uporabnik prijavljen kot prijavljeni uporabnik
- Pri funkcionalnosti Prikaz dogodkov iz Google Calendar mora biti uporabnik prijavljen v storitvi Google Calendar
- Pri funkcionalnosti Prikaz dogodkov iz Google Calendar mora uporabnik omogočiti dostop spletni aplikaciji do zunanjega vmesnika Google Calendar

#### Posledice

- Prikaz dogodkov iz Google Calendar.

#### Posebnosti

- Moramo imeti odprt razvijalski račun pri Googlu.

#### Prioriteta

Must have

#### Sprejemni test

- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poveži Google račun s spletno aplikacijo, poglej na dogodke
- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poglej na dogodke

### 5.5 Upravljanje dogodkov iz Google Calendar

Prijavljeni uporabnik iz izpisa Googlovih dogodkov lahko uporabnik upravlja le-te. S klikom na dogodek lahko spremeni ime, opis, datum in čas ter trajanje samega dogodka. Lahko ga tudi izbriše. To se uveljavi preko zunanjega Google API-ja.

#### Osnovni tok

a) Urejanje dogodkov

1. Prijavljeni uporabnik izbere funkcionalnost Prikaz dogodkov iz Google Calendar
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke
4. Uporabnik pritisne na dogodek
5. Sistem odpre okno za urejanje z vnosnimi polji
6. Uporabnik spremeni podrobnosti dogodka
7. Uporabnik potrdi spremembe s klikom na gumb
8. Sistem uveljavi spremembe
9. Sistem prikaže uveljavljene spremembe

b) Brisanje dogodkov

1. Prijavljeni uporabnik izbere funkcionalnost Prikaz dogodkov iz Google Calendar
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

- Pri funkcionalnosti Upravljanje dogodkov iz Google Calendar mora biti uporabnik prijavljen kot prijavljeni uporabnik
- Pri funkcionalnosti Upravljanje dogodkov iz Google Calendar mora biti uporabnik prijavljen v storitvi Google Calendar
- Pri funkcionalnosti Upravljanje dogodkov iz Google Calendar mora uporabnik omogočiti dostop spletni aplikaciji do zunanjega vmesnika Google Calendar

#### Posledice

- Sprememba dogodka iz Google Calendar ali
- Izbris dogodka iz Google Calendar.

#### Posebnosti

- Moramo imeti odprt razvijalski račun pri Googlu.

#### Prioriteta

Could have

#### Sprejemni test

a)

- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poveži Google račun s spletno aplikacijo, poglej na dogodke, izberi dogodek in ga uredi
- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poglej na dogodke, izberi dogodek in ga uredi

b)

- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poveži Google račun s spletno aplikacijo, poglej na dogodke, izberi dogodek in ga izbriši
- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar pogled, poglej na dogodke, izberi dogodek in ga izbriši

#### Alternativni tok 1

1. Prijavljeni uporabnik izbere funkcionalnost Prikaz dogodkov iz Google Calendar
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke
4. Uporabnik pritisne na dogodek
5. Sistem odpre okno za urejanje z vnosnimi polji
6. Uporabnik spremeni podrobnosti dogodka
7. Uporabnik potrdi spremembe s klikom na gumb
8. Sistem uveljavi spremembe
9. Sistem ponovno prikaže vse dogodke na voljo

#### Alternativni tok 2

1. Prijavljeni uporabnik izbere funkcionalnost Prikaz dogodkov iz Google Calendar
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke
4. Uporabnik pritisne na dogodek
5. Sistem odpre okno za urejanje z vnosnimi polji
6. Uporabnik izbriše dogodek
7. Sistem uveljavi spremembe
8. Sistem ponovno prikaže vse dogodke na voljo

### 5.6 Iskanje uporabnikov

Prijavljeni uporabnik lahko išče po uporabnikih s pomočjo uporabniških imen. Pri tem lahko na prikazu najdenih uporabnikov tudi obiščemo uporabniški račun oz. mu začnemo slediti brez obiska le-tega.

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

Should have

#### Sprejemni test

- Prijavi se kot prijavljeni uporabnik, vnesi ime iskanega uporabnika v iskalnik in pritisni gumb za iskanje
- Prijavi se kot razvijalec, odpri upravljanje poročil o napakah in pritisni na uporanbikovo uporabniško ime

### 5.7 Sledenje drugim uporabnikom

Prijavljeni uporabnik lahko potem, ko začne slediti drugim, pogleda vse uporabnike, katerim sledi. Iz tega pogleda lahko tudi odpira podrobnosti uporabniške račune oz. jim tudi preneha slediti.

#### Osnovni tok

1. Prijavljeni uporabnik izbere funkcionalnost Sledenje drugim uporabnikom
2. Sistem prikaže seznam uporabnikom, ki jim uporabnik še ne sledi
3. Prijavljeni uporabnik klikne na gumb za sledenje ob nekem uporabniku
4. Sistem potrdi uspešno sleditev

#### Izjemni tok

#### Pogoji

- Pri funkcionalnosti Sledenje drugim uporabnikom mora biti uporabnik prijavljen kot prijavljeni uporabnik

#### Posledice

- Dodajanje uporabnika na uporabnikom, ki jim neki uporabnik sledi.

#### Posebnosti

#### Prioriteta

Could have

#### Sprejemni test

- Prijavi se kot prijavljeni uporabnik, vnesi ime uporabnika, ki mu že slesi, v iskalnik in pritisni gumb za iskanje
- Prijavi se kot prijavljeni uporabnik, vnesi ime uporabnika, ki mu že sledi, v iskalnik in pritisni gumb za iskanje in odpri uporabnikov račun

#### Alternativni tok

1. Prijavljeni uporabnik izbere funkcionalnost Iskanje uporabnikov
2. Sistem prikaže seznamo uporabnikov in poleg imen gumb za sledenje
3. Uporabnik pritisne na gumb za sledenje
4. Sistem potrdi sledenje izbranega uporabnika

### 5.8 Poročanje o napakah in hroščih

Prijavljen in neprijavljen uporabnik lahko poroča o nepravilnostih ali napak, na katere naleti med uporabo spletne aplikacije. To stori tako, da izpolni obrazec za prijavo napak, kjer napako poimenujejo ter jo tudi opišejo. Te podrobnosti o napakah so vidne tudi razvijalcem.

#### Osnovni tok

1. Prijavljen in neprijavljen uporabnik izbere funkcionalnost Poročanje o napakah in hroščih
2. Sistem prikaže okno z vnosnimi polji za ime napake ter njen opis
3. Prijavljen in neprijavljen uporabnik vnese ime napake in opis
4. Prijavljen in neprijavljen uporabnik pritisne gumb za poročanje napake
5. Sistem zabeleži napako

#### Izjemni tok

#### Pogoji

- Pri funkcionalnosti Poročanje o napakah in hroščih mora biti uporabnik prijavljen kot neprijavljeni uporabnik ali prijavljeni uporabnik

#### Posledice

- Novo poročilo o napaki.

#### Posebnosti

#### Prioriteta

Should have

#### Sprejemni test

- Prijavi se kot prijavljen uporabnik, zaznaj neko nepravilnost, napiši in oddaj poročilo o nepravilnosti
- Prijavi se kot neprijavljen uporabnik, zaznaj neko nepravilnost, napiši in oddaj poročilo o nepravilnosti

### 5.9 Ogled aktivnostih uporabnikov

Prijavljen, neprijavljen uporabnik in razvijalec lahko vidi aktivnosti drugih uporabnikov. Pri tem imajo na vpogled koliko opravil in navad je opravil skozi različna časovna obdobja enega meseca in enega leta.

#### Osnovni tok

1. Prijavljen, neprijavljen uporabnik in razvijalec izbere funkcionalnost Ogled aktivnostih
2. Sistem prikaže koliko opravil in navad je naredil v roku enega meseca ter enega leta

#### Izjemni tok

#### Pogoji

- Pri funkcionalnosti Ogled aktivnostih uporabnikov mora biti kot neprijavljeni uporabnik ali prijavljeni uporabnik

#### Posledice

- Prikaz statistik produktivnosti izbranega uporabnika.

#### Posebnosti

#### Prioriteta

Should have

#### Sprejemni test

- Prijavi se kot prijavljen uporabnik, odpri iskalnik uporabikov, vnesi uporabniško ime in odpri profil nekega uporabnika
- Prijavi se kot prijavljen uporabnik, poglej seznam uporabnikov, ki nam sledijo, izberi uporabik in odpri profil izbranega uporabnika

#### Alternativni tok

1. Razvijalec izbere Upravljanje poročil o nepravilnosti pri delovanju aplikacije
2. Sistem prikaže vsa aktivna poročila o napakah skupaj z gumboma za pozitiven in negativen odziv in imenom uporabnika
3. Razvijalec pritisne na ime uporabnika
4. Sistem mu na ogled da aktivnosti uporabnika

### 5.10 Prenos podatkov za analizo v podatkovno skladišče

Analitik lahko preneša specifične podatke, ki se uporabljajo za analizo iz produkcijske podatkovne baze v podatkovno skladišče, kjer tudi lahko dostopa do podatkov iz podatkovnega skladišča.

#### Osnovni tok

1. Analitik izbere funkcionalnost Prenos podatkov za analizo v podatkovno skladišče
2. Sistem prikaže polji za izbiro časovnega obdobja in gumb za prenos
3. Analitik vnese začetni in končni datum za prenos podatkov
4. Analitik pritisne na gumb za prenos podatkov
5. Sistem prenese izbrane podatke v podatkovno skladišče

#### Izjemni tok

1. Povezava s podatkovnim skladiščem ni na voljo
2. Izbrani časovni razpon nima podatkov za prenos

#### Pogoji

- Pri funkcionalnosti Prenos podatkov za analizo v podatkovno skladišče mora biti uporabnik prijavljen kot analitik

#### Posledice

- Novi podatki v podatkovnem skladišču.

#### Posebnosti

- Moramo imeti vzpostavljeno podatkovno skladišče na neki drugi lokaciji kot strežnik.

#### Prioriteta

Must have

#### Sprejemni test

- Prijavi se kot analitik, izberi izvoz analitike in jo izvozi
- Prijavi se kot analitik, izberi izvoz analitike ter določi časovno obdobje za katero bodo podatki izvoženi in jih izvozi

### 5.11 Upravljanje poročil o nepravilnosti pri delovanju aplikacije

Razvijalec lahko vpogleda nad vsemi poročilo na napakah v spletni aplikaciji, ki jih uporabniki prijavijo. Na voljo ima uporabniški vmesnik, kjer lahko za vsako poročilo podajo pozitiven odziv, kar pomeni, da je bila napaka diagnosticirana in odpravljena oz. zavrne, ko ne more napake zaznati.

#### Osnovni tok

1. Razvijalec izbere Upravljanje poročil o nepravilnosti pri delovanju aplikacije
2. Sistem prikaže vsa aktivna poročila o napakah skupaj z gumboma za pozitiven in negativen odziv in imenom uporabnika
3. Razvijalec pritisne na gumb za bodisi pozitiven odziv bodisi negativen odziv
4. Sistem zabeleži opravljeno poročilo in ga izbriše

#### Izjemni tok

#### Pogoji

- Pri funkcionalnosti Upravljanje poročil o nepravilnosti pri delovanju aplikacije mora biti uporabnik prijavljen kot razvijalec

#### Posledice

- Pozitiven odziv na poročilo o napaki ali
- Negativen odziv na poročilo o napaki.

#### Posebnosti

#### Prioriteta

Should have

#### Sprejemni test

- Uporabnik se prijavi kot razvijalec, odpre poročila o napakah, preveri napako in se pozitivno odzove
- Uporabnik se prijavi kot razvijalec, odpre poročila o napakah, preveri napako toda je ne najde in se negativno odzove

### 5.12 Ustvarjanje računov zaposlenih

Administrator lahko ustvarja račune za zaposlene, v tem primeru za razvijalce in analitike. To stori preko obrazca v spletni aplikaciji.

#### Osnovni tok

1. Administrator izbere Ustvarjanje računov zaposlenih
2. Sistem prikaže vnosni obrazec za ustvarjanje računa zaposlenega
3. Sistem zapolni obrazec z vnosnimi polji in gumbom za potrditev
4. Administrator izpolni obrazec in ga potrdi s pritiskom na gumb potrdi
5. Sistem doda prodajalca
6. Sistem pošlje potrdilo o dodajanju zaposlenega

#### Izjemni tok

1. Račun zaposlenega že obstaja

#### Pogoji

- Pri funkcionalnosti Ustvarjanje računov zaposlenih mora biti uporabnik prijavljen kot razvijalec

#### Posledice

- Nov uporabniški račun zaposlenega.

#### Posebnosti

#### Prioriteta

Must have

#### Sprejemni test

- Uporabnik se prijavi kot administrator, izbere vnos novega uporabnika, vnese podatke o novem uporabniku in vnese zaposlenega
- Uporabnik se prijavi kot administrator, izbere vnos novega uporabnika, vnese podatke o novem uporabniku, toda uorabnik že obstaja zato spremeni podatke in vnese zaposlenega

### 5.13 Vnos dogodkov v Google Calendar

Prijavljeni uporabnik lahko vnaša dogodke v Google Calendar. Pri tem lahko dodeli novemu dogodku ime, opis, datum in čas ter trajanje samega dogodka. To se uveljavi v Google Calendar preko zunanjega Google API-ja.

#### Osnovni tok

1. Prijavljeni uporabnik izbere funkcionalnost Vnos dogodkov v Google Calendar
2. Sistem prikaže vnosno polje za dogodek s polji za ime, opis, datum in čas ter tranjanje dogodka
3. Sistem prikaže gumb za potrditev vnosa dogodka
4. Uporabnik vnese ime, opis, datum in čas ter trajanje dogodka
5. Uporabnik pritisne na gub za potrditev vnosa dogodka
6. Sistem doda dogodek preko Google API-ja
7. Sistem prikaže dodani dogodek poleg ostalih dogodkov

#### Izjemni tok

1. Uporabnik ne more dodajati dogodkov, če ni povezan v Google Calendar

#### Pogoji

- Pri funkcionalnosti Vnos dogodkov v Google Calendar mora biti uporabnik prijavljen kot prijavljeni uporabnik
- Pri funkcionalnosti Vnos dogodkov v Google Calendar mora biti uporabnik prijavljen v storitvi Google Calendar
- Pri funkcionalnosti Vnos dogodkov v Google Calendar mora uporabnik omogočiti dostop spletni aplikaciji do zunanjega vmesnika Google Calendar

#### Posledice

- Dodajanje dogodka v Google Calendar

#### Posebnosti

- Moramo imeti odprt razvijalski račun pri Googlu.

#### Prioriteta

Won't have

#### Sprejemni test

- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar vnos dogodka, poveži Google račun s spletno aplikacijo, vnesi podatke o dogodku in ga vnesi
- Prijavi se kot prijavljeni uporabnik, izberi Google Calendar vnos dogodka, vnesi podatke o dogodku in ga vnesi

#### Povzetek funkcionalnosti

:dart: **TO-DO**

- **Povzetek funkcionalnosti** v enem ali največ nekaj stavkih.
- Prvi stavek naj se prične z nazivom uporabniške vloge (ali uporabniških vlog, če se funkcionalnost nanaša na več kot eno vlogo), nato pa naj sledita beseda **lahko** in navedba funkcionalnosti.

#### Osnovni tok

:dart: **TO-DO**

#### Alternativni tok(ovi)

:dart: **TO-DO**

- Navesti je potrebno vse alternativne tokove, ki jih označite kot **Alternativni tok 1**, **Alternativni tok 2**, itd.

#### Pogoji

:dart: **TO-DO**

- Navesti je potrebno pogoje, ki morajo biti izpolnjeni, da se funkcionalnost lahko prične izvajati?

#### Posledice

:dart: **TO-DO**

- Navedite, kakšen je rezultat izvedbe osnovnega toka funkcionalnosti?

#### Posebnosti

:dart: **TO-DO**

- Ali realizacija funkcionalnosti zahteva kakšne posebnosti, kot je npr. dodatna strojna oprema?
- Se je potrebno držati kakšnih posebnih standardov?

#### Prioritete identificiranih funkcionalnosti

:dart: **TO-DO**

- Za identificirane funkcionalnosti se z metodo **MoSCoW** (MUST have, SHOULD have, COULD have in WOULD have) določi prioritete.

#### Sprejemni testi

:dart: **TO-DO**

- Navedite sprejmne teste, kjer opišete:
  - funkcijo, ki se testira,
  - začetno stanje sistema,
  - vhod in
  - pričakovan rezultat.

## 6. Nefunkcionalne zahteve

<!-- Anže -->

:dart: **TO-DO**

- Navedite splošne omejitve, ki jih moramo upoštevati v več funkcionalnostih ali celo skozi celoten razvoj aplikacije.

### - Aplikacija naj je na voljo 24 ur na dan.
Ker gre za spletno storitev, ki jo bodo uporabljali po celem svetu, naj je na voljo za uporabo čez celoten dan.

### - Aplikacija mora biti zmožna streči najmanj 50.000 hkratnim uporabnikom.
Ker pričakujemo, da se bo uporaba aplikacije ražširila na veliko število uporabnikov, mora biti aplikacija pripravljena tudi na veliko števio hkratnih uporabnikov. Počasnejše delovanje ob bolj obremenjenih delih dneva bi lahko odvrnilo uporabnike. Pri te zahtevi naj se upošteva tudi to, da povprečna uporaba aplikacije večino časa preprosta in ne zahteva veliko računalniških virov s strani strežnikov sistema.

### - Apikacija naj potrebuje za prenos podatkov preko vmesnika Google Calendarja največ 30 sekund. 
Čas dostopa do vseh željenih podatkov preko vmesnika Google Calendarja in prenos le-teh ne sme trajati predolgo časa in s tem povzročiti to, da postane uporaba funkcionalnosti dostopa do Google Calendarja nezaželena.

### - Čas nedelovanja v enem tednu ne sme presežti 30 minut.
Zaradi ugleda in uporabnosti aplikacije se ne sme pripetiti, da bi aplikacija pogosto prenehala delovati in bi bila za daljše časovno obdobje neuporabna. Težave in krajši padci delovanja so pričakovani, na njih se je treba pripraviti in preprečiti daljša in pogosta nedelovanja.

### - Aplikacijski vmesnik aplikacije naj je zmožen prenesti podatke izven sistema s hitrostjo 10 objektov na sekundo. ??TODO
Želimo, da je naš aplikacijskih vmesnik do aplikacije uporaben in dovolj hitro prenese željene podatke. En objekt predstavlja določeno opravilo, kreirano v aplikaciji: njen naziv, opis, status opravljenosti in ciljni čas opravljenosti.

### - Čas nalaganja zaslonske maske ne sme presežti 15 sekund.?? TODO
Zaradi stremenja k dobrem ugledu in visoki uporabnosti si ne želimo opazno predolgotrajnega časa, potrebnega za popolno naložitev katere koli zaslonske maske.

### - Za podatkovno skladišče naj se uporabi rešitev Azure Synapse Analytics.
Zaradi že zakupljene licence naj se za podatkovno skladišče uporabi Microsoftovo Azure Synapse Analytics.

### - Aplikacija mora biti dosegljiva na javno dostopnem spletnem naslovu.
Preko javno dostopnega spletnega naslova bodo lahko uporabniki dostopali do aplikacije.

### - Uporabnik ne sme dostopati do podatkov, za ketere nima pooblastila.
Vsaka uporabniška lahko dostopa zgolj do jasno definirane skupine podatkov, za katere imajo pooblastilo. Do vseh ostalih podatkov pa naj uporabnik nima dostopa.

### - Osebni podatki naj so varovani skladno z GDPR.
Da ostajamo skladni z zakonodajo, bodo podatki varovani skladno z uredbo GDPR.

### - V podatkovnem skladišču naj se ne hrani občutljivih osebnih podatkov uporabnikov.
Za dolgotrajno shrambo podatkov naj se ne potrebuje tistih, ki bi lahko bili etično sporni za takšno shranjevanje.

### - TODO

## 7. Prototipi vmesnikov

<!-- Jan -->

:dart: **TO-DO**

- Navesti je potrebno: zaslonske maske, sistemske vmesnike in vmesnike do naprav, vključno z referencami do primerov uporabe.

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

#### Prikaz dogodkov iz Google Calendar

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
