import ShippingFormV2 from "@/app/[locale]/v2/ShippingFormV2";
import { Provider } from "@/components/ui/provider";

export default function Home({params}: { params: { locale: string } }) {
  return (
    <Provider>
      <p>{params.locale}</p>
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ShippingFormV2 />
      </div>
    </Provider>
  );
}
