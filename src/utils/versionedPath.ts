const UNVERSIONED_PREFIXES = [
  '/api',
  '/img/',
  '/icons/',
  '/assets/',
  '/community',
  '/professional',
  '/search',
  '/manifest.json',
];

export function normalizeDocPath(path: string): string {
  return String(path).replace(/^\//, '');
}

export function alreadyHasVersionPrefix(path: string): boolean {
  return /^\/?v\d+(\/|$)/.test(path);
}

export function isUnversionedPluginPath(path: string): boolean {
  const clean = normalizeDocPath(path);
  return (
    clean === 'community' ||
    clean.startsWith('community/') ||
    clean === 'professional' ||
    clean.startsWith('professional/')
  );
}

function isStaticAssetPath(href: string): boolean {
  const pathOnly = href.split('?')[0].split('#')[0];
  return /\.[a-zA-Z0-9]+$/.test(pathOnly);
}

function matchesUnversionedPrefix(href: string): boolean {
  return UNVERSIONED_PREFIXES.some((prefix) => {
    if (prefix.endsWith('/')) {
      return href.startsWith(prefix);
    }
    return href === prefix || href.startsWith(`${prefix}/`);
  });
}

export function shouldVersionAbsoluteHref(href: string | undefined): boolean {
  if (!href || !href.startsWith('/') || href.startsWith('//')) {
    return false;
  }
  if (alreadyHasVersionPrefix(href)) {
    return false;
  }
  if (matchesUnversionedPrefix(href)) {
    return false;
  }
  if (isStaticAssetPath(href)) {
    return false;
  }
  return true;
}

export function joinVersionPath(
  versionPath: string | undefined,
  to: string,
): string {
  const docPath = normalizeDocPath(to);
  if (!versionPath || versionPath === '/') {
    return `/${docPath}`;
  }
  const base = versionPath.replace(/\/$/, '');
  const normalizedBase = base.startsWith('/') ? base : `/${base}`;
  return `${normalizedBase}/${docPath}`;
}

export function withVersionPrefix(
  href: string | undefined,
  versionPath: string | undefined,
): string | undefined {
  if (!href || !shouldVersionAbsoluteHref(href)) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const queryIndex = href.indexOf('?');
  let cut = href.length;
  if (hashIndex >= 0) cut = Math.min(cut, hashIndex);
  if (queryIndex >= 0) cut = Math.min(cut, queryIndex);

  const pathPart = href.slice(0, cut);
  const suffix = href.slice(cut);
  return `${joinVersionPath(versionPath, pathPart)}${suffix}`;
}
