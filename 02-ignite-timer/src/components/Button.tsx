import { ButtonContainer } from "./Button.styles";

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonProps {
    variant?: ButtonVariants;
    children: string;
}

export function Button({ variant = 'primary' }: ButtonProps) {
    return (
        <ButtonContainer variant={variant} >teste</ButtonContainer>
    )
}