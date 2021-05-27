import { css } from '@emotion/react';

export type AnimationProps = {};

export default function Animation({}: AnimationProps) {
  return (
    <div css={AnimationStyle}>
      <div>snippet</div>
    </div>
  );
}
const AnimationStyle = css({});
