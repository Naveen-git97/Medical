export const logMessage = (message, source = '') => {
    const normalizedSource = source && source.length > 1 ? source : 'OMS-PORTAL-GET';
    const logMessage = `${normalizedSource}: ${message}`;
    console.log(logMessage);
}

export const logDebug = (message, source = '') => {
    const normalizedSource = source && source.length > 1 ? source : 'OMS-PORTAL-GET';
    const logMessage = `${normalizedSource}: ${message}`;
    console.debug(logMessage);
}

export const logError = (error, source = '') => {
    const normalizedSource = source && source.length > 1 ? source : 'OMS-PORTAL-GET';
    console.error(normalizedSource, error);
}
