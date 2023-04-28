# :orange_square: Dokument zahtev

|                             |                                                                             |
| :-------------------------- | :-------------------------------------------------------------------------- |
| **Naziv projekta**          | Aplikacija produktivnosti in organizacije                                   |
| **Člani projektne skupine** | Arne Gašperšič, Jan Merhar, Jure Mržek, Anže Rifelj Tričkovič, Klemen Kolar |
| **Kraj in datum**           | 26.03.2023                                                                  |

## Povzetek projekta

Dokument opisuje projekt, ki ponuja orodja za upravljanje časa in dogodkov na socialnem omrežju. V drugem poglavju so opisane različne uporabniške vloge, med drugim prijavljeni zunanji uporabnik, neprijavljeni uporabnik, razvijalec, analitik in administrator. Tretje poglavje vsebuje slovar pojmov, ki so uporabljeni v dokumentu. Četrto poglavje predstavlja diagram primerov uporabe. Peto poglavje vsebuje funkcionalne zahteve za urejanje seznama opravil, konfiguriranje časovnika, uporabo časovnika, ogled dogodkov na koledarju, upravljanje dogodkov na koledarju, iskanje uporabnikov, sledenje uporabnikom, poročanje o nepravilnem delovanju, ogled zaslona produktivnosti, shranjevanje podatkov o aktivnosti uporabnikov za analitiko, upravljanje poročanih nepravilnih delovanj, upravljanje računov zaposlenih, vnos dogodkov na koledar in prijavo ter odjavo. Vsaka funkcionalna zahteva vsebuje opis pogostosti uporabe, osnovni tok, izjemni tok, pogoje, posledice, posebnosti, prioritetno raven in sprejemni test.

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

![DPU](https://teaching.lavbic.net/plantuml/png/VLNDKjim4BxxAJJffJaaGrB2Jm_Cc9yoJDkG8KqF39UDfJYA5Qr7_g6Jje_0G_0ky5vTINQm8VJ2iFlzx7grKh94wXGChDaSeYGsM6WUeKB3SWCw8qZeFCYsB2uMKAZyX_YLXqh6UaqmY-YFC0rMaOa8Ci5-1wpXU-PyxvSo5pQFXWlZSnz6NqwFBiue2yRWlK_E5Ic3lmrRY78qfmsTfxmcx2mOAB78MOxCo7YPCowDY7A9EWYSY7Lk2mrw9TcTBb8qCDSowR1mocvdDMDYv0fAjHBwBMjoCqjhtbYa_s6E9rl3aA-bbXbDca87XkVVhyPRM8EIUIKBn-6t6hY1JKa5b8WST7xnyzL7tEcCRCNQmTD1e34NrOVZWXBiCviw0ajiWnop75DW72dGyFmeOc3Xv6e5_Thu4Z5MWk0pAgiv-7OlhwylWy1E4hI5Es6gP08HDSTIWxn8SbbgSfTCQeOc1Yqt5XOTjnlrddHcRaH0_ayFa659mm8_rzcWoVkAUY7ZmaXQpfNOHHyswVx4m1Q_qyZj_nNjKxkwiQVbB0qyFHGQIn9i8CMClbOkAz6e9JB2ApAnqR2slQFraQfY7pJPKoMuy2rlrm7BYddOP5vb2Rn7F6eIhsdYd6qWKwXjzVR0AyLnQnnea0PctP5fuRlLj0Mq0a9XIKXHJttlRIcEF4PEtTWbOGbI3ioBOl3UI3bw6Tkj6xwdIwjsvT8gwtOfgfkj7Lg7ELswtIWh2mwvBuqCjiDPiiPitKapg2uRrgRxhKFPp56jdX-hazavwi687gl0FWIir-lzER4l1rrsrhClJnK7T5S9FM4VRTlTmDxgRRnFiRt_TMBKtTfvmg1RnIuyR4N7hOYiWrigxUvyfIOxcwhDzeX2Bq6lI7tYe1lu6fxYhxOhm_fznpZgqhiXTQGABcfklqWzE1XQb7uMw7N8B3hSwWPD9F297iTxROTITUOQO2-9Vm00)

**Diagram primerov uporabe** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DPU.puml))

## 5. Funkcionalne zahteve

### 5.1 Urejanje seznama opravil

