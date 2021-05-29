import { css } from '@emotion/react';
import Image from 'next/image';
import Icon from '../Icon';

export default function Header() {
  return (
    <header css={HeaderBlock}>
      <nav css={Nav}>
        <section css={NavList}>
          <span>POSTS</span>
          <span>ABOUT</span>
          <span>
            <Image src="/signature.png" alt="signature" width={320} height={113} />
          </span>
          <Icon />
        </section>
      </nav>
    </header>
  );
}

const HeaderBlock = css({
  display: 'flex',
  padding: '4rem 0  6rem 0',
  alignItems: 'center',
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
  fontSize: '18px',
});
