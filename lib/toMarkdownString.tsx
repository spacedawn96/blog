import * as yaml from 'js-yaml';

export default function toMarkdownString(formValues: {
  fileRelativePath?: any;
  frontmatter: any;
  markdownBody: any;
}) {
  return (
    '---\n' +
    yaml.dump(formValues.frontmatter) +
    '---\n' +
    (formValues.markdownBody || '')
  );
}