Prijavljeni uporabnik in neprijavljeni uporabnik lahko dodaja in upravlja opravila. To izvaja preko grafičnega vmesnika spletne palikacije. Za vsako opravilo lahko določi in spreminja ime opravila, opis ter čas in datum opravila. Opravila lahko tudi izbriše ali jih pa opravi.

#### Pogostost uporabe

Zelo pogosto, saj je to glavna funkcionalnost naše spletne aplikacije, s katero bomo privedli nove uporabnike.

#### Osnovni tok

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Vnos in urejanje seznama opravil
2. Sistem prikaže vnosno polje za vnos imena opravila in še neopravljena opravila
3. Prijavljeni uporabnik in neprijavljeni uporabnik vnese ime opravila in ga potrdi
4. Sistem prikaže vnešeno opravilo poleg vseh ostalih

#### Pogoji

- Pri funkcionalnosti Vnos in urejanje seznama opravil mora biti uporabnik bodisi neprijavljeni uporabnik ali prijavljeni uporabnik

#### Posledice

- Dodajanje novega opravila ali
- Spreminjanje obsoječega opravila ali
- Brisanje obsoječega opravila.

#### Posebnosti

#### Prioriteta

Must have - opravila predstavljajo glavno funkcionalnost naše spletne aplikacije, zato je pomembno, da je implementirana.

#### Alternativni tok 1

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Vnos in urejanje seznama opravil
2. Sistem prikaže vnosno polje za vnos imena opravila in še neopravljena opravila
3. Prijavljeni uporabnik in neprijavljeni uporabnik izbere na opravilo, ki ga želi spremeniti
4. Sistem pokaže vmesnik, kjer lahko spremeni lastnosti opravila
5. Prijavljeni uporabnik in neprijavljeni uporabnik vnese spremembe ter jih potrdi
6. Sistem zapre vmesnik in uveljavi spremembe

#### Alternativni tok 2

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Vnos in urejanje seznama opravil
2. Sistem prikaže vnosno polje za vnos imena opravila in še neopravljena opravila
3. Prijavljeni uporabnik in neprijavljeni uporabnik izbere na opravilo, ki ga želi izbrisati ter pritisne na gumb za izbris
4. Sistem izbriše opravilo iz seznama

#### Sprejemni test

- Primer uporabe

Uporabnik želi dodati novo opravilo v seznam opravil, ki ga bo lahko kasneje upravljal.

- Funkcija, ki se testira

Dodajanje novega opravila v seznam opravil.

- Začetno stanje sistema

Uporabnik je prijavljen v spletno aplikacijo in se nahaja na strani z možnostjo vnosom in urejanjem seznama opravil. V seznamu še ni nobenega opravila.

- Vhod

Ime novega opravila: "Pospravi sobo"
Opis novega opravila: "Pospravi vse igrače v košare"
Čas in datum opravila: 10. april 2023 ob 15:00

- Pričakovan rezultat

Po dodajanju novega opravila v seznam opravil se prikaže sporočilo o uspešnosti dodajanja novega opravila in novo opravilo se prikaže v seznamu neopravljenih opravil.

- Testni scenarij

1. Uporabnik klikne na možnost "Vnos in urejanje seznama opravil" v glavnem meniju spletne aplikacije.
1. Sistem prikaže stran z vnosnimi polji za ime, opis, čas in datum opravila ter seznamom neopravljenih opravil.
1. Uporabnik vnese ime novega opravila "Pospravi sobo", opis "Pospravi vse igrače v košare" in čas in datum opravila 10. april 2023 ob 15:00.
1. Uporabnik pritisne na gumb "Dodaj novo opravilo".
   Sistem uporabniku prikaže sporočilo o uspešnem dodajanju novega opravila.
1. Uporabnik preveri, če se novo opravilo prikaže v seznamu neopravljenih opravil.
1. Uporabnik zapre stran z urejanjem seznamu opravil.

- Pričakovani rezultat testiranja

Po izvedbi testa uporabnik uspešno doda novo opravilo v seznam opravil, kar mu potrdi sistem s sporočilom o uspešnosti dodajanja novega opravila. Novo opravilo se prikaže v seznamu neopravljenih opravil, kar uporabnik preveri pred zaprtjem strani z urejanjem seznama opravil.

### 5.2 Konfiguriranje časovnika

Prijavljeni uporabnik in neprijavljeni uporabnik lahko uporablja časovnika. Za časovnik lahko določi poljubno časovno trajanje. Prav tako lahko nastavi čas za odmor po končanem odmoru.

