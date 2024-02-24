import { VariantProps } from 'class-variance-authority'

import { prefixes, units } from '@/data/conversions'

export type Optional<T, K extends keyof T> = Omit<T, K> & Pick<Partial<T>, K>

export type RequiredVariantsProps<
    T extends VariantPropsComponent<VariantProps<T>>,
    R extends keyof VariantProps<T>,
> = Omit<VariantProps<T>, R> & Required<Pick<VariantProps<T>, R>>
export type VariantPropsComponent<T> =
    T extends VariantProps<infer U> ? U : never

export type Prefix = (typeof prefixes)[number]
export type Unit = (typeof units)[number]
export type NotMetric = {
    singular: string
    plural: string
    value: number
}
