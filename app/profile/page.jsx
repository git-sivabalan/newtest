"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function profile() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const quotes = [
    "Hard work beats talent when talent doesn't work hard.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);
  return (
    <div className="">
      <div className="text-3xl pt-3  font-semibold">Good Morning !</div>
      <div className="mt-8 pb-5">
      <p className="text-lg font-semibold italic">{quotes[currentQuoteIndex]}</p>
    </div>
      <div className=" bg-gray-200 rounded-md p-5 mb-5 h-screen">
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dolor nobis, quidem officia delectus commodi placeat doloribus sed necessitatibus blanditiis, repellendus quod iste, sit facere similique? Soluta porro illo provident dignissimos facilis. Officia hic a libero temporibus nesciunt, in laborum exercitationem nihil laudantium, blanditiis adipisci quisquam odio porro consectetur. Earum quidem quia, illum similique harum dolorum. Cupiditate similique fugit obcaecati quidem eos eius perspiciatis, quisquam placeat voluptatum porro illo. Quis?
      </div>
    </div>
  );
}
