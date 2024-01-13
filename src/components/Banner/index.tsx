import { Container, Content, ServicesContainer, TextContainer } from "./styles"
import CoffeeImg from "../../assets/mainImg.svg"
import cartIcon from "../../assets/cartIcon.svg"
import coffeeIcon from "../../assets/coffeeIcon.svg"
import packageIcon from "../../assets/packageIcon.svg"
import timeIcon from "../../assets/timeIcon.svg"

export function Banner(){
    return(
        <Container>
            <Content>
                <TextContainer>
                    <h1>Find the best coffee for any time of the day</h1>
                    <h4>Using Coffee Delivery you get your coffee anywhere, anytime</h4>
                    <ServicesContainer>
                        <div>
                            <img src={cartIcon} alt="" />
                            <p>Buy it simply and safely</p>
                        </div>
                        <div>
                            <img src={packageIcon} alt="" />
                            <p>Package keeps coffee warm</p>
                        </div>
                        <div>
                            <img src={timeIcon} alt="" />
                            <p>Quick and tracked Delivery</p>
                        </div>
                        <div>
                            <img src={coffeeIcon} alt="" />
                            <p>Enjoy a fresh cup of coffee</p>
                        </div>
                    </ServicesContainer>
                </TextContainer>
                <img src={CoffeeImg} alt="" />
            </Content>

        </Container>
    )
}