import BigNumber from 'bignumber.js'

import { prefixMap, unitMap } from '@/data/conversions'
import { Prefix, Unit } from '@/types'

export default function convert(
    value: number,
    prefix: Prefix,
    unit: Unit,
    index: number,
) {
    return new BigNumber(value)
        .multipliedBy(prefixMap[prefix].toString())
        .dividedBy(unitMap[unit][index]?.value ?? 0)
}
