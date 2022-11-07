 # :notebook: Guide de l’utilisateur pour le TP2  
## :file_folder: Clé ssh pour l’installation du fichier
Vous pourriez utiliser le lien suivant pour télécharger une version de répositoire afin de pouvoir suivre le travail étape par étape. 

```bash
INSERER LE LIEN
```

## :page_with_curl: Description du projet
Le but de ce repositoire est de conduire une analyse de données OpenStreetMap dans node.js pour une portion d’un terrain dans la région métropolitaine de Montréal. 
Le secteur nord-est de l’ile Perrot a été utilisé dans le cadre de cette analyse. Le secteur qui se situe directement au sud-ouest de l’ile de Montréal et le terrain d’analyse est composé des coordonnées suivantes: 
```bash
[bbox: 45.3755, -74.002, 45.3938, -73.9719]
```
Une fois le terrain de choisi, les données ont été extraites de overpass.turbo en format geoJSON afin qu’elles soient traitées dans node.js dans le fichier appelé _fonction.js_. 
Dans ce même fichier, les superficies et les aires de chaque élément applicable ont été caluculé afin de pouvoir attribuer les statistiques par distance ou aire. 
Ces données sont ensuite représentées sous format de cartes QGIS dans l’ordre suivant. De plus, des statistiques pour les distances des trottoirs et rues ainsi que les superficies des usages de sols seront fournies dans le rapportd’analyse. 

## :exclamation: Dépendances. 
Voici des plugins qui ont été téléchargés afin de pouvoir analyser les données nécessaires. 

```bash
"@turf/area": "^6.5.0",
"@turf/distance": "^6.5.0",
"@turf/length": "^6.5.0",
"node-fetch": "^3.2.10"
```

## Liscence

```bash
"MIT"
``` 
