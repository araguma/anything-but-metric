import { NotMetric, Prefix, Unit } from '@/types'

export const units = ['meter'] as const

export const prefixes = [
    'quetta',
    'ronna',
    'yotta',
    'zetta',
    'exa',
    'peta',
    'tera',
    'giga',
    'mega',
    'kilo',
    'hecto',
    'deca',
    'none',
    'deci',
    'centi',
    'milli',
    'micro',
    'nano',
    'pico',
    'femto',
    'atto',
    'zepto',
    'yocto',
    'ronto',
    'quecto',
] as const

export const prefixMap: Record<Prefix, bigint | number> = {
    quetta: 1000000000000000000000000000000n,
    ronna: 1000000000000000000000000000n,
    yotta: 1000000000000000000000000n,
    zetta: 1000000000000000000000n,
    exa: 1000000000000000000n,
    peta: 1000000000000000,
    tera: 1000000000000,
    giga: 1000000000,
    mega: 1000000,
    kilo: 1000,
    hecto: 100,
    deca: 10,
    none: 1,
    deci: 0.1,
    centi: 0.01,
    milli: 0.001,
    micro: 0.000001,
    nano: 0.000000001,
    pico: 0.000000000001,
    femto: 0.000000000000001,
    atto: 0.000000000000000001,
    zepto: 0.000000000000000000001,
    yocto: 0.000000000000000000000001,
    ronto: 0.000000000000000000000000001,
    quecto: 0.000000000000000000000000000001,
}

export const unitMap: Record<Unit, NotMetric[]> = {
    meter: [
        {
            singular: 'Standard Drawer',
            plural: 'Standard Drawers',
            value: 0.65,
        },
        {
            singular: 'ROG Zephyrus M15 GU502LW_GU502LW',
            plural: 'ROG Zephyrus M15 GU502LW_GU502LW side by side',
            value: 0.358,
        },
        {
            singular: 'Tidepod Container',
            plural: 'Tidepod Containers',
            value: 0.22,
        },
        {
            singular: 'OnePlus 7T',
            plural: 'OnePlus 7Ts',
            value: 0.16,
        },
        {
            singular: 'Opened Balisong',
            plural: 'Opened Balisongs',
            value: 0.25,
        },
        {
            singular: 'Raw Barilla Spaghetti',
            plural: 'Raw Barilla Spaghettis',
            value: 0.25,
        },
        {
            singular: 'Lipton Tea Box (104 ct)',
            plural: 'Lipton Tea Boxes (104 ct)',
            value: 0.2,
        },
        {
            singular: 'Inch',
            plural: 'Inches',
            value: 0.0254,
        },
        {
            singular: 'Mini Fridge',
            plural: 'Mini Fridges',
            value: 0.47,
        },
    ],
}
