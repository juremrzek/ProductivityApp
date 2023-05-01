# :green_square: Načrt sistema

|                             |                                                                |
| :-------------------------- | :------------------------------------------------------------- |
| **Naziv projekta**          |     Aplikacija produktivnosti in organizacije                  |
| **Člani projektne skupine** | Arne Gašperšič, Anže Rifelj Tričkovič, Jure Mržek,             |
|                             | Klemen Kolar, Jan Merhar                                       |                                          
| **Kraj in datum**           | 30.4.2023, Ljubljana                                           |

## Povzetek

V tem dokumentu se nahaja načrt Aplikacije produktivnosti in organizacije. Na začetku se nahaja načrt arhitekture v treh različnih pogledih, in sicer v logičnem, razvojnem in fizičnem pogledu. Pri arhitekturi so prisotni in označeni tudi arhitekturni vzorci. V nadaljevanju načrta je prikazana struktura apliakcije kot razredni diagram v celoti in razbit na razrede in njihove opise. Tretji del načrta vsebuje diagrame zaporedja in diagrame stanj, ki predstavljajo načrt obnašanja sistema.

## 1. Načrt arhitekture

**Razvojni pogled** (komponentni diagram)
![komponentnidiagram](https://teaching.lavbic.net/plantuml/png/dPB1RXen48RlVeeHlIH8KKKWKWueqe8I8d51MhGvc_L07Nizgrb3Mg8yGXwYBz9JyrwrOI7BDkcXbzNgd__xnvvnPRGh9Si25Z8tAwQrKpbPOl0iNHLAwBoeZYw5IxcsVexVVMBroXMX37du83TS2JCzZNSn2njo6wMSYf9Sf9u5_DNq2rulhvOgLeWLSgrUtOskRyVYfP6ZOykbpF6_SiGxtiaAh9msi9KXPajGafBUqAO3ieAirxJUp-UplNpvISA4Q6KH35bKalVU_YVUGoD7K1ahbNxx-ViLzyn0YFT9TRhTaMm0tUxED8BXy6YwkMaHim_JQtIM_fCzlKNDJAPjveEjflv701bpBrs8QEKc_4rxD7xD4YhF-FOhZE8hgKSiBEPrdtGSDthAbLORcUl7C0CcjJPUXtjLNeTd0CGhwVGsbX7E7d01ILcUrs49d1uwHeVrj_8Zb29ly73NXzPy8BwP12ukpkBgiylm5pmYs7PIJsIzA8sEIbza_QXCfaTf8B91b6Rf7m00)

**komponentni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/komponentni_diagram.puml))

**Logični pogled** (paketni diagram)

![paketnidiagram](https://teaching.lavbic.net/plantuml/png/ZLHBRjim4Dtp50Iwzov041W67FU3e6XY8AttOt6iKA8vAYd9JGhVe3b4x-BUgqF7OYLJRReXGBpFp91yzAMs5JZOoZLaPUweiIeZGqxM3gnd26qjV6Gft41Zwi_uhPuRdTijmpBZ1LsFDNUETekZpTgmRm-gU0ivokz29YNVuENcOgDIP3hrpTe_-XgtivdSFUWQ0ucSGdUINho_ldot47iXkWhpokWICbs0P7qd3dLbxEBJQi6WWKTq4UlZAuqx9ZGUdTHXo0raE63k4ys2REt869PCfrdSZAZsWruEFy1JQtKfX-EcNNsfoC4QeW0Inbr5MmP6gjpZauNjNUMWrURrIWuBi0MU-2D-RoadLUfR-4W65RYY-S_szKamuhaaHuVdKFSMNmfRyhL-rNZ5j84YOImTjkYAn7gaYHjV1jfBitoMrFwrVlyq51HH0YVRlVWpcOAQhInSmrDubxpbc_IOlCmEc1IUx9W3tPS6bFxry_2C9oEvuxW-K3DY5v5plmz4kS456BHy6Mp4oKPdmIGMG-PyUHF25W8qKRIpazdPSEDGlsjnTXh_9Cih_cPQQaa9SKnbn-x5xIhS47Sd7NvjqDT-DXCzk5CSvO7BVnj_884bpXvwvCQCYIHqaTE5RVYk8voSssy0)

**paketni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/paketni_diagram.puml))

**Fizični pogled** (postavitveni diagram)

![postavitvenidiagram](https://teaching.lavbic.net/plantuml/png/fLJRYjim47tNLmpfGzh0fYHbOIcBmJ5jMYYigRVaMR4dYM9RCfASB5ls4_eH_P4-TV-hepWNPss7qlf1c9avPpH7HpAfa0NNF8TOvOMIA2ryPm1p7gTBhKgPn2fJ6bxXpU9waRYCqWdgVVJwu-JcGy2U63D78gwjMF2udMUx4XR_XaMg17SCNRKQOylbCaFe3GQ-ThofBJK7bQmnvnd6RutL-FnBYdGmw04t44JZYl6ViACAwxxTvWWQ1YvxUvlWHiJeUQumWbDTlVRRl9IsX2z2bWyL2XymBgrG4b1kX5Oo9_KzxnpkljFH4CyCvs1GRr1NBCTarNuMZHfureWSpwX7T1NRS6qStI5pO1jV0lj5yLMLjXFypZMlGv_OwQ-XfcypGjLdg-lgH-V2d8aouOyS2fLmcwfDgowJKJSwt0Eb0fDcF17FFt__m5QQy8Myh5qOukDpRf1qKRAfp6JSWTjoZIjLTWB3QCpEjQpMIuOC0sWwToPaehO6xg8AS1THSRjnWvLMEVwFPVqY4ocFnPhEIAkaJAqWhOqL82GelUHIFBeqmcldRdBLcrRn_T6bFgSkmvNDiwPu_hZJYzLAdkmVffugvTw7c1u3cV0MFqwThFt6h2zmu8UVMsUP1YFMTmtfmi9mw951uJsLqTaRppk5oN3rEACRkOlFzl6Sn5kWiIuv6TUPwfbmZmfRKEpGojrNbzIbtCNz2kEtGCXJLrVqrBd4f_lxqEquSg5fG2CTDqz3dcsU-Qw8W7y0)

**postavitveni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/postavitveni_diagram.puml))

## 2. Načrt strukture

### 2.1 Razredni diagram

