/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Head from 'next/head';

import useUnsplash from '@/hooks/use-unsplash.hook';
import useOnScreen from '@/hooks/use-on-screen.hook';

import generateColumns from '@/helper/generate-columns.helper';

import Search from '@/components/Search';
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

      <header className="sticky top-0 z-10 flex items-center justify-between bg-zinc-800 p-4 shadow-lg">
        <h1 className="flex-1 text-xl text-zinc-100">Unsplash Gallery</h1>
        <Search value={query} onChange={(value) => setQuery(value)} />
        <div className="flex flex-1 justify-end">
          <a
            href={`https://github.com/destroymayor/unsplash-gallery`}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-50 hover:underline"
          >
            Github
          </a>
        </div>
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
