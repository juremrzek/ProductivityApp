# :green_square: Načrt sistema

|                             |                                                                |
| :-------------------------- | :------------------------------------------------------------- |
| **Naziv projekta**          | :dart: **TO-DO** naziv projekta                                |
| **Člani projektne skupine** | :dart: **TO-DO** 1. član, 2. član, 3. član, 4. član in 5. član |
| **Kraj in datum**           | :dart: **TO-DO** kraj, datum                                   |

## Povzetek

:dart: **TO-DO**

- Povzetek je, kot že vemo, celoten dokument, strnjen v največ 150 besed.

## 1. Načrt arhitekture

:dart: **TO-DO**

- Za prikaz uporabite enostavne prikaze, kot je **postavitveni** ([deployment](https://plantuml.com/deployment-diagram)), **paketni** ([class](https://plantuml.com/class-diagram)) diagram oz. **komponentni** ([component](https://plantuml.com/component-diagram)) diagram.
- Pri predlogu upoštevajte tudi arhitekturne vzorce.

## 2. Načrt strukture

### 2.1 Razredni diagram

:dart: **TO-DO**

- Izdelajte razredni diagram.
- Za izdelavo uporabite ogrodje PlantUML, in sicer [Class Diagram](https://plantuml.com/class-diagram).
- V poročilo vključite **izvorno kodo diagrama v jeziku PlantUML**, ki naj bo prisotna v repozitoriju, sliko diagrama pa vključite s povezavo (in ne preko neposredne vključitve binarne datoteke) preko storitve [`https://teaching.lavbic.net/plantuml`](https://teaching.lavbic.net/plantuml), kot prikazuje spodnji primer.
- Diagram naj bo **jasno berljiv**, sicer ga razdelite v več delov.

![RD](https://teaching.lavbic.net/plantuml/svg/TPDDRi8m48NtFiN8tK2heEOFQ1O8bRO7oBeR4xlWujYLROf4sxjtY0KaG3RHwFbblZVnPEuyitvRAoXVYDj8_SKigw5Ip3du8G1BLcrMrcmrNnXbBEpMqek3RYmNDcXt-Tlpz7M1AhFMx8AuLFWc-MirFRUg6eUtJ3iy4jgJjUG2Acah9GXPD7HQihqL768Ap44PDt4YvgrSRdrSm8Sop2FWmfu4UzAn9mKuhFIgfQLjBSB7GosyuImUD76H8BKV5ZYfKOBfQr8QI6c7b1N0cHTUrgAbvZsi9B1EyOR7iKwET33i7JKB0R9EWF6vnL6QzD2pmJKl3udIynZz_3pmymv_Uir_wk6FR_0dDxHfo9JTk17y-ZG62YQAi1YDxh4kqKZ12LpjR_KfzBkMUvXHWZj17uEbSH-iES75YgBV6TxZmN0ioLneZh_5Fm00)

**Razredni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/RD.puml))

### 2.2 Opis razredov

:dart: **TO-DO**

- Vsak razred podrobno opišite. Opis posameznega razreda naj ima sledečo strukturo:

#### Ime razreda :dart: **TO-DO**

- Koncept iz problemske domene, ki ga razred predstavlja.

#### Atributi

:dart: **TO-DO**

- Za vsak atribut navedite:
  - ime atributa,
  - podatkovni tip, če ta ni očiten,
  - pomen, če ta ni samoumeven,
  - zalogo vrednosti, če ta ni neomejena ali očitna.

#### Nesamoumevne metode

:dart: **TO-DO**

- Za vsako metodo navedite:
  - ime metode,
  - imena in tipe parametrov,
  - tip rezultata,
  - pomen (če ta ni dovolj očiten iz naziva metode in njenih parametrov).

## 3. Načrt obnašanja

:dart: **TO-DO**

- Za izdelavo uporabite ogrodje PlantUML.
- V poročilo vključite **izvorno kodo diagrama v jeziku PlantUML**, ki naj bo prisotna v repozitoriju, sliko diagrama pa vključite s povezavo (in ne preko neposredne vključitve binarne datoteke) preko storitve [`https://teaching.lavbic.net/plantuml`](https://teaching.lavbic.net/plantuml), kot prikazuje spodnji primer.
- Diagram naj bo **jasno berljiv**.
- Za izdelavo načrta obnašanja lahko uporabite **diagramske tehnike**, navedene v nadaljevanju.
  - Uporabite zgolj tiste, ki se vam zdijo najbolj primerne za izbrano funkcionalnost.
  - Pri opredelitvi načrta ni treba uporabiti vseh predlaganih diagramskih tehnik.
  - Najbolj se **priporoča** uporabo **diagramov zaporedja**.
  
### Diagrami zaporedja

1. **Prijava nepravilnega delovanja** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Prijava_nepravilnega_delovanja.puml))

![DZ](https://teaching.lavbic.net/plantuml/png/bL5VYzD047_FfnZgonrOxacG8nIyG-50i8WeI5ycsMblJJgppcxICz_1h-IJVYydMsFZMGG3IMQPtx-PlVUEO2kIAdaeYjXu3gYuXmhhPgVIiQkb5OMaoD5Qn6c6ShJ5hatlw26zQFsEzzQ6sZwaCnJMIVH6r97UPh6gDVM_0ByTZw33lKyq1wdAOSO7c3KZVUw8Qthjj_OopTsUF7jry_pbxHdq6ZNvsWVazF-4it6BF0eiFdQC_Cb35qInOjyi02CCNIZBZ5YjYd3IWiNrNOmTlIM3fm-UdHmouVsUef6XBAlH2VNBluYPehaqHYsSL5eZs6FEi5nDUjTmTGLtGqNgOIqgtxzQMDgm05DGx7tBD5vkAxqrkZoLxp7H993rokNo3y6Wli41f58SQjpmWD2pH60Cs11SC4OJd8wUGOAFb-UZ1Maj4H_5g2wAQHE6F4uu0j-udVIYD7bQ1CgbtmlqO8MIWxoX3QDpkRhe8kbJy6DzUPhig5gSdCRnJbPhIMg119muj5_8Q_Ej58uUQvnPJjxDZs_UU4dT8zelt4y0)

2. **Upravljanje poročanih nepravilnih delovanj** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Upravljanje_porocanih_nepravilnih_delovanj.puml))

![DZ]()

**Diagram stanj za Uporabo časovnika** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Uporaba_casovnika.puml))

