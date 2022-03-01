import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function CallToAction() {
  return (
<section>
  <div class="relative py-20 radius-for-skewed">
    <div class="absolute inset-0 bg-gray-900 opacity-80 radius-for-skewed"></div>
    <div class="container mx-auto px-4 relative">
      <div class="max-w-md text-center mx-auto">
        <span class="text-green-600 font-bold">Dolor sit amet consectutar</span>
        <h2 class="text-4xl lg:text-5xl text-white font-bold font-heading">Build &amp; Launch without problems</h2>
        <div class="mb-6 max-w-sm mx-auto">
          <p class="text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
        </div>
        <a class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">See More</a>
      </div>
    </div>
  </div>
</section>
  );
}
