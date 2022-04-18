import Photo from '@/components/Photo';
import Loading from '@/components/Loading';

export default function GalleryGrid(props) {
  const { data, loading } = props;

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loading />
      </div>
    );

  if (data?.[0]?.length === 0)
    return (
      <div className="flex items-center justify-center py-20 text-zinc-100">No photos found.</div>
    );

  return (
    <div className="mx-2 flex flex-row flex-wrap items-stretch justify-center gap-2 md:flex-nowrap">
      {data.map((grid, index) => (
        <div key={`gallery-${index}`} className="flex flex-col items-stretch justify-start">
          {grid?.map((item, itemIndex) => (
            <div key={`${item.id} - ${itemIndex}`}>
              <Photo data={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
