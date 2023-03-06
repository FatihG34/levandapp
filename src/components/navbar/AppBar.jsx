import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LevandLogo from "../../assets/maint.png";
import { AppContextProv } from '../../context/AppContext';
import { GrLanguage } from 'react-icons/gr';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import Modal from '../modal/Modal';

const languages = [
    {
        code: 'tr',
        name: 'Türkçe',
        country_code: 'tr'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'ar',
        name: 'العربية',
        country_code: 'sa',
        dir: 'rtl'
    },
]


const AppBar = () => {
    const [showProduct, setShowProduct] = useState(false)
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'tr';
    const currentLanguage = languages.find(l => l.code === currentLanguageCode)
    const navigate = useNavigate()
    const { products } = useContext(AppContextProv);
    return (
        <nav className='relative flex lg:max-w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap mb-32'>
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-400 rounded-box w-52">
                        <li><Link to={"/"} className='hover:bg-green-600 active:bg-green-300'>{t('main_page')}</Link></li>
                        <li tabIndex={0} className='dropdown rounded-lg hover:bg-green-600 active:bg-green-300' onClick={() => setShowProduct(true)}>
                            <span>
                                {t('products')}
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </span>
                            <ul className="menu menu-compact">
                                {
                                    products?.map((item, index) => (
                                        <li className='dropdown-content mt-3 p-2 shadow bg-green-400 rounded-box w-52 active:bg-green-600' key={index}><Link to={"products"} state={{ products: item }} replace={false} className='bg-green-400'>{item.productCategory}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><Link to={"about"} className='hover:bg-green-600 active:bg-green-300'>{t('about_us')}</Link></li>
                        <li><Link to={"contact"} className='hover:bg-green-600 active:bg-green-300'>{t('contact_us')}</Link></li>
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-xl hover:bg-transparent active:bg-transparent" onClick={() => navigate("/")}>Levand Gıda  <img src={LevandLogo} alt="levand-logo" width={30} className='ml-1 md:hidden' /></p>

            </div>
            <div className='xs:hidden lg:block'>
                2
            </div>
            <div>
                3
            </div>
        </nav>

        // <nav
        //     class="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start"
        //     data-te-navbar-ref>
        //     <div class="flex w-full flex-wrap items-center justify-between px-6">
        //         <button
        //             class="block border-0 bg-transparent py-2 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
        //             type="button"
        //             data-te-collapse-init
        //             data-te-target="#navbarSupportedContent4"
        //             aria-controls="navbarSupportedContent4"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation">
        //             <span class="[&>svg]:w-7">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     viewBox="0 0 24 24"
        //                     fill="currentColor"
        //                     class="h-7 w-7">
        //                     <path
        //                         fill-rule="evenodd"
        //                         d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
        //                         clip-rule="evenodd" />
        //                 </svg>
        //             </span>
        //         </button>
        //         <div
        //             class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        //             id="navbarSupportedContent4"
        //             data-te-collapse-item>
        //             <a class="pr-2 text-xl font-semibold text-white" href="#">Navbar</a>
        //             {/* <!-- Left links --> */}
        //             <ul
        //                 class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
        //                 data-te-navbar-nav-ref>
        //                 <li class="p-2" data-te-nav-item-ref>
        //                     <a
        //                         class="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        //                         href="#"
        //                         data-te-nav-link-ref
        //                     >Dashboard
        //                     </a>
        //                 </li>
        //                 <li class="p-2" data-te-nav-item-ref>
        //                     <a
        //                         class="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        //                         href="#"
        //                         data-te-nav-link-ref
        //                     >Team
        //                     </a>
        //                 </li>
        //                 <li class="p-2" data-te-nav-item-ref>
        //                     <a
        //                         class="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        //                         href="#"
        //                         data-te-nav-link-ref
        //                     >Projects
        //                     </a>
        //                 </li>
        //                 <li class="relative" data-te-dropdown-ref>
        //                     <button
        //                         class="flex items-center whitespace-nowrap rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
        //                         type="button"
        //                         id="dropdownMenuButton3"
        //                         data-te-dropdown-toggle-ref
        //                         aria-expanded="false"
        //                         data-te-ripple-init
        //                         data-te-ripple-color="light">
        //                         Primary
        //                         <span class="ml-2 w-2">
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 viewBox="0 0 20 20"
        //                                 fill="currentColor"
        //                                 class="h-5 w-5">
        //                                 <path
        //                                     fill-rule="evenodd"
        //                                     d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        //                                     clip-rule="evenodd" />
        //                             </svg>
        //                         </span>
        //                     </button>
        //                     <ul
        //                         class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        //                         aria-labelledby="dropdownMenuButton3"
        //                         data-te-dropdown-menu-ref>
        //                         <li>
        //                             <a
        //                                 class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        //                                 href="#"
        //                                 data-te-dropdown-item-ref
        //                             >Action</a
        //                             >
        //                         </li>
        //                         <li>
        //                             <a
        //                                 class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        //                                 href="#"
        //                                 data-te-dropdown-item-ref
        //                             >Another action</a
        //                             >
        //                         </li>
        //                         <li>
        //                             <a
        //                                 class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        //                                 href="#"
        //                                 data-te-dropdown-item-ref
        //                             >Something else here</a
        //                             >
        //                         </li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //             {/* <!-- Left links --> */}
        //         </div>
        //         {/* <!-- Collapsible wrapper --> */}

        //         {/* <!-- Right elements --> */}
        //         <div class="relative flex items-center">
        //             {/* <!-- Icon --> */}
        //             <a
        //                 class="mr-4 text-white opacity-60 hover:opacity-80 focus:opacity-80"
        //                 href="#">
        //                 <span class="[&>svg]:w-5">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         viewBox="0 0 24 24"
        //                         fill="currentColor"
        //                         class="h-5 w-5">
        //                         <path
        //                             d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        //                     </svg>
        //                 </span>
        //             </a>
        //             <div class="relative" data-te-dropdown-ref>
        //                 <a
        //                     class="hidden-arrow mr-4 flex items-center text-white opacity-60 hover:opacity-80 focus:opacity-80"
        //                     href="#"
        //                     id="dropdownMenuButton1"
        //                     role="button"
        //                     data-te-dropdown-toggle-ref
        //                     aria-expanded="false">
        //                     <span class="[&>svg]:w-5">
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             viewBox="0 0 24 24"
        //                             fill="currentColor"
        //                             class="h-5 w-5">
        //                             <path
        //                                 fill-rule="evenodd"
        //                                 d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
        //                                 clip-rule="evenodd" />
        //                         </svg>
        //                     </span>
        //                     <span
        //                         class="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white"
        //                     >1
        //                     </span>
        //                 </a>
        //                 <ul
        //                     class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        //                     aria-labelledby="dropdownMenuButton1"
        //                     data-te-dropdown-menu-ref>
        //                     <li>
        //                         <a
        //                             class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        //                             href="#"
        //                             data-te-dropdown-item-ref
        //                         >Action
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a
        //                             class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        //                             href="#"
        //                             data-te-dropdown-item-ref
        //                         >Another action</a
        //                         >
        //                     </li>
        //                     <li>
        //                         <a
        //                             class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        //                             href="#"
        //                             data-te-dropdown-item-ref
        //                         >Something else here
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div class="relative" data-te-dropdown-ref>
        //                 <a
        //                     class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
        //                     href="#"
        //                     id="dropdownMenuButton2"
        //                     role="button"
        //                     data-te-dropdown-toggle-ref
        //                     aria-expanded="false">
        //                     <img
        //                         src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
        //                         class="rounded-full"
        //                         style={{ height: "25px", width: "25px" }}
        //                         alt=""
        //                         loading="lazy" />
        //                 </a>
        //                 <ul
        //                     class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        //                     aria-labelledby="dropdownMenuButton2"
        //                     data-te-dropdown-menu-ref>
        //                     <li>
        //                         <a
        //                             class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        //                             href="#"
        //                             data-te-dropdown-item-ref
        //                         >Action
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a
        //                             class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        //                             href="#"
        //                             data-te-dropdown-item-ref
        //                         >Another action
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a
        //                             class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        //                             href="#"
        //                             data-te-dropdown-item-ref
        //                         >Something else here
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //         {/* <!-- Right elements --> */}
        //     </div>
        // </nav>

    )
}

export default AppBar