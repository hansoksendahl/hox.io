import clsx, { ClassValue } from 'clsx'
import { JSX, mergeProps } from 'solid-js'
import { icon } from './icon.module.css'

export interface InternalIconProps {
  title?: string
  viewBox?: string
  children: JSX.Element
  class?: ClassValue
}

export type IconProps = Omit<InternalIconProps, 'children'>

const DEFAULT_PROPS: Partial<InternalIconProps> = {
  title: 'Icon',
  viewBox: '0 0 24 24',
}

const Icon = (incomingProps: InternalIconProps) => {
  const props = mergeProps(DEFAULT_PROPS, incomingProps)

  return (
    <svg
      role='img'
      viewBox={props.viewBox}
      xmlns='http://www.w3.org/2000/svg'
      class={clsx(icon, props.class)}
    >
      <title>{props.title}</title>
      {props.children}
    </svg>
  )
}

export default Icon
