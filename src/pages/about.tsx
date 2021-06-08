import About from '@/components/About';
import ArticleList from '@/components/ArticleList';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { css } from '@emotion/react';

export type AboutPageProps = {};

export default function AboutPage({}: AboutPageProps) {
  return (
    <div css={AboutPageStyle}>
      <Header />
      <About />
      <Footer />
    </div>
  );
}
const AboutPageStyle = css({});
