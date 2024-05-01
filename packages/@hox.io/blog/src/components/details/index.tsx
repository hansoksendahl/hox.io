import { JSX, splitProps } from "solid-js";
import { details, summary } from './index.module.css'
import clsx, { ClassValue } from "clsx";

interface DetailsProps extends Omit<JSX.HTMLAttributes<HTMLDetailsElement>, 'class'> {
  class?: ClassValue,
  summary: JSX.Element,
  children: JSX.Element,
  isOpen?: boolean
}

const Details = (props: DetailsProps) => {
  const [local, others] = splitProps(props, ['summary', 'children', 'class', 'isOpen'])

  return (
    <details {...others} class={clsx(details, local.class)} open={local.isOpen}>
      <summary class={summary}>{local.summary}</summary>
      {local.children}
    </details>
  )
}

export default Details