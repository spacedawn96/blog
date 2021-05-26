import { css } from '@emotion/react';

const HeaderBlock = css({
  display: 'flex',
});

export default function Header() {
  return (
    <div>
      <ul css={HeaderBlock}>
        <li>POSTS</li>
        <li>ABOUT</li>
        <li>IMG</li>
        <li>GITHUB</li>
        <li>THINK</li>
      </ul>
    </div>
  );
}
