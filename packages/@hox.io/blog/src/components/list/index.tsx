import { For, JSX } from "solid-js"
import { Dynamic } from "solid-js/web"

export interface ListProps {
  items: (JSX.Element)[],
  isOrdered?: boolean
}

const List = (props: ListProps) => (
  <Dynamic component={props.isOrdered ? 'ol' : 'ul'}>
    <For each={props.items}>
      {item => (
        <li>{item}</li>
      )}
    </For>
  </Dynamic>
)

export default List