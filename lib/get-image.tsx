async function getImage(imageId, variant) {
  const url =
    "https://cdn.aidhan.au/cdn-cgi/imagedelivery/Dxsm1yoM7Ap4me0rmkAg9w/" +
    imageId +
    "/" +
    variant;
  const res = await fetch(url + "/inline");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    throw new Error("Failed to fetch photo");
  }

  return res.json();
}
