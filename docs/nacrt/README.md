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

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DZ.puml))

![DZ](https://teaching.lavbic.net/plantuml/svg/bPDFRvj04CNlyob6xiKvL14OgYfAhVnhJvLQkN4EKIu3Z9EjOOSk2qvTzRjt5YU69kwX1v1sv_VUl9s5iyQJysrLujKjm8Cf65SYFfD7W6PjR4sEAimeNzyxQMsHIoaElIFRQ8cj7r45hwWj_JK_-lFItDjAovZhYzs8ejoBkn1NiBlipR9ItLy1-uuxQFDWF8yXvsGpqYEEYWt_QDdc_DcizB4yxlOc_NJn_kFb0Vgh3iBafYRh_rzmC2xqHy79iXP7cJLhZ2Pu_WsN4PwUzhNv7A0UR72oeAtZ0jC9KeEBLBaik9BxgUWXCjwHiPAvME-a_0UOxC14GRqIuuDX26WwygoHG5EzdMlF4wmZFFc05NifwDtqQA0MAMYcGCLAnGCLJQFPc8i1If4QjuHTGsl1JYDOQJnWo1eS4dMO3Gw9za4S79909dio6SXqQcKpFJgCFsSBwuB_hhzSFmLH_FWOhzJvE_wgPq7y-yxgLgStlRLK0Ti28D1Fyz7QJSFxCvcUbgpWaYp3k4tSpqjbowYNVSawLW6spry40PoflVw0Vm00)

**Diagram aktivnosti** ([Activity Diagram](https://plantuml.com/activity-diagram-beta), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DA.puml))

![DA](https://teaching.lavbic.net/plantuml/svg/VL5DJyCm3BtxLqJY0gTfV4Y8JcDbWpCI_06lyRhGrAaIbpAX_NVSRaWH1mwnvFTU_9wJLHACqhVUR4g0r3ZkC69hBEsmz_9ENr9wLtDBBARIGZ5JRR5gwXXwjbNm8Hg9o4afrMMgj4SR1iUrsQ5Fb35LOEl41NwJWoTZ7RQA02pIs2y1At6VJWuRX_Me_mQJUQudps7lX1JtZkc4NDozFDq_hnN36CCmtShvhTSHYXtrd2t_qHnXCJl7WUcn029rX68UoaRZSKXYveLgi_xwJtzJm9Xxm6WpzBRu7QLBwFwNhw4E7sR-U3LQXGvWHMprStu0)

**Diagram stanj** ([State Diagram](https://plantuml.com/state-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DS.puml))

![DS](https://teaching.lavbic.net/plantuml/svg/NP91Ri8m44NtFiK8TfMG6Zkqm09HABs0kwkw66ANXYHsvJYYKjMxTuABIRoneZVFyx-bR5gFpdTD3S-IiROgpHSwRE20HNLqjZEgiBLru1sQbaRQ-86bz0TsjN_Lt_wfBe-ceJ4KT6WtiD0vUzvTrXngsZiOKRhNyCC0jZ4mcEVFqkkUMwUq2smwVzakzZkYic-TmltrxXNzqeik0HFopKb3DW5iGMPCPYjGTWLO5UK98Kj57aJE91-98XL540MJOYJEKp4FOivaFewcxBUxTvYj-rvK36Rz9uy2Zqn4Hbj4wZrGrzHxZDwDBIBB8rjIgz3WrkkU_KDgnzX66qL_oHy0)

**Psevdokoda**

> **assume** vrednost1 &subseteq; C, vrednost2 &subseteq; C  
> **let** maxVrednost1 = max {r | (s,r) &in; vrednost1}  
> **for** (s, r) **in** vrednost2:  
> &nbsp;&nbsp;&nbsp;&nbsp;**if** r &le; maxVrednost1 **return false**  
> **return true**
