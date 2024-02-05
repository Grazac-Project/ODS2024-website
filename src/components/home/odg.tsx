import Image from "next/image";
import React from "react";

function ODG() {
  return (
    <div className="container flex items-center gap-10 justify-between mt-20">
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
          <Image
            src={"/images/apple.svg"}
            alt="apple"
            width={144}
            height={48}
          />
          <Image
            src={"/images/google.svg"}
            alt="playstore"
            width={162}
            height={48}
          />
        </div>
      </div>
      <div className="shrink-0">
        <Image src={"/images/odg.svg"} alt="odg" width={500} height={500} />
      </div>
    </div>
  );
}

export default ODG;
