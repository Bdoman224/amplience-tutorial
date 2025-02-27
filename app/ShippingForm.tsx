import { ContentClient } from 'dc-delivery-sdk-js';
import { amplienceForm } from '@/lib/definitions';
import ShippingFormFields from '@/app/ShippingFormFields';

export default async function ShippingForm() {
    const client = new ContentClient({ hubName: 'anorakwaterpolo' });
    const deliveryKey = 'tutorial-shipping-form';

    async function fetchForm(): Promise<amplienceForm> {
        const response = await client.getContentItemByKey(deliveryKey)
        if (!isAmplienceForm(response.body)) throw new Error('Wrong Form Type');
        return response.body
    }

    function isAmplienceImageObj(field: any) {
        return typeof field.alt === 'string' || typeof field?.image.url === 'function'
    }
    // Why did it not working untill I had type predicate here??? 
    // HAS TO BE A BETTER WAY OF DOING THIS AUTOMATICALLY COMPARE TO PASSED TYPE OR SMTHN?
    function isAmplienceForm(data: any): data is amplienceForm {
        return data && typeof data === "object" &&
            typeof data.address1 === "string" &&
            typeof data.address2 === "string" &&
            typeof data.city === "string" &&
            typeof data.postcode === "string" &&
            isAmplienceImageObj(data.bannerImage)
    }
    
    const { address1, address2, city, postcode, bannerImage } = await fetchForm()
    const formProps = { address1, address2, city, postcode, image: bannerImage?.image.url().build() }
    return (
        <ShippingFormFields {...formProps} />
    )
}