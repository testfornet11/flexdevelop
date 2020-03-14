import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const References = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(title: {eq: "Referenciák"}){
        content
      }
    }
  `)
  return (
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}/>
  )
}

export default References;
