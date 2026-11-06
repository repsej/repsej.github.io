// Opens a project's screenshots in a viewer. The page only shows the first
// thumbnail; the others stay in the page, hidden, as the viewer's list of images.
// Without this script, the visible thumbnail is still a plain link to its image.
(function () {
  var viewer = document.querySelector(".viewer");
  if (!viewer || typeof viewer.showModal !== "function") return;

  var links = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
  var image = viewer.querySelector(".viewer-image");
  var count = viewer.querySelector(".viewer-count");
  var loading = viewer.querySelector(".viewer-loading");
  var current = 0;

  function show(index) {
    current = (index + links.length) % links.length;
    var link = links[current];
    loading.hidden = false;
    image.alt = link.querySelector("img").alt;
    image.src = link.href;
    count.textContent = links.length > 1 ? current + 1 + " / " + links.length : "";
  }

  function hideLoading() {
    loading.hidden = true;
  }

  image.addEventListener("load", hideLoading);
  image.addEventListener("error", hideLoading);

  links.forEach(function (link, index) {
    link.addEventListener("click", function (event) {
      // Let ctrl- and cmd-click open the image in a new tab as usual.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      show(index);
      viewer.showModal();
    });
  });

  if (links.length < 2) viewer.classList.add("is-single");

  viewer.querySelector(".viewer-prev").addEventListener("click", function () { show(current - 1); });
  viewer.querySelector(".viewer-next").addEventListener("click", function () { show(current + 1); });

  // A click anywhere except the previous and next buttons closes the viewer.
  viewer.addEventListener("click", function (event) {
    var button = event.target.closest("button");
    if (!button || button.classList.contains("viewer-close")) viewer.close();
  });

  viewer.addEventListener("keydown", function (event) {
    if (links.length < 2) return;
    if (event.key === "ArrowLeft") show(current - 1);
    if (event.key === "ArrowRight") show(current + 1);
  });

  // Stops GIFs from playing in the background.
  viewer.addEventListener("close", function () {
    image.removeAttribute("src");
  });
})();
