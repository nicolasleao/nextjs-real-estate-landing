function Statistics() {
  return (
    <div className="w-full flex justify-around items-center px-0 sm:px-12"> 
       <div className="border-solid border h-[200px] w-full m-2 lg:m-5 p-2">
            <span className="m-2 text-lg">
                <span className="text-xs sm:text-sm p-2 text-primary-green stat-pill">
                    + 3,2%
                    <i className="las la-arrow-up" />
                </span>
            </span>
            <div className="flex justify-center items-center h-2/3">
                <div className="text-center">
                    <h1 className="text-lg lg:text-2xl">R$ 2.800,00</h1>
                    <span className="text-second-gray text-sm">Faturamento</span>
                </div>
            </div>
       </div>

       <div className="border-solid border h-[200px] w-full m-2 lg:m-5 p-2">
            <span className="m-2 text-lg">
                <span className="text-xs sm:text-sm p-2 text-primary-green stat-pill">
                    + 2,3%
                    <i className="las la-arrow-up" />
                </span>
            </span>
            <div className="flex justify-center items-center h-2/3">
                <div className="text-center">
                    <h1 className="text-lg lg:text-2xl">R$ 2.800,00</h1>
                    <span className="text-second-gray text-sm">Lucro</span>
                </div>
            </div>
       </div>

       <div className="border-solid border h-[200px] w-full m-2 lg:m-5 p-2">
            <span className="m-2 text-lg">
                <span className="text-xs sm:text-sm p-2 text-primary-green stat-pill">
                    + 7%
                    <i className="las la-arrow-up" />
                </span>
            </span>
            <div className="flex justify-center items-center h-2/3">
                <div className="text-center">
                    <h1 className="text-lg lg:text-2xl">12</h1>
                    <span className="text-second-gray text-sm">Visitas</span>            
                </div>
            </div>
       </div>
    </div> 
  ); 
} 
export default Statistics;