"use client"

import MotionTransition from "./transition-component"
import Image from "next/image"

const AvatarPortfolio = () => {
  return (
    <div>
        <MotionTransition position="bottom" className="bottom-0 left-0 hidden lg:inline-block md:absolute">
            <Image src="/avatar-works.png" width={300} height={300} className="w-full h-full" alt="Avatar portfolio" />
        </MotionTransition>
    </div>
  )
}

export default AvatarPortfolio
