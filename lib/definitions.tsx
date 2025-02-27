export type amplienceForm = {
    address1: string;
    address2: string;
    city: string;
    postcode: string,
    bannerImage: amplienceImageObj
}

export type amplienceImageObj = { image: {url: () => { build: () => string }}, alt: string };

export type localizedAmplienceValue = {
    values: {values: string}[]
}
export type localizedAmplienceForm = {
    addressLine1: localizedAmplienceValue;
    addressLine2: localizedAmplienceValue;
    city: localizedAmplienceValue;
    postcode: localizedAmplienceValue,
    // WHEN YOU FIGURE OUT IMAGE SPECIFY BETTER OBJ
    banner: Object; 
}