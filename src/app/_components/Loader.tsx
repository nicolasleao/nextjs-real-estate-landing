import Image from "next/image";

interface LoaderProps {
  size?: number;
}

export default function Loader(props: LoaderProps) {
  return (
    <Image
      src="/img/loader-min.gif"
      alt="Immonova loader"
      height={`${props.size ?? 30}`}
      width={`${props.size ?? 30}`}
      priority
    />
  );
}
