import { css } from '@emotion/react';

const PreviousBlock = css({});

export default function Previous() {
  return (
    <div css={PreviousBlock}>
      <span>Back to Top</span>
      <span>Back to PreviosPage</span>
    </div>
  );
}
