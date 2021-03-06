import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Header = props => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(title: {eq: "Induló szöveg"}){
        content
      }
    }
  `)

  return (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="iconHolder services"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Flex KFT</h1>
        <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
        />
        <Link className="galleryLink" to="/gallery">Tekintse meg képgalériánkat</Link>
      </div>

    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {props.onOpenArticle('about')}}
            onMouseOver={() => {props.setWrapperClass('aboutus')}}
            onMouseLeave={() => {props.removeWrapperClass()}}
          >
            Rólunk
          </button>
        </li>
        <li>
          <button
            onClick={() => {props.onOpenArticle('services')}}
            onMouseOver={() => {props.setWrapperClass('services')}}
            onMouseLeave={() => {props.removeWrapperClass()}}
          >
            Szolgáltatások
          </button>
        </li>
        <li>
          <button
            onClick={() => {props.onOpenArticle('refs')}}
            onMouseOver={() => {props.setWrapperClass('references')}}
            onMouseLeave={() => {props.removeWrapperClass()}}
          >
            Referenciák
          </button>
        </li>
        <li>
          <button
            onClick={() => {props.onOpenArticle('price')}}
            onMouseOver={() => {props.setWrapperClass('prices')}}
            onMouseLeave={() => {props.removeWrapperClass()}}
          >
            Áraink
          </button>
        </li>
        <li>
          <button
            onClick={() => {props.onOpenArticle('contact')}}
            onMouseOver={() => {props.setWrapperClass('contact')}}
            onMouseLeave={() => {props.removeWrapperClass()}}
          >
            Kapcsolat
          </button>
        </li>
      </ul>
    </nav>
  </header>
)
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