![Uporaba_casovnika](https://teaching.lavbic.net/plantuml/png/ZP31Ji9048Rl-nGJlQYnYK1CJ2CcGl1cD2cUnCFGZb1fTydiL8p6H-0XV1TyBxTRA5M9iOUc-y_t_xD_xIpLSsJCOOpnRCAcq4biCiCWZDgw4MbHjgOIUiGYao6zo6MMJdJknX2x5t63GcQpwFkOSUPo6oChA0Hl2g1NBwp8nJGLAdN32N6bxPzUzSu6VQT6WYm_nS76kv7UbLBLXhthbCqpwYVQ0xGGjRQJc-JpGyZFOBL4YnNHLb4xXCI4C27f5rms7wOv7HpMpbiZj5gIzhRArL5Hft9XHYntbhWqkEV-w0622xyvQa7WFqEOOs6fZ7NOyKWpMPBriSRSDMnPznjMvDJWpeF0SyquT__TVXXfV-unuMnNtjhdYiJRtj3jmebhzw_CcklyMV7NQhKnkhyLGlewDSaN)

- ob resetTimer() se nastavi čas časovnika na 0
- ob getCurrentTime() se vrne trenutni čas časovnika
- ob alertUser() se izpiše obvestilo o potečenem času
- ob startTimer() se začne odštevanje časa časovnika
- ob pauseTimer() se začne pavza
- ob resumeTimer() se nadaljuje odštevanje časa časovnika
- ob startBreak() se začne odštevanje časa odmora

**Psevdokoda**

> **assume** vrednost1 &subseteq; C, vrednost2 &subseteq; C  
> **let** maxVrednost1 = max {r | (s,r) &in; vrednost1}  
> **for** (s, r) **in** vrednost2:  
> &nbsp;&nbsp;&nbsp;&nbsp;**if** r &le; maxVrednost1 **return false**  
> **return true**
