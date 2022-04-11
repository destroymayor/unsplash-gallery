import { decode } from 'blurhash';

export default function useBlurHash(blurHash) {
  const pixels = decode(blurHash, 32, 32);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(32, 32);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
  const blurDataUrl = canvas.toDataURL();

  return blurDataUrl;
}
