import { css } from '@emotion/react';
import Image from 'next/image';

export default function Header() {
  return (
    <section css={HeaderBlock}>
      <nav css={Nav}>
        <section css={NavList}>
          <span>POSTS</span>
          <span>ABOUT</span>
          <span>
            <Image src="/signature.png" alt="signature" width={320} height={113} />
          </span>
          <span>GITHUB</span>
          <span>THINK</span>
        </section>
      </nav>
    </section>
  );
}

const HeaderBlock = css({
  display: 'flex',
  height: '10rem',
  alignItems: 'center',
  padding: '1rem 0 4rem 0',
});

const Nav = css({
  width: '100%',
});

const NavList = css({
  display: 'flex',
  alignItems: 'center',
  span: {
    ':nth-of-type(1)': { flexGrow: 0.3 },
    ':nth-of-type(2)': { flexGrow: 3 },
    ':nth-of-type(3)': { flexGrow: 1 },
    ':nth-of-type(4)': { flexGrow: 0.3 },
    ':nth-of-type(5)': { flexGrow: 0 },
  },

  color: '#292929',
  textTransform: 'uppercase',
  fontFamily: '"Rubik", "sans-serif"',
  transition: 'all .3s ease',
  fontSize: '1rem',
});
