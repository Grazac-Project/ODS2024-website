import Image from "next/image";
import React from "react";

function ODG() {
  return (
    <div className="container flex items-center gap-10 justify-between mt-20 mb-7 px-4 sm:px-8 xl:px-16 2xl:px-24">
      <div className={`font-montserrat flex flex-col gap-3`}>
        <h3 className="font-semibold text-[56px] leading-[120%]">
          Unlocking Tech Innovations Without Boundaries
        </h3>
        <p className={` font-nunito text-xl`}>
          The ODS 23 Mobile App is your all-in-one tool for an immersive tech
          experience at your fingertip. Connect with like minds like never
          before
        </p>
        <div className="flex items-center gap-5 mt-8">
          <Image src={"/apple.svg"} alt="apple" width={144} height={48} />
          <Image src={"/google.svg"} alt="playstore" width={162} height={48} />
        </div>
      </div>
      <div className="shrink-0">
        <Image src={"/odg.svg"} alt="odg" width={500} height={500} />
      </div>
    </div>
  );
}

export default ODG;
