import { AnyObject } from '@recon-struct/utility-types'
import { ClassValue } from 'clsx'

export type DsProps<A extends AnyObject> = Omit<A, 'class' | 'classList'> & {
  class?: ClassValue
}