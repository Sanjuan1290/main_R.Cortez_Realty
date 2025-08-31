
const HeroSection = () => {
  return (
    <div className="mt-[75px]">
        <div className="relative">
            <img src="/bgRealty.png" alt="" className="w-[100%] h-[80vh] object-fill"/>

            <div className="absolute top-[130px] left-1/2 -translate-x-1/2  text-center">

                <h1 className="text-[100px] font-bold text-[rgb(230,132,42)] text-nowrap text-shadow text-outline">R.Cortez Realty</h1>
                <p className="-mt-3 text-2xl font-medium text-[#dcdfb9] drop-shadow-md text-nowrap text-shadow text-outline">Trusted properties in Cavite — from high-end homes to farm lots</p>
                <button className=" bg-[#3969a6] shadow-md shadow-black text-white font-semibold rounded-full px-10 py-3 mt-10  hover:bg-gray-800 transition ">Go to Properties</button>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection