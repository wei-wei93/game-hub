
export const imageOptimizer = (img_url: string) => {
  const index = img_url.indexOf('media/') + 'media/'.length;
  const new_url = img_url.slice(0, index) + 'crop/600/400/' + img_url.slice(index);
  return new_url;
}