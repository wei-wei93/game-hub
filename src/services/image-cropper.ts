
export const imageCropper = (img_url: string) => {
  if (!img_url) return 'src/assets/image_not_found.webp';  // handle gamecards without an image 

  const index = img_url.indexOf('media/') + 'media/'.length;
  const new_url = img_url.slice(0, index) + 'crop/600/400/' + img_url.slice(index);
  return new_url;
}