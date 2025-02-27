import { ContentClient } from 'dc-delivery-sdk-js';
import { amplienceForm } from '@/lib/definitions';
import { Input, Box, Avatar, AvatarGroup } from "@chakra-ui/react"


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
        return typeof field.alt === 'string' || typeof field?.image.url === 'function'
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
    const image = bannerImage?.image.url().build()

    return (
        // SEPARATE INTO CHILD COMPONENT WITH USE CLIENT
        <Box bgAttachment="fixed" bgImage={image}>
            <form className='flex flex-col max-w-4xl max-h-4xl z-100'>
                <label>{address1}</label>
                <Input placeholder="..." />
                <label>{address2}</label>
                <Input placeholder="..." />
                <label>{city}</label>
                <Input placeholder="..." />
                <label>{postcode}</label>
                <Input placeholder="..." />
            </form>
        </Box>
    )
}