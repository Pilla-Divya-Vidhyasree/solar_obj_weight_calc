function weight_show() {
    const planet = document.querySelector("#options");
    const weight = document.querySelector(".mass");
    const data = document.querySelector(".data");

    // Check if the invalidData element already exists
    let invalidData = document.querySelector("#invalidData");

    if (planet.value == '--select planet--' || weight.value == '') {
        // If invalidData doesn't exist, create a new element
        if (!invalidData) {
            invalidData = document.createElement("div");
            invalidData.id = "invalidData";
            data.appendChild(invalidData);
        }
        // Update the content of invalidData
        invalidData.innerHTML = "* Enter both mass and planet details";
        invalidData.style.color = 'red';
    } else {
        // If both mass and planet are selected, remove any existing error message
        if (invalidData) {
            invalidData.innerHTML = '';
        }
        const planet_img = document.querySelector('.image'); // Fix the selector here
        planet_img.style.marginLeft = '10%';
        const img_div = document.querySelector(".image_div")
        img_div.style.display ='flex';
        switch (planet.value) {
            case 'Mercury':
                planet_img.src = "https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/mercury.png";
                break;
        case 'Venus':
            planet_img.src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/venus.png";
            break;
        case 'Earth':
            planet_img.src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/earth.png";
            break;
        case 'Mars':
            planet_img.src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/mars.png";
            break;
        case 'Jupiter':
            planet_img.src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/jupiter.png";
            break;
        case 'Saturn':
            planet_img.src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/saturn.png";
            break;
        case 'Uranus':
            planet_img.src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/uranus.png";
            break;
        case 'Neptune':
            planet_img.src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/neptune.png";
            break;
    }
    const gravitationalRatios = {
        "Mercury": 0.38,
        "Venus": 0.91,
        "Earth": 1.0,
        "Mars": 0.38,
        "Jupiter": 2.34,
        "Saturn": 0.93,
        "Uranus": 0.92,
        "Neptune": 1.12,
    };


        // Convert weight value to a numeric format
        const numericWeight = parseFloat(weight.value);

        // Check if the conversion is successful
        if (!isNaN(numericWeight)) {
            const weightOnPlanet = numericWeight * gravitationalRatios[planet.value];
            const resultElement = document.querySelector(".displayData"); // Fix the selector here
            resultElement.style.margin = '10%';
            resultElement.style.color = 'white';
            resultElement.style.fontSize = '30px';
            resultElement.textContent = `Weight on ${planet.value}: ${weightOnPlanet.toFixed(2)} N`;

        } else {
            // Handle the case where weight is not a valid number
            console.error("Invalid weight input");
        }
}
}
