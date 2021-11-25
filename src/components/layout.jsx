/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

// TODO:
// - PLUGINS
// -- gatsby-plugin-robots-txt
// -- gatsby-plugin-sitemap
// -- gatsby-plugin-canonical-urls
// - SEO
// -- add default share image
// -- og:image and twitter:image
// -- add seo prop to layout
// -- improve conditionals/fallbacks for seo component
// - OTHER
// -- add site config folder and site.js file to store meta
// -- add default folder structure
// -- check with team about folder and filename preferences (kabab-case folders)
// -- .env files
// -- compontent resolvers

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
