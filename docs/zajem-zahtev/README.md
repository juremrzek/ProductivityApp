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

### TO-DO Naziv zahteve

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

- Aplikacija naj je na voljo 24 ur na dan.\
Ker gre za spletno storitev, ki jo bodo uporabljali po celem svetu, naj je na voljo za uporabo čez celoten dan.

- Aplikacija mora biti zmožna streči najmanj 50.000 hkratnim uporabnikom.\
Ker pričakujemo, da se bo uporaba aplikacije ražširila na veliko število uporabnikov, mora biti aplikacija pripravljena tudi na veliko števio hkratnih uporabnikov. Počasnejše delovanje ob bolj obremenjenih delih dneva bi lahko odvrnilo uporabnike. Pri te zahtevi naj se upošteva tudi to, da povprečna uporaba aplikacije večino časa preprosta in ne zahteva veliko računalniških virov s strani strežnikov sistema.

- Apikacija naj potrebuje za prenos podatkov preko vmesnika Google Calendarja največ 30 sekund. \
Čas dostopa do vseh željenih podatkov preko vmesnika Google Calendarja in prenos le-teh ne sme trajati predolgo časa in s tem povzročiti to, da postane uporaba funkcionalnosti dostopa do Google Calendarja nezaželena.

- Čas nedelovanja v enem tednu ne sme presežti 30 minut.\
Zaradi ugleda in uporabnosti aplikacije se ne sme pripetiti, da bi aplikacija pogosto prenehala delovati in bi bila za daljše časovno obdobje neuporabna. Težave in krajši padci delovanja so pričakovani, na njih se je treba pripraviti in preprečiti daljša in pogosta nedelovanja.

- Aplikacijski vmesnik aplikacije naj je zmožen prenesti podatke izven sistema s hitrostjo 10 objektov na sekundo. ??TODO\
Želimo, da je naš aplikacijskih vmesnik do aplikacije uporaben in dovolj hitro prenese željene podatke. En objekt predstavlja določeno opravilo, kreirano v aplikaciji: njen naziv, opis, status opravljenosti in ciljni čas opravljenosti.

- Čas nalaganja zaslonske maske ne sme presežti 15 sekund.?? TODO\
Zaradi stremenja k dobrem ugledu in visoki uporabnosti si ne želimo opazno predolgotrajnega časa, potrebnega za popolno naložitev katere koli zaslonske maske.

- Za podatkovno skladišče naj se uporabi rešitev Azure Synapse Analytics.\
Zaradi že zakupljene licence naj se za podatkovno skladišče uporabi Microsoftovo Azure Synapse Analytics.

- Aplikacija mora biti dosegljiva na javno dostopnem spletnem naslovu.\
Preko javno dostopnega spletnega naslova bodo lahko uporabniki dostopali do aplikacije.

- Uporabnik ne sme dostopati do podatkov, za ketere nima pooblastila.\
Vsaka uporabniška lahko dostopa zgolj do jasno definirane skupine podatkov, za katere imajo pooblastilo. Do vseh ostalih podatkov pa naj uporabnik nima dostopa.

- Osebni podatki naj so varovani skladno z GDPR.\
Da ostajamo skladni z zakonodajo, bodo podatki varovani skladno z uredbo GDPR.

- V podatkovnem skladišču naj se ne hrani občutljivih osebnih podatkov uporabnikov.\
Za dolgotrajno shrambo podatkov naj se ne potrebuje tistih, ki bi lahko bili etično sporni za takšno shranjevanje.

- TODO

## 7. Prototipi vmesnikov

<!-- Jan -->

:dart: **TO-DO**

- Navesti je potrebno: zaslonske maske, sistemske vmesnike in vmesnike do naprav, vključno z referencami do primerov uporabe.
