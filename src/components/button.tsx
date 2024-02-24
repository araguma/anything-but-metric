import { cva } from 'class-variance-authority'
import React from 'react'

import cx from '@/libs/variance'
import { RequiredVariantsProps } from '@/types'

export type ButtonProps = React.JSX.IntrinsicElements['button'] &
    RequiredVariantsProps<typeof buttonVariants, 'variant'>

const buttonVariants = cva(['rounded'], {
    variants: {
        variant: {
            icon: ['w-8 h-8 inline-grid place-items-center hover:bg-press-3'],
        },
    },
})

export default function Button({ className, ...props }: ButtonProps) {
    return (
        <button {...props} className={cx(buttonVariants(props), className)} />
    )
}
