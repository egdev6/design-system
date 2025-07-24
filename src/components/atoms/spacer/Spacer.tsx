import type { FC } from 'react';
import Button from '../button/Button.tsx';
import type { SpacerProps } from './types';
import { useSpacer } from './useSpacer';

const Spacer: FC<SpacerProps> = ({ spaceX, spaceY }) => {
  const { width, height } = useSpacer({ spaceX, spaceY });
  return (
    <>
      <Button />
      <div style={{ width: width, height: height }}></div>
      <Button />
    </>
  );
};

export default Spacer;
