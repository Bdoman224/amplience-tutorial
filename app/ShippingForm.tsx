import { ContentClient } from 'dc-delivery-sdk-js';
import { amplienceForm } from '@/lib/definitions';

export default async function ShippingForm() {
    const client = new ContentClient({ hubName: 'anorakwaterpolo' });
    const deliveryKey = 'tutorial-shipping-form';

    async function fetchForm(): Promise<amplienceForm> {
        // BY ACCCIDENT AL ZASTO OVO RADI
        const response = await client.getContentItemByKey(deliveryKey)
        // TS ALWAYS ASSUMES WORST CASE SCENARIO
        // CHECK IF ACTUALLY RECEIVED CORRECT DATA
        if (!isAmplienceForm(response.body)) throw new Error('Wrong Form Type');
        return response.body
    }

    function isAmplienceImageObj(field: any) {
        console.log(field)
        return  typeof field.alt === 'string' || typeof field?.image.url === 'function' 
    }
    // Why did it not working untill I had type predicate here??? 
    // HAS TO BE A BETTER WAY OF DOING THIS
    function isAmplienceForm(data: any): data is amplienceForm {
        return data && typeof data === "object" &&
            typeof data.address1 === "string" &&
            typeof data.address2 === "string" &&
            typeof data.city === "string" &&
            typeof data.postcode === "string" &&
            isAmplienceImageObj(data.bannerImage)
    }

    const { address1, address2, city, postcode, bannerImage } = await fetchForm()

    return (
        // SEPARATE INTO CHILD COMPONENT WITH USE CLIENT
        <form>
            <label>{address1}</label>
            <input></input>
            <label>{address2}</label>
            <input></input>
            <label>{city}</label>
            <input></input>
            <label>{postcode}</label>
            <input></input>
            <img src={bannerImage?.image.url().build()} alt={bannerImage.alt} />
        </form>
    )
}