import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProfileCardProps {
  src: string;
  headerText: string;
  descriptionText: string;
  viewBioLink: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  src,
  headerText,
  descriptionText,
  viewBioLink,
}) => {
  return (
    <div className="flex flex-col text-lg leading-5 max-w-[420px]">
      <Image
        src={src}
        alt=""
        className="w-full border-t border-r-4 border-b-4 border-l border-solid aspect-[1.16] border-b-[color:var(--Foundation-black-black-500,#111)] border-l-[color:var(--Foundation-black-black-500,#111)] border-r-[color:var(--Foundation-black-black-500,#111)] border-t-[color:var(--Foundation-black-black-500,#111)]"
      />
      <header className="mt-4 w-full text-2xl text-center text-zinc-600">
        {headerText}
      </header>
      <div className="mt-2 w-full font-semibold text-center text-zinc-950">
        {descriptionText}
      </div>
      <form className="flex gap-2.5 justify-center self-center px-16 py-4 mt-6 text-green-600 whitespace-nowrap bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]">
        <div className="grow">
          <Link href={`/speakers/speakers?speakers_id={}`}></Link>
          {/* <a
            href={viewBioLink}
            className="link-button"
            aria-label="View Bio"
            role="button"
          >
            View Bio
          </a> */}
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a248bcf71be2abe20364c7ab830f878c55799f7e64e55133be54dc75ceec2b1d?apiKey=252f8d5a726747838fcb04939a832fc3"
          alt=""
          className="aspect-[1.04] w-[25px]"
        />
      </form>
    </div>
  );
};

export default ProfileCard;
