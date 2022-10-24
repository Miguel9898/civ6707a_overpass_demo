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

const calculateLegth = function(feature) {
    if (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString') {
        const lengthM = turfLength(feature, { units: 'meters'});
        return lengthM;
    } else {
        return undefined;
    }
};

const geojson = readGeojsonFile('./export.geojson');

// au lieu d'un map on cree le foreach (qui le rempli au fur et a mesure pour chaque id (map ca cree un array.)
/*
const areaEtLengthById = {};
geojson.json */

/*
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

console.log(ids, names, length, areas);

// on doit faire une boucle avec les [id]: [area] etc. 
