import { ContentClient, ContentItem } from 'dc-delivery-sdk-js';
import ShippingFormFields from '@/app/ShippingFormFields';

// MISTAKES WERE MADE SHOULD NOT HAVE WENT FOR LOCALIZATION INSTANTLY

// Move to definitions
type amplienceLocalizationValue = {
    values: {values: string}[]
}
type amplienceForm = {
    addressLine1: amplienceLocalizationValue;
    addressLine2: amplienceLocalizationValue;
    city: amplienceLocalizationValue;
    postcode: amplienceLocalizationValue,
    // WHEN YOU FIGURE OUT IMAGE SPECIFY BETTER OBJ
    banner: Object; 
}

export default async function ShippingForm() {
    const client = new ContentClient({ hubName: 'anorakwaterpolo' });
    const deliveryKey = 'shipping-form-en';
  

    async function fetchForm() {
        const response= await client.getContentItemByKey(deliveryKey);
        // TS ALWAYS ASSUMES WORST CASE SCENARIO
        // CHECK IF ACTUALLY RECEIVED CORRECT DATA
        console.log(response)
        return response.body
    }
 
    const form = await fetchForm()
    const { addressLine1, addressLine2, city, postcode, banner } = form

    return (
        <p>Yo</p>
    )
}