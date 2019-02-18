//var latestMission = document.getElementsByClassName('latest-mission');


function readTextFile(file, callback) {   //fetch, http put delete request post get curl
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
readTextFile("https://api.spacexdata.com/v3/launches/next", function (text) {
  var data = JSON.parse(text);
  console.log(data);
  var landingVehicle = data.rocket.first_stage.cores[0].landing_vehicle;
  var landIntent = data.rocket.first_stage.cores[0].landing_intent;
  var payloadMass = data.rocket.second_stage.payloads[0].payload_mass_kg;
  var missionName = data.mission_name;
  var launchSite = data.launch_site.site_name_long;
  var rocketName = data.rocket.rocket_name;
  var nameCostumer = data.rocket.second_stage.payloads[0].customers;
  var orbitSat = data.rocket.second_stage.payloads[0].orbit;
  var launchNumber = data.flight_number;

 
  function landingPlace(landingVehicle) {
    if (landingVehicle = "OCISLY") {
      document.getElementsByClassName('landing-place')[0].innerHTML = 'On de droneship: of course i still love you';
    }
    else if (landingVehicle = "JRTI") {
      document.getElementsByClassName('landing-place')[0].innerHTML = 'On de droneship: Just Read The Instructions';
    }
    else if (landingVehicle = "JRTI-1") {
      document.getElementsByClassName('landing-place')[0].innerHTML = 'On de droneship: Just Read The Instructions';
    }
    else if (landingVehicle = "LZ-1") {
      document.getElementsByClassName('landing-place')[0].innerHTML = 'Cape Canaveral Air Force Station Landing Zone 1';
    }
    else if (landingVehicle = "LZ-4") {
      document.getElementsByClassName('landing-place')[0].innerHTML = 'Cape Canaveral Air Force Station Landing Zone 4';
    }
    else {
      document.getElementsByClassName('landing-place')[0].innerHTML = 'fell into the ocean';
    }
  }
  landingPlace(landingVehicle);

  function showName(missionName){
    if (missionName != null) {
      document.getElementsByClassName('mission-name')[0].innerHTML = missionName;
    }
    else {
      document.getElementsByClassName('mission-name')[0].innerHTML = 'data not available ';
    }
  }
  showName(missionName);

  function showSite(launchSite) {
    if (missionName != null) {
      document.getElementsByClassName('launch-site')[0].innerHTML = launchSite;
    }
  }
  showSite(launchSite);

  function showCostumer(nameCostumer) {
    if (missionName != null) {
      document.getElementsByClassName('name-costumer')[0].innerHTML = nameCostumer;
    }
  }
  showCostumer(nameCostumer);

  function showOrbit(orbitSat) {
    if (missionName != null) {
      document.getElementsByClassName('orbit-sat')[0].innerHTML = orbitSat;
    }
  }
  showOrbit(orbitSat);

  function recoverFristStage(landIntent) {
    if (landIntent = "true") {
      document.getElementsByClassName('land-intent')[0].innerHTML = 'Yes!';
    }
    else {
      document.getElementsByClassName('land-intent')[0].innerHTML = 'No';
    }
  }

  function showRocket(rocketName) {
    if (missionName != null) {
      document.getElementsByClassName('rocket-name')[0].innerHTML = rocketName;
    }
  }
  showRocket(rocketName);

  function totalLaunches(launchNumber) {
    if (missionName != null) {
      document.getElementsByClassName('total-launches')[0].innerHTML = launchNumber;
    }
  }
  totalLaunches(launchNumber);


  recoverFristStage(landIntent);

  function GetNumberNice(payloadMass) {
    if (payloadMass > 0) {
      document.getElementsByClassName('payload-mass')[0].innerHTML = formatNumber(payloadMass) + 'Kg';



      function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      }
      formatNumber(payloadMass);
  
    }

  }
  GetNumberNice(payloadMass);

  //////////////////// TIMER  ////////////////
  // Set the date we're counting down to
  var countDownDate = new Date(data.launch_date_utc).getTime();
  console.log(countDownDate);

  //console.log(countDownDate);

  // Update the count down every 1 second
  var interval = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementsByClassName("timer")[0].innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(interval);
      document.getElementsByClassName("timer")[0].innerHTML = "EXPIRED";
    }
  }, 1000);

 



function setTimer(value, htmlElement, totalTime) {
    millis = (100 / (payloadMass)) * totalTime;
    console.log(millis);
    var index = 0;
    var placeNumber = document.getElementsByClassName(htmlElement)[0];
    var timer = setInterval(incrementNumber, millis);

    function incrementNumber() {
      index = index*2;
        placeNumber.innerHTML = index;
        if (index == value) {
            clearInterval(timer);
        }
    }
}
setTimer(payloadMass, 'payload-mass', 1);




function setTimer(value, htmlElement, totalTime) {
    millis = (100 / (launchNumber)) * totalTime;
    console.log(millis);
    var index = 0;
    var placeNumber = document.getElementsByClassName(htmlElement)[0];
    var timer = setInterval(incrementNumber, millis);

    function incrementNumber() {
        index++;
        placeNumber.innerHTML = index;
        if (index == value) {
            clearInterval(timer);
        }
    }
}
setTimer(launchNumber, 'total-launches', 2);
});
