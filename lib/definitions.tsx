// DEFAULT DATA RECEIVED FROM CDN
export type amplienceImageObj = {
  image: { url: () => { build: () => string } };
  alt: string;
};

export type amplienceForm = {
  address1: string;
  address2: string;
  city: string;
  postcode: string;
  bannerImage: amplienceImageObj;
};

export interface formFields {
  address1: string;
  address2: string;
  city: string;
  postcode: string;
}

export interface amplienceProps extends formFields {
  image: string;
}

export type localizedAmplienceValue = {
  values: { locale: string, value: string }[];
};
export type localizedAmplienceForm = {
  addressLine1: localizedAmplienceValue;
  addressLine2: localizedAmplienceValue;
  city: localizedAmplienceValue;
  postcode: localizedAmplienceValue;
  // WHEN YOU FIGURE OUT IMAGE SPECIFY BETTER OBJ
  banner: Object;
};