![DZ](https://teaching.lavbic.net/plantuml/png/jLXBRnit4BxlhrWaXognvIP53HY2Ay1Mx427DeRjfeUY1sft9B7U9HSa9Ljf_TzBSbzypCe96kaWI3FV38T3SkOZvGDb5H6aJBE2I9d-awJfWcGFAy4tB9_nWelqSKqL63aNEOXQzlhq-lBiQgQbH0Z-M0iNXRPCdXFfEpq_1wQesasdgFlNSBOyNMR109V51Z1N6MTAy6B8rpA3CpWBVDr2ZhbQ63iY1kDQ_cIy1Ru-2W26URjwKY0OATABc_bqYZiyMxxBVmuSVXA4hSnKanzwdt9DSlv8sIfTaaA2CvfKkmBqjw2PsfI5eybXIJQ5keSdTL7G5IjrrjDCVu5mK9KEYgpWpheHa2azUk4EO2AkvcmDWcfT1kbfigOvf1aLcGRQtoMK2n1IXpnkFxVaYu2SZeS_IJDqUaqonSNEf6XcDztl4aImIT9qJFD9Ifcg_p1ImiHEcwrgoPh8jI-Hf52Uv6W5wZTjE7hZYoKkrkXvReJjg0PuemDyrCirgfeVhOt6RJdDQo2LBMx6XSag1bzmNW1XskBPctgJ3sTlrnauoWGG1GOoskYl-rq5ZZiZztpTwKM7t4zcayibBmgxdoOEAltphsxYrot0p3-4z4DSv2LbaVUIqC99fGFNvs4dLMZWOJx05WfU-K7xEM8IcLcxJJ9ULWKeoE-9V90pVToKiu9wQbPkfcL-T7CckJKOAVrLgxm5rLjPTVfvlHEFKtSN7ki39pD1AqKvGpU5W99lmV7YQNLaCpTq6xct-oZJ6y2SubaynL7l2zi0CxDpkFZMBHLvjElzlPnrA_tTegktr_zrzvmqwLD4KQbe9l-WJ9TVjqCOZqTopHzl132Gz8RdH3t0DHUbinGMOSQRioMtOzR7j4N48mL17rMU-yzt3mN9gSnW91KHUcDhCHodmFBwP--uBQvwhvI4vNrn3MVL0A9iZMK0d4IcpT5uWcoZOEJjvWr3nLJUwaKNaYuAgy5AuA-4wS2lz1RdEu2NeYmnz0HtSfXupI5y8KZLGIOE_33XVEHSD_0PAS1irHS2Mo7W2UhYCC5UP8fkTVb-8KpYmIQ1sM52cqkvWLkek50lH4T3v2GsFc2CTxpOmjU4w00daUc1pWOjuQKzg7hCn3KuJ4HtG4IsDaNufSeI8IUniTSlq9hZDWqS5vPypKHQtOYw_A8ILFz_w0NW4Ysj7s2aRNocylZKo-7K8QCU8sp6YdMNgNjDuZ1d9qwNH1lzXzxFoFX4SHWnDqBNkDVrtUtJGg-5Nd8pcVh2UjKGDHct_uxxDOtOeP53R3167gSUGtJl2nr77BBwNhpHUl4WBUdT2y8PfWdMReFSvPgCAxhS1Qmo2_fTI8WQmhCdoNqm1jYkbMLD58cOIgFwJ0gQ--VPr83ARCAHJzpg2ElewcCMqi0ZJJXP3HWzDiSwF2xDFFLe2oAy0vmXNGkbXIq4IqCtGWiAGzGBrP7682tjMRRbEpZC-cVnpKTutBDIyq-QZf2xgMv4bxj9JzZjB8rOd-X6v6WT_ckEd8dggmzsr7kHwcYr3fi-JcrxQtgQFxfEl0tVgkojp_wg3xe1tBdgWTcu9jPT7O4xwd6AfCa9HS3VaAdOxeq_PwSXezigcCw-x2EvH3fI4dN5CE5BRMGL8xTg8Qy2H_MZWhrU3UpQg7_YayH62wur5pcfL5ttCThRgFVq0A_YxsVF0sMk1NN-elje4DFD77iLrDuAVQaQPGrixlRlgwq-uKs8_UJDFGoCRIUWvj5ESLOxTBXN-DHYUZwJzY6l8LkjEDi8VTTKzxQLjtsWbr_gk_E3fz1iQyEOVKDo2xCfC1j1wgBZm1UX0_k-riHYbyE9viXURprsPm-HvXEXq29jTB66LwZ2DC9-jfxsEQQlDjlnJeeZHE8RYWwDpU7rUG43m-enDYMWLiro31j-LN2zFwlv5c_Ob3hoQLA9j-I397DucRs8zfGXtBPzuhxHbEmBsSBGuxOjBg_EbtgYgQHVu9VtfzFqtSd9s_JyHoESljAjjng_ZJ3f-vEJznt69Gv9nstJyNZggtfIPdKTCd7AlzNO_qdK57fTBKt2TXG1d5fkTNTEC7rchSfT-yJzqsiJfvkCn_zEQq8I2TqfDwzz3jo-JZh_kvxekWpUi89qeUfUwEZZDN3UxckbFuNcMRAFfS4cuJjeZF0VDX6zyomRQpqw7AwZTmbEXXIu5U8vll0diIX48du6NYcJ0JbgWuKNljKbaIJ03MKlVdL91kIe3JRbWPU9P4Y1Mo6UqLUs19KYUCJXlYVQP9zos1ePPSzBPh97DsYB6Y7eXZmcg1J3typnIMEp3TBkvRlJXKKfNEDmvSFXhJuiAoZ8hon9S-UrAcz1afuAQILlYdR7K-gYqsCIbuj4ofvOXAh_0000)

**Razredni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredni_diagram_hidemembers.plantuml))



#### UnsignedUser

