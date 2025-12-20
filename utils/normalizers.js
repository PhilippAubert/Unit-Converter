export const pluralizeUnits = ({ unit, value }) => {
    if (unit === "kelvin" || unit === "celsius" || unit === "fahrenheit") {
        return unit;
    }

    if (value === 1) return unit;
    if (unit === "foot") return "feet";
    if (unit === "inch") return "inches";

    return unit + "s";
};

export const roundToSigFigs = (value, sigFigs) => {
    if (value === 0) return 0;
    return Number(value.toPrecision(sigFigs));
};

export const normalizeResult = (value, maxDecimals = 12) => {
    if (!Number.isFinite(value)) return value.toString();

    const rounded = Number(value.toFixed(maxDecimals));
    let str = rounded.toString();

    if (str.includes("e")) {
        const [base, exp] = str.split("e");
        const exponent = Number(exp);
        let [int, frac = ""] = base.split(".");
        let digits = int + frac;

        if (exponent < 0) {
            const zeros = Math.abs(exponent) - int.length;
            str = `0.${"0".repeat(zeros)}${digits}`;
        } else {
            str = digits + "0".repeat(exponent - frac.length);
        }
    }

    return str.replace(/\.?0+$/, "");
};
