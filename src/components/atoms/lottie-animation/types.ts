export type LottieAnimationProps = {
  name: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  isPaused?: boolean;
  isStopped?: boolean;
  speed?: number;
  direction?: 1 | -1;
  segments?: [number, number][] | [number, number];
};
