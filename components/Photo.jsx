import Image from "next/image"
import profileImage from '../public/profile.png'


const Photo = () => {
    return (
        <div >
            <Image src={profileImage}
                alt="Nazmul Hasan"
                width={300}
                height={300}
                className="rounded-full"
                priority />
        </div>
    )
}

export default Photo