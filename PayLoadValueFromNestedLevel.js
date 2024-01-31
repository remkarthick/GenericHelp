var payload = {
    "name": "kk",
    "address": {
        "street": "10th Cross",
        "building": "Some Building",
        "floor": "3rd floor",
        "phonenum": { "p1": "", "p2": 456 },
        "assets":[{"name":"laptop1","id":"laptop1id"},{"name":"laptop2","id":"laptop2id"}]
    },
    "marks":[{"maths":100,"staff":"Abraham"},{"physics":99,"staff":"Lincoln"}]
}

console.log(getPayloadValue(payload, "address.street"));//10th Cross
//console.log(getPayloadValue(payload, "address.phonenum.p1"));//""
//console.log(getPayloadValue(payload, "address.phonenum.p2"));//456
//console.log(getPayloadValue(payload, "address.phonenum.p3"));//undefined

//console.log(getPayloadValue(payload, "address.assets[0].name"));//
//console.log(getPayloadValue(payload, "marks.maths","100","staff"));//
console.log(getPayloadValue(payload, "address.assets.name","laptop1","id"));//


//console.log(Array.isArray(payload.marks));//

function getPayloadValue(payload, key,searchValue,returnKey) // searchKey,searchValue & returnKey is for Array type 
{
    if (key in payload) { 
      return payload[key];
    }
    const keys = key.split("."); 
    console.log("keys:"+keys);//keys:marks,maths
    var value = payload; 
    for (var i = 0; i < keys.length; i++) {
      if(!Array.isArray(value)) // If the value is of object type and not an array
      {
        value = value[keys[i]];
        console.log("value:"+JSON.stringify(value));
      }
      else if(Array.isArray(value))
      {
        console.log(JSON.stringify(value)+" : Array detected"); //value:[{"maths":100,"staff":"Abraham"},{"physics":99,"staff":"Lincoln"}]
        for(var k in value)
        {
          console.log("boo")
          var v1=value[k][keys[keys.length-1]];//value[k]={"maths":100,"staff":"Abraham"}
          var v2=value[k][returnKey];
          if(v1==searchValue){
            value= v2;
            break;
          }

        }
      }
      
      if (value === undefined) {
        break;
      }
    }
    return value;
  }


  // if key is not there in payload then you get undefined
  // if there is a empty value("") against a valid key is there you will get a "" string

