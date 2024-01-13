import styled from "styled-components";
import Bg from '../../assets/Background.svg'

export const Container = styled.div`
    background-image: url(${Bg}) ;
    background-repeat: round;
    background-size: cover;
    width: 100%;
    /* max-width: 1440px; */
    /* height: 544px; */
    margin: 0 auto;
    padding: 92px 160px;


`
export const Content = styled.div`
    /* background: purple; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    /* 92 160 */
    img{
        max-width: 47600px;
        max-height: 360px;
    }

`
export const TextContainer = styled.div`
    /* max-width: 588px; */
    /* background-color: white; */

h1{
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props)=> props.theme["base-title"]};
    line-height: 4rem;
}
h4{
    font-family: Roboto, sans-serif;
    font-weight: 400;
    color: ${(props)=> props.theme["base-subtitle"]};
    margin-top: 1rem;
    line-height: 1.62rem;
}

`
export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.6rem;
    margin-top: 66px;
    max-width: 567px;

    div{
        display: flex;
        align-items: center;
        gap: .75rem;

        p{
            font-size: 1rem;
            font-family: Roboto, sans-serif;
            color: ${(props)=>props.theme["base-text"]};
        }
    }

`