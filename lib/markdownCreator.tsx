import toMarkdownString from './toMarkdownString';

const MISSING_FILENAME_MESSAGE =
  'createRemarkButton must be given `filename(form): string`';
const MISSING_FIELDS_MESSAGE =
  'createRemarkButton must be given `fields: Field[]` with at least 1 item';

export class MarkdownCreatorPlugin {
  __type = 'content-creator';
  name;
  fields;

  // Markdown Specific
  filename;
  frontmatter;
  body;

  constructor(options: {
    label: any;
    filename: any;
    fields: any;
    frontmatter: any;
    body: any;
  }) {
    if (!options.filename) {
      console.error(MISSING_FILENAME_MESSAGE);
      throw new Error(MISSING_FILENAME_MESSAGE);
    }

    if (!options.fields || options.fields.length === 0) {
      console.error(MISSING_FIELDS_MESSAGE);
      throw new Error(MISSING_FIELDS_MESSAGE);
    }

    this.name = options.label;
    this.fields = options.fields;
    this.filename = options.filename;
    this.frontmatter = options.frontmatter || ((() => ({})) as any);
    this.body = options.body || ((() => '') as any);
  }

  async onSubmit(
    form: any,
    cms: {
      api: {
        git: { onChange: (arg0: { fileRelativePath: any; content: string }) => void };
      };
    },
  ) {
    const fileRelativePath = await this.filename(form);
    const frontmatter = await this.frontmatter(form);
    const markdownBody = await this.body(form);

    cms.api.git.onChange({
      fileRelativePath,
      content: toMarkdownString({
        fileRelativePath,
        frontmatter,
        markdownBody,
      }),
    });
  }
}

export const CreateBlogPlugin = new MarkdownCreatorPlugin({
  label: 'Add New Post',
  filename: (form: { title: string }) => {
    const slug = form.title.replace(/\s+/g, '-').toLowerCase();
    return `posts/${slug}.md`;
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
    {
      label: 'Author',
      description: 'Who wrote this, yo?',
      name: 'author',
      component: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      component: 'html',
    },
    {
      name: 'body',
      label: 'Blog Body',
      component: 'markdown',
    },
  ],
  frontmatter: (postInfo: { title: any; date: any; author: any }) => ({
    title: postInfo.title,
    date: postInfo.date || new Date(),
    author: postInfo.author || 'spacedawn96',
    hero_image: '/static/alfons-taekema-bali.jpg',
  }),
  body: () => `New post, who dis?`,
});
