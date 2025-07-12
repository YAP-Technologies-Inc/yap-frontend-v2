// SplashScreen.tsx
// This component displays a 3-slide onboarding splash screen
// and allows users to skip or proceed to the main app.
// It is used after the "Securing your account..." loader.
// And renders after the loader completes.

"use client";
import { useState } from "react";
import cardImage from "@/assets/card.png";
import paperImage from "@/assets/paper.png";
import animalImage from "@/assets/animal.png";
import Image from "next/image";
import YapIcon from "../layout/YapIcon";

interface SplashScreenProps {
  onFinish: () => void;
}

const splashSlides = [
  {
    image: cardImage,
    text: "Speak daily and earn $YAP.",
  },
  {
    image: paperImage,
    text: "Get instant feedback",
  },
  {
    image: animalImage,
    text: "Keep your streak",
  },
];

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [index, setIndex] = useState(0);
  const isLastSlide = index === splashSlides.length - 1;

  return (
    <div className="min-h-screen w-full bg-tertiary flex flex-col items-center justify-between p-8">
      <div className="relative w-full flex justify-center items-center mt-2">
        <YapIcon />
        <button
          onClick={onFinish}
          className="absolute right-0 top-1 text-sm text-quaternary hover:text-shadow-quaternary"
        >
          Skip
        </button>
      </div>

      <div className="flex flex-col items-center text-center mt-10">
        <div className="w-full sm:max-w-2xl mb-6 h-[300px] flex items-center justify-center">
          <Image
            src={splashSlides[index].image}
            alt={`Splash ${index + 1}`}
            width={800}
            height={600}
            className="max-h-full object-contain"
          />
        </div>

        <p className="text-3xl font-semibold text-quaternary leading-snug max-w-md">
          {splashSlides[index].text.toUpperCase()}
        </p>
      </div>

      <button
        onClick={() => (isLastSlide ? onFinish() : setIndex(index + 1))}
        className="bg-quaternary text-white py-3 px-6 rounded-full shadow-md w-full max-w-sm"
      >
        {isLastSlide ? "Start" : "Next"}
      </button>
    </div>
  );
}
