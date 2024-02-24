import cx from '@/libs/variance'

export type InputProps = React.JSX.IntrinsicElements['div'] &
    (
        | {
              label: string
              type: 'text'
              value: string
              setValue: (value: string) => void
          }
        | {
              label: string
              type: 'number'
              value: number
              setValue: (value: number) => void
          }
    ) & {
        label: string
    }

export default function Input({
    label,
    type,
    value,
    setValue,
    className,
    ...props
}: InputProps) {
    return (
        <div {...props} className={cx('flex flex-col gap-2', className)}>
            <span>{label}</span>
            <input
                className="rounded border border-press-3 bg-press-1 p-2"
                type={type}
                value={value}
                onChange={(event) => {
                    switch (type) {
                        case 'text':
                            setValue(event.target.value)
                            break
                        case 'number':
                            setValue(Number(event.target.value))
                            break
                    }
                }}
            />
        </div>
    )
}
