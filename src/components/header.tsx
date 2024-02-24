import Share from '@/components/share'
import Source from '@/components/source'
import Theme from '@/components/theme'

export default function Header() {
    return (
        <div className="absolute right-6 top-6 z-10 flex items-center gap-4">
            <Share />
            <Theme />
            <Source />
        </div>
    )
}
