import ArticleList from '@/components/ArticleList';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Previous from '@/components/Previous';
import { css } from '@emotion/react';

export type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <div css={titleStyle}>
      <Header />
    </div>
  );
}
const titleStyle = css({});
