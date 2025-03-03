import { ContentClient, ContentItem } from "dc-delivery-sdk-js";
import ShippingFormFields from "@/app/ShippingFormFields";
import {
  AmplienceProps,
  LocalizedAmplienceValue,
  LocalizedAmplienceImage,
  LocalizedAmplienceForm
} from "@/lib/definitions";

export default async function ShippingForm() {
  const client = new ContentClient({ hubName: "anorakwaterpolo" });
  const deliveryKey = "shipping-form-en";
  const locale = "hr-HR";

  async function fetchForm(): Promise<AmplienceProps> {
    const response = await client.getContentItemByKey(deliveryKey);
    // CAN'T SEEM TO CAST AS LOCALIZEDAMPLIENECE FORM 
    console.log(response.body) 
    const body= response.body as unknown as LocalizedAmplienceForm
    const { addressLine1, addressLine2, city, postcode, banner } =
      body;

    const localizedFormData: AmplienceProps = {
      addressLine1: findLocalizedValue(addressLine1.values, locale),
      addressLine2: findLocalizedValue(addressLine2.values, locale),
      city: findLocalizedValue(city.values, locale),
      postcode: findLocalizedValue(postcode.values, locale),
      image: findLocalizedValue(banner.values, locale),
    };
    return localizedFormData;
  }

  // MAY HAVE BEEN SMARTER TO KEEP SPLIT
  function findLocalizedValue<
    T extends LocalizedAmplienceValue | LocalizedAmplienceImage
  >(array: T[], locale: string): string {
    let localizedValue: T | undefined = array.find(
      (item: { locale: string }) => item.locale === locale
    );
    if (localizedValue && localizedValue?.value) {
      if (
        typeof localizedValue.value === "object" &&
        "url" in localizedValue.value
      ) {
        return localizedValue.value.url().build() || "";
        // return localizedValue.value.url().build() || localizedValue?.alt || "";
      }
      return localizedValue.value;
    }
    return "";
  }

  const form = await fetchForm();

  return <ShippingFormFields {...form} />;
}