#### Pogostost uporabe

Redko - mnogo uporabinkov bo uporabljajo to funkcionalnost s priveztimi nastavitvami, ki so prilagojene veliki večini uporabnikov ter uporablja že uporabnikom znane nastavitve.

#### Osnovni tok

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Konfiguriranje časovnika
2. Sistem prikaže polje za spremembo časa časovnika in pavze
3. Prijavljeni uporabnik in neprijavljeni uporabnik določi nov čas časovnika in ga s pritiskom na gumb potrdi
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

Won't have - nastavljanje časovnika ne daje velike teže pri sami uporabnosti naše aplikacije, saj so že pred definirani časovniki prilagojeni večini uporabnikovim potrebam.

#### Sprejemni test

- Primer uporabe

Uporabnik želi spremeniti čas trajanja časovnika v aplikaciji.

- Funkcija, ki se testira

Konfiguriranje časovnika.

- Začetno stanje sistema

Uporabnik je prijavljen v aplikacijo.

- Vhod

Uporabnik izbere funkcionalnost Konfiguriranje časovnika in določi nov čas trajanja časovnika v formatu mm:ss.

- Pričakovan rezultat

Sistem prikaže polje za spremembo časa časovnika in pavze. Po potrditvi novega časa trajanja časovnika, sistem uveljavi spremembe in spremeni čas časovnika. Če je časovnik že bil aktiviran, uporabnik ne more nastaviti novega časa trajanja časovnika.

#### Alternativni tok 1

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Konfiguriranje časovnika
2. Sistem prikaže polje za spremembo časa časovnika in pavze
3. Prijavljeni uporabnik in neprijavljeni uporabnik določi nov čas časovnika in ga s pritiskom na gumb potrdi
4. Sistem uveljavi spremembe in spremeni čas časovnika
5. Sistem prikaže gumb za aktivacijo novo nastavljenega časovnika
6. Uporabnik aktivira časovnik

#### Alternativni tok 2

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Konfiguriranje časovnika
2. Sistem prikaže polje za spremembo časa časovnika in pavze
3. Prijavljeni uporabnik in neprijavljeni uporabnik določi nov čas pavze in ga s pritiskom na gumb potrdi
4. Sistem uveljavi spremembe in spremeni čas časovnika

### 5.3 Uporaba časovnika

Prijavljeni uporabnik in neprijavljeni uporabnik lahko potem, ko nastavi časovnik, tudi aktivira. Po končanem časovniku se uporabnika opozori z obvestilom in ga vpraša, če želi nadaljevati s časovnikom za pavzo ali ponoviti z istim časovnikom. Med izvajanjem časovnika je možno časovnik pavzirati in ga spet začeti izvajati, ali pa ga resetirati, da spet začne odštevati od začetnega časa.

#### Pogostost uporabe

Zmerno pogosto - ta funkcionalnost je dodatni del aplikacije, ni pa glavna atrakcija za uporabnika.

#### Osnovni tok

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Uporaba časovnika
2. Sistem prikaže časovnik in gumb za začetek le-tega
3. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne gumb za začetek časovnika
4. Sistem prične s časovnikom in začne z odštevanjem časa
5. Sistem po končanem časovniku uporabnika obvesti o koncu
6. Sistem uporabniku ponudi, da zaključi časovnik, začne pavzo ali preskoči pavzo

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

Should have - časovnik in njegova uporaba ne predstavlja glavnega dela aplikacije, prav tako ni glavna prodajna vrednost naše spletne aplikacije, ampak je lahko koristen za nekatere uporabnike.

#### Sprejemni test

- Primer uporabe

Uporaba časovnika za spremljanje časa pri delu ali vadbi.

- Funkcija, ki se testira

Uporaba časovnika za odštevanje časa in obveščanje uporabnika o koncu časovnika.

- Začetno stanje sistema

Uporabnik ima dostop do funkcionalnosti Uporaba časovnika.

- Vhod

Uporabnik izbere časovnik in vpiše želeno trajanje časovnika.

- Pričakovan rezultat

Časovnik začne odštevati čas in po končanem času uporabnika opozori o koncu ter ponudi možnost nadaljevanja s pavzo ali ponovitve časovnika.

#### Alternativni tok 1

