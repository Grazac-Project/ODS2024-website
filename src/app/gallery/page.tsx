import React from "react";

function ConferenceComponent() {
  return (
    <form className="flex flex-col pb-10 bg-white rounded-none max-w-[390px]">
      <header className="flex gap-5 justify-between px-6 py-4 w-full border-b border-solid border-b-[color:var(--Foundation-stroke-stroke-500,#E1E1E1)]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec62a2442a38755dd52a242c393d0c9e0622a47bb2b32f0f2941745483d83f25?apiKey=252f8d5a726747838fcb04939a832fc3&"
          className="max-w-full aspect-[3.23] w-[104px]"
          alt="Conference image"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b667a6a1b1a89891ce2ffef25b7fc7c9a916fc24d45db2e443c964a6d319bd6?apiKey=252f8d5a726747838fcb04939a832fc3&"
          className="my-auto w-6 aspect-square"
          alt="Conference logo"
        />
      </header>
      <div className="flex flex-col px-6 mt-10 w-full text-lg leading-5 whitespace-nowrap">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3450ae567420a7e6563b3ea283cdb964d65feaab6ab2abc5ef4e3c9ebe7422f7?apiKey=252f8d5a726747838fcb04939a832fc3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3450ae567420a7e6563b3ea283cdb964d65feaab6ab2abc5ef4e3c9ebe7422f7?apiKey=252f8d5a726747838fcb04939a832fc3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3450ae567420a7e6563b3ea283cdb964d65feaab6ab2abc5ef4e3c9ebe7422f7?apiKey=252f8d5a726747838fcb04939a832fc3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3450ae567420a7e6563b3ea283cdb964d65feaab6ab2abc5ef4e3c9ebe7422f7?apiKey=252f8d5a726747838fcb04939a832fc3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3450ae567420a7e6563b3ea283cdb964d65feaab6ab2abc5ef4e3c9ebe7422f7?apiKey=252f8d5a726747838fcb04939a832fc3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3450ae567420a7e6563b3ea283cdb964d65feaab6ab2abc5ef4e3c9ebe7422f7?apiKey=252f8d5a726747838fcb04939a832fc3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3450ae567420a7e6563b3ea283cdb964d65feaab6ab2abc5ef4e3c9ebe7422f7?apiKey=252f8d5a726747838fcb04939a832fc3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3450ae567420a7e6563b3ea283cdb964d65feaab6ab2abc5ef4e3c9ebe7422f7?apiKey=252f8d5a726747838fcb04939a832fc3&"
          className="self-center w-full aspect-[1.09] max-w-[287px]"
          alt="Conference banner"
        />
        <a
          href="..."
          className="justify-center items-center px-16 py-4 mt-4 text-white bg-green-600 rounded-2xl border-2 border-solid border-[color:var(--Attend-stroke,rgba(95,95,95,0.75))]"
        >
          Attend
        </a>
        <div className="flex gap-2.5 justify-between px-20 py-4 mt-6 rounded-2xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--speaker-stroke-1,#00A651)] border-l-[color:var(--speaker-stroke-1,#00A651)] border-r-[color:var(--speaker-stroke-1,#00A651)] border-t-[color:var(--speaker-stroke-1,#00A651)] text-zinc-600">
          <div className="grow">Speak at ODS’24</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b562c10ed754986770837bdb4c17b356adc5cbdda65d22f305fd94c68a5d4db?apiKey=252f8d5a726747838fcb04939a832fc3&"
            className="aspect-[1.04] w-[25px]"
            alt="Speaker icon"
          />
        </div>
      </div>
    </form>
  );
}

export default ConferenceComponent;
