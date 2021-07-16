import styled, { css } from "styled-components"
import { useHistory } from "react-router-dom";

const NewButton = styled.button`
    width: 213px;
    height: 49px;
    border-radius: 12px;
    border: none;
    text-align: center;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-right: 20px;
    background: #135846 0% 0% no-repeat padding-box;
    border-radius: 12px;


`
function NewDataButton(props) {
    let history = useHistory()

    const clickedButton = () => {
        if (props.compo === "concierge") {
            history.push("/newEmployee")
        } else {
            history.push("/newRoom")
        }
    }

    return (
        <>
            <NewButton data-testid="button-element" onClick={clickedButton}>{props.value}</NewButton>
        </>
    )
}

export { NewDataButton }