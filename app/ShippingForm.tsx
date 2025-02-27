import { ContentClient } from 'dc-delivery-sdk-js';
import { amplienceForm } from '@/lib/definitions';
import { Input, Box, Stack } from "@chakra-ui/react"
import { Field } from '@/components/ui/field';


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
    const image = bannerImage?.image.url().build()

    return (
        // SEPARATE INTO CHILD COMPONENT WITH USE CLIENT
        <Box bgAttachment="fixed" bgImage={`url(${image})`} width="1000px" height="1000px">
            <Stack className='gap-y-4 px-8 py-10'>
                <Field label={address1} required>
                    <Input placeholder="George Wash Street" color="black" bg="white" />
                </Field>
                <Field label={address2} required>
                    <Input placeholder="George Wash Street" color="black" bg="white" />
                </Field>
                <Field label={city} required>
                    <Input placeholder="George Wash Street" color="black" bg="white" />
                </Field>
                <Field label={postcode} required>
                    <Input placeholder="George Wash Street" color="black" bg="white" />
                </Field>
            </Stack>
        </Box>
    )
}