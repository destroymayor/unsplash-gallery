import { useState } from 'react';
import Head from 'next/head';

import useUnsplash from '@/hooks/use-unsplash.hook';
import useOnScreen from '@/hooks/use-on-screen.hook';

import generateColumns from '@/helper/generate-columns.helper';

import Search from '@/components/Search';
import GithubLink from '@/components/GithubLink';
import GalleryGrid from '@/components/GalleryGrid';
import LoadMore from '@/components/LoadMore';

export default function Home() {
  const [query, setQuery] = useState(undefined);
  const { containerRef, isVisible } = useOnScreen();
  const { data, isError, isLoading, isLoadingMore, isReachingEnd } = useUnsplash({
    isVisible,
    query,
  });

  return (
    <>
      <Head>
        <title>Unsplash Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 left-0 z-10 flex w-full items-center justify-between gap-2 py-4 px-2 backdrop-blur-lg">
        <Search value={query} onChange={(value) => setQuery(value)} />
        <GithubLink />
      </header>

      <GalleryGrid data={generateColumns(data)} loading={isLoading} />

      <LoadMore
        containerRef={containerRef}
        error={isError}
        loadingMore={isLoadingMore}
        reachingEnd={isReachingEnd}
      />
    </>
  );
}
