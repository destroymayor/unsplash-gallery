import Image from 'next/image';

import useBlurHash from '@/hooks/use-blurhash.hook';

export default function Photo(props) {
  const { data } = props;

  const { width, height, alt_description, urls, blur_hash, user } = data;
  const { name, profile_image, links } = user;

  // const blurDataUrl = useBlurHash(blur_hash);

  return (
    <div className="group relative">
      <Image
        className="rounded-lg"
        unoptimized
        src={urls.regular}
        alt={alt_description}
        // placeholder="blur"
        // blurDataURL={blurDataUrl}
        width={width}
        height={height}
      />

      <div className="absolute bottom-[6px] left-0 flex w-full items-center gap-2 rounded-b-lg p-4 opacity-0 transition duration-200 ease-in-out group-hover:bg-zinc-800/60 group-hover:opacity-100">
        <Image
          className="rounded-full"
          unoptimized
          src={profile_image.medium}
          width={32}
          height={32}
          alt={name}
        />
        <a
          href={`${links.html}?utm_source=image-gallery&utm_medium=referral`}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-50 hover:underline"
        >
          {name}
        </a>
      </div>
    </div>
  );
}
