import ReactMarkdown from "react-markdown";

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <article className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[var(--foreground)] prose-p:leading-8 prose-p:text-[var(--muted)] prose-li:text-[var(--muted)] prose-strong:text-[var(--foreground)] prose-a:text-[var(--brand)] prose-blockquote:border-[var(--brand)] prose-blockquote:text-[var(--muted)] prose-code:text-[var(--foreground)] prose-pre:bg-[var(--background)] dark:prose-invert">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
