// import { t } from 'i18next'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {
    const { t } = useTranslation()

    useEffect(() => {
        document.title = t('contact_us') + " - Levand Gıda Ltd."
    }, [t('contact_us')])
    return (
        <section className="flex justify-center items-center -mt-[4.75rem] h-[calc(100vh+10rem)] bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">

            <article className='flex xs:flex-col md:flex-row justify-center items-center w-11/12 gap-3'>
                <div className="grow-0 shrink-0 basis-auto w-11/12 p-12 lg:w-6/12 bg-white h-96 rounded-lg">
                    <h1 className='text-2xl mb-4'>Levand Gıda Ltd.</h1>
                    <p><span><strong><em>{t("adres")}:</em></strong></span> Kocatepe Mah. Yemişmeydanı Sok. No:1/427 Bayrampaşa - İstanbul / Türkiye 34045</p>
                    <div className='mt-4'>
                        <span> <strong><em>{t("contact_us")} :</em></strong></span>
                        <p> <span><em>{t("telephoneNo")} :</em></span> +90 (212) 260 - 0015</p>
                        <p> <span><em>{t("faxNo")} :</em></span> +90 (212) 227 - 0015</p>
                        <p> <span><em>{t("E-mail")} :</em></span> hm@levand.com.tr</p>
                    </div>
                </div>
                <div className="grow-0 shrink-0 basis-auto block w-11/12 lg:flex lg:w-6/12 rounded-lg">
                    <div className="map-container-2 w-full rounded-lg h-96">
                        <iframe title='Levand Gıda' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.7984062058194!2d28.8887037764825!3d41.05153741675941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab77556ee6215%3A0x87ea14cfbfb7357c!2sLevand%20G%C4%B1da%20Elektronik%20Hizmetler%20ve%20Ticaret%20Limited%20%C5%9Eirketi!5e0!3m2!1str!2str!4v1667979464166!5m2!1str!2str" className="left-0 top-0 h-full w-full rounded-lg" allowFullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </article>



        </section>
    )
}

export default ContactUs