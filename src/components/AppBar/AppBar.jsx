import {PageNavigation} from '../PageNavigation/PageNavigation';
import {UserMenu} from '../UserMenu/UserMenu';
import {AuthNav} from '../AuthNav/AuthNav';
import {AppBarStyle} from './AppBarStyle.styled'
import { useAuth } from 'hooks/useAuth';


export const AppBar =()=>{
    const {isLoggedIn} = useAuth();
    return <AppBarStyle>
    <PageNavigation/>
    {isLoggedIn ?<UserMenu/> :<AuthNav/>
    }
    
    </AppBarStyle>
}