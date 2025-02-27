import { ContentClient, ContentItem } from 'dc-delivery-sdk-js';

// MISTAKES WERE MADE SHOULD NOT HAVE GONE STRAIGHT FOR LOCALIZATION VALUES

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



    function isAmplienceForm(data:any) {
        if(data && typeof data === "object") {

        }
    }
 
    const form = await fetchForm()
    const { addressLine1, addressLine2, city, postcode, banner } = form

    return (
        // SEPARATE INTO CHILD COMPONENT WITH USE CLIENT
        <form>
            <label>{addressLine1.values[0].value}</label>
            <input></input>
            <label>{addressLine2.values[0].value}</label>
            <input></input>
            <label>{city.values[0].value}</label>
            <input></input>
            <label>{postcode.values[0].value}</label>
            <input></input>
            <img src={banner.values[0].value.url().build()} />
        </form>
    )
}