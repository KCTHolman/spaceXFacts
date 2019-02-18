function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}// verbinding opgezet

//usage: 
readTextFile("https://api.spacexdata.com/v3/launches/past", function (text) {// verbinding gemaakt met api 
    var data = JSON.parse(text);
    console.log(data);
    console.log(data[0].rocket.first_stage.cores[0].landing_vehicle);
    var landingPlaces = data[0].rocket.first_stage.cores[0].landing_vehicle;
    var landingPlacesFound = [];

    data.forEach(function (dataElement) {
        //console.log(dataElement.rocket.first_stage.cores[0].landing_vehicle);
        if (landingPlacesFound.length == 0 && dataElement.rocket.first_stage.cores[0].landing_vehicle != null) {
            //console.log("array is empty and landing vehicle is NOT null");
            landingPlacesFound.push(dataElement.rocket.first_stage.cores[0].landing_vehicle);
            //console.log(landingPlacesFound);
        } else {
            //console.log("array is NOT empty");
            landingPlacesFound.forEach(function (landing_vehicle) {
                if (dataElement.rocket.first_stage.cores[0].landing_vehicle != null) {
                    if (!ExistsInArray(landingPlacesFound, dataElement.rocket.first_stage.cores[0].landing_vehicle)) {
                        landingPlacesFound.push(dataElement.rocket.first_stage.cores[0].landing_vehicle);
                      //  console.log("New entry, pushed to array");
                    } else {
                      //  console.log("Already exists, continue");
                    }
                }
                
            });
        }
        console.log(landingPlacesFound);
    });

    function ExistsInArray(ARRAY, checkItem) {
        let exists = false;
        ARRAY.forEach(function (item) {
            if (item == checkItem) {
                exists = true;
            }
        });
        return exists;
    }

});



