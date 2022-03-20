import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import HeaderNav from "./headerNav";

export default function Header() {
  return (
<section class="skewed-bottom-right">
  <HeaderNav/>
  <div class="bg-gray-50 pt-12 lg:pt-20 pb-20 radius-for-skewed">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
          <div class="w-full text-center lg:text-left">
            <div class="max-w-lg mx-auto lg:mx-0">
              <h2 class="mb-3 text-4xl lg:text-5xl font-bold font-heading text-primary">
                <span>Build &amp; Launch without</span>
              </h2>
            </div>
            <div class="max-w-lg mx-auto lg:mx-0">
              <p class="mb-6 text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
              <div><a class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-primary hover:bg-white hover:text-primary hover:border-solid border border-primary text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get Started</a><a class="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200" href="#">How it works</a></div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4 flex items-center justify-center">
          <div class="relative">
            <img class="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mr-for-radius">
    <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
    </svg>
  </div>
</section>
  );
}
