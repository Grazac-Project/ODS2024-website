import React from "react";

const page = () => {
  return (
    <header className="justify-between">
      <section className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto text-neutral-900 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-1.5 justify-center self-start px-6 py-2 text-xs font-medium leading-5 text-black whitespace-nowrap rounded-2xl bg-neutral-200 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/be1cbd5adb9cee9dc7a60022396743e2b6e4d0c276fd8eca3f81ad2e1fa785f8?apiKey=252f8d5a726747838fcb04939a832fc3&"
                className="my-auto w-3 aspect-square"
                alt=""
              />
              <div className="grow">Thursday, 26th October 2023</div>
            </div>
            <h1 className="mt-4 text-6xl font-semibold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Leveraging on social media for business growth.
            </h1>
            <div className="mt-6 text-xl leading-6 max-md:max-w-full">
              Olubunmi Fabanwo
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9ee18e8d755051d6371ab37f875f483244c49eb0904ad35bcb0dca538c00dd5b?apiKey=252f8d5a726747838fcb04939a832fc3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ee18e8d755051d6371ab37f875f483244c49eb0904ad35bcb0dca538c00dd5b?apiKey=252f8d5a726747838fcb04939a832fc3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ee18e8d755051d6371ab37f875f483244c49eb0904ad35bcb0dca538c00dd5b?apiKey=252f8d5a726747838fcb04939a832fc3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ee18e8d755051d6371ab37f875f483244c49eb0904ad35bcb0dca538c00dd5b?apiKey=252f8d5a726747838fcb04939a832fc3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ee18e8d755051d6371ab37f875f483244c49eb0904ad35bcb0dca538c00dd5b?apiKey=252f8d5a726747838fcb04939a832fc3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ee18e8d755051d6371ab37f875f483244c49eb0904ad35bcb0dca538c00dd5b?apiKey=252f8d5a726747838fcb04939a832fc3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ee18e8d755051d6371ab37f875f483244c49eb0904ad35bcb0dca538c00dd5b?apiKey=252f8d5a726747838fcb04939a832fc3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ee18e8d755051d6371ab37f875f483244c49eb0904ad35bcb0dca538c00dd5b?apiKey=252f8d5a726747838fcb04939a832fc3&"
            className="grow w-full aspect-[1.2] max-md:mt-10 max-md:max-w-full"
            alt=""
          />
        </div>
      </section>
    </header>
  );
};

export default page;
