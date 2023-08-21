import Image from 'next/image'
import SearchBar from './searchbar'
import PaddingContainer from '../layout/padding-container'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'

export default function LogoLogin() {
    return (
        <PaddingContainer>
            <div className='flex items-center justify-between mt-10'>
                <div className='relative w-8 h-8 md:w-14 md:h-14'>
                    <Link href='/'>
                        <Image src='/logo.png' fill alt='logo' />
                    </Link>
                </div>
                <SearchBar />
                <ul className='flex items-center gap-2 md:gap-8'>
                    <li>
                        <Link
                            href='/giris'
                            className='flex items-center gap-2  hover:text-red-600'>
                            <AiOutlineUser />
                            <p className='text-sm font-medium hidden md:block'>
                                Giriş Yap
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/favorilerim'
                            className='flex items-center gap-2  hover:text-red-600'>
                            <AiOutlineHeart />
                            <p className='text-sm font-medium hidden md:block'>
                                Favorilerim
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/sepetim'
                            className='flex items-center gap-2  hover:text-red-600'>
                            <SlBasket />
                            <p className='text-sm font-medium hidden md:block'>
                                Sepetim
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </PaddingContainer>
    )
}
