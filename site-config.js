/* ============================================================
   NERDWEAR SITE CONFIG
   Edit image paths here to swap pictures anywhere on the site.
   Folder structure assumed:
      /images/set-1/
      /images/set-2/
      /images/set-3/
      /images/set-4/
   ============================================================ */

window.NERDWEAR_IMAGES = {
  /* HERO */
  hero: "images/set-3/classic-dad-hat-navy-front-6aa47b5d870ed.webp",
  heroAlt: "NerdWear navy embroidered cap shown on a model",

  /* FEATURE STRIP */
  featureQuestion: "images/set-1/classic-dad-hat-black-front-6aa484e5e54af.webp",
  featureCurious: "images/set-1/classic-dad-hat-khaki-front-6aa485a8d1110.webp",
  featureRelativity: "images/set-1/classic-dad-hat-white-front-6aa47b5d8662a.webp",
  featureVintage: "images/set-2/vintage-cap-black-front-6aa483c42a6bb.webp",

  /* LIFESTYLE */
  lifestyle1: "images/set-3/classic-dad-hat-black-front-6aa47cb291dbb.webp",
  lifestyle2: "images/set-3/classic-dad-hat-khaki-front-6aa485a8d1344.webp",
  lifestyle3: "images/set-3/classic-snapback-natural-black-front-6aa4795fa0b69.webp",
  lifestyle4: "images/set-3/cuffed-beanie-black-front-6aa4823629594.webp",
  lifestyle5: "images/set-3/vintage-cap-black-left-front-6aa47a5c488df.webp",
  lifestyle6: "images/set-3/vintage-cap-navy-front-6aa4829018dad.webp",

  /* PRODUCT / COLOR VARIETY */
  product1: "images/set-1/classic-dad-hat-black-front-6aa47e86c58c1.webp",
  product2: "images/set-1/classic-dad-hat-khaki-front-6aa485a8d1110.webp",
  product3: "images/set-1/classic-dad-hat-pink-front-6aa47fb04c17b.webp",
  product4: "images/set-1/classic-dad-hat-spruce-front-6aa47b5d865f4.webp",
  product5: "images/set-1/classic-snapback-black-red-front-6aa4795fa02ae.webp",
  product6: "images/set-1/classic-snapback-black-teal-front-6aa48481d45bd.webp",
  product7: "images/set-1/cuffed-beanie-gold-front-6aa475a1942d3.webp",
  product8: "images/set-1/vintage-cap-black-front-6aa47a5c4807d.webp",
  product9: "images/set-1/vintage-cap-pink-front-6aa4853be3dbe.webp",
  product10: "images/set-2/classic-dad-hat-green-camo-front-6aa484e5e572c.webp",
  product11: "images/set-2/distressed-dad-hat-navy-front-6aa47d373b7ef.webp",
  product12: "images/set-2/classic-snapback-heather-grey-red-front-6aa48481d4431.webp",

  /* MORE THAN HATS */
  mug: "images/set-4/black-glossy-mug-black-15-oz-handle-on-left-6aa4783cf2883.webp",
  bottle: "images/set-4/stainless-steel-water-bottle-white-17-oz-front-6aa47ed42fa9c.webp",
  whiteMug: "images/set-4/white-glossy-mug-white-20-oz-woman-6aa47c116a526.webp",

  /* STORY PAGE VISUALS */
  storyHero: "images/set-3/classic-dad-hat-stone-right-6aa47fb04cd16.webp",
  storyDetail: "images/set-2/vintage-cap-black-product-details-6aa476ad2c493.webp",
  storyBack: "images/set-2/vintage-cap-navy-back-6aa476ad2bcc0.webp"
};

/* Apply any image in the config to an element with data-img="key". */
document.addEventListener("DOMContentLoaded", () => {
  const images = window.NERDWEAR_IMAGES || {};
  document.querySelectorAll("[data-img]").forEach((el) => {
    const key = el.dataset.img;
    const src = images[key];
    if (!src) return;
    if (el.tagName === "IMG") {
      el.src = src;
      if (!el.alt && images[key + "Alt"]) el.alt = images[key + "Alt"];
    } else {
      el.style.backgroundImage = `url("${src}")`;
    }
  });
});
