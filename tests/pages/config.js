export const appUrl = "https://letcode.in/";

export function titleLocator(label) {
    const locator = `//*[normalize-space(text())="${label}"]`
    return locator;
}


export function notification(label) {
    const locator = `//*[normalize-space(text())="${label}"]`
    return locator;
}