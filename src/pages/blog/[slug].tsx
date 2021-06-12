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
          <h1 css={PostHeader}>{props.posts.title}</h1>
          <h3>{reformatDate(props.posts.date)}</h3>
          {/* <div dangerouslySetInnerHTML={{ __html: props.posts.content }} />  */}
          <Mdx meta={props.meta}>{props.posts.content}</Mdx>;
          <h2>Written By: {props.posts.author.name}</h2>
        </article>
      </section>
    </>
  );
}

const PostBlock = css`
  display: flex;
  justify-content: center;
  font-family: ' Noto Sans KR
    ', sans-serif;
  font-size: 1.125rem;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  word-wrap: break-word;
  width: 100%;

  ul,
  ol,
  p {
    b {
      font-weight: 400;
    }
    code {
      background: rgba(27, 31, 35, 0.05);
      padding: 0.2em 0.4em;
      font-size: 85%;
      border-radius: 3px;
    }
    a {
      code {
        color: #12b886;
      }
    }
  }

  a {
    color: #0ca678;
    text-decoration: none;
    &:hover {
      color: #12b886;
      text-decoration: underline;
    }
  }
  code {
    font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  hr {
    border: none;
    height: 1px;
    width: 100%;
    background: #dedede;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  p {
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.125rem;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  p + h1,
  p + h2,
  p + h3,
  p + h4 {
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    h1 {
      font-size: 2.25rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    h4 {
      font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4 {
      margin-bottom: 0.75rem;
    }
    p + h1,
    p + h2,
    p + h3,
    p + h4 {
      margin-top: 2rem;
    }
  }

  blockquote {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-left: 4px solid #20c997;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #f8f9fa;
    margin-left: 0;
    margin-right: 0;
    padding: 1rem;
    padding-left: 2rem;
    color: #212529;
    ul,
    ol {
      padding-left: 1rem;
    }
    *:first-child {
      margin-top: 0;
    }
    *:last-child {
      margin-bottom: 0;
    }
  }
`;

const PostHeader = css({
  textAlign: 'center',
  fontWeight: 700,
});

const PostArticle = css({
  // margin: '0 auto',
  // border: '1px solid red',
  // display: 'flex',
  // justifyContent: 'center',
  // flexDirection: 'column',

  width: '100%',
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
