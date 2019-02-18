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
readTextFile("https://api.spacexdata.com/v3/landpads", function (text) {// verbinding gemaakt met api 
    var data = JSON.parse(text);
    console.log(data);
    console.log(data[0].successful_landings);
    var landingAttemps = data[0].successful_landings;
    var landingAttempsFound = [];

    data.forEach(function (dataElement) {
        //console.log(dataElement.rocket.first_stage.cores[0].landing_vehicle);
        if (landingAttempsFound.length == 0 && dataElement.successful_landings != null) {
            console.log("array is empty and landing vehicle is NOT null");
            landingAttempsFound.push(dataElement.successful_landings);
            console.log(landingAttempsFound);
        } else {
            console.log("array is NOT empty");
            landingAttempsFound.forEach(function (landingAttemps) {
                if (dataElement.successful_landings != null) {
                    if (!ExistsInArray(landingPlacesFound, dataElement.successful_landings)) {
                        landingPlacesFound.push(dataElement.successful_landings);
                        console.log("New entry, pushed to array");
                    } else {
                        console.log("Already exists, continue");
                    }
                }
                
            });
        }
        console.log(landingAttempsFound);
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



