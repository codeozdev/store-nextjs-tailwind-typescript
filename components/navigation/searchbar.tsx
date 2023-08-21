import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar() {
    return (
        <div className='relative flex justify-center items-center bg-gray-200 rounded-md md:py-2'>
            <input
                type='text'
                className=' max-w-[200px] md:max-w-[800px] md:w-[700px] bg-transparent outline-none pl-2 placeholder:text-xs md:placeholder:text-base'
                placeholder='Aradığınız ürünü yazınız...'
            />
            <AiOutlineSearch className='absolute right-3' size={18} />
        </div>
    )
}
