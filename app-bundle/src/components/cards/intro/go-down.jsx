import './go-down.css'
import { useScroll } from '@hox.io/hooks'

const GoDown = () => {
  return (
    <svg className="goDown" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="chevron1" d="M300 299L99 98.5H129L300 269.5L471 98.5H500.5L300 299Z" fill="#D9D9D9"/>
      <path className="chevron2" d="M300 399.5L99 199H129L300 370L471 199H500.5L300 399.5Z" fill="#D9D9D9"/>
      <path className="chevron3" d="M300 499.5L99 299H129L300 470L471 299H500.5L300 499.5Z" fill="#D9D9D9"/>
    </svg>
  )
}

export default GoDown