import React from "react";

export function OneCase({ title }) {
  return (
<>    
  <div class="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
    <div class="group relative h-80 mb-5 mx-auto rounded-lg">
      <img class="h-80 w-full relative h-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt=""/>
      <div class="absolute inset-0 bg-gray-900 opacity-50 group-hover:opacity-75 rounded-lg transition duration-200"></div>
      <div class="absolute inset-0 p-6 flex flex-col items-start">
        <p class="mb-auto text-xl lg:text-2xl text-white font-bold">{title}</p>
        <a class="inline-block py-2 px-4 text-gray-50 bg-primary hover:bg-white hover:text-primary hover:border-solid border border-primary text-white font-bold leading-loose transition duration-200 transition duration-200 rounded-l-xl rounded-t-xl" href="#">View Project</a>
      </div>
    </div>
  </div>
</>
  );
}

export default function BusinessCases({ allCases }) {
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
    <div class="container px-4 mx-auto">
      <div class="mb-16 flex flex-wrap justify-center md:justify-between items-center">
        <div class="text-center lg:text-left">
          <h2 class="text-4xl lg:text-5xl font-bold font-heading">Featured Projects</h2>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4 mb-4">
      {allCases?.nodes?.map((value, key)=>{
        return (
          <OneCase
            key={key}
            title={value?.title}
          />
        )
      })}
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