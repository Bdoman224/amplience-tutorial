import { ContentClient, ContentItem } from "dc-delivery-sdk-js";
import ShippingFormFields from "@/app/ShippingFormFields";
import { amplienceProps } from "@/lib/definitions";

export default async function ShippingForm() {
  const client = new ContentClient({ hubName: "anorakwaterpolo" });
  const deliveryKey = "shipping-form-en";
  const locale = "hr-HR";

  async function fetchForm() {
    const response = await client.getContentItemByKey(deliveryKey);
    const { addressLine1, addressLine2, city, postcode, banner } =
      response.body;
    return { address1: addressLine1, address2: addressLine2, city, postcode, image:banner };
  }

  const form = await fetchForm();

  const localizedFormData: amplienceProps = {
    // TECHNICALLY COULD HAVE JUST GONE WITH propx: func Parse(form.propx)
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    image: ""
  };

  Object.entries(form).forEach(([key, formProperty]) => {
    let value = formProperty.values.find((item: { locale: string; }) => item.locale === locale)?.value || "";

    if (key === "image") {
      const currentImage = formProperty.values.find((item: { locale: string; }) => item.locale === locale)
      value = currentImage.value.url().build()
    }
    
    localizedFormData[key as keyof amplienceProps] = value;
  });

  return <ShippingFormFields {...localizedFormData} />;
}
