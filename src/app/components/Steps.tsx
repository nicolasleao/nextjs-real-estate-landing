import Image from "next/image"
import Phone from '@/assets/phone.png'

export default function Steps() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full justify-around">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-green inline-flex items-center justify-center text-white relative z-10">
                1
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Simulação</h2>
                <p className="leading-relaxed">Utilize nossas ferramentas online para simular as condições e valores de seu financiamento.</p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-green inline-flex items-center justify-center text-white relative z-10">
                2
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Documentação</h2>
                <p className="leading-relaxed">Reúna todos os documentos necessários para a aprovação do crédito</p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-green inline-flex items-center justify-center text-white relative z-10">
                3
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Análise de Crédito</h2>
                <p className="leading-relaxed">Aguarde a análise dos bancos. Este é o momento deles verificarem sua capacidade de pagamento.</p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-green inline-flex items-center justify-center text-white relative z-10">
                4
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Aceitação do Contrato</h2>
                <p className="leading-relaxed">Analise com cuidado e, estando de acordo, assine o contrato de financiamento.</p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-green inline-flex items-center justify-center text-white relative z-10">
                5
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Liberação do Crédito</h2>
                <p className="leading-relaxed">Após a assinatura, o banco liberará o crédito para a compra do imóvel.</p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-green inline-flex items-center justify-center text-white relative z-10">
                6
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Quitação</h2>
                <p className="leading-relaxed">Ao finalizar todos os pagamentos, o imóvel é seu! Solicite ao banco a carta de quitação e registre-a no cartório.</p>
              </div>
            </div>
          </div>
          <Image className="md:mt-0 mt-12" src={Phone} alt="step"/>
        </div>
      </div>
    </section>
  )
}