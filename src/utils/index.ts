export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function isValidURL(ulr: string) {
    try {
        new URL(ulr);
        return true;
    } catch {
        return false;
    }
}