import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const Index = ({ data }) => (
  <Layout>
    <SEO />
    <main>
      <div className="content">
        <div className="logo">
          <Img
            className="img-fluid rounded shadow"
            fluid={data.logo.childImageSharp.fluid}
            alt={data.site.siteMetadata.title}
          />
        </div>

        <div className="bio">
          <p>We believe that working together, is freedom. The freedom to explore. The freedom to experiment. The freedom to develop. The freedom to make mistakes. The freedom to fail and the freedom to learn.</p>
        </div>

        <div className="network">
          <ul>
            <li>
              <a className="icon-twitter" href="http://twitter.com/spacesuitehq">
                <svg className="svg-icon" aria-labelledby="simpleicons-twitter-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-twitter-icon">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
              </a>
            </li>

            <li>
              <a className="icon-instagram" href="http://instagram.com/spacesuitehq">
                <svg className="svg-icon" aria-labelledby="simpleicons-instagram-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-instagram-icon">Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
            </li>

            <li>
              <a className="icon-facebook" href="http://facebook.com/spacesuitehq">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a className="icon-maps" href="https://www.google.com.my/maps/place/Spacesuite+HQ/@2.917988,101.6496173,17z/data=!4m12!1m6!3m5!1s0x31cdb6fd121d40fb:0xdd8d1fc963973f24!2sSpacesuite+HQ!8m2!3d2.917988!4d101.651806!3m4!1s0x31cdb6fd121d40fb:0xdd8d1fc963973f24!8m2!3d2.917988!4d101.651806">
                <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path className="heroicon-ui" d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="credit">
          <p>&copy; <a href="https://www.google.com.my/maps/place/Spacesuite+HQ/@2.917988,101.6496173,17z/data=!4m12!1m6!3m5!1s0x31cdb6fd121d40fb:0xdd8d1fc963973f24!2sSpacesuite+HQ!8m2!3d2.917988!4d101.651806!3m4!1s0x31cdb6fd121d40fb:0xdd8d1fc963973f24!8m2!3d2.917988!4d101.651806">{data.site.siteMetadata.title} Co.</a> Since 2018.</p>
        </div>
      </div>
    </main>
  </Layout>
)

export default Index

export const query = graphql`
  query {
    logo: file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 650) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`