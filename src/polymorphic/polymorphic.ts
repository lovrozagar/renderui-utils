import { Slot } from '@radix-ui/react-slot'
import React from 'react'

type PolymorphicComponent<T extends keyof React.JSX.IntrinsicElements> = {
  (props: React.ComponentPropsWithRef<T>, ref: React.ElementRef<T>): React.ReactElement | null
}

function polymorphic<T extends keyof React.JSX.IntrinsicElements>(
  isAsChild: boolean | undefined,
  defaultElement: T,
) {
  return (isAsChild ? Slot : defaultElement) as PolymorphicComponent<T>
}

export { polymorphic }
