
const Feature = () => {
  return (
    <div className="py-10 flex flex-col items-center">
        <h1 className="text-[35px] font-semibold text-green-900">Featured <span className="text-green-700">Properties</span></h1>
        <div className="bg-orange-950 h-[3px] w-[100px] mt-1"></div>

        <div className="grid grid-cols-3 gap-16 mt-10">
            <div className="flex justify-center items-center flex-col">
                <img src="/featureImage/image1.png" alt="" className="shadow-md shadow-gray-500 mb-2 h-[320px]"/>
                <p>Taguig City</p>
            </div>

            <div className="flex justify-center items-center flex-col">
                <img src="/featureImage/image2.png" alt="" className="shadow-md shadow-gray-600 mb-2"/>
                <p>Malainen Bago, Naic</p>
            </div>

            <div className="flex justify-center items-center flex-col">
                <img src="/featureImage/image3.png" alt="" className="shadow-md shadow-gray-500 mb-2 h-[320px]"/>
                <p>Dasmariñas City</p>
            </div>
        </div>
    </div>

    
  )
}

export default Feature