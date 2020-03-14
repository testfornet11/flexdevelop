import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';


const Header = props => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(title: {eq: "Home"}){
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
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            
            onClick={() => {
              props.onOpenArticle('about');
            }}
          >
            Rólunk
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('services')
            }}
          >
            Szolgáltatások
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('refs')
            }}
          >
            Referenciák
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('price')
            }}
          >
            Áraink
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
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
