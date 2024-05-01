import { Link as KLink } from '@kobalte/core'
import { LinkRootProps } from '@kobalte/core/dist/types/link'
import clsx, { ClassValue } from 'clsx'
import { splitProps } from 'solid-js'
import { DsProps } from '../types'
import { link } from './index.module.css'

interface LinkProps extends Omit<DsProps<LinkRootProps>, 'class'> {
  class?: ClassValue
}

const Link = (props: LinkProps) => {
  const [local, others] = splitProps(props, ['class'])

  return <KLink.Root class={clsx(link, props.class)} {...others} />
}

export default Link
