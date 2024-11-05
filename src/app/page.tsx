import Image from "next/image";
import Navbar from '@/app/components/Navbar'

export default function Home() {
  return (
    <div className="main-cont w-[100%] overflow-x-hidden">
      <Navbar/>

      <div className="first-context flex flex-wrap justify-around items-center">
        <div className="text flex flex-col">
          <h1 className="opacity-40">PROJECT</h1>
          <h1>Lorum</h1>
        </div>
        <div className="relative">
          <Image className="w-[770px] h-[829px] object-cover" src="/Rectangle6.png" alt="" width={770} height={829} />
          <Image className="absolute bottom-0 left-0" src="/Frame10.png" alt="" width={221.81} height={71} />
        </div>
      </div>


      <div className="second flex flex-wrap justify-between mt-[80px] px-16">
        <div className="sec-left flex flex-wrap gap-7 p-14">
          <div className="flex flex-col gap-7">
            <Image src="/Rectangle8.png" alt="" width={270} height={265}></Image>
            <Image src="/Rectangle10.png" alt="" width={270} height={140}></Image>
          </div>
          <div className="mt-7">
            <Image src="/Rectangle9.png" alt="" width={270} height={345}></Image>
          </div>
        </div>

        <div className="sec-right w-[25rem] pt-14">
          <h1 className="opacity-30">
            About
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nam molestiae aperiam accusantium omnis dolorum, illo quam molestias est dicta earum porro perferendis vero sint laboriosam. Tenetur, facere quam modi error iusto dolores labore ipsam consectetur esse deserunt assumenda numquam a placeat omnis, corrupti ab ipsa aperiam accusantium, doloremque consequatur!
          </p>
        </div>
      </div>


      <div className="third mt-36 flex flex-col px-28">
        <h1 className="opacity-30">Main Focus/Mission Statement</h1>
        <div className="flex flex-wrap justify-center items-center gap-60">
          <div className="flex justify-center items-center gap-8">
            <h2 className="opacity-20">1</h2>
            <p className="w-56 leading-snug">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam pariatur soluta et nostrum dolore doloribus enim, deserunt</p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <h2 className="opacity-20">2</h2>
            <p className="w-72 leading-snug">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur assumenda sapiente deserunt, nisi at quas. Maxime quisquam quae iusto aspernatur!</p>
          </div>
        </div>
      </div>


      <div className="fourth px-[85px] mt-8">
        <h1 className="opacity-30">Our Projects</h1>
        <div className="img-fourth mt-8 flex flex-wrap gap-8">
          <Image className="h-[255px] w-[570px] object-cover" src="/Rectangle12.png" alt="" width={500} height={260}></Image>
          <Image className="h-[255px] w-[570px] object-cover" src="/image15.png" alt="" width={500} height={260}></Image>
          <Image className="h-[255px] w-[270px] object-cover" src="/image16.png" alt="" width={250} height={100}></Image>
          <Image className="h-[255px] w-[470px] object-cover" src="/image17.png" alt="" width={500} height={100}></Image>
          <Image className="h-[255px] w-[370px] object-cover" src="/image18.png" alt="" width={250} height={100}></Image>
        </div>
        <Image className="ml-[75vw] mt-8" src="/Frame11.png" alt="" height={150} width={150}></Image>
      </div>


      <div className="fifth px-28 mt-12">
        <h1 className="opacity-30">Contact Us</h1>
        <div className="fifth-sub flex flex-wrap gap-5 justify-between">

          <div className="input-fields flex flex-col">
            <input className="w-[391px] h-[41px]" name="input" type="text" placeholder="Name"/>
            <input className="w-[391px] h-[41px]" name="input" type="tel" placeholder="Phone number*"/>
            <input className="w-[391px] h-[41px]" name="input" type="email" placeholder="Email*"/>
            <input className="w-[391px] h-[41px]" name="input" type="text" placeholder="Interested In"/>
            <textarea className="w-[391px] h-[41px]" rows={4} placeholder="Message*"></textarea>
          </div>

          <div className="fifth-pic">
            <Image className="w-[749px] h-[369px] object-cover" src="/image12.png" alt="" height={749} width={369}></Image>
          </div>
        </div>

        <Image className="mt-16" src="/Frame111.png" alt="" height={150} width={150}></Image>
      </div>


      <div className="footer relative h-[417px] w-[100%] mt-24 px-24 py-16 flex text-white">
        <Image className="h-[94px] w-[145px]" src="/Group20.png" alt="" width={145} height={94}></Image>
        <div className="footer-sub1 flex gap-32 ml-28 w-[605px] h-[229px]">
          <div className="footer1a flex flex-col gap-3">
            <h5>Information</h5>
            <p>Main</p>
            <p>Gallery</p>
            <p>Projects</p>
            <p>Certifications</p>
            <p>Contacts</p>
          </div>
          <div className="footer1b ml-8">
            <h5 className="mb-5">Contacts</h5>
            <div className="flex mb-9 w-[180px]">
              <Image className="h-[16px] w-[11px]" src="/location.png" alt="" height={16} width={11}></Image>
              <p className="break-words ml-3">1234 Sample Street Austin Texas 78704</p>
            </div>
            <div className="flex mb-9">
              <Image className="h-[16px] w-[16px]" src="/phone.png" alt="" height={16} width={16}></Image>
              <p className="ml-3">512.333.2222</p>
            </div>
            <div className="flex">
              <Image className="h-[11px] w-[16px]" src="/mail.png" alt="" height={11} width={16}></Image>
              <p className="ml-3">sampleemail@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-sub2 w-[193px] h-[64px]">
          <h5 className="mb-5">Social Media</h5>
          <div className="social-icons flex gap-8">
            <Image className="h-[19px] w-[10px]" src="/facebook.png" alt="" height={19} width={10}></Image>
            <Image className="h-[17px] w-[22px]" src="/twitter.png" alt="" height={17} width={22}></Image>
            <Image className="h-[20px] w-[20px]" src="/LinkedIn.png" alt="" height={20} width={20}></Image>
            <Image className="h-[19px] w-[14px]" src="/pininterest.png" alt="" height={19} width={14}></Image>
          </div>
        </div>

        <div className="division w-[100%] h-[1px] bg-white opacity-30 absolute bottom-14 left-0"></div>

        <div className="footer-last w-[100%] absolute bottom-4 left-0 text-center text-sm opacity-30">
          <h5>
            © 2021 All Rights Reserved
          </h5>
        </div>

      </div>

    </div>
  );
}
