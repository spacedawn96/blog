import { css } from '@emotion/react';
import Footer from '../Footer';
import Header from '../Header';
import { SEO } from '../Common';

export type AppLayoutProps = {
  frontmatter: any;
  children: any;
  post: any;
};

export default function AppLayout(props: AppLayoutProps) {
  return (
    <div>
      <SEO
        title={props.frontmatter.title}
        description={props.frontmatter.description || props.post.excerpt}
      />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

const AppLayoutBlock = css({});
