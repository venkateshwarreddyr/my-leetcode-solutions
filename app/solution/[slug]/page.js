import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSolutionBySlug } from '../../../lib/solutions';

export default async function SolutionPage({ params }) {
  const resolvedParams = await params;
  const solution = await getSolutionBySlug(resolvedParams.slug);

  if (!solution) {
    notFound();
  }

  return (
    <article className="detail">
      <Link href="/" className="backLink">
        Back to all solutions
      </Link>

      <h1>{solution.title}</h1>

      <div className="detailMeta">
        <p>
          <strong>Slug:</strong> {solution.slug}
        </p>
        <p>
          <strong>Language:</strong> {solution.language}
        </p>
        <p>
          <strong>Runtime:</strong> {solution.runtime || 'N/A'}
        </p>
        <p>
          <strong>Memory:</strong> {solution.memory || 'N/A'}
        </p>
        <p>
          <strong>Submitted:</strong> {solution.submitted || 'N/A'}
        </p>
        <p>
          <strong>LeetCode:</strong>{' '}
          {solution.leetcodeUrl ? (
            <a href={solution.leetcodeUrl} target="_blank" rel="noreferrer">
              Open problem
            </a>
          ) : (
            'N/A'
          )}
        </p>
      </div>

      <pre className="codeBlock">
        <code>{solution.code}</code>
      </pre>
    </article>
  );
}
