import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    
    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4'
    },

    variants: {
        variant: {
            primary: {
                color: '$white',
                background: '$ignite500',
            },
        },
    },
    defaultVariants: {
        variant: 'primary'
    }

})

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
}