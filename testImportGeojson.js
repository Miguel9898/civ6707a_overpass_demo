import fs from 'fs';
import turfArea from '@turf/area';
import turfLength from '@turf/length';
import GeoJSON from 'geojson';


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

const geojson = readGeojsonFile('./DonneesTP2/exportway.geojson');

// au lieu d'un map on cree le foreach (qui le rempli au fur et a mesure pour chaque id (map ca cree un array.)

const areaAndlengthbyId = {}; // on veut store nos valeurs dans cet objet vide. 
geojson.features.forEach(function(feature) {
    let area = undefined;
    let length = undefined;
    if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
    area = calculateArea(feature);
    
    }
    else if (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString') {
    length = calculateLength(feature, { units: 'meters'});
    }
    if (area !== undefined || length !== undefined) {
        areaAndlengthbyId[feature.properties["@id"]] = {
            area: area,
            length: length
        };
    }
}); 

console.log(areaAndlengthbyId);


const data = JSON.stringify(areaAndlengthbyId);

fs.writeFile('geojsonLengthArea.geojson', data, err => { //(pris de l'internet.Pour ecrire le Geojson.) 
    if (err) {
      throw err
    }
    console.log('JSON data est valide')
  });






/*
const nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(function(num) {
    console.log(num ** 2);
});
*/


/* Ca nous calcule les aires et les longueurs, mais ca ne nous retourne pas les valeurs dans le format souhaite. 
const ids = geojson.features.map(function(feature) {
    return feature.properties.id;
});
const names = geojson.features.map(function(feature) {
    return feature.properties.names;
});

const areas = geojson.features.map(function(feature) {
    return calculateArea(feature);
});

const length = geojson.features.map(function(feature) {
    return calculateLength(feature);
});
*/



// on doit faire une boucle avec les [id]: [area] etc. 
