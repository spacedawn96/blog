import { css } from '@emotion/react';

const HeaderBlock = css({
  display: 'flex',
  border: '1px solid red',
  height: '200px',
  alignItems: 'center',
});

const Nav = css({
  border: '1px solid blue',
  width: '100%',
});

const NavList = css({
  display: 'flex',

  li: {
    ':nth-child(1)': { flexGrow: 1 },
    ':nth-child(2)': { flexGrow: 1 },
    ':nth-child(3)': { flexGrow: 3 },
    ':nth-child(4)': { flexGrow: 3 },
    ':nth-child(5)': { flexGrow: 3 },
  },
});

export default function Header() {
  return (
    <div css={HeaderBlock}>
      <nav css={Nav}>
        <ul css={NavList}>
          <li>POSTS</li>
          <li>ABOUT</li>
          <li>IMG</li>
          <li>GITHUB</li>
          <li>THINK</li>
        </ul>
      </nav>
    </div>
  );
}
