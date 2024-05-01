import { AnyObject } from "@recon-struct/utility-types"
import clsx, { ClassValue } from "clsx"
import { splitProps } from "solid-js"

/**
 * Processes the props object by splitting the 'class' property from the rest of
 * the properties, and returns a new object with the 'class' property
 * transformed using the 'clsx' function.
 *
 * @param props - The props object to process.
 * @returns The processed props object.
 */
const processProps = (props: AnyObject, ...classValues: ClassValue[]) => {
  const [local, others] = splitProps(props, ['class'])

  return { ...others, class: clsx(local.class, ...classValues) }
}

export default processProps