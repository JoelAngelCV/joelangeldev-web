import { certificateData } from "@/data"
import ImageModal from "./image-modal"

const Certificates = () => {

  return (
    <div className="md:my-56 mt-8 md:mt-8 lg:flex grid grid-cols-2 justify-around">
      {certificateData.map((data)=>(
        <div key={data.id} className="grid place-items-center my-3">
          <ImageModal 
          url={data.image}
          alt={data.alt}
          />
          <h3 className="mt-2 md:mt-4 p-1 px-3 rounded-full text-center
            text-gray-200 font-bold transition-all bg-indigo-900 hover:bg-cyan-100 
            hover:text-indigo-950 hover:font-bold">{data.title}
          </h3>
        </div>
      ))}
    </div>)
  }
export default Certificates



