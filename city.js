/* =====================================================
   FUTURE CITY - JAVASCRIPT
   Functions + DOM + Events + Arrays + Objects
   ===================================================== */


/* ================= CITY DATA ================= */

let cityData = {

    population: 50000,

    energy: 72,

    water: 81,

    green: 64,

    traffic: 35,

    recycling: 58

};


/* ================= CITY OBJECT DATA ================= */

let cityObjects = [];


/* ================= DOM ELEMENTS ================= */

let city = document.getElementById("city");

let population =
    document.getElementById("population");

let energy =
    document.getElementById("energy");

let water =
    document.getElementById("water");

let green =
    document.getElementById("green");

let traffic =
    document.getElementById("traffic");

let recycling =
    document.getElementById("recycling");

let statusMessage =
    document.getElementById("statusMessage");

let enterButton =
    document.getElementById("enterButton");

let simulateButton =
    document.getElementById("simulateButton");

let reportButton =
    document.getElementById("reportButton");

let resetButton =
    document.getElementById("resetButton");

let report =
    document.getElementById("report");


/* =====================================================
   ENTER CITY
   ===================================================== */

enterButton.addEventListener("click", function () {

    document
        .getElementById("citySection")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =====================================================
   ADD BUILDING
   ===================================================== */

function addBuilding() {

    let building =
        document.createElement("div");

    building.className =
        "city-object building";


    /*
       Random position
       inside the city
    */

    let randomLeft =
        Math.floor(Math.random() * 80) + 5;

    let randomBottom =
        Math.floor(Math.random() * 25) + 15;


    building.style.left =
        randomLeft + "%";

    building.style.bottom =
        randomBottom + "%";


    city.appendChild(building);


    /*
       Update city data
    */

    cityData.population += 2500;

    cityData.traffic += 5;

    cityData.green -= 2;


    updateDashboard();

    checkCityStatus();

}


/* =====================================================
   ADD PARK
   ===================================================== */

function addPark() {

    let park =
        document.createElement("div");

    park.className =
        "city-object park";

    park.innerHTML = "🌳";


    let randomLeft =
        Math.floor(Math.random() * 85) + 5;

    let randomBottom =
        Math.floor(Math.random() * 30) + 15;


    park.style.left =
        randomLeft + "%";

    park.style.bottom =
        randomBottom + "%";


    city.appendChild(park);


    cityData.green += 5;

    cityData.traffic -= 2;


    updateDashboard();

    checkCityStatus();

}


/* =====================================================
   ADD SOLAR PLANT
   ===================================================== */

function addSolar() {

    let solar =
        document.createElement("div");

    solar.className =
        "city-object solar";

    solar.innerHTML = "☀️";


    solar.style.left =
        Math.floor(Math.random() * 80) + 5 + "%";

    solar.style.bottom =
        "35%";


    city.appendChild(solar);


    cityData.energy += 7;


    if (cityData.energy > 100) {

        cityData.energy = 100;

    }


    updateDashboard();

    checkCityStatus();

}


/* =====================================================
   ADD TRANSPORT
   ===================================================== */

function addTransport() {

    let bus =
        document.createElement("div");

    bus.className =
        "city-object transport";

    bus.innerHTML = "🚌";


    bus.style.left =
        Math.floor(Math.random() * 80) + 5 + "%";

    bus.style.bottom =
        "10%";


    city.appendChild(bus);


    cityData.traffic -= 7;


    if (cityData.traffic < 0) {

        cityData.traffic = 0;

    }


    updateDashboard();

    checkCityStatus();

}


/* =====================================================
   ADD WATER PLANT
   ===================================================== */

function addWaterPlant() {

    let plant =
        document.createElement("div");

    plant.className =
        "city-object solar";

    plant.innerHTML = "💧";


    plant.style.left =
        Math.floor(Math.random() * 80) + 5 + "%";

    plant.style.bottom =
        "25%";


    city.appendChild(plant);


    cityData.water += 7;


    if (cityData.water > 100) {

        cityData.water = 100;

    }


    updateDashboard();

    checkCityStatus();

}


/* =====================================================
   ADD HOSPITAL
   ===================================================== */

function addHospital() {

    let hospital =
        document.createElement("div");

    hospital.className =
        "city-object hospital";

    hospital.innerHTML = "🏥";


    hospital.style.left =
        Math.floor(Math.random() * 80) + 5 + "%";

    hospital.style.bottom =
        "20%";


    city.appendChild(hospital);


    cityData.population += 1000;


    updateDashboard();

    checkCityStatus();

}


/* =====================================================
   ADD SCHOOL
   ===================================================== */

function addSchool() {

    let school =
        document.createElement("div");

    school.className =
        "city-object school";

    school.innerHTML = "🏫";


    school.style.left =
        Math.floor(Math.random() * 80) + 5 + "%";

    school.style.bottom =
        "20%";


    city.appendChild(school);


    cityData.population += 500;


    updateDashboard();

    checkCityStatus();

}


/* =====================================================
   ADD RECYCLING CENTER
   ===================================================== */

function addRecycling() {

    let recyclingCenter =
        document.createElement("div");

    recyclingCenter.className =
        "city-object recycling";

    recyclingCenter.innerHTML = "♻️";


    recyclingCenter.style.left =
        Math.floor(Math.random() * 80) + 5 + "%";

    recyclingCenter.style.bottom =
        "25%";


    city.appendChild(recyclingCenter);


    cityData.recycling += 8;


    if (cityData.recycling > 100) {

        cityData.recycling = 100;

    }


    updateDashboard();

    checkCityStatus();

}


/* =====================================================
   UPDATE DASHBOARD
   ===================================================== */

function updateDashboard() {

    population.innerText =
        cityData.population.toLocaleString();

    energy.innerText =
        cityData.energy + "%";

    water.innerText =
        cityData.water + "%";

    green.innerText =
        cityData.green + "%";

    traffic.innerText =
        cityData.traffic + "%";

    recycling.innerText =
        cityData.recycling + "%";

}


/* =====================================================
   CITY STATUS
   ===================================================== */

function checkCityStatus() {

    if (cityData.green < 40) {

        statusMessage.innerText =
            "⚠️ Your city needs more green spaces.";

    }

    else if (cityData.traffic > 70) {

        statusMessage.innerText =
            "🚨 Traffic is becoming a major problem.";

    }

    else if (cityData.energy > 90) {

        statusMessage.innerText =
            "⚡ Excellent! Your city has strong renewable energy.";

    }

    else if (cityData.recycling > 80) {

        statusMessage.innerText =
            "♻️ Excellent waste management!";

    }

    else {

        statusMessage.innerText =
            "🌱 Your city is developing well!";

    }

}


/* =====================================================
   2050 SIMULATION
   ===================================================== */

simulateButton.addEventListener(
    "click",
    simulate2050
);


function simulate2050() {

    statusMessage.innerText =
        "🔮 Simulating the future...";


    simulateButton.innerText =
        "Simulation Running...";


    /*
       Delay makes the simulation
       feel realistic.
    */

    setTimeout(function () {

        cityData.population =
            Math.round(
                cityData.population * 1.35
            );


        cityData.energy =
            Math.min(
                100,
                cityData.energy + 15
            );


        cityData.water =
            Math.min(
                100,
                cityData.water + 8
            );


        cityData.green =
            Math.min(
                100,
                cityData.green + 10
            );


        cityData.recycling =
            Math.min(
                100,
                cityData.recycling + 15
            );


        cityData.traffic =
            Math.max(
                5,
                cityData.traffic - 10
            );


        updateDashboard();


        statusMessage.innerText =
            "🚀 Welcome to your simulated 2050 city!";


        simulateButton.innerText =
            "2050 Simulation Complete ✓";


    }, 2000);

}


/* =====================================================
   GENERATE CITY REPORT
   ===================================================== */

reportButton.addEventListener(
    "click",
    generateReport
);


function generateReport() {

    let cityLevel;


    if (cityData.green >= 80) {

        cityLevel =
            "🌱 Highly Sustainable";

    }

    else if (cityData.green >= 60) {

        cityLevel =
            "🏙️ Developing Smart City";

    }

    else {

        cityLevel =
            "⚠️ Needs Improvement";

    }


    report.innerHTML = `

        <div class="report-item">
            <span>👥 Population</span>
            <strong>
                ${cityData.population.toLocaleString()}
            </strong>
        </div>

        <div class="report-item">
            <span>⚡ Energy</span>
            <strong>
                ${cityData.energy}%
            </strong>
        </div>

        <div class="report-item">
            <span>💧 Water</span>
            <strong>
                ${cityData.water}%
            </strong>
        </div>

        <div class="report-item">
            <span>🌳 Green Score</span>
            <strong>
                ${cityData.green}%
            </strong>
        </div>

        <div class="report-item">
            <span>🚗 Traffic</span>
            <strong>
                ${cityData.traffic}%
            </strong>
        </div>

        <div class="report-item">
            <span>♻️ Recycling</span>
            <strong>
                ${cityData.recycling}%
            </strong>
        </div>

        <div class="report-item">
            <span>🏆 City Level</span>
            <strong>
                ${cityLevel}
            </strong>
        </div>

    `;

}


/* =====================================================
   RESET CITY
   ===================================================== */

resetButton.addEventListener(
    "click",
    resetCity
);


function resetCity() {

    cityData = {

        population: 50000,

        energy: 72,

        water: 81,

        green: 64,

        traffic: 35,

        recycling: 58

    };


    /*
       Remove all objects
       created by JavaScript.
    */

    let objects =
        document.querySelectorAll(
            ".city-object"
        );


    objects.forEach(function (object) {

        object.remove();

    });


    updateDashboard();


    statusMessage.innerText =
        "🌱 Your city is ready to grow!";


    report.innerHTML = `
        <p>
            Build your city first and
            generate your report.
        </p>
    `;


    simulateButton.innerText =
        "Start 2050 Simulation";

}


/* =====================================================
   INITIAL DASHBOARD
   ===================================================== */

updateDashboard();