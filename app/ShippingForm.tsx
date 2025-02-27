'use client'
import { ContentClient } from 'dc-delivery-sdk-js';
import Image from 'next/image'

interface amplienceForm {
    addressLine1: Object;
    addressLine2: Object;
    banner: Object;
    city: Object,
    postcode: Object;
}



export default async function ShippingForm() {
    const client = new ContentClient({ hubName: 'anorakwaterpolo' });
    const deliveryKey = 'shipping-form-en';
    async function fetchForm() {
        return await client.getContentItemByKey(deliveryKey);
    }

    const form = await fetchForm()
    const { addressLine1, addressLine2, city, postcode, banner } = form.body

    return (
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