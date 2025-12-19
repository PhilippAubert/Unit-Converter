export const pluralizeUnits = ({unit, value}) => {
    if (value === 1) return unit;
    if (unit === "foot") return value === 1 ? "foot" : "feet";
    if (unit === "inch") return value === 1 ? "inch" : "inches";

    return unit + "s";
}

export const normalizeResult = (value) => {
    const absNum = Math.abs(value);
    
    if (absNum === 0) return "0";
    
    if (absNum < 0.001) {
        return Number(value).toExponential(3);
    } else if (absNum < 1) {
        return Number(value).toPrecision(4);
    } else if (absNum < 1000) {
        return parseFloat(value.toFixed(3));
    } else if (absNum < 1000000) {
        return parseFloat(value.toFixed(2));
    } else {
        return Number(value).toExponential(4);
    }
}