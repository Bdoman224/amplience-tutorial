// DEFAULT DATA RECEIVED FROM CDN
export type amplienceImageObj = {
  image: { url: () => { build: () => string } };
  alt?: string;
};

export interface FormFields {
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
}

export interface AmplienceProps extends FormFields {
  image: string;
}

export type LocalizedAmplienceValue = {
  values: { locale: string; value: string }[];
};

export type LocalizedAmplienceImage = {
  values: amplienceImageObj[];
};

export type LocalizedAmplienceForm = {
  addressLine1: LocalizedAmplienceValue;
  addressLine2: LocalizedAmplienceValue;
  city: LocalizedAmplienceValue;
  postcode: LocalizedAmplienceValue;
  banner: LocalizedAmplienceImage;
};
