
const HeroSection = () => {
  return (
    <div className="">
        <div className="relative">
            <img src="/bg-2.png" alt="" className="w-[100%] h-[100vh] object-fill"/>

            <div className="absolute top-[150px] left-1/2 -translate-x-1/2  text-center">

                <h1 className="text-[100px] font-bold text-[rgb(255,144,40)] text-nowrap text-shadow text-outline">R.Cortez Realty</h1>
                <p className="-mt-3 text-2xl font-medium text-[#f7ff9a] drop-shadow-md text-nowrap text-shadow text-outline">Trusted properties in Cavite — from high-end homes to farm lots</p>
                <button className=" bg-[#273da0] shadow-lg shadow-blue-500 text-white font-semibold rounded-full px-10 py-3 mt-[280px]  hover:bg-[#112f04] transition hover:scale-110 ">Go to Properties</button>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection