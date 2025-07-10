import { loadLottieAnimation } from '@/lib/lottie';
import Lottie, { type LottieRefCurrentProps, type InteractivityProps } from 'lottie-react';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { LottieAnimationProps } from './types';

interface ExtendedLottieAnimationProps extends LottieAnimationProps {
  interactivity?: InteractivityProps;
}

const LottieAnimation: FC<ExtendedLottieAnimationProps> = ({
  name,
  loop = true,
  autoplay = true,
  className,
  isPaused = false,
  isStopped = false,
  speed = 1,
  direction = 1,
  segments,
  interactivity
}) => {
  const [animationData, setAnimationData] = useState<any | null>(null);
  const ref = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    loadLottieAnimation(name).then(setAnimationData).catch(console.error);
  }, [name]);

  useEffect(() => {
    if (ref?.current) {
      ref.current.setSpeed(speed);
    }
  }, [speed]);

  useEffect(() => {
    if (ref?.current) {
      ref.current.setDirection(direction);
    }
  }, [direction]);

  useEffect(() => {
    if (ref?.current && segments) {
      ref.current.playSegments(segments, true);
    }
  }, [segments]);

  useEffect(() => {
    if (ref?.current) {
      if (isPaused) {
        ref.current.pause();
      } else if (isStopped) {
        ref.current.stop();
      } else {
        ref.current.play();
      }
    }
  }, [isPaused, isStopped]);

  if (!animationData) {
    return null;
  }

  return (
    <Lottie
      lottieRef={ref}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      interactivity={interactivity}
    />
  );
};

export default LottieAnimation;
