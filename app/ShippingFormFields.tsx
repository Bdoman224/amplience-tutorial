// 'use client'
import { Input, Box, Stack } from "@chakra-ui/react"
import { Field } from '@/components/ui/field';

type amplienceProps = {
    address1: string;
    address2: string;
    city: string;
    postcode: string,
    image: string
}

export default function ShippingFormFields({ address1, address2, city, postcode, image }: amplienceProps) {
    return (
        <Box bgAttachment="fixed" className="rounded" bgImage={`url(${image})`} width="1000px" height="1000px">
            <Stack className='gap-y-4 px-8 py-10'>
                <Field label={address1} required>
                    <Input placeholder="George Wash Street" color="black" bg="white" />
                </Field>
                <Field label={address2} required>
                    <Input placeholder="Apt 15" color="black" bg="white" />
                </Field>
                <Field label={city} required>
                    <Input placeholder="San Diego" color="black" bg="white" />
                </Field>
                <Field label={postcode} required>
                    <Input placeholder="12132131" type='number' color="black" bg="white" />
                </Field>
            </Stack>
        </Box>
    )
}