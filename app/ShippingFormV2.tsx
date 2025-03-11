
import { ContentClient } from "dc-delivery-sdk-js";
import ShippingFormFields from "@/components/ui/shippingForm/ShippingFormFields";
import { AmplienceProps } from "@/lib/definitions";

export default async function ShippingFormV2({content}: { content: string }) {
  const client = new ContentClient({ stagingEnvironment: "tvyacidcczvx10ncnoqmzxjr8.staging.bigcontent.io", hubName: "anorakwaterpolo" });
  async function  fetchForm(): Promise<AmplienceProps> {
    const response = await client.getContentItemById(content);
    const messageResponse = await fetch('https://tutorial-project-452908.lm.r.appspot.com/');
    const message = await messageResponse.text()
    const { address1, address2, city, postcode, bannerImage } = response.body;
    const localizedFormData = {
      addressLine1: address1,
      addressLine2: address2,
      city: city,
      postcode: postcode,
      image: bannerImage.image.url().build(),
      message: message
    };
    return localizedFormData;
  }

  const form = await fetchForm();
  return <ShippingFormFields {...form} />;
}