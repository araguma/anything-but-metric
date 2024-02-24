import Button, { ButtonProps } from '@/components/button'
import Icon from '@/components/icon'
import { Optional } from '@/types'

export type SourceButtonProps = Optional<ButtonProps, 'variant'>

const sourceUrl = 'https://github.com/araguma/anything-but-metric'

export default function Source({ ...props }: SourceButtonProps) {
    function openSource() {
        window.open(sourceUrl, '_blank', 'noreferrer')
    }

    return (
        <Button variant="icon" onClick={openSource} {...props}>
            <Icon icon="github" />
        </Button>
    )
}