![DZ](https://teaching.lavbic.net/plantuml/png/TP9FQy904CNl-HG37cgfXr8g1151nHPFBQsUIW_hxYHPtEo6sOb_A7xtRWojCSJBi7blzlTcalYjjeKWaOCqmdluYG0sGcvJSgLLSsSSmJxJZ9NkI27LMc_uCeiNyw0A8hUlnOq9DwDJvA-Xup5QrdoSJ3hnFOoJOI9R0JDJOXTAEilap2rM8Z76kCNwGDM5sbJt1DsSAtcgQ2tMAo7QBjhYm4XM69Y-BoUJRc2SFAhd5l2DX4shLQEx2zDdGhczjYaamdXif7a-6WoLjEGoDmr7OI9AmoiyyDJerERXhOCC1QdHLOIXH8gVPmoXv91kcW7LnCNIPaWwU19X66LQ8KXDCZH6y_D_ihO-HA1QUwJMzmLuI95Nmczz_tu4rG6-lcj3A5KzzpcKsWeTEwTLRQFI_EylrGYqvG5OaUFelB9D1s5DBqaNh9tz4wyOXBdROODoSK-_)

Neprijavljeni uporabniki lahko uporabljajo našo glavno funkionalnost - lahko dodajajo, urejajo in brišejo opravila.

#### User

![DZ](https://teaching.lavbic.net/plantuml/png/TPBTQeD048NlVOg5N3Ib54ffG48G4abBRjhGdmSOTqTTikxAx5eJIjwzkqabLemNYvuvvvjnrEwahe6WObo1jUmdOYm3lYl8D5gaHXbYRIaT1jsGG3fhazdpAbwdNWKYqvx5JFbaT8piV-XYWTf9TqYIKVm4utoMyq63bMfm3CMDTcJKDLRECSPum7f7CORAGWxewbpvOw0DM2-4gCTewxr3qg3OShj9ad5Wd3-8fm7mZK0NuLMZcmlJbY1CAtN1Sb0MUzsiEoZq9qdkcahrAW9pQ9JxnBrRAbdeoc-TSNyWzLor7meA_3XX2BdptLM_GPYutkWIIVeQHpQBIYcGSKdS6wFqz9zyMQJ1TmtNlHHp9hNh7ZLKE3zDgujEAy6MGys2SWFjha3twkFJss71NYlun4O4-J91C6_zmAtV-BJ-k-botlbjfEYiqdREr51OpLWWCqOXw5Fc-0i0)

Vsi tipi uporabnikov, ki imajo možnost prijave v sistem, podedujejo atribute in metode iz tega razreda.
`Hash` je zgoščena vrednost gesla, `salt` pa je unikaten niz, ki se doda geslu za zagotavljanje unikatnosti zgoščene vrednosti.

#### SignedUser

![DZ](https://teaching.lavbic.net/plantuml/png/TPB1IyCm5CRl_Ii2koWYY5WeCWfRsMGdnUb9F6J9InhscfINb6x8_dVJ3h7MxfB3zxxt-zvBulV6rfnunGHoxzbNmjYEYxqcrrXPE7J4sj84w7H74kYipTBrCbiLKUL4hZsBEuoToIdnVw7pETXWmZ7F9_4po5Ign2XWYGrCeOIpWHnUOYa16MGZrYl8ATIkw-DqSIvrtz56h2S2i5EqrI40MOviyRB9ysbWfkxammZuJDpgRjK1qeSZGZp9YD1KEAX8KBp1y0Q7i42ZRHMlbebu00rSTKpc6hOzXa24684mC7HZrHjR0fbO4y3If3GIc30aeZ4f-i-mZG4WtptGxnDsYp5sgnoYQutLZmCN-_ZigpSQmlh7S7NzttBw1W00)

Prijavljeni uporabniki lahko urejajo pravila, imajo pa tudi možnost prijave, zato podedujejo tako razred `User` kot razred `UnsignedUser`.
Vsak prijavljeni uporabnik lahko sledi ostalim prijavljenim uporabnikom, zato ima razred atribut `following`. 

#### Developer

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMS4ajIyt9BqWjih59pIl9BAcqiwlcub9Gg0K0)

Za razvijalce ne rabimo hraniti nobenega atributa, ampak rabimo za njih razred, ki lahko dostopa do okna `IssueSolveWindow`.

#### Admin

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMS4p9pSopiKdDAyaigRIpg-PI00BTtCJC72k5ufAYpBnqe4Wj0000)

Za administratorje hranimo le atribut `mail` za potencialno dvojno avtentikacijo. Samo administratorji lahko dostopajo do okna `MakeEmployeesWindow`.

#### Analyst

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMSCnBpAaiBh6nISqhoIofjBEhvk9IKAW50000)

Za analitike ne hranimo nobenih atributov, ampak rabimo za njih razred, ki lahko dostopa do okna `StatisticsWindow`.

#### UserFactory

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM22rEBN9BJ2x9BwgqiKdEpoifoi-niwlcKW02xUIYrCIIL90IZL8W4L9Pa6gbK5nIb9cNhca5rWfKLmi0)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM2CvCpqjD2IrEBN8kIaqioI-oiKdEpoifoi-niwlcKW02xMIGH2f8YKOfa0YfB4YrKYWkAShCIzUqKYZBpqm1ggi50000)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMS4p9pSnpBafDBCalih59piyhAShFiREhvb800kraa4HgQ75gaKOfa0YfB4YrKYWkAShCIzUqKYZBpqm1ggi50000)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMS4ajIyt9BqWjSYvAJIp9BxAnISxFAodApx6pg-PI00BjP914QcXnQf56AP08gIn8jL8eBYdAp4lNj58eoyzC0Qgh1G00)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMSCnBpAaiBd4kIaqioI-oiKdEpoifoi-niwlcKW02xMIGH6feSMgHHYcG2AaiIBLIA2ufoinBrxHIAClFJ06ggmK0)

S tem razredom in s Creator razredi ustvarimo nove instance User objektov.

#### Task

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM24aiphQnISqhoIofjBEhvb9GqCrCiLB8p2i1CVCISrEj58fBYZBpqa7ybDJYvABCWfBC_3mKuSGIe38G2UHf5wUM-07rQMGYz6eYgGR9ko3CqG2PYLLTEjGST45apGYvMW00)

Ta razred hrani podatke o opravilih. Opravilo ima ime `name` in opis `description`, ter datum `date`, ki nam pove, kdaj je bilo opravilo ustvarjeno.

#### EditTasks

![DZ](https://teaching.lavbic.net/plantuml/png/VO-n3e8m48Ptd-96YJm18Ip4mLqcuz2q9xa8Lz8U9CRuxfOMeYPgj-l_VNzxkbFUmzwG79M_-hBKbiNPhghk6mXdrs9AjgD7Lq33dbf6quGfAs2Eu7HEg39cdh-GEKW84XuiBuwuJH8kJ_-q3gO0Oic1LO-hcuD1hnqDGfRNoz0yMJAfrs5l9upDRoqVYBRzqA7yXyB-zSB5xMexiiJFqaoRB2g9PIjqkMrV_kC9)


S tem razredom lahko dodajamo, spreminjamo in brišemo opravila. `getTasks(user: UnsignedUser)` vrne vsa opravila nekega uporabnika. `removeTask(taskId: int)` odstrani opravilo iz tabele njegovih opravil. `completeTask` naredi enako, le da uporabniku poveča število opravljenih opravil za 1 (atribut `completedTasks`). `notify` je del Observer načrtovalskega vzorca - oknu `TaskWindow` sporoči, da je prišlo do spremembe v opravilih.

#### TaskWindow

![DZ](https://teaching.lavbic.net/plantuml/png/LSen3i8m38NXdLDu3E86KTKDJa1XTki8B8ADugHLXRWxYHWgtlRqVrD4CpYZFQuif4lNZLg4CArz_zv1tS7kkZHWhbX87WOnlacWeRwzXrcPDdWapWsVD3qTamUM_8VOMhfWP78rZAeneFnQUH7cu3R_-G80)

Okno za dodajanje, spreminjanje in brisanje opravil. `showEditTaskForm` prikaže zaslonsko masko za urejanje specifičnega opravila. `isFormValid()` preveri, če so vsa polja v zaslonski maski pravilno izpolnjena. `update()` posodobi prikazana opravila na najnovejšo verzijo.

#### Issue

![DZ](https://teaching.lavbic.net/plantuml/png/TPBDQiCm48JlVWf1BmcbK4e3nWH3_bfoQcdJ1r2aiIEYI6ObvuUITw_aKE8Ovx98iwDlHxBTLfcA4zyneRbpx3TXRCt5jYHR6pcpsX8xR9H7r2r9q4Lx6BrDqyKig9p87YxYMeUJoJbnjz3n6COhVyhpNlm3qc9KYCw0gQxHXnBMUBBw7giGI95sM5-GVQXrFCVfRgxY9T8wh7S2J1zjSVGWmpMRV2xpl1-O5i_ojGFy86xAUDKMqlcJHgYaXAztkjMHA7Yj_Gf7Fz6gDBlmj4o40cgvgZ2Pb_XkC0JXmmYDbY76gfPc0rAX9y16oKP9CA5816CoQtw6fNCrhbyltkafB3Mo9fifeo3X1AdAAsjkPEw3BTQugnqeOp-XnfspUW-PXMUm6jnSfUafOtFieMtLE1yRUI3_fLPtcB6zLJAQIlXLJ3KOjW94TNwDrkgT_m00)

Uporabniki lahko poročajo o napakah v aplikaciji. Napako lahko razvijalci sprejmejo ali zavržejo.
Atribut `user` pove, kateri uporabnik je napako opazil. Atribut `solved` pove, če je napaka že razrešena. Če je, nam atribut `solvedBy: Developer` pove, kdo je napako razrešil.
Metoda `solve()` nastavi vrednost `solved` na `true`.

#### IssueReport

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMy2mkBaqDIYt8BogniKdEpoifoi-niwlcKb3GJan90Sjgb1Qd5bafX0997OLCa8WLH9kcbK9PVcOAI6rwQabeNd5-JbagH4-nXYPKaK9qB5H1CB9qIcfPQav-0SXW5nWJJGlOE8WBa6tLKO3OurI9gXNcbABKhDJa4anzcbor0000)

`getUnsolvedIssues()` dobi vse napake, ki še niso bile razrešene, `getSolvedIssues(developer: Developer)` pa vse napake, ki jih je razrešil nek razvijalec. `rejectIssue()` izbriše napako, ne da bi jo kdorkoli razrešil.

#### IssueSolveWindow

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMy2mkBaqDpiyfImtFp4l9BxUnISelpKj9BAgqiwlcKb3GBix8Bm_DAmQfI04hBjP8IIrBpSalI2soKd21CJMj5ChoCrEuQW40)

`showUnsolvedIssues` prikaže na zaslon vse napake, ki niso še bile razrešene.

#### IssueReportWindow

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMy2mkBaqDIYt8Boe9pynBoI-tiKdAByrBIIogjBC30000) 

