import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Timer, Scroll } from 'phosphor-react'
export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} />
            <nav>
                <NavLink to="/" title='Timer'>
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title='Histórico'>
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}