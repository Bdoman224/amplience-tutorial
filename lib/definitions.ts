// DEFAULT DATA RECEIVED FROM CDN
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
  locale: string;
  value: string;
};

export type LocalizedAmplienceImage = {
  locale: string;
  value?: { url: () => { build: () => string } };
  alt?: string;
};

export type LocalizedAmplienceForm = {
  addressLine1: { values: LocalizedAmplienceValue[]};
  addressLine2:{ values: LocalizedAmplienceValue[]};
  city: { values: LocalizedAmplienceValue[]};
  postcode: { values: LocalizedAmplienceValue[]};
  banner:{ values: LocalizedAmplienceImage[]};
};