V tem oknu lahko uporabniki dodajajo napake. Okno je statično in se ne spreminja, zato ne potrebuje nobene metode.

#### Statistics

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM22v9BCaiBibCBhQnISxFAodApx6pg-PIKD0kA4hDIotE3CXFIIp9JWqBpiv9JCaiJaxLA2v9B2gnKW0Af-eefEQbG9YQLWfb-PafNBK0)

Ta razred se uporablja za prenos statističnih podatkov v podatkovno skladišče. `prenesiPodatkeVSkladisce(start: date, end: date)`potrebuje začetni in končni datum, ter prenese vse podatke med tema datuma v skladišče.

#### StatisticsWindow

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM22v9BCaiBibCBWxFp4l9BxUnISelpKj9BAgqiwlcKb3GBix8BmyeIirBBSuCo4z9BCbETSilojNGj58eoyzCWQa8BKujyinBozSe1JAi541Sc8fQ0000)

S tem oknom lahko analitiki dodajajo in berejo statistične podatke iz podatkovnega skladišča. `showUserInfo(user: User)` prikaže podatke o uporabniku, ki jih pobere neposredno iz podatkovnega skladišča.

#### Activity

![DZ](https://teaching.lavbic.net/plantuml/png/Iyv9B2vMS4mkoIpBBAcqiKdEpoifoi-niwlcKb3GJayj2IrEBVBCIylNo4onKiZCAz6qKYZBpqpXgWK0)

`getUserInfo(id: int)` dobi podatke o tem, kako pogosto uporabnik opravlja opravila.

#### ActivityWindow

![DZ](https://teaching.lavbic.net/plantuml/png/Iyv9B2vMS4mkoIpBBAaCpynBoI-tiKdAByrBIIogjBEhvb9Gq2xEo2-7AT4eBKujib88pIlEJCzBJGa5yZIvQW40)

S tem oknom si uporabniki lahko ogledajo, kako produktivni so. `showActivity()` prikaže pogostost opravljanja opravil uporabnika.

#### Timer

![DZ](https://teaching.lavbic.net/plantuml/png/RO_12i8m38RlFaMFol05ojZ1dRoABz1jOGHdEf9K4F7TxPn5Mitn-twIF-taHCmPhy1r3QIezwPvRCnxzaYYZdgmQoBXFZ37xCAiGTA27nZS9HCefq24D5hJUJ-1esI6m4xHKnRloWNL27hyTDdkyZOLWu0kzEPnI71sGQ24SG6lxNwDd_-AUBZzVflPvmi0)

Razred shranjuje vse podatke o časovniku. Uporabljamo atribut `instance` in funkcijo `getInstance()` zaradi Singleton načrtovalskega vzorca, saj lahko obstaja le en Timer objekt. `currentTime` pove trenuten čas časovnika, `currentBreak` pa trenuten čas odmora. `duration` je začetni čas časovnika, `break` pa trajanje odmora. `start()`, `reset()`, `startBreak()` in `stopBreak()` so metode za prehajanje med stanji časovnika.
Stanja implementiramo s State načrtovalskim vzorcem, z razredi `TimerState` ter `IdleState`, `RunningState` in `BreakState` razredi.

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM2CdCJIqABaaiIRMnISxFAodApx6pg-PI00BjufB4eX8DJIk5ilpC58XGKMfnAfeGM9LJKMfYDhfuVW6wS2q0)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMy4p9IGqkIIn9jR59piyhAShFiREhvb800ksYrEBIt5GDJIk5ilpC5A1OBG00)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM22hDoylCImykIIn9jR59piyhAShFiREhvb800ksYrEBK4WrDAuMo_CmKY51nIM9HYLDHQc8sadWj0000)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMS2fAJSmEBaaiIRMnISxFAodApx6pg-PI00BjejJYr18DJIk5ilpC58XGSKb-0LWBad0j0000)

#### TimerManager

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM2CdCJItoJSnBJ4yjih59piyhAShFiREhvb800ktYaiIY4WrDAuMo_CmKY51HQd4gcX1ObLDHQc8skdX-0HRXzDGIvzAYejIy4f3bSBbQ0000)

Ta razred upravlja s Timer razredom. Ker je časovnik le en, v argumente funkcij ni treba podajati, na kateri časovnik se sklicujemo.

#### TimerWindow

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM2CdCJIqApynBoI-tiKdAByrBIIogjBEhvb9Gq2xEo2ztBYqgIiqh0IdJqBHIAClFJE6g1G00)

Okno za časovnik prikaže trenuten čas s funkcijo `showCurrentTime()`

#### ManageEmployees

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMy4tCIqnFTSqjoCclJ4qjjh59piyhAShFiREhvb9Gq4vCIO79QMJcfbef59SKPUQbwoWK56K2-Ta8WTJSnCmS97cWuUNvHIam4KqhXRByp1IkMW00)

