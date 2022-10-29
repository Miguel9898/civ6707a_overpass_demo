/* 
Q1: 1.	Donner les statistiques sur distance 
[out:json]
      [bbox: 45.3755, -73.9979, 45.3920, -73.9748];
      (

        way["sidewalk:left"];
        way["sidewalk:right"]; 
        way["sidewalk"];
        way["sidewalk:both"];
        ._;
        >;
      );

      ( 
        way["lanes"];
        way["crossing"];
        node["public_transport"];
        node["crossings"];
        way["maxspeed"];
        node["shop"];
        ._;
        >;
      );
    
      out body;


Q2: Le nombres de voies par direction
[bbox: 45.3755, -73.9979, 45.3920, -73.9748];
(
  way["lanes"];
  >;
);
 
//insere les autres types de sidewalks. 
 out body;

 Q3: Les traverses : (en sous-groupes.) 

 [bbox: 45.3755, -73.9979, 45.3920, -73.9748];
(
  way["crossing"];
  >;
);
 out body;
// Pour l'analyse, on veut "<tag k="crossing" v="unmarked"/>" pour voir le type de cycleway qu'on veut. Ensuite, on veut voir s'il y a un cycleway de present. 

Q4: Superficie (en km2 et en %) :
[bbox: 45.3755, -73.9979, 45.3920, -73.9748];
(
  relation ->.rel;
  .rel map_to_area ->.usagesol;
 
  nwr["landuse"](area.usagesol);
  >;
  nwr["amenity"](area.usagesol);
  >;
);
 out body;


 Q5: Analyse de l'offre du transport en commun

 [bbox: 45.3755, -73.9979, 45.3920, -73.9748];
(
  node["public_transport"];
  node["crossings"];
  >;
);
 out body;
// comment veut-on quantifier/analyser ces donnees? On les compar avec quoi? 


Q6: Limite de vitesse maximale: 

[bbox: 45.3755, -73.9979, 45.3920, -73.9748];
(
  way["maxspeed"];
  >;
  
);
 out body;

 Q7: COS en moyen des batiments

 [bbox: 45.3755, -73.9979, 45.3920, -73.9748];
(

  nwr["landuse"="residential"]; // ca va me ressortir le nombre d'unites dans les tags
  >;

);
 out body;
 // Est-ce qu'on peut prendre les aires pour chaque et de diviser le nombre de flats par l'aire totale? Et ensuite prendre la moyenne? - Miguel 24-10

Q8: Types de commerces

[bbox: 45.3755, -73.9979, 45.3920, -73.9748];
(
  node["shop"];
  
);
 out body;

*/

import fs from 'fs';
import turfArea from '@turf/area';
import turfLength from '@turf/length';

const readGeojsonFile = function(filePath) {

    const geojson = JSON.parse(fs.readFileSync(filePath));
    return geojson;

};

const calculateArea = function(feature) {
    if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
        const areaM2 = turfArea(feature);
        return areaM2;
    } else {
        return undefined;
    }
};

const calculateLength = function(feature) {
    if (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString') {
        const lengthM = turfLength(feature, { units: 'meters'});
        return lengthM;
    } else {
        return undefined;
    }
};

const geojson = readGeojsonFile('./export.geojson');

// Ca nous calcule les aires et les longueurs, mais ca ne nous retourne pas les valeurs dans le format souhaite. 
const ids = geojson.features.map(function(feature) {
    return feature.properties.id;
});
const names = geojson.features.map(function(feature) {
    return feature.properties.name;
});

const areas = geojson.features.map(function(feature) {
    return calculateArea(feature);
});

const length = geojson.features.map(function(feature) {
    return calculateLength(feature);
});


console.log(ids, names, areas, length);