import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import HeaderNav from "./headerNav";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';


export default function Header() {
  return (
<section class="skewed-bottom-right">
  <HeaderNav/>
  <div class="bg-gray-50 pt-12 lg:pt-20 pb-20 radius-for-skewed relative py-24 overflow-hidden">
    <div class="relative max-w-4xl mb-20 mx-auto px-4 text-center">
      <span class="text-lg text-black font-semibold tracking-widest uppercase"> <Trans>Hi people</Trans></span>
      <h2 class="mt-8 mb-8 text-black text-4xl lg:text-6xl font-bold uppercase">Take care of your performance every day.</h2>
      <a class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-primary hover:bg-white hover:text-primary hover:border-solid border border-primary text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get started free</a>
    </div>
    <div class="max-w-5xl container px-4 mx-auto">
      <div class="flex flex-wrap -mx-5">
        <div class="w-full md:w-1/3 px-5 mb-8 md:mb-0">
          <div class="flex">
            <div class="mr-8">
              <svg class="text-primary" width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3377 0L0 14.1465L14.3377 28.293L28.6753 14.1465L14.3377 0ZM3.37903 14.1465L14.3377 3.33397L18.9723 7.90683L17.2826 9.57399L14.3377 6.66901L6.75913 14.1465L9.70301 17.0522L8.01332 18.7193L3.37903 14.1465ZM18.5382 14.1465L14.3377 18.2921L10.1382 14.1465L14.3377 10.003L18.5382 14.1465ZM9.70301 20.3865L11.3927 18.7193L14.3377 21.624L21.9173 14.1465L18.9723 11.2408L20.662 9.57364L25.2963 14.1465L14.3377 24.959L9.70301 20.3865Z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg text-black font-bold uppercase">Quick review</h3>
              <p class="text-base text-black">We make sure you get feedback the same day</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-5 mb-8 md:mb-0">
          <div class="flex">
            <div class="mr-8">
              <svg class="text-primary" width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3377 0L0 14.1465L14.3377 28.293L28.6753 14.1465L14.3377 0ZM3.37903 14.1465L14.3377 3.33397L18.9723 7.90683L17.2826 9.57399L14.3377 6.66901L6.75913 14.1465L9.70301 17.0522L8.01332 18.7193L3.37903 14.1465ZM18.5382 14.1465L14.3377 18.2921L10.1382 14.1465L14.3377 10.003L18.5382 14.1465ZM9.70301 20.3865L11.3927 18.7193L14.3377 21.624L21.9173 14.1465L18.9723 11.2408L20.662 9.57364L25.2963 14.1465L14.3377 24.959L9.70301 20.3865Z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg text-black font-bold uppercase">Easy changes</h3>
              <p class="text-base text-black">Options settings for customers conveience</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-5">
          <div class="flex">
            <div class="mr-8">
              <svg class="text-primary" width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3377 0L0 14.1465L14.3377 28.293L28.6753 14.1465L14.3377 0ZM3.37903 14.1465L14.3377 3.33397L18.9723 7.90683L17.2826 9.57399L14.3377 6.66901L6.75913 14.1465L9.70301 17.0522L8.01332 18.7193L3.37903 14.1465ZM18.5382 14.1465L14.3377 18.2921L10.1382 14.1465L14.3377 10.003L18.5382 14.1465ZM9.70301 20.3865L11.3927 18.7193L14.3377 21.624L21.9173 14.1465L18.9723 11.2408L20.662 9.57364L25.2963 14.1465L14.3377 24.959L9.70301 20.3865Z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg text-black font-bold uppercase">Place storage</h3>
              <p class="text-base text-black">Store projects in easily accessible catalogs</p>
            </div>
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
  