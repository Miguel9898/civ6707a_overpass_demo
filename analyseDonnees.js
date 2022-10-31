import fs from 'fs';
import turfArea from '@turf/area';
import turfLength from '@turf/length';

const readGeojsonFile = function(filePath) {

    const geojson = JSON.parse(fs.readFileSync(filePath));
    return geojson;

};

const geojson = readGeojsonFile('./TP2sidewalks.geojson');


// On veut creer une fonction pour ressortir chaque insantance qu'il y'a un trottoir de present, aisni que de son type. 

const trottoirs= {}; // on veut store nos valeurs dans cet objet vide. 
geojson.features.forEach(function(feature) { // On fait une fonction for each, et peut etre un if else pour qu'on selectionne par type de trottoirs? 
    // a continuer

// On veut creer une commande pour prendre les longueurs et les superficies du fichier testImportGeojson afin de trouver les trottoirs par km.  

// Ensuite on veut write les donnees dans un fichier GEOJSON pour les importer dans QGIS.