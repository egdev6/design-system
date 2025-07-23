import type { FC } from 'react';
import Button from '../button/Button.tsx';
import type { SpacerProps } from './types.ts';

const Spacer: FC<SpacerProps> = ({ spaceX, spaceY }: SpacerProps = { spaceX: 2, spaceY: 4 }) => {
  const spacingValue = (space: number) => {
    const spacing = space * 0.25;
    return `${spacing}rem`;
  };
  return (
    <>
      <Button />
      <div
        style={{
          width: spaceX === undefined ? `0rem` : spacingValue(spaceX),
          height: spaceY === undefined ? `0rem` : spacingValue(spaceY)
        }}
      ></div>
      <Button />
    </>
  );
};

export default Spacer;