S tem razredom lahko administratorji dodajajo nove analitike in razvijalce.

#### ManageEmployeesWindow

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMy4tCIqnFTSqjoCclJ4qj3i_CIyaljx59oY_DIqaighIp0m00)

Okno je statično, zato ne rabimo nobene metode za ga posodobiti.

#### GoogleCalendarAPI

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMSC_FJyz9TKxCISrBIIno3F2qiN6jA4ajoalCKG3oxEogkHI0G3idixX48ncgp3F5Ig6uf2WpBrtJIi6rB3Ml93eMgAmM0000)

Zunanji API (Google Calendar). Funkcija `list(calendarId: string): Event[]` vrne tabelo dogodkov uporabnika, le-ti so tipa Event.

#### GoogleCalendarAdapter

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMSC_FJyz9TKxCISrBIInoJ4aiA4ajih59piyhAShFiREhvb800ktqr9AGnEBiOWrDAmKGGo4w5YXH2m00)

Ker zunanji API vrača dogodke tipa Event, potrebujemo funkcijo za pretvarjanje med objekti tipa Event in objekti tipa Task. Funkcija `getTasks(): Task[]` pokliče funkcijo `list` iz APIja ter pretvori odgovor iz tabelo Event-ov v tabelo Task-ov.

##### GoogleCalendarWindow

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMSC_FJyz9TKxCISrBIImApynBoI-tiKdABmLnA-tighaKW42xE2E_7AOe9B4ukrX3qqgXB3yp1IXT2m00)

Funkcija `showCalendarTasks()` prikaže vse dogodke iz uporabnikovega Google calendar-ja.

#### SearchUsers

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM24vDB4hE22rEBIgsiKdEpoifoi-niwlcKb3GJilCIm5BQEGbvgPQAHIN56NcfMjQAO045Q9ZGMhIKqiSSt8Wgb1bql9pSlBBGG8QcIbM2fbv9K3vilpC5AvQ0000)

Ta razred je namenjem iskanju in sledenju uporabnikov. `findUsers(name: string): SignedUser[]` nam vrne seznam uporabnikov, ki imajo niz `name` v imenu.
`followUser(id: int)` doda uporabnika v seznam `following` (atribut razreda SignedUser).

#### SearchUsersWindow

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM24vDB4hE22rEBIeEpynBoI-tiKdAByrBIIogjBEhvb9Gq2xEo2y7osla9UQcMYaKbnHbvgLhMYcKvMUcSDK20000)

`showUsers(name: string)` prikaže vse uporabnike, ki imajo niz `name` v imenu.

#### WindowManager

![DZ](https://teaching.lavbic.net/plantuml/png/Iyv9B2vM2C_CIyalzqtCIqnFBRAnISxFAodApx6pg-PIKD3EBqZDWoZGA0TJLWh59KMPUUcQLWfb-PafNBK0)

To je glavni razred za upravljanje z okni. Metoda `openWindow(window: string)` sproži ukaz, ki odpre ustrezno okno (glede na niz `window`).
Ukaze implementiramo s `Command` razredi:

![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM22v9BCaiBibCBWxFp4l9BtVEpyrDp4kniKdEpoifoi-niwlcKW02tM8qXLOOMi7gj5ChKfDBIr8rDAqKol8pKo22fNbOXJEBWrBBKekACvDom399-VavgObvGCbQ0000)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMy4tCIqnFTSqjoCclJ4qj3i_CIyalTyxFpKtCIx6nISxFAodApx6pg-PI00BTN6oghR0R0jQXdLgHcbnQaggXQQLGbf-P0X4ipSCgd5aSb5gMMbIScPG3badApyz9JSm3IjO20000)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM24aipWxFp4l9BtVEpyrDp4kniKdEpoifoi-niwlcKW02tHAu4YiavM0vxTIArEJIabGDJIk5ilpC58XWQHvMuSpYeDIorABYpAGSi4nIVdvEQc8UKB8M0000)
![DZ](https://teaching.lavbic.net/plantuml/png/ROmx2e0m40LxJv5I4IyWOfF2tiPwDOi4rdsG-0FnxegsUUNCyAnGZAO3Pc5Bmkee35uT3ejb8NLDCq7N06dRApFlgZaHrycBho_vv6bREIzgiyEx7swQn3xsl7E8VfJFZ80mwIll1m00)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMS4mkoIpBBAaCpynBoIztpi_DJSnBiR59piyhAShFiREhvb800jr456LMQDh0QhHJArAJIqjIDJIj5ChoCrCWWgLvM8KpYuDIorABYZEJSi0oIVdvEQc9UK39MW00)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMy2mkBaqDIYt8Boe9pynBoIztpi_DJSnBiR59piyhAShFiREhvb800jrCT9LMc9h1AhLJArAJIqjIDJIj5ChoCrCWWgLvM8KpYuDIorABYZEJSi0oIVdvEQc9UK39MW00)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vMy2mkBaqDpiyfImtFp4l9BtVEpyrDp4kniKdEpoifoi-niwlcKW02tKmqXLOOMi7gj5ChKfDBIr8rDAqKol8pKo22fNbOXJEBWrBBKekACvDom399-VavgObvGCbQ0000)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM2CdCJIqApynBoIztpi_DJSnBiR59piyhAShFiREhvb800jqIX1ehP0rWMUtKYjJaqf9K3KqhXRByp1I8O6aULk7Cug3KijIYuioa7B1CKdv-JcfY7b2o5W00)
![DZ](https://teaching.lavbic.net/plantuml/png/Syv9B2vM24vDB4hE22rEBIeEpynBoIztpi_DJSnBiR59piyhAShFiREhvb800bqCbLQOce4gQm40)

#### Toolbar

![DZ](https://teaching.lavbic.net/plantuml/png/Iyv9B2vM2CdFpqbABBAnISelpKj9BAgqimC0)

Na vrhu vsakega okna imamo opravilno vrstico, s katero se lahko sprehajamo med okni. Ta vrstica je vedno vidna. Ker je statična in se ne spreminja, nima nobene metode.



## 3. Načrt obnašanja
  
### Diagrami zaporedja
**Toolbar za izbiro okna** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Toolbar.puml))

Na začetku vsakega primera uporabe se najprej iz menijske vrstice (toolbar) izbere, katero okno oz zaslonksa maska se bo prikazala. Potek tega je prikazan na tem ločenem diagramu zaporedja, ki pa je na začetku prisoten tudi pri vseh ostalih. Primej je podan za okno za urejanje seznama opravil.

![DZ](https://teaching.lavbic.net/plantuml/png/bLFDYjim4BxxAORqq0JQxAbGGZRG3IqKMiXXQQ7iPMnF4aNMZ2l9SUftw5lrmJgsy-Dizj0QujYQxsVcaxmrES5Q9APoI99W3PVeqK6AcTrugJZFf10FqIC7BH770IgdDLP5VAH3_52O3JijGwOtyWCKPb7yW_YS_B8JImjLlm6S7NjGlJMHXY3lfHxm0GR5G3yhueo-cBN-c8PkhzvzUdZ_SVa2UeK-cioKoF7_2I-sctIZmEX7nSWx0rKf7bCsTWGOeAdA-Rn3B1P9UT62qUnHf4ZHTx1lZe9IO3vFMttqlsxWtmtdKdz5nWtrfDefFXEENefRTGosfop5EUIyeqHThRlLVwAUETUDwQLpmTl5gUyPtDt1voObJr1vscaG159wt9lYYQKaxlN6aoU6e__i7aO3fov7iyT89z7a58hwrAwp62ZrAfCafnlUUQ5sYMQazClOCw03PLMayHLLaUVd2pWPn7LKcK7OIjts7SPL87-bCc1UhNKwhOAcrisnyiPYesUiONHuIkgvL9Ay1aPeyCzlYhQ2VK1B6uJI6qSUZoUDL4PXkr9p1zE0Vf1c5op1tWVTL89nx0_QHAlj3hq1gmvUG2phhL63K0ZRWE3K5LkzL5eNxH4BdC9A8bc8hRVkwx70RM-H71IY_R4-v0Ot-kbKAgYTKRv3jJ9GTgpX8AeGL98XLhbfttGqseA4Y8NPJjjud0xJUackHWtslUh_-NGzosxw5m00)

1. **Prijava nepravilnega delovanja** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Prijava_nepravilnega_delovanja.puml))

