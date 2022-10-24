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

*/

