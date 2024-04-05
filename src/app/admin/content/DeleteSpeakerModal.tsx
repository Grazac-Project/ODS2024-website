"use client";

import { X } from "lucide-react";
import { cn } from "@/utils";
import { useStateCtx } from "@/context/StateCtx";
import { useEffect, useState } from "react";
import { baseUrl } from "@/actions/baseurl";

interface speaker {
  name: string;
  id: string;
}

const DeleteSpeaker = () => {
  const { DeleteSpeakerModal, setDeleteSpeakerModal, setUpdate } =
    useStateCtx();
  const [speaker, setSpeaker] = useState<speaker>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const readLocal = localStorage.getItem("Speaker");
    if (readLocal) {
      const SpeakerFromStorage = JSON.parse(readLocal) as speaker;
      setSpeaker(SpeakerFromStorage);
    }
  }, [DeleteSpeakerModal]);

  const handleDeleteSpeaker = async () => {
    try {
      setLoading(true);
      await fetch(`${baseUrl}/api/speakers/${speaker?.id}`, {
        method: "DELETE",
      });
      setUpdate(true);
      setDeleteSpeakerModal(false);
    } catch (error) {
      console.error("Error deleting speaker:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        aria-hidden
        className={cn(
          " fixed min-h-screen w-full bg-black/40 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]",
          DeleteSpeakerModal ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setDeleteSpeakerModal(false)}
      />

      <div
        role="dialog"
        aria-labelledby="remove-client"
        className={cn(
          "py-6   flex flex-col w-[360px] h-[300px] min-[450px]:h-[330px] min-[450px]:w-[400px] min-[550px]:w-[500px] md:w-[682px] md:h-[400px] justify-between items-center bg-white  backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none -translate-x-1/2",
          DeleteSpeakerModal
            ? "scale-100 duration-500 opacity-100 rounded-xl md:rounded-2xl"
            : "scale-0 duration-200 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="text-sm min-[450px]:text-lg md:text-2xl font-medium text-header ">
            Delete{" "}
            <span className="font-medium lg:font-bold">
              {speaker?.name ?? "Speaker"}?
            </span>
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setDeleteSpeakerModal(false)}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full text-[#e80000]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex w-full max-w-[546px] h-full  pt-8 sm:pt-16 items-center flex-col gap-y-8 ">
          <p className="text-center text-sm md:text-base px-4 ">
            Are you sure you want to permanently remove{" "}
            {speaker ? (
              <span className="font-semibold">{speaker.name}</span>
            ) : (
              "this project"
            )}{" "}
            from your Speakers? Remember this action cannot be reversed{" "}
          </p>
          <div className="flex w-full gap-x-4 justify-center sm:justify-between sm:px-8 [&>*]:font-semibold">
            <button
              type="button"
              tabIndex={0}
              aria-label="Cancel"
              onClick={() => setDeleteSpeakerModal(false)}
              className={cn(
                "rounded-lg border border-primary text-primary min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary "
              )}
            >
              No, Cancel
            </button>

            <button
              type="button"
              onClick={handleDeleteSpeaker}
              tabIndex={0}
              aria-label="Remove"
              className={cn(
                "rounded-lg bg-[#e80000] text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e80000]"
              )}
            >
              {loading ? "Removing..." : "Yes, Remove"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteSpeaker;
