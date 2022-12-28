"use client";

import React, {useLayoutEffect, useRef, useState} from "react";
import Image from "next/image";
import clsx from "clsx";
import useDelayedRender from "use-delayed-render";
import Portal from "#/src/components/common/Portal";
import Button from "#/src/components/Controls/Button";
import LabelInput from "#/src/components/Controls/LabelInput";
import LabelTextareaField from "#/src/components/Controls/LabelTextarea";
import IconCross from "#/src/components/Icons/IconCross";

import {TELEGRAM_ENV} from "#/public/constant/env";

const intialInformation = {
  phoneNumber: null,
  content: null,
} as {
  phoneNumber: HTMLInputElement | null;
  content: HTMLTextAreaElement | null;
};

const OPEN_TIMER = 1000;
const ENTER_DELAY = 20;
const EXIT_DELAY = 300;

const Contact = () => {
  const informationRef = useRef<typeof intialInformation>(intialInformation);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {mounted: isMenuMounted, rendered: isMenuRendered} = useDelayedRender(isOpen, {
    enterDelay: ENTER_DELAY,
    exitDelay: EXIT_DELAY,
  });

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(prev => !prev);
    }, OPEN_TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    const token = TELEGRAM_ENV.token;
    const chatId = TELEGRAM_ENV.chatId;

    const {phoneNumber, content} = informationRef?.current!;

    const text = `<strong>Tel: ${phoneNumber?.value || "🥲"}</strong>\n<pre>${
      content?.value || "🥲"
    }</pre>`;

    fetch(
      `https://api.telegram.org/${token}/sendMessage?chat_id=${chatId}&text=${encodeURI(
        text,
      )}&parse_mode=html`,
    ).then(() => {
      alert("done");
      const target = e.target as HTMLFormElement;
      target.reset();
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {phoneNumber, content} = informationRef?.current!;

    if (phoneNumber && content) {
      sendMessage(e);
    }
  };

  const handleDismiss = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Portal selector="#__contact">
      {isMenuMounted && (
        <div
          className={clsx(
            "transition-opacity duration-300",
            isMenuRendered ? "opacity-100" : "opacity-0",
            "fixed bottom-6 right-6 z-10",
          )}
        >
          <div className="w-[340px] max-h-[560px] p-3.5 bg-white rounded-2xl shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 relative">
            <div className="absolute right-0 top-0  z-20">
              <Button
                type="button"
                label={<IconCross />}
                className="row-center w-12 h-12"
                onClick={handleDismiss}
              />
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Contact Me</h5>
                <div className="absolute right-[-10px] top-[6px] pointer-events-none">
                  <Image
                    src="/images/Brazuca-Sitting.webp"
                    alt="Brazuca-Sitting"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div>
                <LabelInput
                  ref={el => (informationRef.current.phoneNumber = el)}
                  htmlFor="phoneNumber"
                  label="Your Phone Number *"
                  type="tel"
                  id="phoneNumber"
                  maxLength={20}
                  ariaDescribedby="Phone Number Input"
                  required
                />
              </div>
              <div>
                <LabelTextareaField
                  ref={el => (informationRef.current.content = el)}
                  className="resize-none"
                  id="content"
                  label="Content *"
                  ariaDescribedby="Content Input"
                  required
                  rows={10}
                />
              </div>
              <Button type="submit" label="Send" className="row-center w-full" variant="primary" />
            </form>
          </div>
        </div>
      )}
    </Portal>
  );
};

export default Contact;
