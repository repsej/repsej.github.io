// Opens images in a viewer on top of the page.
//  - A gallery (a project's screenshots, the About page's paintings) opens as a set you can browse. The page only shows
//    the first thumbnail; the others stay in the page, hidden, as the set's list.
//  - Any link to an image file in a page's text opens that one image.
// Without this script, these are all still plain links to their images.
(function () {
  var viewer = document.querySelector(".viewer");
  if (!viewer || typeof viewer.showModal !== "function") return;

  var image = viewer.querySelector(".viewer-image");
  var count = viewer.querySelector(".viewer-count");
  var loading = viewer.querySelector(".viewer-loading");
  var items = [];
  var current = 0;

  function toArray(list) {
    return Array.prototype.slice.call(list);
  }

  function altText(link) {
    var thumbnail = link.querySelector("img");
    return thumbnail ? thumbnail.alt : link.textContent.trim();
  }

  function show(index) {
    current = (index + items.length) % items.length;
    var link = items[current];
    loading.hidden = false;
    image.alt = altText(link);
    image.src = link.href;
    count.textContent = items.length > 1 ? current + 1 + " / " + items.length : "";
  }

  function hideLoading() {
    loading.hidden = true;
  }

  image.addEventListener("load", hideLoading);
  image.addEventListener("error", hideLoading);

  function open(set, index, event) {
    // Let ctrl- and cmd-click open the image in a new tab as usual.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    items = set;
    viewer.classList.toggle("is-single", set.length < 2);
    show(index);
    viewer.showModal();
  }

  var gallery = toArray(document.querySelectorAll(".gallery-item"));
  gallery.forEach(function (link, index) {
    link.addEventListener("click", function (event) { open(gallery, index, event); });
  });

  toArray(document.querySelectorAll(".prose a[href]")).forEach(function (link) {
    if (link.classList.contains("gallery-item")) return;
    if (!/\.(jpe?g|png|gif|webp)$/i.test(link.pathname)) return;
    link.addEventListener("click", function (event) { open([link], 0, event); });
  });

  viewer.querySelector(".viewer-prev").addEventListener("click", function () { show(current - 1); });
  viewer.querySelector(".viewer-next").addEventListener("click", function () { show(current + 1); });

  // A click anywhere except the previous and next buttons closes the viewer.
  viewer.addEventListener("click", function (event) {
    var button = event.target.closest("button");
    if (!button || button.classList.contains("viewer-close")) viewer.close();
  });

  viewer.addEventListener("keydown", function (event) {
    if (items.length < 2) return;
    if (event.key === "ArrowLeft") show(current - 1);
    if (event.key === "ArrowRight") show(current + 1);
  });

  // Stops GIFs from playing in the background.
  viewer.addEventListener("close", function () {
    image.removeAttribute("src");
  });
})();
