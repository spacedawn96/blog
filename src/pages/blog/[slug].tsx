import { css } from '@emotion/react';
import matter from 'gray-matter';
import { useMarkdownForm } from 'next-tinacms-markdown';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug } from 'lib/api';
import markdownToHtml from 'lib/markdownToHtml';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export type BlogTemplateProps = {
  posts: any;
  title: string;
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
      <h2>{props.posts.title}</h2>
      <h3>{reformatDate(props.posts.date)}</h3>
      <div className="blog__body">
        <div className="max-w-2xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: props.posts.content }} />
        </div>
      </div>
      <h2 className="blog__footer">Written By: {props.posts.author.name}</h2>
    </>
  );
}

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