1. Prijavljeni uporabnik in neprijavljeni uporabnik izbere funkcionalnost Uporaba časovnika
2. Sistem prikaže časovnik in gumb za začetek le-tega
3. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne gumb za začetek časovnika
4. Sistem prične s časovnikom in začne z odštevanjem časa
5. Sistem po končanem časovniku uporabnika obvesti o koncu
6. Sistem uporabniku ponudi, da zaključi časovnik, začne pavzo ali preskoči pavzo
7. Prijavljeni uporabnik in neprijavljeni uporabnik pritisne na gumb za zaključitev časovnika
8. Sistem zaključi časovnik

#### Alternativni tok 2

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

3)

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

Must have - dogodki iz koledarja pripomorejo k uporabniški izkušnji in boljši zadržitvi uporabnika na naši platformi, zaradi česa bo še bolj uporabljal našo spletno aplikacijo.

#### Sprejemni test

- Primer uporabe

Uporabnik si želi ogledati današnje dogodke iz svojega Google koledarja preko naše spletne aplikacije.
Funkcija, ki se testira

- Funkcija, ki se testira

Ogled dogodkov na koledarju.

- Začetno stanje sistema

Uporabnik se je uspešno prijavil v našo spletno aplikacijo in ima veljaven dostop do Google Calendarja.

- Vhod

Uporabnik klikne na gumb "Ogled dogodkov na koledarju".

- Pričakovan rezultat

Sistem se uspešno poveže na Google Calendar API in prikaže uporabnikove dogodke za današnji dan.

### 5.5 Upravljanje dogodkov na koledarju

Prijavljeni uporabnik iz izpisa Googlovih dogodkov lahko uporabnik upravlja le-te. S klikom na dogodek lahko spremeni ime, opis, datum in čas ter trajanje samega dogodka. Lahko ga tudi izbriše. To se uveljavi preko zunanjega Google API-ja.

#### Pogostost uporabe

Redko - uporabnik sam po sebi vnaša in spreminja dogodke že v zunanji aplikaciji za koledar.

#### Osnovni tok

1. Prijavljeni uporabnik izbere funkcionalnost Ogled dogodkov na koledarju
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke
4. Uporabnik pritisne na dogodek
5. Sistem odpre okno za urejanje z vnosnimi polji
6. Uporabnik spremeni podrobnosti dogodka
7. Uporabnik potrdi spremembe s klikom na gumb
8. Sistem uveljavi spremembe
9. Sistem prikaže uveljavljene spremembe

#### Izjemni tok

1. Uporabnik ne ogledati dogodkov, če ni povezan v Google Calendar
2. Uporabnik ne more izbrisati dogodka, če je bil spremenjen v Google Calendar
3. Uporabnik ne more spremeniti dogodka, če je bil spremenjen v Google Calendar

#### Pogoji

- Pri funkcionalnosti Upravljanje dogodkov na koledarju mora biti uporabnik prijavljen kot prijavljeni uporabnik
- Pri funkcionalnosti Upravljanje dogodkov na koledarju mora biti uporabnik prijavljen v storitvi Google Calendar
- Pri funkcionalnosti Upravljanje dogodkov na koledarju mora uporabnik omogočiti dostop spletni aplikaciji do zunanjega vmesnika Google Calendar

#### Posledice

- Sprememba dogodka iz Google Calendar ali
- Izbris dogodka iz Google Calendar.

#### Posebnosti

- Moramo imeti odprt razvijalski račun pri Googlu.

#### Prioriteta

Could have - upravljanje dogodkov ne predstavlja močne vloge pri funkcionalnosti naše spletne aplikacije, težko je replicirati vse funkcionalnosti, ki jih ponuja Google Calendar, zaradi česar uporabniki sploh uporabljajo to storitev.

#### Sprejemni test

- Primer uporabe

Uporabnik želi spremeniti ime in čas svojega dogodka na koledarju.

- Funkcija, ki se testira

Upravljanje dogodkov na koledarju - spreminjanje imena in časa dogodka.

- Začetno stanje sistema

Uporabnik je prijavljen v spletno aplikacijo in ima odprt Google Calendar.

- Vhod

Uporabnik klikne na želeni dogodek, da ga odpre v oknu za urejanje.

Uporabnik spremeni ime dogodka iz "Srečanje" v "Srečanje s stranko" in spremeni čas iz 14:00 v 15:00.

- Pričakovan rezultat

