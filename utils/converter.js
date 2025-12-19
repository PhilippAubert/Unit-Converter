export const convertTemperature = (temp, from, to) => {
    if (from === to) return temp;

    const normalizeToCelsius = {
        celsius: (t) => t,
        fahrenheit: (t) => ((t - 32) * 5) / 9,
        kelvin: (t) => t - 273.15
    };

    const calculateTemperatureResult = {
        celsius: (t) => t,
        fahrenheit: (t) => (t * 9) / 5 + 32,
        kelvin: (t) => t + 273.15
    };

    if (!normalizeToCelsius[from] || !calculateTemperatureResult[to]) {
        throw new Error("Invalid temperature unit");
    }

    return calculateTemperatureResult[to](normalizeToCelsius[from](temp));
};

export const convertWeight = (weight, from, to) => {
    if (from === to) return weight;

    const normalizeToKilogram = {
        milligram: (w) => w * (1 / 1000000),
        gram: (w) => w * (1 / 1000),
        kilogram: (w) => w,
        pound: (w) => w / 2.205,
        ounce: (w) => w / 35.274
    };

    const calculateWeightResult = {
        milligram: (w) => w * 1000000,
        gram: (w) => w * 1000,
        kilogram: (w) => w,
        pound: (w) => w * 2.205,
        ounce: (w) => w * 32.274
    };

    if (!normalizeToKilogram[from] || !calculateWeightResult[to]) {
        throw new Error("Invalid weight unit");
    }

    return calculateWeightResult[to](normalizeToKilogram[from](weight));
};

export const convertLength = (length, from, to) => {
    if (from === to) return length;

    const normalizeToCentimeters = {
        millimeter: (l) => l * 0.1,
        centimeter: (l) => l,
        meter: (l) => l * l * 100,
        kilometer: (l) => l * 100000,
        inch: (l) => l * 2.54,
        foot: (l) => l * 30.48,
        yard: (l) => l * 91.44,
        mile: (l) => l * 160934.4
    };

    const calculateLengthResult = {
        millimeter: (l) => l * 10,
        centimeter: (l) => l,
        meter: (l) => l / 100,
        kilometer: (l) => l / 100000,
        inch: (l) => l / 2.54,
        foot: (l) => l / 30.48,
        yard: (l) => l / 91.44,
        mile: (l) => l / 160934.4
    };

    return calculateLengthResult[to](normalizeToCentimeters[from](length));
};
