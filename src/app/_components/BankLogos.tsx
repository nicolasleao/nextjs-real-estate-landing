import Image from "next/image";
import LogoSantander from "@/assets/lg-santander.png";
import LogoItau from "@/assets/lg-itau.png";
import LogoBradesco from "@/assets/lg-bradesco.png";
import LogoCaixa from "@/assets/lg-caixa.png";

export default function BankLogos() {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-2xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-3xl">
          Em parceria com os melhores bancos do Brasil
        </h2>
        <div className="flex items-center gap-10 justify-center">
          <div className="flex justify-center items-center">
            <Image src={LogoSantander} alt="Logo Santander" />
          </div>
          <div className="flex justify-center items-center">
            <Image src={LogoItau} alt="Logo Itau" />
          </div>
          <div className="flex justify-center items-center">
            <Image src={LogoBradesco} alt="Logo Bradesco" />
          </div>
          <div className="flex justify-center items-center">
            <Image src={LogoCaixa} alt="Logo Bradesco" width="90" />
          </div>
        </div>
      </div>
    </section>
  );
}
