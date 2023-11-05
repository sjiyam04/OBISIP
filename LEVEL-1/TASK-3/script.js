const calculatetemp = () => {
    const input = parseFloat(document.getElementById('number').value);
    const list1 = document.getElementById('list1').value;
    const list2 = document.getElementById('list2').value;

    // Function to convert Celsius to KELVIN and FEHRENHIT
    const celToOther = (temp, unit) => {
        switch (unit) {
            case 'f2':
                return ((temp * 9 / 5) + 32).toFixed(1) + "&#176; Fahrenheit";
            case 'k2':
                return (temp + 273.15).toFixed(1) + "&#176; Kelvin";
            default:
                return temp + "&#176; Celsius";
        }
    }



 // Function to convert Fahrenheit to CELSIUS and KELVIN
 const fahToOther = (temp, unit) => {
    switch (unit) {
        case 'c2':
            return ((temp - 32) * 5 / 9).toFixed(1) + "&#176; Celsius";
        case 'k2':
            return (((temp - 32) * 5 / 9 + 273.15).toFixed(1) + "&#176; Kelvin");
        default:
            return temp + "&#176; Fahrenheit";
    }
}

// Function to convert Kelvin to other units
const kelToOther = (temp, unit) => {
    switch (unit) {
        case 'c2':
            return (temp - 273.15).toFixed(1) + "&#176; Celsius";
        case 'f2':
            return (((temp - 273.15) * 9 / 5 + 32).toFixed(1) + "&#176; Fahrenheit");
        default:
            return temp + "&#176; Kelvin";
    }
}

let result = '';

if (list1 === 'c1') {
    result = celToOther(input,list2);
} else if (list1 === 'f1') {
    result = fahToOther(input, list2);
} else if (list1 === 'k1') {
    result = kelToOther(input, list2);
}

document.getElementById("result").innerHTML = result;
}
