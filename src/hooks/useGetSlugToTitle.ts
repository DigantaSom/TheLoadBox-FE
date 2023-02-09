const useGetSlugToTitle = (slug: string) => {
  const sentence = slug.split('-');

  let text = '';

  sentence.forEach(word => {
    text += word[0].toUpperCase() + word.substring(1) + ' ';
  });

  return text.trimEnd();
};

export default useGetSlugToTitle;
