import Categories from '@/components/Categories';
import Header from '@/components/Header';
import { css } from '@emotion/react';

export type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <div css={titleStyle}>
      <Header />
      <Categories />
    </div>
  );
}
const titleStyle = css({});
