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
// -- basic svg circle favicon
// -- add default folder structure
// -- check with team about folder and filename preferences (kabab-case folders)
// -- index.js
// -- clean templates
// -- .env files
// -- compontent resolvers
// -- gatsby 4 (check if working with craft source)
// -- node version file

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
