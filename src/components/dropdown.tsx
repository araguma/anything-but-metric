'use client'

import { useEffect, useRef, useState } from 'react'

import Icon from '@/components/icon'

export type DropdownProps<T extends string> =
    React.JSX.IntrinsicElements['div'] & {
        label: string
        values: readonly T[] | T[]
        value: T
        setValue: (value: T) => void
    }

export default function Dropdown<T extends string>({
    label,
    values,
    value,
    setValue,
    ...props
}: DropdownProps<T>) {
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    function handleClick(event: MouseEvent) {
        if (dropdownRef.current?.contains(event.target as Node)) return
        setOpen(false)
    }

    return (
        <div ref={dropdownRef} {...props}>
            <div className="flex flex-col gap-2">
                <span>{label}</span>
                <div
                    onClick={() => {
                        setOpen(true)
                    }}
                    className="flex cursor-pointer items-center gap-2 rounded border border-press-3 px-4 py-2"
                >
                    {value}
                    <Icon icon={open ? 'chevron-down' : 'chevron-up'} />
                </div>
            </div>
            {open && (
                <div className="absolute mt-2 flex max-w-96 flex-wrap rounded border border-press-3 bg-press-1">
                    {values.map((value) => {
                        return (
                            <div
                                className="flex-1 cursor-pointer px-4 py-2 text-center hover:bg-press-3"
                                key={value}
                                onClick={() => {
                                    setValue(value)
                                    setOpen(false)
                                }}
                            >
                                {value}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
