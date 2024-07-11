import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const inputVariants = tv({
  base: 'text-lg w-40 outline-none flex-1',
  variants: {
    variant: {
      primary: 'bg-transparent placeholder-zinc-400',
      secondary: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {}

export function Input({ variant, ...props }: InputProps) {
  return <input {...props} className={inputVariants({ variant })} />
}
