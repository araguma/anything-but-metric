'use client'

import { parseAsInteger, parseAsStringLiteral, useQueryState } from 'nuqs'
import { useEffect } from 'react'

import Dropdown from '@/components/dropdown'
import Header from '@/components/header'
import Icon from '@/components/icon'
import Input from '@/components/input'
import Result from '@/components/result'
import { prefixes, unitMap, units } from '@/data/conversions'
import convert from '@/libs/convert'
import { Prefix, Unit } from '@/types'

export default function Home() {
    const [value, setValue] = useQueryState(
        'value',
        parseAsInteger.withDefault(0),
    )
    const [prefix, setPrefix] = useQueryState(
        'prefix',
        parseAsStringLiteral(prefixes).withDefault('none'),
    )
    const [unit, setUnit] = useQueryState(
        'unit',
        parseAsStringLiteral(units).withDefault('meter'),
    )
    const [index, setIndex] = useQueryState(
        'index',
        parseAsInteger.withDefault(0),
    )

    useEffect(randomize, [unit])

    function randomize() {
        void setIndex(Math.floor(Math.random() * unitMap[unit].length))
    }

    return (
        <div className="flex h-full p-8 portrait:flex-col portrait:gap-8">
            <Header />
            <div className="grid flex-1 place-items-center portrait:pt-32 landscape:pl-32">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <span className="text-6xl font-bold">
                            Anything but Metric
                        </span>
                        <span className="text-2xl text-press-7">
                            Welcome to a World of Inaccuracy
                        </span>
                    </div>
                    <div className="flex flex-wrap items-end gap-4">
                        <Input
                            label="Value"
                            type="number"
                            value={value}
                            setValue={(value: number) => {
                                void setValue(value)
                            }}
                        />
                        <Dropdown
                            label="Prefix"
                            values={prefixes}
                            value={prefix}
                            setValue={(prefix: Prefix) => {
                                void setPrefix(prefix)
                            }}
                        />
                        <Dropdown
                            label="Unit"
                            values={units}
                            value={unit}
                            setValue={(unit: Unit) => {
                                void setUnit(unit)
                            }}
                        />
                        <button
                            className="grid place-items-center rounded border border-press-3 p-3 hover:bg-press-3"
                            onClick={randomize}
                        >
                            <Icon icon="shuffle" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid flex-1 place-items-center portrait:pb-32 landscape:pr-32">
                {(() => {
                    const result = convert(
                        value,
                        prefix,
                        unit,
                        index,
                    ).toFormat()
                    return (
                        <Result
                            value={result}
                            unit={
                                unitMap[unit][index]?.[
                                    result === '1' ? 'singular' : 'plural'
                                ] ?? ''
                            }
                        />
                    )
                })()}
            </div>
        </div>
    )
}
