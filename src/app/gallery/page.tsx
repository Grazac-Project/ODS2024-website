import * as React from "react";

function PathwayToNationProsperity() {
  return (
    <form className="overflow-hidden px-16 max-md:px-5">
      <header className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div
              className="flex gap-1.5 self-start p-2 text-xs font-medium leading-5 text-black whitespace-nowrap rounded-2xl bg-neutral-200"
              aria-label="Date"
              role="img"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a104b81bfaca691b51e0669ea07bf0fda2b15ea6c43ccc0ed9e6ffb0a771661f?apiKey=252f8d5a726747838fcb04939a832fc3&"
                className="my-auto w-3 aspect-square"
                alt="Date Icon"
                role="presentation"
              />
              <div className="grow">Thursday, 26th October 2023</div>
            </div>
            <h1 className="mt-5 text-6xl font-semibold text-white leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              PATHWAY TO OUR NATION PROSPERITY
            </h1>
            <h2 className="mt-5 text-5xl font-bold leading-9 text-center text-white uppercase max-md:max-w-full max-md:text-4xl">
              Innovation:
            </h2>
            <div className="flex gap-5 justify-between self-start mt-10 text-lg leading-5 whitespace-nowrap">
              <button className="grow justify-center px-12 py-4 text-white bg-green-600 rounded-xl max-md:px-5">
                Attend
              </button>
              <div className="flex gap-2.5 justify-between px-5 py-4 text-green-600 bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] max-md:px-5">
                <div className="grow">Speak at ODS’24</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a2ef685390476e622ab3e9edf4b86b43e33b71ea98ce377569a65417f279bd5?apiKey=252f8d5a726747838fcb04939a832fc3&"
                  className="w-6 aspect-square"
                  alt="ODS'24 Icon"
                  role="presentation"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0677b8b644e707cf50ce7af61a61f0b2344b8cce82f68643d81286db4a049dd?apiKey=252f8d5a726747838fcb04939a832fc3&"
            className="grow w-full aspect-[1.03] max-md:mt-10 max-md:max-w-full"
            alt="Nation Prosperity"
            role="presentation"
          />
        </div>
      </header>
    </form>
  );
}

export default PathwayToNationProsperity;
