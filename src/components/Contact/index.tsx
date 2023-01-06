"use client";

import React, {useLayoutEffect, useRef, useState} from "react";
import Image from "next/image";
import clsx from "clsx";
import useDelayedRender from "use-delayed-render";
import toast from "react-hot-toast";
import Portal from "#/src/components/common/Portal";
import Button from "#/src/components/Controls/Button";
import LabelInput from "#/src/components/Controls/LabelInput";
import LabelTextareaField from "#/src/components/Controls/LabelTextarea";
import LoadingSpinner from "#/src/components/common/LoadingSpinner";
import IconCross from "#/src/components/Icons/IconCross";
import IconReply from "#/src/components/Icons/IconReply";
import IconTelegram from "#/src/components/Icons/IconTelegram";

import {TELEGRAM_ENV} from "public/constant/env";

const intialInformation = {
  phoneNumber: null,
  content: null,
} as {
  phoneNumber: HTMLInputElement | null;
  content: HTMLTextAreaElement | null;
};

const OPEN_TIMER = 20000;
const ENTER_DELAY = 20;
const EXIT_DELAY = 300;

const Contact = () => {
  const informationRef = useRef<typeof intialInformation>(intialInformation);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {mounted: isMenuMounted, rendered: isMenuRendered} = useDelayedRender(isOpen, {
    enterDelay: ENTER_DELAY,
    exitDelay: EXIT_DELAY,
  });

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, OPEN_TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);

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
      const target = e.target as HTMLFormElement;
      target.reset();
      setLoading(false);
      toast.success("Thank you for send message !");
      setIsOpen(false);
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
      {!isOpen && (
        <div className="transition-opacity duration-300 fixed bottom-6 right-6 2xl:right-[20%] z-10">
          <button
            className="row-center w-14 h-14 rounded-full bg-peri-secondary-0 z-40"
            aria-label="Contact Me"
            aria-labelledby="Contact Me"
            onClick={handleDismiss}
          >
            <IconReply />
          </button>
        </div>
      )}

      {isMenuMounted && (
        <div
          className={clsx(
            "transition-opacity duration-300",
            isMenuRendered ? "opacity-100" : "opacity-0",
            "fixed bottom-6 right-6 2xl:right-[20%] z-10",
          )}
        >
          <div className="w-[340px] max-w-[312px] sm:max-w-none  max-h-[560px] p-3.5 bg-white rounded-xl shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 relative">
            <div className="absolute right-0 top-[-64px] z-40">
              <div className="flex items-center gap-2 sm:gap-4 tracking-tight w-[340px] max-w-[312px] sm:max-w-none bg-white dark:bg-gray-800 rounded-md p-4 shadow-sm">
                <div>
                  <IconTelegram />
                </div>
                <p className="text-sm w-full text-black dark:text-white">
                  입력하신 메시지는 텔레그램으로 발송됩니다 !
                </p>
              </div>
            </div>
            <div className="absolute right-0 top-0  z-20">
              <Button
                type="button"
                label={<IconCross />}
                className="row-center w-12 h-12"
                onClick={handleDismiss}
                ariaLabelledby="Close Button"
              />
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Contact Me</h5>
              </div>
              <div className="relative animate-bottomToTop">
                <div className="absolute right-[-10px] top-[-45px] pointer-events-none">
                  <Image
                    src="/static/images/Brazuca-Sitting.webp"
                    alt="Brazuca-Sitting"
                    width={100}
                    height={100}
                  />
                </div>

                <LabelInput
                  ref={el => (informationRef.current.phoneNumber = el)}
                  label="Your Phone Number *"
                  type="tel"
                  id="phoneNumber"
                  maxLength={20}
                  ariaDescribedby="Phone Number Input"
                  required
                />
              </div>
              <div className="animate-bottomToTop delay-[1.5s]">
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
              <div className="animate-bottomToTop">
                <Button
                  type="submit"
                  label={loading ? <LoadingSpinner /> : "Send"}
                  className="row-center w-full"
                  variant="primary"
                  ariaLabelledby="Send Button"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </Portal>
  );
};

export default Contact;
