import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Menu from '../Menu'
import Links from '../Links'
import './style.scss'

class Sidebar extends React.Component {
  render() {
    const { location } = this.props
    const {
      author,
      copyright,
      menu,
    } = this.props.data.site.siteMetadata
    const isHomePage = get(location, 'pathname', '/') === '/'
    const profilePic = this.props.data.kontentItemAuthor.elements.avatar_image.value[0].url;

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        {isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h1>
        ) : (
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h2>
        )}
        <p className="sidebar__author-subtitle">{author.bio}</p>
      </div>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menu} />
            <Links data={author} />
            <p className="sidebar__copyright">{copyright}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
