"use client";
import {formFields, amplienceProps} from "@/lib/definitions"
import { Input, Box, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useState } from "react";
import { z } from "zod"

const formSchema = z.object({
  address1: z.string().min(5, "Address must be at minimum 5 characters long"),
  address2: z.string().min(2, "Street number must be at minimum 2 characters long"),
  city: z.string().min(2, "City must be at minimum 2 characters long"),
  postcode: z.string().min(2, "Postcode must be at minimum 2 characters long"),
})

export default function ShippingFormFields({
  address1,
  address2,
  city,
  postcode,
  image,
}: amplienceProps) {

  const [formFields, setFormFields] = useState<formFields>({
    address1: "",
    address2: "",
    city: "",
    postcode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setFormFields({...formFields, [e.target.name]: e.target.value})
    formSchema.safeParse(formFields)
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
        <Field label={address1} required errorText='This is required'>
          <Input
            placeholder="George Wash Street"
            color="black"
            bg="white"
            name="address1"
            value={formFields.address1}
            onChange={handleChange}
          />
        </Field>
        <Field label={address2} required>
          <Input
            placeholder="Apt 15"
            color="black"
            bg="white"
            name="address2"
            value={formFields.address2}
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
