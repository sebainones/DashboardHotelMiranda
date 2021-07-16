import styled, { css } from "styled-components"

const OrderSelect = styled.select`
    width: 134px;
    height: 48px;
    border: 1px solid #135846;
    border-radius: 12px;
    text-align-last: left;
    padding-left: 30px;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #135846;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image:
        linear-gradient(45deg, transparent 50%, #135846 50%),
        linear-gradient(135deg, #135846 50%, transparent 50%),
        linear-gradient(to right, #135846, #135846);
    background-position:
        calc(100% - 20px) center,
        calc(100% - 15px) center,
        calc(100% - 2.5em) center;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;

    &:focus{
        outline: none;
    }

    ${props => props.compo === "roomsAvailable" && css`
        background: #5AD07A 0% 0% no-repeat padding-box;
    `}

`
function OrderBy(props) {
console.log(props.options);

    return (
        <>
            <OrderSelect >
                <option hidden>Newest</option>
                {props.options.map((element, index) => 
                    <option key={index}>{element}</option>
                )}
            </OrderSelect>
        </>
    )
}

export { OrderBy }