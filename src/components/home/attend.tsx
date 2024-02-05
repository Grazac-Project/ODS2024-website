import Image from "next/image";
import React from "react";

function Attend() {
  return (
    <div className="font-montserrat mt-20 z-20">
      <div className="container">
        <h2 className="text-black-100 font-semibold text-[40px]">
          WHY ATTEND ODS23?
        </h2>
        <p className="font-nunito w-[40%]">
          We are at the forefront of innovation, shaping the future and hosting
          the largest digital summit.
        </p>
      </div>
      <div className="bg-black-500 mt-4 attend pb-20">
        <div className="container">
          {/* First Reason */}
          <div className="flex justify-between items-center pt-20">
            <div>
              <Image src="/images/why-1.svg" alt="" width={540} height={440} />
            </div>
            <div className="w-[533px] space-y-4">
              <h3 className="graphik">01</h3>
              <h3 className="font-medium text-[40px] text-white-500 leading-[120%]">
                Access to <br /> Industry Experts
              </h3>
              <p className="text-xl text-white-500 font-nunito">
                You get access to interact with Industry Experts and engage them
                in conversation both directly and indirectly.
              </p>
              <p className="text-xl text-white-500 font-nunito">
                This access can be invaluable in gaining deeper insights into
                your areas of interest.
              </p>
            </div>
          </div>
          {/* Second Reason */}
          <div className="flex justify-between items-center pt-20">
            <div className="w-[533px] space-y-4">
              <h3 className="graphik">02</h3>
              <h3 className="font-medium text-[40px] text-white-500 leading-[120%]">
                Networking <br /> Opportunities
              </h3>
              <p className="text-xl text-white-500 font-nunito">
                ODS’ 23 brings together industry leaders, experts and
                enthusiasts. It’s an ideal place to expand your professional
                work, giving opportunities to potential collaboration and
                partnerships.
              </p>
            </div>
            <div>
              <Image src="/images/why-2.svg" alt="" width={540} height={440} />
            </div>
          </div>
          {/* Third Reason */}
          <div className="flex justify-between items-center pt-20">
            <div>
              <Image src="/images/why-3.svg" alt="" width={540} height={440} />
            </div>
            <div className="w-[533px] space-y-4">
              <h3 className="graphik">03</h3>
              <h3 className="font-medium text-[40px] text-white-500 leading-[120%]">
                Cutting Edge <br /> AI Exploration
              </h3>
              <p className="text-xl text-white-500 font-nunito">
                This year’s event promises to delve deep into the explorative
                power of AI & WEB3 technologies, while also gaining access to
                latest trends and innovation in the tech industry.
              </p>
              <p className="text-xl text-white-500 font-nunito">
                Come experience how these technologies are shaping the world we
                know.
              </p>
            </div>
          </div>
          {/* Fourth Reason */}
          <div className="flex justify-between items-center pt-20">
            <div className="w-[533px] space-y-4">
              <h3 className="graphik">04</h3>
              <h3 className="font-medium text-[40px] text-white-500 leading-[120%]">
                Have Fun and <br /> Unwind
              </h3>
              <p className="text-xl text-white-500 font-nunito">
                Build an enriching experience from ODS’ 23. Explore your
                interest, meet like-minded individuals, have fun and be a part
                of an evolving tech community.
              </p>
            </div>
            <div>
              <Image src="/images/why-4.svg" alt="" width={540} height={440} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attend;
