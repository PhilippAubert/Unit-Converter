export const convert = (input) => {
    if(!input) {
        console.error("INVALID INPUT!");
        return;
    }
    if (input.temperature) {
        console.log("IT'S TEMPERATURE CONVERSION");
        
    } else if (input.length) {
        console.log("IT'S LENGTH CONVERSION");
    } else if (input.weight) {
        console.log("IT'S WEIGHT CONVERSION");
    } else {
        console.log("UNKNOWN VALUE!");
    }
};