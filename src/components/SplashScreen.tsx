'use client';
import { useState } from 'react';
import cardImage from '@/assets/card.png';
import paperImage from '@/assets/paper.png';
import animalImage from '@/assets/animal.png';
import Image from 'next/image';
import YapIcon from './YapIcon';

interface SplashScreenProps {
  onFinish: () => void;
}

const splashSlides = [
  {
    image: cardImage,
    text: 'Speak daily and earn $YAP.',
  },
  {
    image: paperImage,
    text: 'Get instant feedback',
  },
  {
    image: animalImage,
    text: 'Keep your streak',
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
        <Image
          src={splashSlides[index].image}
          alt={`Splash ${index + 1}`}
          className="w-full h-auto object-contain mb-6"
        />
        <p className="text-xl font-semibold text-[#2D1C1C] leading-snug max-w-md">
          {splashSlides[index].text.toUpperCase()}
        </p>
      </div>

      <button
        onClick={() => (isLastSlide ? onFinish() : setIndex(index + 1))}
        className="bg-primary text-white py-3 px-6 rounded-full shadow-md w-full max-w-sm"
      >
        {isLastSlide ? 'Start' : 'Next'}
      </button>
    </div>
  );
}
