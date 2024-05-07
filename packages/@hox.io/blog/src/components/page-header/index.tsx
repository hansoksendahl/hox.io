import GithubIcon from '../icons/github-icon'
import LinkedInIcon from '../icons/linked-in-icon'
import SeedOfLife from '../icons/seed-of-life'
import Link from '../link'
import {
  headerContainer,
  leftContainer,
  rightContainer,
} from './index.module.css'

const PageHeader = () => {
  return (
    <div class={headerContainer}>
      <div class={leftContainer}>
        <Link href='https://hox.io'>
          <img src='/logo.svg' alt='hox.io logo' width='140px' height='35px' />
        </Link>
      </div>
      <div class={rightContainer}>
        <ul>
          <li>
            <SeedOfLife title='Portfolio' />
            <Link href='https://hox.io'>Portfolio</Link>
          </li>
          <li>
            <LinkedInIcon />
            <Link href='https://linkedin.com/in/hansoksendahl'>LinkedIn</Link>
          </li>
          <li>
            <GithubIcon />
            <Link href='https://github.com/hansoksendahl'>Github</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PageHeader
