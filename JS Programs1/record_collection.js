// Setup
// JS program to search and access albums from a record collection


const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    let empty = "";
    if(prop !=="tracks" && value !== empty){
        records[id][prop] = value;
  }

  else if(prop === "tracks" && value !== empty && records[id].hasOwnProperty("tracks") === false ){
        records[id][prop] = [value];
  }
  else if(prop === "tracks" && value !== empty){
        records[id][prop].push(value);
        
  } 
  else if(value === empty){
        delete records[id][prop];
        } 
    return records;
  
  }
    
  
  console.log(updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me'));
  //console.log(recordCollection[2548].hasOwnProperty("tracks"));
  