![DZ](https://teaching.lavbic.net/plantuml/png/bLBTYjDG4BxFKmprPXSiUoN8KWhkeh0WMCGVaDvCSgRTiqbdufoJTEqx-4fUwNivEMasiHR1G989v_kP-IRttX5iH68kZraMIiyrAkuWnwBSgZJi2gb48Ifoi2FYE44vsc1JnG_q65zLViixEuR27gGJ51PHz4RKaTuciRmozRy0JuuzQ7_l8qr1ghAVy04cXu6-DiG5lVKRkvccRizUlBbv-Vhs37g56dtXQ-Ju_uIpxMPf59XzQHZvmKDJYsBElfm11ZWqzMAH4CjbLezQCBk-2w6XzsJm-DcpatqYVDfHC38i5dddXFhjNyH4qLGQen2EAjLvGeBwhZAaxSl7JjakQn7coy7u6gwkuEwGatfOYShFxpOLhLc0gLPiVSNK_GMLj7RGfF5zYv46WQItcC__4ApLbtW0oHKF1QxvWD2o162iiIIuO0mcE7nw1gbzk3pVMYsLTSIz61LPDaHco3wA3lZERQKLfS7JMg1K-fr02rOeEKZ9h1cTIzL54qYVzobTZfFrgjanPxD9WCxbOuWjQYV9rhxa3rJ6epRsugDA8cNz1iPMkt3ixNmbcQCJy3XR5-Wut4gYMWG2JXpQgqwBEf4uTdrc7MaRltvuuqKzTJxYVWC0)

2. **Upravljanje poročanih nepravilnih delovanj - Osnovni tok** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Upravljanje_porocanih_nepravilnih_delovanjPrim.puml))

![DZ](https://teaching.lavbic.net/plantuml/png/bL5BZjD04Dtx5AsmoKWJUOM48YiI6O4q4WiquhCWBCfs9Uv9kzfKTvoPt853S1Uu5-Lsukb938Y5hRRxVUgzgdI9Qcsjp-r3ahYjfWOOQfL3iTsmtL5PM6DPUGPoSeNa8rI9QzWP_m4V_6kZDrJBjIhaXHoXeF2MbvPBv9iWbXjHlm0CZZreNscFCOZPxYE-Kj6bmsyxf0BVwRKyXB7RYvTlbw_Ut8oWtmDxNUW6oFy_ONJS94HHapiujFeU31OJ1KvwQhCiN2qMIVCaeYRpM-TsU8UDPVzPKsdtWV2fHaTwgx8ixoo07_z631GEHs4KbZnRCqu8KDsT12cBqhvJJcH0DLkSRESgJTNj8KVMgc7S62oLYDkVtu5qjI95s32qsiYNP3Es1RfVaQli_YCvQreiWvcRNeL6T0iUJ-99SWedXltGSxL1Vy4SY3teYPVDPWCnJP_pldoLBEVCBbr7YkCrhBTmaCqU26gGH8o_Vc0Ng4-gJImqp3uwVHWW-4z3jTVzdtBvU7KP_touuzv4Bd2FQbEPMOfja2E903WHka17Hfhs6-rT5L0fuhMLynywY-6ZVPrPng674aVNFLPrKG5jqAaQIhnUqR-R_mq0)

3. **Upravljanje poročanih nepravilnih delovanj - Alternativni tok** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Upravljanje_porocanih_nepravilnih_delovanjAlter.puml))

![DZ](https://teaching.lavbic.net/plantuml/png/bLJBYjj04BphAnhdiBiGurCW66F8BXjOo24iUHpY75fIsnfhrAFqZEMD_o4VaNz9_YkjqThMsah87cmakggwgXgxC3d1qhcGkeSayQNX6WKhI34hL-8sd6VEEe4Wo5v7nA67occ96ni-q4DuOysAAnr3fbyaFHHcmScravpa9egbLjNF08UD7MXRc41za8ZRzlW0lQ6dRnlYZDwPfNwO-jjUl7fx_VhsPW3z7YMOpDJ8uVc4GRj9Z0AZUzmrPesMiX6WrvwQsIoEvlEaFeh0Q7hd_ORkgNOIFXlEtJOIFbNasPGmcwNj2fJl_o96YiH7PMIEWpWxJ8XGqpufKWzbGgkSg44Op_Thfp2PmDqk9J5G2wqivQ3YxjSFP5Ci69XgmSPOVTDirZN8wmNxmcq_idUseJmkyvTNiH7JOA2zU9Bim-d2plGKLXJEc0TY1phoPkFnWJYPFELz-QfPJfbjkfRKZrUBAN6dbzqnLgY9X7x_f3PGbzJOlj31-w1xeJLb8HguZDrUdQS-zVHuBbM9ZAbQqYP90L7dY8_ZFRnDqU4rGtT6eSff_B-qynGpLCt9edw-Gr-3bnrgDIkGL-IXmfnUBlW_IaukBeB-Jc1DW5R_DnZL3Xi8hlm3)

4. **Urejanje seznama opravil - Vsi tokovi** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Urejanje_seznama_opravil.puml))

