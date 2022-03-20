import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export function BulletPoints() {
  return (
  <>
    <li class="mb-2 flex">
      <svg class="mr-2 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>
      <span>Lorem Ipsum</span>
    </li>
  </>          
  );
}

export function ServiceCard() {
  return (
  <>
    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
      <div class="p-8 bg-white shadow rounded transition duration-200">
        <h4 class="mb-2 text-2xl font-bold">Intermediate</h4>
        <p class="mt-3 mb-6 leading-loose text-gray-500">Nullam diam arcu, sodales quis convallis sit amet, sagittis varius ligula.</p>
        <ul class="mb-6 text-gray-500">
          <BulletPoints/>
          <BulletPoints/>
          <BulletPoints/>
          <BulletPoints/>
        </ul>
        <a class="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-primary hover:bg-white hover:text-primary hover:border-solid border border-primary text-white font-bold leading-loose transition duration-200" href="#">Get Started</a>
      </div>
    </div>
  </>          
  );
}
export default function Services() {
  return (
<section>
  <div class="skew skew-top mr-for-radius">
    <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
    </svg>
  </div>
  <div class="skew skew-top ml-for-radius">
    <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
    </svg>
  </div>
  <div class="py-20 bg-gray-50 radius-for-skewed">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center mb-16">
        <h2 class="mb-2 text-4xl lg:text-5xl font-bold font-heading">Choose your best plan</h2>
        <p class="mb-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="flex flex-wrap -mx-4">
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
      </div>
    </div>
  </div>
  <div class="skew skew-bottom mr-for-radius">
    <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
    </svg>
  </div>
  <div class="skew skew-bottom ml-for-radius">
    <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
    </svg>
  </div>
</section>
  );
}
