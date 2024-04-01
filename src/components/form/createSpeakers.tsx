"use client";

import React, { useRef } from "react";
import { cn } from "@/utils";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { BsExclamationTriangle } from "react-icons/bs";
import { Button } from "../ui/button";
import { baseUrl } from "@/actions/baseurl";
import { UploadedAssetData } from "./addProduct";
import SocialsModal from "./SocialsModal";
import { useStateCtx } from "@/context/StateCtx";
import { Speaker } from "@prisma/client";

type Data = {
  image: string;
  bio: string;
  occupation: string;
  title: string;
  name: string;
};

const CreateSpeaker = () => {
  const { setShowSocialModal } = useStateCtx();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [result, setResult] = useState<UploadedAssetData | null>(null);
  const [status, setStatus] = useState("idle");
  const [speakerDetails, setspeakerDetails] = useState<Speaker>();

  const [formData, setformData] = useState<Data>({
    image: "",
    bio: "",
    name: "",
    occupation: "",
    title: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      setStatus("loading");
      const res = await fetch(`${baseUrl}/api/speakers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200 || res.ok) {
        setSuccess("sucess");
        setStatus("sucess");
        const data = await res.json();

        setspeakerDetails({
          id: data.speaker.id,
          image: data.speaker.image,
          bio: data.speaker.bio,
          name: data.speaker.name,
          occupation: data.speaker.occupation,
          title: data.speaker.title,
        });
        setformData({
          image: "",
          bio: "",
          name: "",
          occupation: "",
          title: "",
        });
      }

      if (res.status === 500) {
        setError("something when wrong");
      }
    } catch (e: any) {
      console.log(e);
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <form
      action=""
      onSubmit={onSubmit}
      className="flex w-full flex-col md:flex-row gap-4 gap-y-8 md:gap-8  py-4 xl:py-8 px-2 sm:px-4 md:px-6 lg:px-8 h-full items-start"
    >
      <div
        ref={scrollRef}
        className="flex flex-col w-[300px] gap-5 max-md:w-full max-md:justify-center "
      >
        {formData.image ? (
          <div className="flex flex-col gap-y-2 h-full w-full relative overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src={result?.url!}
              alt="Client"
              className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:duration-700 hover:scale-150"
            />
            {/* @ts-ignore */}
            <span className="absolute bottom-1 left-0 bg-gradient-to-r from-white via-white/50 to-white/5 px-2 w-full text-left font-medium">
              {/* @ts-ignore */}
              {result?.original_filename!}
            </span>
            <button
              type="button"
              tabIndex={0}
              aria-label="Remove image"
              onClick={() => setformData({ ...formData, image: "" })}
              className="text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full bg-white/60 backdrop-blur-sm absolute top-1 right-1 w-8 h-8 flex items-center justify-center hover:text-red-500 hover:bg-white/80 hover:brightness-150 transition-all duration-700 hover:duration-200"
              title="Remove image"
            >
              <X size={18} />
            </button>
          </div>
        ) : (
          <div
            className={cn(
              "flex w-full h-full min-h-[300px] items-center justify-center bg-[#f6f6f6] px-8",
              {
                hidden: formData.image,
              }
            )}
          >
            <CldUploadButton
              onSuccess={(result) => {
                setResult(result?.info as UploadedAssetData);
                setformData({
                  ...formData,
                  // @ts-ignore
                  image: result?.info?.url,
                });
              }}
              uploadPreset="speakers"
            />
          </div>
        )}

        {success && (
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
        {error && (
          <Alert>
            <BsExclamationTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>

      <button
        onClick={() => {
          setShowSocialModal(true);
        }}
      >
        open
      </button>
      <div className="flex w-full flex-col gap-y-4 sm:gap-y-6 pt-8 md:pt-0">
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Name" className="font-medium">
            Speakers Name
          </Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
            onChange={(e) =>
              setformData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Name" className="font-medium">
            Speakers Position
          </Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
            onChange={(e) =>
              setformData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Name" className="font-medium">
            Speakers occupation
          </Label>
          <Input
            type="text"
            name="occupation"
            value={formData.occupation}
            className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
            onChange={(e) =>
              setformData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Name" className="font-medium">
            Speakers Bio
          </Label>
          <Textarea
            name="bio"
            value={formData.bio}
            className="w-full rounded-md border resize-none h-40 border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
            onChange={(e) =>
              setformData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <Button
          className="justify-center items-center px-16 py-3.5 mt-3 text-lg leading-5 text-green-600 whitespace-nowrap bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]"
          type="submit"
        >
          {isLoading ? "Adding..." : "Add Speaker"}
        </Button>
      </div>
      <SocialsModal {...speakerDetails} />
    </form>
  );
};

export default CreateSpeaker;
