
const Feature = () => {
  return (
    <div className="py-4 flex flex-col items-center">
        <h1 className="text-[30px] font-semibold">Featured Properties</h1>
        <div className="bg-orange-950 h-[3px] w-[100px] mt-1"></div>

        <div className="grid grid-cols-3 gap-10 mt-5">
            <div>
                <img src="/featureImage/image1.png" alt="" />
                <p>Taguig City</p>
            </div>

            <div>
                <img src="/featureImage/image2.png" alt="" />
                <p>Malainen Bago, Naic</p>
            </div>

            <div>
                <img src="/featureImage/image3.png" alt="" />
                <p>Dasmariñas City</p>
            </div>
        </div>
    </div>

    
  )
}

export default Feature