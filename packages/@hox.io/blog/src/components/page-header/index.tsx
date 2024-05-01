import Link from '../link'
import { headerContainer } from './index.module.css'

const PageHeader = () => {
  return (
    <div class={headerContainer}>
      <Link href='https://hox.io'>
        <img src='/logo.svg' alt='hox.io logo' width='140px' height='35px' />
      </Link>
    </div>
  )
}

export default PageHeader
