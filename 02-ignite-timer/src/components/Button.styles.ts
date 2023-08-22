import styled, { css } from "styled-components";
import { ButtonVariants } from "./Button";

interface ButtonContainerProps {
    variant: ButtonVariants;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
`;
