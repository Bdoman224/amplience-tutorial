import { ContentClient, ContentItem } from "dc-delivery-sdk-js";
import ShippingFormFields from "@/app/ShippingFormFields";

// // MISTAKES WERE MADE SHOULD NOT HAVE WENT FOR LOCALIZATION INSTANTLY

// // Move to definitions
// type amplienceLocalizationValue = {
//   values: { locale: string; values: string }[];
// };
// type amplienceForm = {
//   addressLine1: amplienceLocalizationValue;
//   addressLine2: amplienceLocalizationValue;
//   city: amplienceLocalizationValue;
//   postcode: amplienceLocalizationValue;
//   // WHEN YOU FIGURE OUT IMAGE SPECIFY BETTER OBJ
//   banner: Object;
// };

export default async function ShippingForm() {
  const client = new ContentClient({ hubName: "anorakwaterpolo" });
  const deliveryKey = "shipping-form-en";
  const locale = "en-US";

  async function fetchForm() {
    const response = await client.getContentItemByKey(deliveryKey);
    // TS ALWAYS ASSUMES WORST CASE SCENARIO
    // CHECK IF ACTUALLY RECEIVED CORRECT DATA
    console.log(response);
    const { addressLine1, addressLine2, city, postcode, banner } =
      response.body;
    return { addressLine1, addressLine2, city, postcode, banner };
  }

  const form = await fetchForm();

//   const localizedFormData = { addressLine1: '', addressLine2: '', city: ''};
//   Object.entries(form).map(([key, value]) => {
//     localizedFormData[key] = value.values.filter(
//       (item: { locale: string }) => locale === item.locale
//     );
//   });

  return <p>Yo</p>;
}
