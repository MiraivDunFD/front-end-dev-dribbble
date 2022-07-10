# Procesverslag
Dit document geldt als het procesverslag waarin details zijn verwerkt over het proces die ik heb afgelegd tijdens het opzetten van de website (de opdracht).

## De opdracht

### Details
**Dribbble.com** ga ik grote lijnen namaken.
Voor de opdracht ga ik focus leggen op de weergavelijst van projecten op de homepagina. 
Hierbij zal ik gebruikmaken van;
1. **flexbox** (voor diverse breakpoints).
2. een **css animatie** zal verwerkt worden in een schaalbare menubalk.
3. de css animatie zal geactiveerd worden door **javascript** code.

Tot slot zal er een tweede pagina gemaakt worden, wat een **detail pagina** gaat vormen. De detail pagina is een opvolg pagina als de gebruiker op een van de projecten via de homepagina drukt.

### Screenshots Dribbble

<details>
<summary>Mobile</summary>

![This is an image](images/logboek/mobile/home.png)
<sub>Homepage</sub>

![This is an image](images/logboek/mobile/detail.png)
<sub>Detail page</sub>
</details>

<details>
<summary>Tablet</summary>

![This is an image](images/logboek/tablet/home.png)
<sub>Homepage</sub>

![This is an image](images/logboek/tablet/detail.png)
<sub>Detail page</sub>
</details>

<details>
<summary>Desktop</summary>

![This is an image](images/logboek/desktop/home.png)
<sub>Homepage</sub>

![This is an image](images/logboek/desktop/detail.png)
<sub>Detail page</sub>
</details>

## Toegankelijkheidstest

### Alle bevindingen
1. Makkelijkste om **'mobile-first'** te developen en daarna pas desktop.
2. Ik gebruikte de **section attribuut** verkeerd (semantics)
3. **Netheid van css en html** file nog niet inorde met notities (readability).

<details>
<summary>'Mobile-first'</summary>

#### Ik ben compleet opnieuw begonnen doordat ik de fout had gemaakt om eerst voor het grootste scherm te gaan developen.
Het lukte me na heel veel proberen en pielen op de code niet meer om op een fijne manier alle breakpoint designs door te kunnen voeren op de css. 
  
##### Oplossing
Hiervoor heb ik een verse start gemaakt. Ik ben direct begonnen met het eerst opzetten van de mobiele pagina. Dit ging dan ook echt veel sneller en makkelijker dan de vorige aanpak!

</details>

<details>
<summary>'Section' tag & semantiek</summary>

#### Het overmatige gebruik van de 'section' was niet nodig en daarbij ook incorrect. 
Om goed te begrijpen waar 'section' gebruikt voor mag worden, heb ik via een bron goed ingelezen waar het voor staat. Het is mij duidelijk geworden dat een section een gedeelte van een document definieerd (zoals bijv. een hoodstuk of sub kopje van een tekst). 
 
##### Oplossing
Ik heb deze fout snel opgelost door meer in te lezen over de semantiek van html (zie bron in bronnenlijst onder in de pagina) en heb veel section tags naar div tags kunnen veranderen (geldt alleen voor placeholders puur voor styling en positionering).
  
</details>

<details>
<summary>Netheid HTML & CSS</summary>

#### De HTML & CSS files waren een puinhoop.
Toen ik eenmaal een scherp blik had geworpen op mijn code, merkte ik dat ik geen fijn overzicht had. De css selectoren stonden niet chronologisch geordend. Vele dingen zaten 'kris-kras' door elkaar heen. Daarnaast had ik bij de HTMl file nog geen notities (comments) geplaatst. Ik merkte dat het zoeken naar de juist code in de file lang duurde. 

##### Oplossing
Dit heb ik opgelost door veel notities toe te voegen bij de verschillende elementen in de HTMl file. Voor de css file heb ik nog meer notities toegevoegd en daarbij ook tekstjes die meer vertellen over de functionele waarde. Dit werkte ook erg goed voor de css animatie. Zo weet je direct hoe het in elkaar zit!
  
</details>

## Eind reflectie

### Wat minder goed ging
- Van desktop naar mobile breakpoint (zoals aangegeven in de toegangkelijkheidstest).
- Javascript schrijven, dit was weer even bijschroeven!
- HTMl semantiek. Dit had ik eerder moeten opzoeken.

### Wat goed ging
- Van mobile naar desktop breakpoint ging zeer gemakkelijk en snel!
- Flexbox gebruiken, dit ging heel soepel.
- De juiste styling (fonts, kleuren, etc) aanbrengen met css.

### Screenrecordings

<details>
<summary>Mobile</summary>
  Screenrecording vanaf mijn iPhone.
  
  ![mobile-menu](https://user-images.githubusercontent.com/94361815/178158282-40569eec-c21f-4bf5-9955-2be5e5253ef6.gif)
<sub>Menu</sub>

![mobile-home](https://user-images.githubusercontent.com/94361815/178158287-b0bf9d2b-34a9-4210-973a-29c7d3e23924.gif)
<sub>Homepage</sub>

  ![mobile-detail](https://user-images.githubusercontent.com/94361815/178158296-049bc107-9c48-4457-8177-17df72c75e53.gif)
<sub>Detail page</sub>

</details>

<details>
<summary>Tablet</summary>
  Screenrecording vanaf mijn ipad.
  
  ![tablet-menu](https://user-images.githubusercontent.com/94361815/178158375-fa99114d-a5d7-49b3-9f3d-9d0ffa37d881.gif)
<sub>Menu</sub>
  
![tablet-home](https://user-images.githubusercontent.com/94361815/178158379-5fad8203-551b-4bf4-becb-d53c8b233047.gif)
<sub>Homepage</sub>

![tablet-detail](https://user-images.githubusercontent.com/94361815/178158389-95e82469-0108-4b34-8a00-f8a3e53ce105.gif)
<sub>Detail page</sub>

</details>

<details>
<summary>Desktop</summary>
  Screenrecording vanaf mijn MacBook.
  
![desktop-home](https://user-images.githubusercontent.com/94361815/178158458-fc01308f-a543-438f-9020-11c4fd7ee044.gif)
<sub>Homepage</sub>

![desktop-detail](https://user-images.githubusercontent.com/94361815/178158467-a5283da9-8618-4aa1-9b62-512594b7aa3a.gif)
<sub>Detail page</sub>

</details>

## Bronnenlijst
Hieronder het lijstje met alle bronnen die gebruikt zijn ter inspiratie voor de oplevering.

<details>
  <summary>Projecten weergave</summary>
</details>

  ### Projecten weergave
Voor het indelen van de projecten op de homepagina met juiste breakpoint design.
- This site was built using [GitHub Pages](https://pages.github.com/).

### Schaalbare menu
Het maken van de menubalk voor alle breakpoints.
- youtube

