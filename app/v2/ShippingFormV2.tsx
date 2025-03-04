import { ContentClient } from "dc-delivery-sdk-js";
import ShippingFormFields from "@/app/ShippingFormFields";
import { AmplienceProps, LocalizedAmplienceForm } from "@/lib/definitions";
// import { useRouter } from "next/navigation";

export default async function ShippingFormV2() {
  const client = new ContentClient({ hubName: "anorakwaterpolo" });
  console.log("Client", client);
  // HOW TO KNOW WHICH ID TO TARGET?
  async function fetchForm(): Promise<AmplienceProps> {
    // const response = await fetch(
    //   "https://anorakwaterpolo.cdn.content.amplience.net/content/id/d72bed31-0ee9-4468-9838-4695a6ee78f4?depth=all&format=inlined"
    // );
    const response = await client.getContentItemById('89b0174c-e82f-436a-8d6e-254deaae0b01')
    console.log("AAAAAA", response.body);
    const { address1, address2, city, postcode, bannerImage } = response.body;

    const localizedFormData = {
      addressLine1: address1,
      addressLine2: address2,
      city: city,
      postcode: postcode,
      image: bannerImage.image.url().build(),
    };
    return localizedFormData;
  }

  const form = await fetchForm();

  return <ShippingFormFields {...form} />;
}
