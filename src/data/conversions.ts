import { NotMetric, Prefix, Unit } from '@/types'

export const units = ['meter', 'gram', 'second'] as const

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
            singular: 'Standard Drawer wide',
            plural: 'Standard Drawers wide',
            value: 0.65,
        },
        {
            singular: 'ROG Zephyrus M15 GU502LW_GU502LW wide',
            plural: 'ROG Zephyrus M15 GU502LW_GU502LW side by side',
            value: 0.358,
        },
        {
            singular: 'Tidepod Container wide',
            plural: 'Tidepod Containers wide',
            value: 0.22,
        },
        {
            singular: 'OnePlus 7T long',
            plural: 'OnePlus 7Ts long',
            value: 0.16,
        },
        {
            singular: 'Opened Balisong long',
            plural: 'Opened Balisongs long',
            value: 0.25,
        },
        {
            singular: 'Raw Barilla Spaghetti long',
            plural: 'Raw Barilla Spaghettis long',
            value: 0.25,
        },
        {
            singular: 'Lipton Tea Box (104 ct) wide',
            plural: 'Lipton Tea Boxes (104 ct) wide',
            value: 0.2,
        },
        {
            singular: 'Negative Inch long',
            plural: 'Negative Inches long',
            value: -0.0254,
        },
        {
            singular: 'Mini Fridge wide',
            plural: 'Mini Fridges wide',
            value: 0.47,
        },
        {
            singular: 'Banana long',
            plural: 'Bananas long',
            value: 0.18,
        },
        {
            singular: 'Adult Bengal Tiger Shark long',
            plural: 'Adult Bengal Tiger Sharks long',
            value: 4.24736,
        },
        {
            singular:
                '2024 Trump Coin Trump Commemorative Coin Keepsake Coin 47th President Coin long',
            plural: '2024 Trump Coin Trump Commemorative Coin Keepsake Coin 47th President Coins long',
            value: 0.037,
        },
        {
            singular: 'of however long this text is in VS Code',
            plural: 'of however long this text is in VS Code',
            value: 0.079375,
        },
        {
            singular: 'Carlos long',
            plural: 'Carloses long',
            value: 1.54,
        },
        {
            singular: 'Sauce long',
            plural: 'Sauces long',
            value: 0.06,
        },
        {
            singular: 'Asteroid the size of 18 walruses long',
            plural: 'Asteroids the size of 18 walruses long',
            value: 3.6,
        },
        {
            singular: 'Cow long',
            plural: 'Cows long',
            value: 2.59,
        },
    ],
    gram: [
        {
            singular: 'Adult Indian Ringneck Parakeet',
            plural: 'Adult Indian Ringneck Parakeets',
            value: 120,
        },
        {
            singular: '25-inch CRT TV',
            plural: '25-inch CRT TVs',
            value: 45000,
        },
        {
            singular: '6.5in Wooden Spoon',
            plural: '6.5in Wooden Spoons',
            value: 2.67,
        },
        {
            singular: '3.5in Floppy Disk',
            plural: '3.5in Floppy Disks',
            value: 20,
        },
        {
            singular: 'Oreo',
            plural: 'Oreos',
            value: 11.3,
        },
        {
            singular:
                'half a Rack of 3 Pairs of Dumbbell Weights weighted at 3lbs, 5lbs, and 8lbs',
            plural: 'half a Rack of 3 Pairs of Dumbbell Weights weighted at 3lbs, 5lbs, and 8lbs',
            value: 7257.48,
        },
        {
            singular: 'Waterproof Shower Speaker',
            plural: 'Waterproof Shower Speakers',
            value: 201,
        },
        {
            singular: 'of the Heaviest White Sapote',
            plural: 'of the Heaviest White Sapotes',
            value: 700,
        },
    ],
    second: [
        {
            singular: 'https://youtu.be/dQw4w9WgXcQ?si=MCTnfL-eIUFzkZ5X long',
            plural: 'https://youtu.be/dQw4w9WgXcQ?si=MCTnfL-eIUFzkZ5X long',
            value: 212,
        },
    ],
}
