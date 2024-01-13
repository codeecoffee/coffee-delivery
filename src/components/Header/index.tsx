import { CartBttn, Container, Content, LocationMark, SideContent } from "./styles";
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { defaultColors } from "../../styles/themes/default";

export function Header (){

    return (

        <Container>
            <Content>
                <img src={Logo} alt="logo " />
                <SideContent>
                    <LocationMark>
                        
                        <MapPin size={22} color={defaultColors["purple"]}/>
                        <span>Los Angeles, CA</span>
                    </LocationMark>
                    <CartBttn>
                        <ShoppingCart 
                            size={22} 
                            color={defaultColors["yellow-dark"]}
                            weight="fill"
                        />
                    </CartBttn>
                </SideContent>
            </Content>

        </Container>
    )
}