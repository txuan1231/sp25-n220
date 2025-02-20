const photos = [
  "https://fastly.picsum.photos/id/804/300/400.jpg?hmac=Y6cx9oentnw75-Q7gYdlaJBBAnSAlUHRYXbvFMIrZNI",
  "https://fastly.picsum.photos/id/185/300/400.jpg?hmac=7jvc9SGhArOCJhgLoOfYSTezJsc1xrIXhDOXkiZSrbs",
  "https://fastly.picsum.photos/id/229/300/400.jpg?hmac=CZOWn8sQ8oa9EfbMZw5tYqPMNKK0mNOYUsEgz81K8io",
  "https://fastly.picsum.photos/id/211/300/400.jpg?hmac=l0zi1AkBxaPoAMnWav0iWH8TsWfblHXdm_IGSNDMFWQ",
];

const imgList = document.getElementById("imgList");

for (let i = 0; i < photos.length; i++) {
  const img = document.createElement("img");

  img.src = photos[i];
  img.alt =  'Image' + (i + 1);
  img.height = 300;

  const listItem = document.createElement("li");

  listItem.appendChild(img);

  imgList.appendChild(listItem);
}
