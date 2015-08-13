var list = [
  {
    "id": 1,
    "status": 1,
    "inputs": [
      "asd",
      ""
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "test",
      ""
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "",
      "test1"
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "gfg",
      ""
    ],
    "outputs": [
      ""
    ]
  }
]


checkValid = function(list){
    var isValid = false;
    for(var i = 0;i<list.length; i++){
      if(list[i].inputs != null && list[i].inputs.length > 0){
          for(var j=0;j<list[i].inputs.length;j++){
             if(list[i].inputs[j].length > 0){
                isValid = true;
                break;
             }
          }

          if(!isValid)
            return false;
      }
    }

    return isValid;
}




function checkValidity( list ) {
  return list.every( function ( item ) {

    if ( item.inputs.length == 0 ) return false;
    return !( item.inputs.every( function ( input ) { return input.length == 0 } ) )  

  })
}

var isRecordsValid = checkValidity( list );

// if (isRecordsValid) save(); 
// else error();