import ShippingFormV2 from "@/app/ShippingFormV2";
import { Provider } from "@/components/ui/provider";

export default async function Home({searchParams}: { searchParams: { locale: string, content: string } }) {
    const {content} = await searchParams;
  return (
    <Provider>
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ShippingFormV2 content={content}/>
      </div>
    </Provider>
  );
}
