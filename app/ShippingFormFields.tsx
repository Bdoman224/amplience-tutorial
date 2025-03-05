"use client";
import {FormFields, AmplienceProps} from "@/lib/definitions"
import { Input, Box, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useState } from "react";

export default function ShippingFormFields({
  addressLine1,
  addressLine2,
  city,
  postcode,
  image,
}: AmplienceProps) {

  const [formFields, setFormFields] = useState<FormFields>({
    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setFormFields({...formFields, [e.target.name]: e.target.value})
    // formSchema.safeParse(formFields)
  }

  return (
    <Box
      bgAttachment="fixed"
      className="rounded"
      bgImage={`url(${image})`}
      width="1000px"
      height="1000px"
    >
      <Stack className="gap-y-4 px-8 py-10">
        <Field label={addressLine1} required errorText='This is required'>
          <Input
            placeholder="George Wash Street"
            color="black"
            bg="white"
            name="addressLine1"
            value={formFields.addressLine1}
            onChange={handleChange}
          />
        </Field>
        <Field label={addressLine2} required>
          <Input
            placeholder="Apt 15"
            color="black"
            bg="white"
            name="addressLine2"
            value={formFields.addressLine2}
            onChange={(e) => handleChange(e)}
          />
        </Field>
        <Field label={city} required>
          <Input
            placeholder="San Diego"
            color="black"
            bg="white"
            name="city"
            value={formFields.city}
            onChange={handleChange}
          />
        </Field>
        <Field label={postcode} required>
          <Input
            placeholder="12132131"
            color="black"
            bg="white"
            name="postcode"
            value={formFields.postcode}
            onChange={handleChange}
          />
        </Field>
      </Stack>
    </Box>
  );
}
