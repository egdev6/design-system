import type { SpacerProps } from './types';

export const useSpacer = ({ spaceX, spaceY }: SpacerProps) => {
  // Additional logic can be added here if needed
  const baseUnit = 0.25;

  const spacerX = spaceX !== undefined ? `${spaceX * baseUnit}rem` : undefined;
  const spacerY = spaceY !== undefined ? `${spaceY * baseUnit}rem` : undefined;

  return {
    width: spacerX,
    height: spacerY
  };
};
