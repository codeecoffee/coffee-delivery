import styled from "styled-components";
import {transparentize} from 'polished'

export const Container = styled.header`

    padding: 2rem 10rem;

`
export const Content = styled.div`
    width: 100%;
    max-width: 1120px;
    padding: 0 1.5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SideContent = styled.div`
    display: flex;
    gap: 12px;
`

export const CartBttn = styled.button`
    padding: 0.5rem;
    background: ${(props)=> transparentize(.6,props.theme["yellow-light"])};
    width: 38px;
    height: 38px;
    border-radius: 6px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LocationMark = styled.div`
    width: 143px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .25rem;
    background: white;
    border-radius: 6px;
    padding: 8px;
    background: ${(props)=> transparentize(.6, props.theme["purple-light"])};

    span{
        display: inline-block;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: ${(props)=> props.theme["purple-dark"]};
    }

`