Sistem prikaže spremenjeno ime in čas dogodka "Srečanje s stranko" ob 15:00.

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

#### Alternativni tok 3

1. Prijavljeni uporabnik izbere funkcionalnost Ogled dogodkov na koledarju
2. Sistem se poveže na Google Calendar API in prevzame podatke o dogodkih za današnji dan
3. Sistem prikaže pridobljene dogodke
4. Uporabnik pritisne na gumb za izbris ob dogodku
5. Sistem izbriše dogodek
6. Sistem prikaže dogodke brez izbrisanega

### 5.6 Iskanje uporabnikov

Prijavljeni uporabnik lahko išče po uporabnikih s pomočjo uporabniških imen. Pri tem lahko na prikazu najdenih uporabnikov tudi obiščemo uporabniški račun oz. mu začnemo slediti brez obiska le-tega.

#### Pogostost uporabe

Redko - do iskanja uporabnika pride, kadar želi neki uporabnik pogledati statistiko za nekega uporabnika, ki mu še ne sledi oz. išče uporabnika, k imu želi začeti slediti

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

- Primer uporabe

Janez želi poiskati uporabnika z imenom "petra123" in mu začeti slediti na spletni aplikaciji.

- Funkcija, ki se testira

Funkcionalnost Iskanje uporabnikov po uporabniškem računu.

- Začetno stanje sistema

Prijavljeni uporabnik se nahaja na glavni strani spletne aplikacije.

- Vhod

Janez vnese uporabniško ime "petra123" v iskalno polje.

- Pričakovan rezultat

Sistem izpiše uporabnika z uporabniškim imenom "petra123" ter prikaže možnosti za obisk uporabniškega računa ali začetek sledenja.

### 5.7 Sledenje uporabnikom

Prijavljeni uporabnik lahko potem, ko začne slediti drugim, pogleda vse uporabnike, katerim sledi. Iz tega pogleda lahko tudi odpira podrobnosti uporabniške račune oz. jim tudi preneha slediti.

#### Pogostost uporabe

Dokaj pogosto - funkcionalnost omogoča pregled vseh uporanbikov, ki jim nekdo sledi in nato ogled njihovih statistik.

#### Osnovni tok

1. Prijavljeni uporabnik izbere funkcionalnost Iskanje uporabnikov po uporabniškem računu
2. Sistem prikaže vmesnik z iskalnim poljem
3. Prijavljeni uporabnik vnese iskano uporabniško ime v vnosno polje
4. Prijavljeni uporabnik pritisne na gumb za iskanje
5. Sistem izpiše uporabnike, ki se ujemajo na to iskano uporabniško ime
6. Prijavljeni uporabnik klikne na gumb za sledenje ob nekem uporabniku
7. Sistem potrdi uspešno sleditev

#### Izjemni tok

#### Pogoji

- Pri funkcionalnosti Sledenje uporabnikom mora biti uporabnik prijavljen kot prijavljeni uporabnik

#### Posledice

- Dodajanje uporabnika na uporabnikom, ki jim neki uporabnik sledi.

#### Posebnosti

#### Prioriteta

Could have - sledenje uporabnikom ni najpomembnejši del naše spletne aplikacije, toda pomaga uporabnikom ostati v stiku z njihovimi najljubšimi souporabniki na naši platformi.

#### Sprejemni test

- Primer uporabe

Peter je uporabnik naše spletne aplikacije in želi začeti slediti svojemu najljubšemu youtuberju. Zato se odloči uporabiti funkcionalnost Sledenje uporabnikom.

- Funkcija, ki se testira

Funkcionalnost sledenja uporabnikom.

- Začetno stanje sistema

Uporabnik Peter je prijavljen na našo spletno aplikacijo.

- Vhod

Peter izbere funkcionalnost Sledenje uporabnikom in v seznamu uporabnikom, ki jim ne sledi, najde uporabnika, ki mu želi slediti. Klikne na gumb za sledenje ob tem uporabniku.

- Pričakovan rezultat

Sistem naj bi uspešno dodal izbranega uporabnika na seznam uporabnikov, ki jim Peter sledi. Peter bi moral imeti sedaj dostop do vseh posodobljenih statistik in informacij, ki jih ima ta uporabnik na svojem profilu.

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

- Primer uporabe

Uporabnik naleti na napako pri uporabi spletne aplikacije in želi to sporočiti razvijalcem, da jo lahko odpravijo.

