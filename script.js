const mass = document.querySelector('.mass')
var mass_value = mass.value;
if(typeof mass_value == 'string'){
mass.addEventListener('blur', e =>{
    const numberMap = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10 // Add more as needed
    };
    mass.value = numberMap[mass.value];
})}