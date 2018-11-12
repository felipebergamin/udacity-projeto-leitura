
export default (baseUrl, headers) => ({
  listCategories: () =>
    fetch(`${baseUrl}/categories`, {
      headers: new Headers(headers)
    }).then(res => res.json()),

  postsFromCategory: categoryName =>
    categoryName
      ? fetch(`${baseUrl}/${categoryName}/posts`, {
          headers: new Headers(headers)
        }).then(res => res.json())
      : Promise.resolve([]),
});
