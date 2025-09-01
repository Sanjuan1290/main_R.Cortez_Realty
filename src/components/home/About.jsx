
const About = () => {
  return (
    <div className="bg-[#000000b0] relative h-[100vh] text-gray-50">
        <img src="/bg-about.png" alt="" className="w-[100%] h-[100vh] absolute -z-10"/>
        
        <div className="py-20 px-24 grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-4 items-start">
                <h2 className="text-[50px] font-bold">ABOUT US</h2>

                <p className="tracking-wide text-justify">R. Cortez Realty is a real estate company committed to delivering exceptional services in the dynamic and ever-evolving real estate market. Established in May 2018, we have built a solid reputation for integrity, professionalism, and client satisfaction. Our comprehensive approach to real estate encompasses residential, commercial, and industrial sectors, providing tailored solutions to meet the diverse needs of our clients.</p>

                <p className="tracking-wide text-justify">Beyond transations and square footage, we specialize in crafting narratives of homecomings, shaping the skylines of success, and sculpting investment stories that stand the test of time.</p>

                

                <button className="mt-10 border border-green-600 px-8 py-2 text-[16px] font-semibold tracking-wider transition duration-200 ease-in-out hover:bg-green-500 hover:text-green-950 hover:scale-110">Learn more</button>
            </div>

            <div className="flex flex-col gap-10">
                <div className="bg-[#efefefda] text-gray-900 py-5 px-5">
                    <h2 className="text-[35px] font-bold text-[rgb(255,144,40)]">VISION</h2>
                    <p className="tracking-wide text-justify">At R. Cortez Realy, we invision a future where real estate transcends boundaries, becoming a catalyst for transformative experiences and sustainable legacies. Our vision is to lead the industry not only in transactions but in the art of elevating lives through innovative, client-centric real estate solutions.</p>
                </div>

                <div className="bg-[#efefefda] text-gray-900 py-5 px-5">
                    <h2 className="text-[35px] font-bold text-[rgb(255,144,40)]">MISSION</h2>
                    <p className="tracking-wide text-justify">At R.Cortez Realty, our mission is to empower individuals and businesses by providing them with the finest real estate solutions. We are dedicated to maintaining the highest standards of professionalism, transparency, and integrity while fostering innovation and excellence in all aspects of our operations.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About