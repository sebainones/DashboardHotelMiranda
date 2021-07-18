import styled, { css } from "styled-components"

const StatButton = styled.button`
    border-radius: 12px;
    width: 125px;
    height: 48px;
    border: none;
    text-align: center;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;


    ${props => props.compo === "roomsAvailable" && css`
        background: #5AD07A 0% 0% no-repeat padding-box;
    `}
    ${props => props.compo === "roomsBooked" && css`
        background: #E23428 0% 0% no-repeat padding-box;
    `}
    ${props => props.compo === "roomsNew" && css`
        width: 213px;
        height: 49px;
        background: #135846 0% 0% no-repeat padding-box;
        border-radius: 12px;
    `}
    ${props => props.compo === "conciergeActive" && css`
        background: #E8FFEE 0% 0% no-repeat padding-box;
        color: #5AD07A;
    `}
    ${props => props.compo === "conciergeInactive" && css`
        background: #FFEDEC 0% 0% no-repeat padding-box;
        color: #E23428;
    `}
`
function StatusButton(props) {


    return (
        <>
            <StatButton compo={props.compo + props.buttonName} data-testid="button-element">{props.buttonName}</StatButton>
        </>
    )
}

export { StatusButton }