import { css } from '@emotion/react';
import matter from 'gray-matter';
import { useMarkdownForm } from 'next-tinacms-markdown';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug } from 'lib/api';
import markdownToHtml from 'lib/markdownToHtml';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Header from '@/components/Header';
import Mdx from '@/components/Mdx';

export type BlogTemplateProps = {
  posts: any;
  title: string;
  meta: any;
};

type Params = {
  params: {
    slug: string;
  };
};

function reformatDate(fullDate: string | number | Date) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

export default function Blog(props: any) {
  return (
    <>
      <Header />
      <section css={PostBlock}>
        <article css={PostArticle}>
          <h2>{props.posts.title}</h2>
          <h3>{reformatDate(props.posts.date)}</h3>
          {/* <div dangerouslySetInnerHTML={{ __html: props.posts.content }} />  */}
          <Mdx meta={props.meta}>{props.posts.content}</Mdx>;
          <h2>Written By: {props.posts.author.name}</h2>
        </article>
      </section>
    </>
  );
}

const PostBlock = css({
  display: 'flex',
  justifyContent: 'center',
  // margin: '0 6% 0 6%',
  // margin: '0 6% 0 10%',
  // color: '#292929',
  // fontnFamily: "'Noto Sans KR', sans-serif",
  fontSize: '1.125rem',
  p: {
    display: 'block',
    fontSize: '1.125rem',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
  h1: {
    marginBottom: '0.95rem',
  },
  h2: {
    marginBottom: '0.95rem',
  },
  h3: {
    marginBottom: '0.95rem',
  },
  li: {
    marginBottom: '0.95rem',
  },
});

const PostArticle = css({
  // margin: '0 auto',
  // border: '1px solid red',
  // display: 'flex',
  // justifyContent: 'center',
  // flexDirection: 'column',
  maxWidth: '900px',
  margin: '0 auto',
});

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ] as any);
  const content = await markdownToHtml((post as any).content || '');

  const config = await import(`../../data/config.json`);

  return {
    props: {
      title: config.default.title,
      posts: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'] as any);

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: (posts as any).slug,
        },
      };
    }),
    fallback: false,
  };
}
