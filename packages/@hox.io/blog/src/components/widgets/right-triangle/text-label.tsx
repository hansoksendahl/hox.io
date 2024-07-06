interface TextLabelProps {
  x: number
  y: number
  width: number
  height: number
  text: string
}

const TextLabel = (props: TextLabelProps) => (
  <text
    x={props.x + props.width / 2}
    y={props.y + props.height / 2}
    dominant-baseline='middle'
    text-anchor='middle'
  >
    {props.text}
  </text>
)

export default TextLabel
