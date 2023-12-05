import Image from "next/image";
import { useRouter } from "next/navigation";
import NoDataIllustration from "@/assets/undraw_no_data.svg";

interface NoDataProps {
  heading: string;
  subheading?: string;
  cta?: { label: string; href: string };
}

export default function NoData(props: NoDataProps) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center flex-col empty-fallback text-center">
      <h1 className="text-xl md:text-2xl">{props.heading}</h1>
      {!!props.subheading && (
        <h1 className="text-md text-gray-400 mt-4">{props.subheading}</h1>
      )}
      <Image
        src={NoDataIllustration}
        alt={props.heading}
        className="my-8"
        width="200"
        priority
      />
      {!!props.cta && (
        <button
          className="text-white bg-primary-green border-0 py-2 px-8 my-5 focus:outline-none hover:bg-green-600 rounded text-md md:text-lg"
          onClick={() => {
            router.push(props.cta?.href ?? "");
          }}
        >
          {props.cta.label}
        </button>
      )}
    </div>
  );
}
