import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <p>
        <a
          href="https://github.com/Azzurriii"
          title="Github profile"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="githubIcon" />
        </a>
      </p>
    </footer>
  )
}

export default Footer
