// JSON string
let json = `{
    "name":"La plateforme_",
    "address":"8 rue d'hozier",
    "city":"Marseille",
    "nb_staff":11,
    "creation":2019
}`;

// Parse JSON string to JavaScript object
  console.log(JSON.parse(json));

  function jsonValueKey(jsonString, key){
    // Parse JSON string to JavaScript object
    let jsonObject = JSON.parse(jsonString);
    return jsonObject[key];
    // return jsonObject.city;
    // return jsonObject[key];
    // console.log(jsonValueKey(jsonString, key));

    // console.log(jsonObject[key]);    
  }
    console.log(jsonValueKey(json, "city"));
// formate Json is object with several objects eachone consists with the attributes as key and  value of different types possible which can be found by their key
// function jsonValueKey(json,key){
//     // return json[key];
  
// }

// console.log(json,"city");
//console.log(jsonValueKey(json,"city"));
//console.log(json.city);

// jsonValueKey(jsonValueKey(json,key));