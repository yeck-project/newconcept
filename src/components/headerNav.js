import React, { useState } from "react";
import {Link, useI18next, I18nextContext} from 'gatsby-plugin-react-i18next';

import { GatsbyImage } from "gatsby-plugin-image";

export function LanguageSelect () {
  const {languages, originalPath} = useI18next();
  const context = React.useContext(I18nextContext);
  console.log(context.language);

  return (
    <>
      <div class="p-10">
        <div class="dropdown inline-block relative">
          <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span class="mr-1">{context.language}</span>
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
          </button>
          <ul class="dropdown-menu absolute text-gray-700">
            {languages.map((lng) => (
              <li key={lng} class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                <Link to={originalPath} language={lng}>
                  {lng}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export function NavbarMobile ({ menuItems, logo }) {
  const [open, SetOpen] = useState(true);
  
  function toggle() {
    SetOpen(!open);
  };

  return (
    <>
    <div class="relative">
      <div class="bg-gray-50 text-black flex justify-between">
        <a href="/index" class="block p-4"><img src={logo} class="h-12 w-auto"/></a>
        <button onClick={toggle} type="button"
          className={open ?
            'hamburger hamburger--collapse outline-none' : 
            'hamburger hamburger--collapse outline-none is-active'}
            >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span> 
        </button>
      </div>
      <div className={open ? 
      'bg-gray-50 min-h-screen z-10 w-4/6 space-y-6 py-7 px-2 absolute inset-y-0 right-0 transform translate-x-full transition duration-500 ease-in-out origin-right' : 
      'bg-gray-50 min-h-screen z-10 w-4/6 space-y-6 py-7 px-2 absolute inset-y-0 right-0 transform transition duration-500 ease-in-out origin-right'}
      >
        <nav>
          <button onClick={toggle} type="button"
            className={open ? 
              'hamburger hamburger--collapse outline-none absolute right-3 top-3' : 
              'hamburger hamburger--collapse outline-none is-active absolute right-3 top-3'}
              >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span> 
          </button>
          <div class="mt-20 text-black text-center">
            {menuItems.map((menuItem)=>{
            return (
              <a href={`/${menuItem.toLowerCase()}`} class="inline-block mb-6 lg:mb-0 lg:mr-3 w-5/6 lg:w-auto py-2 px-6 leading-loose bg-primary hover:bg-white hover:text-primary hover:border-solid border border-primary text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200">{menuItem}</a>
            )
            })}
            <LanguageSelect/>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
};

export function NavbarDesktop ({ menuItems, logo }) { 
  
  const handleClickContact = () => {
    var elementContact = document.getElementById("contact");
    elementContact.scrollIntoView({ behavior: 'smooth', block: 'start'});
  };

  return (
    <>
    <nav class="relative px-6 py-6 flex justify-between items-center bg-gray-50">
      <a class="text-3xl font-bold leading-none" href="#">
        <img class="h-14" src={logo} alt="" width="auto"/>
      </a>
      <ul class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex mx-auto items-center w-auto space-x-6">
        {menuItems.map((menuItem)=>{
        return (
          <>
          <li><a class="text-md text-gray-400 hover:text-primary" href="#">{menuItem}</a></li>
          <li class="text-gray-800">
            <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
          </li>
          </>
        )
        })}
        <LanguageSelect/>
      </ul>
      <a class="lg:inline-block py-2 px-6 text-sm font-bold rounded-l-xl rounded-t-xl bg-primary hover:bg-white hover:text-primary hover:border-solid border border-primary text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Contact Us</a>
    </nav>
    </>
  );
};

export default function Navbar () { 
  const menuItems = ['Sport', 'Produits', 'Entreprise', 'RprodBike'];
  const logo = "https://res.cloudinary.com/newconcept/image/upload/v1647800145/logo/logo_new_concept_sxpycz.png"
  return (
    <>
    <div class="md:hidden">
      <NavbarMobile
        menuItems={menuItems}
        logo={logo}
      />
    </div>
    <div class="hidden md:block">
      <NavbarDesktop
        menuItems={menuItems}
        logo={logo}
      />
    </div>
    </>
  );
};

