'use client'

export default function ArticleContent({ content }) {
  return (
    <>
      <div 
        className="article-content text-slate-700 font-light leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }} 
      />

      <style jsx global>{`
        .article-content h2 {
          font-weight: 300;
          font-size: 2rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #0f172a;
          border-bottom: 2px solid #f59e0b;
          padding-bottom: 0.5rem;
        }
        .article-content h3 {
          font-weight: 400;
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .article-content h4 {
          font-weight: 400;
          font-size: 1.25rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #334155;
        }
        .article-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .article-content strong {
          font-weight: 500;
          color: #0f172a;
        }
        .article-content ul, .article-content ol {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }
        .article-content li {
          margin-bottom: 0.5rem;
        }
        .article-content a {
          color: #f59e0b;
          text-decoration: underline;
        }
        .article-content a:hover {
          color: #d97706;
        }
        .article-content blockquote {
          border-left: 4px solid #f59e0b;
          padding-left: 1.5rem;
          font-style: italic;
          color: #475569;
          background: #fef3c7;
          padding: 1rem 1.5rem;
          margin: 2rem 0;
          border-radius: 0 0.5rem 0.5rem 0;
        }
        .article-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          border: 1px solid #e2e8f0;
        }
        .article-content th,
        .article-content td {
          border: 1px solid #e2e8f0;
          padding: 0.75rem;
          text-align: left;
        }
        .article-content th {
          background: #f8fafc;
          font-weight: 500;
          color: #0f172a;
        }
        .article-content tr:nth-child(even) {
          background: #f8fafc;
        }
        .article-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 2rem 0;
        }
        .article-content code {
          background: #f1f5f9;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          color: #dc2626;
        }
        .article-content pre {
          background: #1e293b;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 2rem 0;
        }
        .article-content pre code {
          background: transparent;
          color: inherit;
          padding: 0;
        }
      `}</style>
    </>
  )
}