![DZ](https://teaching.lavbic.net/plantuml/png/xPPFQnin4CNl-oc6z6A3pTAMGWacqFo3qb9wI7fequEyacDvrnfLqjg9Ftr7ShmUnnjZDnHAw271cvtVw4dlZPonbWf6Y668TrdcIssiS68AGr6Kjmvh8mkiq45mmdXwfKnWLLADH5s5AtKNFbJwrapfDHJqIpbM9Og0xXITLEuiDHjMr7she5bnMJGVww1uaNCuPpm0U-dLhrgPGdtM8_enYg_swjtbwVkBivRghy85NMWhJ3WSQ9MRfQt0qVVQ23FHK5jqOcXqUGJ2mwAsWq6gE3d9xBeN71rV2L_2N1k9yrJwRQeyOJ0O3ECQmjrl8HTI1uYSJuIYn_H4J84cEAosa6lZoIKbhxro2U9_88wSq-6-LLmg3r4bAylY2LZmOvodTpwZBKB_P2N_6F8SFbMwD1gC0BHEp7GbRamaajXEJIjtqxdfcGXgHMRPwWIeMxErOxXLWNCDrfHasVeW2EKRP3GZUGLZ1_t-8pZFqnP__CoaQgSRpH5celFSgL0xunyEYV5CTuLeQHGTqDjngkHd49_J1hw8gUfqUpU6FfyhNpXjWqR3jxJ1HYrBECyDiJsQMbzm3QbS6PbboRu8CF-OkOnPsHIn5izdLdlGXdOp5OMU0AOEDQakAGqn2nAbcEnjkv0oVagkzrAlLkztM4yT8jPvn1xWlWyYrBw3X3yLW8trcNo3GO_koQArAPlvgAsaPftkZUbO1Es3ce957z2MDPGOOCQ6hDiUe9tUGPjv6Te0jLCJkgjKCvtG1-iqY8fkSIC8CIGc80bvtMQrNWoLM-fO9ccdfmqPfLqyQB-ac7IqN1zFdoffgTYVf9HY0JXqOb48M8XjmUsgB5OJgZ9BL1MjA0ka7zDNd7ugWAkFB84VptkWL_DqQ1oRVYsTDYxbPlJzm-XJOPn-lpdzZpGa8pOlTtODj2TvqxmND1XFnOzzaS2U_V_eVbpE6KeV_ucQgDcUq_PcnxGvDSMPscFUs64kcMTUewp9oxr9_v70n8HK-zxDRtUanMDrQ5WIyioih7lyZyfVYifl)

5. **Shranjevanje podatkov o aktivnostih uorabnikov za analitiko** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/shranjevanje_podatkov.puml))

![DZ](https://teaching.lavbic.net/plantuml/png/bLFRQjj047tNLmpkIm8nUIgKO099QA1GYY5D-kANaNOIhxNQKVSYf_g7VaH-f4_DVtLs7TboumPgi6pjdZDpzfpPfLO4zyoXvCUYyBMsBJfieCIgVd0ShQhOi8FWq7hP8Xj6A4Nt64tuIe_XmkW7syWsLF8WDq9X5TXTibFahdAnqaZrLu1jnmrelTI1nY3dU3tY0umsFNsFP2lwhE_bQsdSxTtxwyiF7wyEeEVeWgvqYpRyF-6Wt28V1ION5eqEkfu0Ua1vcStoplbvqUvgmEJi9c3GNXRyDsqLhpFXhY5lTGspMPaQeFln1YyplBmAl68R79jNw5lh9HrIjvvSniSeQCb9XrHQFaaZJC-7rcTmUWgV-fASXfkbPB-YBZsWPOMXvcvX_PBNSva7ydgU5-cQNNDqd3tG7GOQYcsApwRJlUgjqpNsmAN3liA5xH7yeKx_aDQo4PJTyAbQsDfeKuD5U8XD2PCNQPDYCFEl2gsZBfskTTXfOzc7XUta1tUDHypaRwRz_aaWuX8Ik3vRs7RFWhkRsg3Ilg8ZeRWWYtG2P5NwSxnp9jKh37ChTyy1ORM4lP2A7AWqZZ6r5QyKb_f56Ytas11RTbYAlWXYdKBBueMWLhHh4sCXIK-70wHZvmfwZrye6ZD4xT1-EBQLYwzI-uvwx1ZwhKbMo-t8Ptv-4c-QapGOac8oDcasaj6G9OsxwgKCYWbGEkebjHPbkyrva7WRYwtxQMu67NCEJcd3kH0zFrbgnaCJ3qvQ7hJdNqd-bfr9jDgGo7W2tQ-e4Tb1KjtemJqzX-HysS7sL8pyp46_gIhtuZ5dk3OIn1y0)

6. **Upravljanje računov zaposlenih** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Upravljanje_racunov_zaposlenih.puml))

Na diagramu je prikazan primer za tip zaposlenega razvijalca, enako pa velja tudi za tip zapolsnega analitika.

![DZ](https://teaching.lavbic.net/plantuml/png/bLF1Jjj04BtxAqRfWLOYubIfGX4IK2fLQYiEBRtaClOEOUBrZBjU6_0_y4kSw7zrrY69AMbf3xOZxtjltfldNB4Zk5IDkTvaMLEor1YmWXoBSX6q5LUerm0ne3HsH197A4UNsFhubMxYiUU5L7OCXTqeZ51OH0qd6Xo5qq4izwR-3B2Pk09TNt6aCIW4lHxn0KQ73VreIGhwn9Ts2OsdlNhxuUJTsUaEz3c6o0NNAF7_2JljPaCKc1oxYcK2s02cNxFPyFxeAAkt2Z0v_8o22pghQg-tHCrt5gVN0-sYeaQuXDaiJpCmtBv47cZLyCvOXKeCwf-HtbD7NciA0znHPrZhYsFID_l9BKoFrlCFuU00FlOv1OQs3jZv9SgIvXBmuQuLxQ37MXjFmbT3UEumqfhzA3URJf_erO5Bx47pW7s1S-aHsYPs60PjC5LQ8Amcu9yirUeDB2iLAkPIUlOb2CAYhNAON0WrFCdMU_oDNmVRWsLAaTYBDd4kdJqGQdKOI-t6pDLM1-B37O5vJ5ZGyd0kwDowWjTSqNvAPyzo7wX2zlkmeCRhc-rkLcBPOrEcRYKawM_32hZIj02BjQGosXBwG0vXKzjMnsWP-WXveDvYrrXIblgSRWsde1g3Ow-Wu2nPsd2xYPQAsMOxtmNTsU1GuCzxtgXdv1i2xfTK2KEqnQmS8Kpjiz60UHhtyvuiLnDDUeVJ5mbFak-EyEMVDHvR-7kymPAEQUiFcyHbUtiaTWpMp18Xjexjpm2cwzd6_G80)

7. **Iskanje uporabnikov** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Iskanje_uporabnikov.puml))

