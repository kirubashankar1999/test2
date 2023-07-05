import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative w-full overflow-hidden text-xl text-left text-black bg-white font-inter">
        <section className="h-[max(700px,100vh)] md:h-[max(800px,100vh)] lg:h-[max(1000px,100vh)] relative">
          <div className="absolute z-10 w-full top-[130px] lg:top-[201px] left-[50%] translate-x-[-50%] text-xl lg:text-2xl font-medium text-center">
            Welcome to Lazt Wordz
          </div>
          <div className="absolute  z-10 top-[180px] w-[270px] sm:w-[320px] lg:top-[267px] left-[50%] translate-x-[-50%] text-[32px] sm:text-[40px] lg:text-[72px] leading-[125%] font-extrabold font-nunito text-royalblue text-center inline-block lg:w-[896px]">
            Leaving a Lasting Legacy
          </div>
          <Image
            className="absolute w-[300px] top-[300px] lg:top-[524px] left-[50%] translate-x-[-50%] lg:w-[555px] lg:h-[426px] overflow-hidden"
            alt=""
            src="/frame.svg"
            width={555}
            height={426}
          />
          <div className="absolute top-[560px] lg:top-[392px] left-[50%] translate-x-[-50%] lg:w-[314px] lg:h-[58px] text-center">
            <div className="flex flex-col md:flex-row items-center justify-start gap-[12px]">
              <Link href="#why-us">
                <Image
                  src={"/scrollDown.gif"}
                  alt="scroll down "
                  width={58}
                  height={58}
                />
              </Link>
              <div className="relative leading-[174.02%] inline-block w-[244px] shrink-0">
                Scroll down to know how
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] py-8 md:flex flex-row-reverse justify-center items-center  bg-navajowhite">
          <div>
            <div className="text-21xl w-full leading-[125%] font-extrabold font-nunito inline-block md:w-[370px] lg:w-[600px] text-center">
              Unlock the power...
            </div>
            <div className="leading-[174.02%] sm:text-[16px] lg:text-[20px] inline-block lg:w-[511px] text-center md:text-left">
              ... of eternal connections and leave a heartfelt message for your
              loved ones to cherish forever. Last Words is here to provide you
              with a unique opportunity to express your deepest emotions and
              thoughts, even beyond the boundaries of life itself. Our simple
              and intuitive platform allows you to create a lasting testament,
              ensuring your voice resonates with those you hold dear
            </div>
          </div>
          <Image
            alt=""
            className="lg:w-[659px] md:w-[400px]"
            width={659}
            height={581.41}
            src="/objects.svg"
          />
        </section>
        <section id="why-us" className="px-[24px] py-8">
          <div className="text-[24px] mb-8 w-full text-center md:text-[30px] lg:text-21xl leading-[125%] font-extrabold font-nunito  inline-block ">
            Why Choose Lazt Wordz?
          </div>
          <div className="flex flex-col flex-wrap justify-center w-full gap-8 md:flex-row">
            <div className="text-center md:text-left py-10 md:p-[31px] md:w-[521px] flex flex-col md:flex-row-reverse items-center gap-8 bg-lavender rounded-[16px] p-4">
              <div>
                <div className="leading-[125%] mb-[11px] font-extrabold font-nunito inline-block lg:w-[278px]">
                  A Timeless Gift of Love
                </div>
                <p className="md:w-[263px] leading-[175%] text-[14px]">
                  Leave a heartfelt gift for loved ones. Express love, share
                  wisdom, and preserve cherished memories. Last Words keeps your
                  essence alive.
                </p>
              </div>
              <div>
                <Image
                  className="w-32 h-[124px] mx-auto"
                  alt=""
                  src="/group-1.svg"
                  width={32}
                  height={124}
                />
              </div>
            </div>
            <div className="w-full text-center md:text-left py-10  md:p-[31px] md:w-[521px] flex flex-col md:flex-row-reverse items-center gap-8 bg-mistyrose-200 rounded-[16px] p-4">
              <div>
                <div className="leading-[125%] mb-[11px] font-extrabold font-nunito inline-block lg:w-[278px]">
                  Easy & Intuitive
                </div>
                <p className="md:w-[263px] leading-[175%] text-[14px]">
                  Our user-friendly platform makes sharing last words simple. No
                  technical expertise needed. Sign up and leave your legacy
                  effortlessly.
                </p>
              </div>
              <div>
                <Image
                  className="w-32 h-[124px] mx-auto"
                  alt=""
                  src="/easytouse-1@2x.png"
                  width={32}
                  height={124}
                />
              </div>
            </div>
            <div className="w-full text-center md:text-left py-10  md:p-[31px] md:w-[521px] flex flex-col md:flex-row-reverse items-center gap-8 bg-lemonchiffon rounded-[16px] p-4">
              <div>
                <div className="leading-[125%] mb-[11px] font-extrabold font-nunito inline-block lg:w-[278px]">
                  Keep Your Voice Alive
                </div>
                <p className="md:w-[263px] leading-[175%] text-[14px]">
                  Record personalised messages with advanced technology. Loved
                  ones can hear and see you, feeling close and comforted.
                </p>
              </div>
              <div>
                <Image
                  className="w-32 h-[124px] mx-auto"
                  alt=""
                  src="/Group 3.svg"
                  width={32}
                  height={124}
                />
              </div>
            </div>
            <div className="w-full text-center md:text-left py-10  md:p-[31px] md:w-[521px] flex flex-col md:flex-row-reverse items-center gap-8 bg-lightcyan rounded-[16px] p-4">
              <div className="w-full text-center md:text-left">
                <div className="w-full leading-[125%] mb-[11px] font-extrabold font-nunito inline-block ">
                  Safe & Secure
                </div>
                <p className="md:w-[263px] leading-[175%] text-[14px]">
                  Your messages are private and secure. We prioritize your trust
                  with cutting-edge encryption.
                </p>
              </div>
              <div>
                <Image
                  className="w-32 h-[124px] mx-auto"
                  alt=""
                  src="/Group 5.svg"
                  width={32}
                  height={124}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="our-pricing" className="bg-gray px-[24px] py-8">
          <div className="text-[24px] mb-8 md:text-[30px] w-full lg:text-21xl leading-[125%] font-extrabold font-nunito text-center inline-block">
            Our Pricings
          </div>
          <Image
            className="w-full mx-auto mb-8 md:w-[806px] lg:w-[1096px] object-cover"
            alt=""
            width={1096}
            height={687}
            src="/hero-pricing-1-1@2x.png"
          />
        </section>
        <section className="bg-white px-[24px] py-8">
          <div className="p-4 mb-[136px] bg-gainsboro h-[557px] w-full max-w-[954px] mx-auto flex items-center justify-center">
            <div className="font-extrabold text-[24px] text-center md:text-[30px] lg:text-21xl font-nunito">{`FAQ’s & How it works (Video Tutorial)`}</div>
          </div>
          <div className="flex flex-col md:flex-row-reverse w-full items-center max-w-[1004px] mx-auto">
            <Image
              alt=""
              src="/contact-uscuate-1.svg"
              width={500}
              height={333}
            />
            <div className="w-full text-center md:text-left">
              <div
                id="contact-us"
                className="text-[24px] mb-8 md:text-[30px] lg:text-21xl leading-[125%] font-extrabold font-nunito inline-block lg:w-[600px]"
              >
                Contact Us
              </div>
              <div className="leading-[174.02%] inline-block lg:w-[537px]">
                <p className="m-0">
                  We understand that embarking on this journey of leaving your
                  last words can be emotionally overwhelming. Our dedicated
                  support team is here to assist you every step of the way. If
                  you have any questions, concerns, or need guidance, please
                  don&apos;t hesitate to reach out to us.
                </p>
              </div>
              <Image
                className="cursor-pointer mx-auto md:mx-0 left-[164px] w-[274px] h-[95px] object-cover"
                alt=""
                src="/whatsappbutton-1@2x.png"
                width={274}
                height={95}
              />
              <div className="leading-[174.02%] mx-auto md:mx-0 inline-block lg:w-[537px] text-mediumslateblue">
                <p className="m-0">
                  <b>
                    <span className="text-black">{`Email: `}</span>
                    <span className="[text-decoration:underline] cursor-pointer">
                      info@lastwordz.in
                    </span>
                  </b>
                </p>
                <p className="m-0 text-black">
                  <b>
                    <span>Phone</span>
                  </b>
                  <span>
                    <span className="font-inter">{`: `}</span>
                  </span>
                  <b className="[text-decoration:underline] font-inter text-mediumslateblue cursor-pointer">
                    +91 98765 43210
                  </b>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
