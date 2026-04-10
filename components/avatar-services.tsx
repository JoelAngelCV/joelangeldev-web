import Image from "next/image"
import MotionTransition from "./transition-component"

const AvatarServices = () => {
  return (
    <MotionTransition position="right" className="bottom-0 left-0 hidden md:inline-block md:fixed">
        <Image src="/services.png" width={300} height={300} className="w-[350px] h-full" alt="Avatar" priority/>
    </MotionTransition>
  )
}

export default AvatarServices
