import cx from '@/libs/variance'

export type ResultProps = React.JSX.IntrinsicElements['div'] & {
    value: string
    unit: string
}

export default function Result({
    value,
    unit,
    className,
    ...props
}: ResultProps) {
    return (
        <div {...props} className={cx('flex items-center gap-8', className)}>
            <span className="text-8xl font-bold">=</span>
            <div className="flex flex-col gap-4">
                <span className="break-all text-8xl font-bold">{value}</span>
                <span className="text-3xl font-bold">{unit}</span>
            </div>
        </div>
    )
}