- Funkcija, ki se testira

Funkcija Poročanje o nepravilnem delovanju.

- Začetno stanje sistema

Uporabnik se nahaja na spletni strani aplikacije in ima možnost poročati o napaki.

- Vhod

Uporabnik vnese ime napake ter njen opis.

- Pričakovan rezultat

Sistem zabeleži novo poročilo o napaki, ki je vidno razvijalcem, da jo lahko odpravijo. Uporabnik prejme potrdilo o uspešnem poročanju napake.

### 5.9 Ogled zaslona produktivnosti

Prijavljen, neprijavljen uporabnik in razvijalec lahko vidi aktivnosti drugih uporabnikov. Pri tem imajo na vpogled koliko opravil in navad je opravil skozi različna časovna obdobja enega meseca in enega leta.

#### Pogostost uporabe

Zmerno pogosto - ogled statistik uporabnikov in primerjanje med seboj, kar pomeni tudi večkratno obiskovanje enega in istega profila.

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

- Primer uporabe

Uporabnik si želi ogledati statistiko produktivnosti drugih uporabnikov.

- Funkcija, ki se testira

Ogled zaslona produktivnosti

- Začetno stanje sistema

Uporabnik je prijavljen v aplikacijo in se nahaja na strani, kjer lahko izbere funkcionalnost Ogled aktivnosti.

- Vhod

Uporabnik izbere funkcionalnost Ogled aktivnosti.

- Pričakovan rezultat

Sistem prikaže statistiko produktivnosti izbranega uporabnika, ki vključuje število opravljenih nalog in navad v zadnjem mesecu ter letu.

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

- Primer uporabe

Analitik želi prenesti specifične podatke o aktivnosti uporabnikov iz produkcijske podatkovne baze v podatkovno skladišče, kjer bo lahko opravil analizo podatkov.

- Funkcija, ki se testira

Shranjevanje podatkov o aktivnosti uporabnikov za analitiko.

- Začetno stanje sistema

Analitik je prijavljen v sistem in ima dovoljenje za dostop do funkcionalnosti Shranjevanje podatkov o aktivnosti uporabnikov za analitiko. Vzpostavljena je povezava s podatkovnim skladiščem.

- Vhod

Analitik vnese začetni in končni datum za prenos podatkov ter pritisne na gumb za prenos podatkov.

- Pričakovan rezultat

Sistem prenese izbrane podatke o aktivnosti uporabnikov iz produkcijske podatkovne baze v podatkovno skladišče za izbrano obdobje.

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

Should have - edini način, kako lahko dostopamo do poročil, ki so jih uporanbiki je tukaj in tako lahko odkrijemo, diagnosticiramo in odpravimo napake.

#### Sprejemni test

- Primer uporabe

Razvijalec želi pregledati poročila o napakah, ki so jih uporabniki prijavili in jih ustrezno označiti kot diagnosticirane in odpravljene ali pa zavrniti, če ne more najti napake.

- Funkcija, ki se testira

Upravljanje poročanih nepravilnih delovanj.

- Začetno stanje sistema

Sistem je v normalnem stanju in deluje brez napak. V poročilih o napakah ni nobenih pozitivnih ali negativnih odzivov.

- Vhod

  1. Razvijalec pritisne na gumb za Upravljanje poročanih nepravilnih delovanj.
  1. Sistem prikaže vsa aktivna poročila o napakah skupaj z gumboma za pozitiven in negativen odziv in imenom uporabnika.
  1. Razvijalec izbere eno izmed poročil o napaki.
  1. Razvijalec pritisne na gumb za pozitiven ali negativen odziv, glede na to, ali je bila napaka diagnosticirana in odpravljena ali pa ne more najti napake.

- Pričakovan rezultat

  1. Če razvijalec izbere pozitiven odziv, se poročilo o napaki označi kot diagnosticirano in odpravljeno ter se odstrani iz seznama aktivnih poročil o napakah.
  1. Če razvijalec izbere negativen odziv, se poročilo o napaki zavrne in se odstrani iz seznama aktivnih poročil o napakah.
  1. Sistem prikaže potrditveno sporočilo o uspešno opravljenem odzivu.
  1. Sistem se vrne v stanje, kjer so na voljo vsa aktivna poročila o napakah.

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

- Primer uporabe

