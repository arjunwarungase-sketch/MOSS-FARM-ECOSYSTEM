"use strict";

//=========================
// SENSOR VALUES
//=========================

let airTemp = 37;
let humidity = 45;
let soilTemp = 76;
let soilMoisture = 81;
let waterLevel = 50;
let airQuality = 20;
let algaeHealth = 92;


//=========================
// SYSTEM STATE
//=========================

let mistOn = false;
let mistInterval;
let fanOn = false;
let fanInterval;
let lightOn = false;
let lightInterval;
let pumpOn = false;

//=========================
// HTML ELEMENTS
//=========================

const airTempText = document.getElementById("airTemp");
const humidityText = document.getElementById("humidity");
const soilTempText = document.getElementById("soilTemp");
const soilMoistureText = document.getElementById("soilMoisture");
const waterLevelText = document.getElementById("waterLevel");
const airQualityText = document.getElementById("airQuality");
const algaeHealthText = document.getElementById("algaeHealth");

const mistBtn = document.getElementById("mistBtn");
const fanBtn = document.getElementById("fanBtn")
const lightBtn = document.getElementById("lightBtn")
const pumpBtn = document.getElementById("pumpBtn")

//=========================
// FUNCTIONS
//=========================

//DASHBOARD

function updateDashboard(){

    airTempText.textContent = airTemp.toFixed(1) + "°C";
    humidityText.textContent = humidity + "%";
    soilTempText.textContent = soilTemp.toFixed(1) + "°C";
    soilMoistureText.textContent = soilMoisture.toFixed(0) + "%";
    waterLevelText.textContent = waterLevel + "%";
    airQualityText.textContent = airQuality.toFixed(0) + " AQI";
    algaeHealthText.textContent = algaeHealth + "%";

}

//Nature

function naturalEnvironment(){

    // Air slowly warms back up
    if(airTemp < 27){
        airTemp += 0.02;
    }

    // Humidity slowly falls
    if(humidity > 40){
        humidity -= 0.05;
    }

    // Soil slowly dries
    if(soilMoisture > 50){
        soilMoisture -= 0.02;
    }

    // Water slowly evaporates
    if(waterLevel > 0){
        waterLevel -= 0.002;
    }

    // Air quality slowly gets worse
    if(airQuality < 50){
        airQuality += 0.01;
    }

    if(mistOn){

    humidity += 1.5;

    airTemp -= 0.1; 

    soilMoisture += 0.1;

    }

    if(fanOn){

    humidity -= 0.3;

    airTemp -= 0.15;

    airQuality -= 0.2;

    }

    if(lightsOn){

    algaeHealth += 0.05;

    airTemp += 0.03;

    }

    if(pumpOn){

    soilMoisture += 0.4;

    waterLevel -= 0.1;

    }

}

//MIST

function turnMistOn(){

    mistOn = true;

}

function turnMistOff(){

    mistOn = false;

}

//FAN

function turnFanOn(){

    fanOn = true;

}

function turnFanOff(){

    fanOn = false;

}

//LIGHTS

function turnLightOn(){

    lightOn = true;

}

function turnLightOff(){

    lightOn = false;

}

//PUMP

function turnPumpOn(){

    pumpOn = true;

}

function turnPumpOff({})

//=========================
// BUTTONS
//=========================

//MIST

mistBtn.addEventListener("click",function(){

    if(!mistOn){

        turnMistOn();

    }
    else{

        turnMistOff();

    }

});

//FAN

fanBtn.addEventListener("click",function(){

    if(!fanOn){

        turnFanOn();

    }
    else{

        turnFanOff();

    }

});

//LIGHTS

lightBtn.addEventListener("click",function(){

    if(!lightOn){

        turnLightOn();

    }
    else{

        turnLightOff();

    }

});

//=========================
// AI
//=========================

function ecosystemAI(){

    if(humidity >= 90 && mistOn){

        turnMistOff();

    }

}