import { Fragment } from 'react'
import { Link } from "react-scroll"
import { Menu, Popover, Transition } from '@headlessui/react'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline'
import "../../i18n"
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

const changeLang = (ln: any) => {
    return () => {
        i18n.changeLanguage(ln);
    };
};

export default function Navbar() {
    const { t } = useTranslation();

    return (
        <div className="fixed z-50 w-full">
            <Popover className="relative z-10 bg-tertiaryBg">
                {({ open }) => (
                    <div className="">
                        <div className="px-4  mx-auto max-w-7xl sm:px-6">
                            <div className="flex items-center justify-between py-3 border-b-2 md:justify-start md:space-x-8">
                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                    <Link to='/' className="w-auto text-5xl text-white no-underline cursor-pointer font-dancingScript">ExploreM</Link>
                                </div>
                                <div className="-my-2 -mr-2 md:hidden">
                                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-tertiaryBg rounded-md hover:text-gray-500 hover:bg-tertiaryBg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-800">
                                        <span className="sr-only">Open menu</span>
                                        <MenuAlt3Icon className="h-7 w-7 focus:outline-none" aria-hidden="true" />
                                    </Popover.Button>
                                </div>

                                <Popover.Group as="nav" className="hidden md:flex md:space-x-0 lg:space-x-3">

                                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-150} duration={250} className="px-3 py-2 mx-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-blue-800 hover:text-white cursor-pointer">{t('navLinkHome')}</Link>

                                    <Link activeClass="active" to="details" spy={true} smooth={true} offset={-150} duration={250} className="px-3 py-2 mx-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-blue-800 hover:text-white cursor-pointer">{t('navLinkDetails')}</Link>

                                    <Link activeClass="active" to="rover" spy={true} smooth={true} offset={-150} duration={250} className="px-3 py-2 mx-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-blue-800 hover:text-white cursor-pointer">{t('navLinkRover')}</Link>

                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="my-1 inline-flex justify-center w-full p-2 text-sm font-medium leading-5 text-blue-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md font-sourceSerifPro hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-tertiaryBg">
                                                {t('navChangeLang')}
                                                <svg
                                                    className="w-5 h-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items static className="origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-white ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none font-sourceSerifPro">

                                                <Menu.Item>
                                                    <div className="w-full px-14 py-3 text-sm cursor-pointer" onClick={changeLang("en")} >
                                                        English
                                                    </div>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <div className="w-full px-16 py-3 text-sm cursor-pointer" onClick={changeLang("hi")} >
                                                        ???????????????
                                                    </div>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <div className="w-full px-12 py-3 text-sm cursor-pointer" onClick={changeLang("de")} >
                                                        Deutsche
                                                    </div>
                                                </Menu.Item>

                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                </Popover.Group>

                                {/* </div> */}
                            </div>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                static
                                className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                            >
                                <div className="bg-blue-600 divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                                    <div className="px-5 pt-3 pb-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                                    <Link to='/' className="w-auto h-8 text-5xl text-white no-underline font-dancingScript">ExploreM</Link>
                                                </div>
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-tertiaryBg rounded-md hover:text-gray-500 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-800">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="w-6 h-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid text-white font-sourceSerifPro gap-y-8">
                                                {t('navSiteDetail')}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="px-5 py-6 space-y-6">

                                        <div className="grid place-items-center">

                                            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-150} duration={250} className="px-3 py-2 mx-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-blue-800 hover:text-white cursor-pointer">{t('navLinkHome')}</Link>

                                            <Link activeClass="active" to="details" spy={true} smooth={true} offset={-150} duration={250} className="px-3 py-2 mx-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-blue-800 hover:text-white cursor-pointer">{t('navLinkDetails')}</Link>

                                            <Link activeClass="active" to="rover" spy={true} smooth={true} offset={-150} duration={250} className="px-3 py-2 mx-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-blue-800 hover:text-white cursor-pointer">{t('navLinkRover')}</Link>
                                        </div>

                                        <div className="grid justify-center">
                                            <div className="inline-flex w-64 h-1 bg-indigo-800 rounded-full"></div>
                                        </div>

                                        <div className="pl-3 text-xl text-gray-300 font-sourceSerifPro hover:bg-blue-800">{t('navChangeLang')}:</div>

                                        <div className="grid grid-cols-3 pl-5 gap-y-4 gap-x-4">

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("en")}>
                                                English
                                            </div>

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("hi")}>
                                                ???????????????
                                            </div>

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("de")}>
                                                Deutsche
                                            </div>

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("ru")}>
                                                ??????????????
                                            </div>

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("fr")}>
                                                fran??ais
                                            </div>

                                            <div className="text-base font-medium text-gray-300 font-sourceSerifPro hover:text-gray-200" onClick={changeLang("ja")}>
                                                ??????
                                            </div>

                                        </div>

                                        <div className="grid justify-center">
                                            <div className="inline-flex w-64 h-1 bg-indigo-800 rounded-full"></div>
                                        </div>

                                    </div>

                                </div>
                            </Popover.Panel>
                        </Transition>
                    </div>
                )}
            </Popover>
        </div>
    )
}
