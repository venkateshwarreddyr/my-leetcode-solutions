import Link from 'next/link';
import { getSolutionsIndex, getLanguages } from '../lib/solutions';

const PAGE_SIZE = 30;

function asString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export default async function Home({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = asString(resolvedSearchParams?.q).toLowerCase();
  const languageFilter = asString(resolvedSearchParams?.language).toLowerCase();
  const page = Math.max(Number(resolvedSearchParams?.page || 1), 1);

  const [allSolutions, languages] = await Promise.all([
    getSolutionsIndex(),
    getLanguages(),
  ]);

  const filtered = allSolutions.filter((item) => {
    const haystack = `${item.title} ${item.slug} ${item.language}`.toLowerCase();
    const queryMatch = !query || haystack.includes(query);
    const languageMatch = !languageFilter || item.language.toLowerCase() === languageFilter;
    return queryMatch && languageMatch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const current = filtered.slice(start, start + PAGE_SIZE);

  const params = new URLSearchParams();
  if (query) params.set('q', query);
  if (languageFilter) params.set('language', languageFilter);

  const makePageHref = (targetPage) => {
    const nextParams = new URLSearchParams(params);
    if (targetPage > 1) {
      nextParams.set('page', String(targetPage));
    } else {
      nextParams.delete('page');
    }
    const suffix = nextParams.toString();
    return suffix ? `/?${suffix}` : '/';
  };

  return (
    <div>
      <header className="hero">
        <h1>LeetCode Solutions Viewer</h1>
        <p>
          Browse and search local solutions from <strong>{allSolutions.length}</strong> problems.
        </p>
      </header>

      <form className="toolbar" action="/" method="get">
        <input
          aria-label="Search by title, slug, or language"
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search title, slug, language..."
        />
        <select name="language" defaultValue={languageFilter}>
          <option value="">All languages</option>
          {languages.map((language) => (
            <option key={language} value={language.toLowerCase()}>
              {language}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>

      <p className="summary">
        Showing {current.length} of {filtered.length} matching solutions
      </p>

      <section className="grid">
        {current.map((item) => (
          <article className="card" key={item.slug}>
            <h2>
              <Link href={`/solution/${item.slug}`}>{item.title}</Link>
            </h2>
            <p className="meta">/{item.slug}</p>
            <p className="meta">
              <span>{item.language}</span>
              <span>{item.submitted || 'Unknown date'}</span>
            </p>
          </article>
        ))}
      </section>

      <nav className="pagination" aria-label="Pagination">
        {safePage > 1 ? <Link href={makePageHref(safePage - 1)}>Previous</Link> : <span />}
        <span>
          Page {safePage} of {totalPages}
        </span>
        {safePage < totalPages ? <Link href={makePageHref(safePage + 1)}>Next</Link> : <span />}
      </nav>
    </div>
  );
}
