import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
    return(
        <div className="header w-[100vw] flex justify-center items-center">

            <div className="h-left mr-[300px]">
                <Image src="/Group11.png" alt="hello" width={50} height={50} />
            </div>

            <div className="h-right mr-[180px]">
                <ul className="h-[102px] text-lg font-bold flex justify-center items-center gap-6">
                    <Link href="/"><li>MAIN</li></Link>
                    <Link href="/portfolio"><li>GALLERY</li></Link>
                    <Link href="/about"><li>PROJECTS</li></Link>
                    <Link href="/certifications"><li>CERTIFICATIONS</li></Link>
                    <Link href="/contact-us"><li>CONTACTS</li></Link>
                </ul>
            </div>
            
        </div>
    )
}