Upravljanje računov zaposlenih v spletni aplikaciji za ustvarjanje programske kode.

- Funkcija, ki se testira

Funkcija, ki se testira, je ustvarjanje novega uporabniškega računa za zaposlenega.

- Začetno stanje sistema

Sistem za upravljanje računov zaposlenih je prazen. Administrator je prijavljen v aplikacijo.

- Vhod

Podatki o novem uporabniškem računu: ime, priimek, e-poštni naslov in geslo.

- Pričakovan rezultat

Po uspešnem dodajanju novega uporabniškega računa sistem prikaže sporočilo o uspešnem dodajanju in pošlje e-poštno obvestilo uporabniku o ustvarjenem računu. Na seznamu računov zaposlenih se pojavi nov uporabniški račun z navedenimi podatki. V primeru, da račun zaposlenega že obstaja, sistem prikaže sporočilo o napaki in prepreči dodajanje novega računa.

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

Won't have - pri vnosu dogodkov ima zunanji odjemalec dodobra izdelan uporabniški vmesnik, s katerim težko konkuriramo, če si ne vzamemo ogromne količine časa za implementacijo le-tega, zato bomo zaenkrat to implementacijo preskočili.

#### Sprejemni test

- Primer uporabe

Uporabnik želi dodati nov dogodek v svoj Google koledar preko spletne aplikacije.

- Funkcija, ki se testira

Vnos dogodkov na koledar

- Začetno stanje sistema

Uporabnik je prijavljen v spletno aplikacijo in povezan v storitev Google Calendar.

- Vhod

  1. Ime dogodka: "Sestanek s stranko"
  1. Opis dogodka: "Pogovor o novi marketinški kampanji"
  1. Datum in čas: 12. april 2023 ob 10:00
  1. Trajanje dogodka: 1 ura

- Pričakovan rezultat

  1. Dogodek "Sestanek s stranko" bo dodan v Google koledar uporabnika in bo prikazan v seznamu dogodkov na izbrani datum in čas.
  1. Uporabnik bo prejel potrditveno sporočilo o uspešno dodanem dogodku.
  1. Če bo uporabnik ponovno naložil koledar, bo novi dogodek "Sestanek s stranko" prikazan tudi tam.

### 5.14 Prijava in odjava

Prijava in odjava uoprabnikom omogoča, da dostopajo do svojih shranjenih opravil ter dogodkov iz koledarja. V kolikor je uopranbik neprijavljen uporabnik, bo imel opravila shranjena le znotraj okna svojega brskalnika in ne bodo sinhronizirana v oblaku. Prijavjleni uporabnik pa se pri odjavi spremeni v neprijavljenega uporabniko, ki mu niso vidna opravila in dogodke prijavljenega uporabnika.

#### Pogostost uporabe

Pogosto - večina uporabnikov se bo pred uporabo sistema najprej

#### Osnovni tok

1. Neprijavljeni uporabnik izbere funkcionalnost Prijava in odjava
2. Sistem prikaže neprijavljenemu uporabniku obrazec za prijavo z gumbom za prijavo
3. Neprijavljeni uporabnik vnese svoje prijavne podatke
4. Neprijavljeni uporabnik pritisne gumb za prijavo
5. Sistem overi uporabnikove podatke
6. Sistem neprijavljenega uprabnika prijavi,
7. Sistem spremeni uporabnika v prijavljenega uporabnika

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

- Primer uporabe

Uporabnik se želi prijaviti v sistem, da bi dostopal do svojih shranjenih opravil in dogodkov v koledarju.

- Funkcija, ki se testira

Prijava in odjava uporabnika v sistem.

- Začetno stanje sistema

Neprijavljeni uporabnik.

- Vhod

Uporabnikove prijavne informacije.

- Pričakovan rezultat

Uporabnik se prijavi v sistem in dobi dostop do svojih shranjenih opravil in dogodkov v koledarju. Pri odjavi uporabnik izgubi dostop do svojih opravil in dogodkov v koledarju ter se spremeni v neprijavljenega uporabnika.

#### Alternativni tok

1. Prijavljeni uporabnik izbere funkcionalnost Prijava in odjava
2. Sistem prikaže gumb za odjavo
3. Prijavljeni uporabnik pritisne na gumb za odjavo
4. Sistem odjavi uporabnika
5. Sistem spremeni uporabnika v neprijavljenega uporabnika

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
