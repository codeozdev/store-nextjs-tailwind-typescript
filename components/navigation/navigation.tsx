import PaddingContainer from '../layout/padding-container'
import NavigationItem from './navigation-item'

export default function Navigation() {
    return (
        <PaddingContainer>
            <nav className='mt-7 flex items-center gap-2 md:gap-5 font-medium text-sm'>
                <NavigationItem title='All' param='fetchAll' />
                <NavigationItem title='Kadın' param='fetchKadin' />
                <NavigationItem title='Erkek' param='fetchErkek' />
                <NavigationItem title='Takı' param='fetchTaki' />
                <NavigationItem title='Elektironik' param='fetchElektironik' />
            </nav>
        </PaddingContainer>
    )
}
