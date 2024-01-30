var payload = {
    "name": "kk",
    "address": {
        "street": "10th Cross",
        "building": "Some Building",
        "floor": "3rd floor",
        "phonenum": { "p1": "", "p2": 456 }
    }
}


console.log(getPayloadValue(payload, "address.street"));//10th Cross
console.log(getPayloadValue(payload, "address.phonenum.p1"));//""
console.log(getPayloadValue(payload, "address.phonenum.p2"));//456
console.log(getPayloadValue(payload, "address.phonenum.p3"));//undefined


function getPayloadValue(payload, key) {
    if (key in payload) { 
      return payload[key];
    }
    const keys = key.split("."); 
    var value = payload; 
    for (var i = 0; i < keys.length; i++) {
      value = value[keys[i]];
      if (value === undefined) {
        break;
      }
    }
    return value;
  }


  // if key is not there in payload then you get undefined
  // if there is a empty value("") against a valid key is there you will get a "" string

