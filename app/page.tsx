import ShippingFormV2 from "@/app/ShippingFormV2";
import { Provider } from "@/components/ui/provider";

export default function Home({searchParams}: { searchParams: { locale: string, content: string } }) {
  console.log("searchParams", searchParams);
  console.log("content", searchParams.content);
  console.log("locale", searchParams.locale);
  return (
    <Provider>
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ShippingFormV2 content={searchParams.content}/>
      </div>
    </Provider>
  );
}
