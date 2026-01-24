/**
 * year-utils.js - BC/AD year formatting utilities
 */

/**
 * Format year with BC/AD or Polish p.n.e./n.e.
 * @param {number} year - The year (negative for BC)
 * @param {boolean} isPolish - Use Polish abbreviations
 * @returns {string} Formatted year string
 */
export function formatYearWithEra(year, isPolish = false) {
    if (year < 0) {
        const absYear = Math.abs(year);
        return isPolish 
            ? `${absYear} p.n.e.` // przed naszą erą
            : `${absYear} BC`;
    } else if (year === 0) {
        return isPolish ? "0" : "0";
    } else {
        // For modern dates (after ~1000 AD), we typically don't show AD/n.e.
        // But we can add it if needed
        return year.toString();
    }
}

/**
 * Get the era suffix in Polish
 * @param {number} year - The year
 * @returns {string} Era suffix ("przed naszą erą" or empty)
 */
export function getPolishEraSuffix(year) {
    if (year < 0) {
        return "przed naszą erą";
    }
    return "";
}

/**
 * Get the era suffix in English
 * @param {number} year - The year
 * @returns {string} Era suffix ("BC" or empty)
 */
export function getEnglishEraSuffix(year) {
    if (year < 0) {
        return "BC";
    }
    return "";
}

/**
 * Check if cultural data is available for this year
 * @param {number} year - The year to check
 * @returns {boolean} True if cultural data exists
 */
export function hasCulturalData(year) {
    // Cultural data (holidays, name days) only available from ~1000 AD onwards
    return year >= 1000;
}
