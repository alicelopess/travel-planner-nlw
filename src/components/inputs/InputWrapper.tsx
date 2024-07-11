import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const inputWrapperVariants = tv({
  base: 'h-14 px-4 rounded-lg flex items-center gap-2',
  variants: {
    variant: {
      primary: 'bg-zinc-950 border border-zinc-800',
      secondary: '',
    },
    size: {
      default: '',
      full: 'flex-1',
      fixed: 'w-36',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'full',
  },
})

interface InputWrapperProps extends VariantProps<typeof inputWrapperVariants> {
  children: ReactNode
}

export function InputWrapper({ children, variant, size }: InputWrapperProps) {
  return (
    <div className={inputWrapperVariants({ variant, size })}>{children}</div>
  )
}
