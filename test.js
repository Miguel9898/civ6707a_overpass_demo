
import fetch from 'node-fetch';

const fetchOpenStreetMapData = async function() {
    const api = await fetch('https://www.overpass-api.de/api/interpreter?', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:`
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
      out body;
      `

    });
    const answer = await api.json();
    console.log(answer);
};

await fetchOpenStreetMapData();