export const validateRequest = (body) => {
    if (!body || typeof body !== "object") {
        return { valid: false, error: "Invalid request body" };
    }

    const { from, to, ...rest } = body;

    if (!from || !to) {
        return { valid: false, error: "Missing 'from' or 'to' unit" };
    }

    const keys = Object.keys(rest);

    if (keys.length !== 1) {
        return { valid: false, error: "Provide exactly one value to convert" };
    }

    const type = keys[0];
    const value = Number(rest[type]);

    if (Number.isNaN(value)) {
        return { valid: false, error: "Value must be a number" };
    }

    return { valid: true, type, value, from, to };
}