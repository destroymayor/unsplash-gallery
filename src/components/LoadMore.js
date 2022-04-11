import Loading from '@/components/Loading';

export default function LoadMore(props) {
  const { containerRef, error, loadingMore, reachingEnd } = props;

  if (error) return <div />;

  return (
    <div
      ref={containerRef}
      className="flex w-full items-center justify-center py-10 text-black dark:text-zinc-200"
    >
      {loadingMore && !reachingEnd && <Loading />}
    </div>
  );
}
