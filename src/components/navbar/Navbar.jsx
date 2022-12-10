import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LevandLogo from "../../assets/maint.png";
import { AppContextProv } from '../../context/AppContext';
import { GrLanguage } from 'react-icons/gr';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

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



const Navbar = () => {
    const currentLanguageCode = cookies.get('i18next') || 'tr';
    const currentLanguage = languages.find(l => l.code === currentLanguageCode)
    const navigate = useNavigate()
    const { theme, setTheme } = useContext(AppContextProv);
    const { t } = useTranslation()

    // console.log(currentLanguageCode)
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
        // console.log(currentLanguage);
    }, [currentLanguage])

    return (
        <div className="navbar bg-base-200 border rounded-3xl border-red-200  w-10/12 mx-auto my-1">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => navigate("/")}><a>{t('main_page')}</a></li>
                        <li onClick={() => navigate("/about")}><a>{t('about_us')}</a></li>
                        <li onClick={() => navigate("/contact")}><a>{t('contact_us')}</a></li>
                        {/* <li tabIndex={0}>
                            <a className="justify-between">
                                Products
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Kuru Meyvalar</a></li>
                                <li><a>Kuruyemişler 2</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-xl" onClick={() => navigate("/")}>Levand Gıda  <img src={LevandLogo} alt="levand-logo" width={30} className='ml-1 md:hidden' /></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li onClick={() => navigate("/")}><a>{t('main_page')}</a></li>
                    <li onClick={() => navigate("/about")}><a>{t('about_us')}</a></li>
                    <li onClick={() => navigate("/contact")}><a>{t('contact_us')}</a></li>
                    {/* <li tabIndex={0}>
                        <a>
                            Products
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Kuru Meyvalar</a></li>
                            <li><a>Kuruyemişler</a></li>
                        </ul>
                    </li> */}

                </ul>
            </div>
            <div className="navbar-end" >
                {/* <form className='w-2 max-w-xs mr-28' >
                    <select className="select select-ghost " onChange={(e) => setTheme(e.target.value)}>
                        <option disabled selected>Theme</option>
                        <option value={'dark'}>dark</option>
                        <option value={'light'}>light</option>
                    </select>
                </form> */}

                <div className="dropdown dropdown-end mr-4" title='Dil Seçenekleri'>
                    <label tabIndex={0} className="btn btn-ghost rounded-full"><GrLanguage /> <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                    </svg></label>
                    <ul tabIndex={0} className="menu dropdown-content shadow bg-base-100 rounded-box w-40 mt-4">
                        {languages?.map(({ code, name, country_code }) => (
                            <li key={country_code}>
                                <button
                                    className='btn btn-ghost'
                                    onClick={() => i18next.changeLanguage(code)}
                                    disabled={code === currentLanguageCode}
                                >
                                    <span className={`flag-icon flag-icon-${country_code} ${currentLanguageCode === code && 'opacity-50'}`}></span>
                                    {name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div onClick={() => navigate("/")}>
                    <img src={LevandLogo} alt="levand-logo" width={50} className="cursor-pointer hover:scale-110 xs:hidden md:inline-block" />
                </div>
            </div>
        </div>
    )
}

export default Navbar