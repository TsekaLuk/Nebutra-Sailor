const GITHUB_USER = "TsekaLuk";
const CACHE_REVALIDATE = 3600;

const BASE_HEADERS = (token: string) => ({
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
});

const FALLBACK = { commits: 2314, repos: 42, years: 5, languages: 7 };

export async function getGithubData() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return FALLBACK;
  }

  try {
    const [userRes, reposRes, commitSearchRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`, {
        headers: BASE_HEADERS(token),
        next: { revalidate: CACHE_REVALIDATE },
        signal: AbortSignal.timeout(8_000),
      }),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`, {
        headers: BASE_HEADERS(token),
        next: { revalidate: CACHE_REVALIDATE },
        signal: AbortSignal.timeout(8_000),
      }),
      fetch(`https://api.github.com/search/commits?q=author:${GITHUB_USER}&per_page=1`, {
        headers: BASE_HEADERS(token),
        next: { revalidate: CACHE_REVALIDATE },
        signal: AbortSignal.timeout(8_000),
      }),
    ]);

    if (!userRes.ok) throw new Error(`GitHub API returned ${userRes.status}`);

    const [userData, reposData, commitData] = await Promise.all([
      userRes.json(),
      reposRes.ok ? reposRes.json() : null,
      commitSearchRes.ok ? commitSearchRes.json() : null,
    ]);

    const languages = reposData
      ? new Set(
          (reposData as { language?: string | null }[]).map((r) => r.language).filter(Boolean),
        ).size
      : FALLBACK.languages;

    const createdAt = userData.created_at as string | undefined;
    const years = createdAt
      ? new Date().getFullYear() - new Date(createdAt).getFullYear()
      : FALLBACK.years;

    return {
      commits: commitData?.total_count ?? FALLBACK.commits,
      repos: userData.public_repos ?? FALLBACK.repos,
      years,
      languages,
    };
  } catch (err) {
    console.error("[github] Failed to fetch metrics:", err);
    return FALLBACK;
  }
}
