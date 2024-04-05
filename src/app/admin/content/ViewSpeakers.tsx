"use client";

import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Speaker } from "@prisma/client";
import Image from "next/image";
import { Trash } from "iconsax-react";
import { useStateCtx } from "@/context/StateCtx";

const SpeakerDetails = ({
  id,
  name,
  title,
  bio,
  image,
  occupation,
}: Speaker) => {
  const { setDeleteSpeakerModal } = useStateCtx();
  return (
    <AccordionItem value={id}>
      <AccordionTrigger>{name}</AccordionTrigger>
      <AccordionContent>
        <div className="transition-all duration-500 text-sm font-medium">
          <div className="flex items-center justify-between py-[18px] border-b border-[#E1E1E1] leading-6 font-medium">
            <div className="flex items-center gap-x-4 text-header">
              <p>Speakers Name: {name}</p>
              <p className="text-xs text-header font-normal">Buyers ID: {id}</p>
            </div>
            <div className="flex items-center gap-x-3">
              <button
                className="flex items-center gap-x-2 text-[#e80000]"
                onClick={() => {
                  const speakerData = JSON.stringify({ id, name });
                  window?.localStorage.setItem("Speaker", speakerData);
                  setDeleteSpeakerModal(true);
                }}
              >
                <Trash />
                <span>Remove Speaker</span>
              </button>
            </div>
          </div>
          <div className="flex gap-x-3 w-full justify-between py-5 mb-5">
            <div className="max-h-[300px] max-w-[300px] min-w-[300px]">
              <Image
                width={300}
                height={300}
                src={image}
                alt="Client"
                className="w-full h-full object-cover rounded-lg transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="py-4 text-justify text-header">
                Place of work: {title}
              </p>
              <p className="py-4 text-justify text-header">Bio: {bio}</p>
              <p className="py-4 text-justify text-header">
                Occupation: {occupation}
              </p>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export const ViewSpeaker = () => {
  const url = "/api/speakers";
  const { setUpdate, Update } = useStateCtx();
  const { isLoading, data, error, refetch } = useFetch(url);
  const [speakers, setSpeakers] = useState<Speaker[]>();

  useEffect(() => {
    if (data) {
      setSpeakers(data.speakers);
    }
  }, [data]);

  useEffect(() => {
    if (Update) {
      refetch();
      setUpdate(false);
    }
  }, [Update, refetch, setUpdate]);

  return (
    <div className="px-4">
      {speakers && speakers.length > 0 ? (
        <Accordion type="multiple" className="w-full">
          {speakers &&
            speakers.map((speaker) => (
              <SpeakerDetails key={speaker.id} {...speaker} />
            ))}
        </Accordion>
      ) : (
        <p className="w-full text-center">NO speaker YET</p>
      )}
    </div>
  );
};
