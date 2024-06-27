window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const area = document.querySelector(".js-area");
  const wrap = document.querySelector(".js-wrap");
  const items = document.querySelectorAll(".js-item");
  const num = items.length;

  gsap.set(wrap, {
    width: num * 100 + "%",
    marginLeft: (num - 1) * 100 * -1 + "%"
  });
  gsap.set(items, { width: 100 / num + "%" });

  gsap.to(items, {
    xPercent: 100 * (num - 1),
    ease: "none",
    scrollTrigger: {
      trigger: area,
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: true
    }
  });
});
