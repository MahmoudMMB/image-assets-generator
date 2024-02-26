let library = {
    isSet(v) {
        return (v == null || v == undefined || v == '' || v == 'null' || Array.isArray(v) && v.length === 0 || (Object.keys(v).length === 0 && Object.getPrototypeOf(v) === Object.prototype)) ? false : true;
    },
    containsOnlyNumbers: (str) => {
        return /^[0-9]+$/.test(str);
    },
    generateRandomNumber: () => {
        const min = 1000; // minimum value for a 4-digit number
        const max = 9999; // maximum value for a 4-digit number
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    imageName: (str) => {
        if (!library.isSet(str)) {
            return `Image_${library.generateRandomNumber()}`
        } else if (library.containsOnlyNumbers(str)) {
            return `Image_${str}`
        } else {
            return str.replace(/[\s_-]([a-z])/g, (match, p1) => p1.toUpperCase())
                        .replace(/^([a-z])/, (match, p1) => p1.toUpperCase());
        }
    },
    displayName: (str, nameConvention) => {
        if (nameConvention == "snake_case") {
            return library.toSnakeCase(str)
        } else if (nameConvention == "pascal_case") {
            return library.toClassName(str, '')
        } else if (nameConvention == "capital_letter") {
            return library.toCapitalLetter(str, '')
        } else {
            return library.toCamelCase(str)
        }
    },
    toCamelCase: (str) => {
        return str.replace(/[\s_-]([a-z])/g, (match, p1) => p1.toUpperCase())
            .replace(/^([A-Z])/, (match, p1) => p1.toLowerCase());
    },
    toSnakeCase: (str) => {
        return str.replace(/\s+/g, '_')
            .replace(/-+/g, '_')
            .replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
    },
    toCapitalLetter: (str) => {
        return str.replace(/[\s_-]([a-z])/g, (match, p1) => p1.toUpperCase())
            .replace(/^([A-Z])/, (match, p1) => p1.toLowerCase()).toUpperCase();
    },
    toCapitalLetterCase: (str) => {
        return str.replace(/[\s_-]\w/g, (match) => match.toUpperCase())
            .replace(/^\w/, (match) => match.toUpperCase());
    }
}

module.exports = library