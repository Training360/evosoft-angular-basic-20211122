const config = {
    server: 'http://192.168.1.1',
};

const settings = {
    port: 2002,
};

const titleCase = (inputString: string)  => {
    return `${inputString[0].toUpperCase()}${inputString.slice(1).toLowerCase()}`;
};

export {
    titleCase,
    config,
    settings,
}
