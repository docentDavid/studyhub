import ReactMarkdown from "react-markdown";

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="space-y-6 text-[var(--foreground)]">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-black tracking-tight">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-8 text-2xl font-black tracking-tight">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 text-xl font-bold">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="leading-8 text-[var(--muted)]">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="ml-6 list-disc space-y-2 text-[var(--muted)]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="ml-6 list-decimal space-y-2 text-[var(--muted)]">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="pl-1 leading-7">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-bold text-[var(--foreground)]">
              {children}
            </strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[var(--brand)] pl-4 italic text-[var(--muted)]">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="rounded-md bg-[var(--surface)] px-1.5 py-1 text-sm text-[var(--foreground)]">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="overflow-x-auto rounded-2xl bg-[var(--background)] p-4 text-sm leading-7">
              {children}
            </pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