![DZ](https://teaching.lavbic.net/plantuml/png/bPFRQjj048RlzHI3UvD2dLmLYZ669gHGA2NGqqMRYv4qjaQ77NLs9QTvXpv4twLzhuxNfpKnXGeajDh_-sVcNrHnIR0K2RayP9blsFMes46EHRDI6LnPI2iAGT5vso8N4bL9InpQy94UmkkMLwwpRIZiGPgei0YYrw8bwKqqorjpVo8uLDoArXK7IaMgiavuW6JJq_U1N47lU6ctexJQivTlhb_TtfnHtw46BhX75_uVEDjk5aU1oProZMDRasCOUb7C7JSJG0_zqC_dKRLOPFtH3oQp3uHQL9yygV_2hfHr13vtv0s6-JpVL4FzyIym8ZwkZIZ41PNsAM1dHUK6sEeFIsFiz3XiQjXbpS9qiMzX1bTNyFOn9sLWtw2hwJYSZ75u7Z7G7eZyV3ezCUYL6toC1gqZ6DLROtIkrEZ4mxXJoaufBxuvu4qJ1Fpdr--VR1zy9Uiu_eN3Zfvd-ypCS9l539QMQ2evzBeLPAr8Rp-20g55TqmasuMviJfyd2NlboiAxyto8lLCy6EsqwGTxYWhwHn0hangfdbq68gAtIgEyVN-XDyEaSnjUQPn3pLrM8l5LPsSMUAnW_y2)

8. **Sledenje uporabnikom** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Sledenje_uporabnikom.puml))

![DZ](https://teaching.lavbic.net/plantuml/png/bLJRQjj047tNLmpEYmDr_5GenZKqQGk1KWAzFJHz66d7rjhIZhgxajFyGp-Y_zByLyShorx7Iam54fBsd3CpvsYLQqKmP_OftoM9MsbJeSKIKinM2ykrKHaNRC5RD4wMoFW8fMYETU4_qvr_K-Y5AMKPChcGZL2OURQNR1NPgo2M5g9-1DXLR47hN7kAGTRoEk83H8kEVjPaClgWvt8QYgkTlNn_-UhTLG_w1gtNcQxG-FydzBQRX55WS6Fr4fjYIKP3nHPJerS3G0TLNKsd0JIR9TLU3WQJJuGsoxyuikwRDehNWV2r92Tac4xJJJ6qlvuZ1eeBpyB8s7ZBnJ51eYAr8RJutQDm93pjDpNaa6PXDEjQcC1u3DVtALaDsgtGB0dgRZXkmkowGKyT8V2dez61G6Nr2k-3G6486kkaCUehrHXsq6oHl4NoYri3UjC4WNxuy_UtbXSkvtKOVsYmfFEayqm4MoycC1T7OyYkrnQG5CoLx0CBX6BTtf5aQ-P6QlTo4jrVBCX_5CbXh1dHzzwEedPqIOcYFW8P5TMC_IZHPxasYp36zny7_7Q8Q6xnCxQxNbA9InQxyeFC8eqkj3QAHxMtZhk251taNj-QMlgvLZ1v3Lh1K4u1oz-25hY7uVdnrz6N4XT56-KmgBuz3kfa7gs6-7I1LILkzYYTZ6SyhjXR9JkwwMR69_Bgp-e4_UcudkLj2Vy0)

9. **Ogled produktivnosti** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/ogled_produktivnosti.puml))

![DZ](https://teaching.lavbic.net/plantuml/png/bP4xRzim481t_Wh2NTeXq5IWC0m3YP421JfaIDebouaysupaEvKynab-VKzCzGZijEWWGS9ztpttmQFTCalDJyQa9b074Gws1jVi8cVoZbkELY9GqX2Ip2YFMyYjtEAJNBPXHmSDMwSlZ3CAd72yukWnRagokjNi9y1OyHKwxeFW78gHZpFVsbamuQ-CvF1xsEf3EA_suVFNgo_NcpFq3KG9BdH0yl_2sNPD6SKkRc9uWCVs0IdOt764caApi91ibxlLgb3hjUccV7Qnl7GI7eCy_mpa-LZe7mTCQjhLgkvBGNn-roey_FbHmJ59vFQ4l_P1RY4rgGYYNt-1xoZfMT7V9Oo5prbfFR3MKDZeDFPYFRQvj5KLNchT0EzQz71FBv1Q9h1TP9yRROuuIRYdjEVZqFd7hDc3_sHAzo0uv3D3NYqnJhQqEvI-ds-qvLDruCmeg5ocBABZGzUYe2yhsEXIfUIOPUXXKmmrTTvbLVMcFQDEKiv6qOkfLbMTuptEZTSYRuVxfrVQcuQRjj-xPSr3p8F0t1nNCwvLvVw2lTaVnBxHauk8z1i0)

10. **Ogled dogodkov na koledarju** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/ogled_dogodkov_na_koledarju.puml))

![DZ](https://teaching.lavbic.net/plantuml/png/bP91Rzim38Nl-XL4UkaEHKy3XY08q0RTKA2778hsiEn0MuoZM14zIawo_lhHJkmfQ85Y1nkM-Bx79yeRPmdMpAdWep6nTg51mHqKMDQLS1jioPu5ac28MgAGCfMbDRO-FTCntNbNXPsMeTGNIQR2Ch7SirYIHMzMU7L_9nWxdaI7ZKkKYqJuaF40MJ7IxvP2IKzkhK-WlDlLr-_ttnuM7wYNACcLhi6G_X_uCAxfZmAJfRWjxlsMWeEsOS4Yk7e26A5fczciLytdfldd1vFf3-RAqm8z1OloweBbGy-yx2Wg3xDPqJL4-VC9UsUnqJleOJnzArnoICB-CtRvs7FbUQtWmr4D0dhGcj96pm0typ7M56vltLkXv-vyBAuqUCMsvZq4X9gxFTcsgn0tUeDdssUCTRp-qWtCxJ7Hu6O6LsqmH9z2HUa4j974sGmxQyoWLMnCFWNlOheUreyvDsoQKNrpqP7s-Xl7dx-CfVVCsEnY2gbBU4aCwSP3AT1DhnjP8wx6DnXcjGhviFu2)

### Diagrami stanj

**Diagram stanj za Uporabo časovnika** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/načrt_obnašanja/Uporaba_casovnika.puml))

![Uporaba_casovnika](https://teaching.lavbic.net/plantuml/png/NOv1QyCm38Nl_XM2NRf1ZuEIms0fBUowxJPsK6CjCN7j8YjqREo_Jt7YalOYM-zxJrBgNJWXun4EsFGjno7O9lh888mXAQ8W9brSbhvmyF9Et_BiNHkEYg7HGhnm8NCyR_EOWzUv2vG4XU3N0DINXPFpt3cXKOziYIVjxd5VRtPRLTy4MMx5NSaMwS-OQS6BzLJ-hqC8BhIbhPcmD-RZuHFMJvDnBB3MRhPMuvaigtip2ndcu8poNtb-RwFnLF0oFYwfW2cHN0MlzVaMTcqd2lNA2jnF5-q_)

- ob reset() se nastavi čas časovnika na začetno vrednost in se časovnik zamrzne
- ob start() se začne odštevanje časa časovnika
- ob startBreak() se časovnik zamrzne in se začne odštevati čas odmora
- ob stopBreak() se počitek konča in se začne spet odštevati čas časovnika 
