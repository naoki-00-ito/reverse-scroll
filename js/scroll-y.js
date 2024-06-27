window.addEventListener("load", function () {
  window.scrollTo(0, document.body.scrollHeight);
});

document.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();

    const scrollAmount = -event.deltaY * 3;

    window.scrollBy({
      top: scrollAmount,
      left: 0,
    });
  },
  { passive: false }
);
