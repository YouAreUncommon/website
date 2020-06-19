// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import { FlapDisplay, Presets } from "react-split-flap-effect"
// import "react-split-flap-effect/extras/themes.css"
import "components/text-flip.scss"

import Layout from "components/layout"
import SEO from "components/seo"

import TextFlip from 'components/text-flip'


const DebugPage = (props: PageProps) => (
  <Layout>
    <SEO title="Debug" />
    <section className="section theme-1" style={{ background:'rgba(0,0,0,0)', top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', padding: '40px' }}>
      <TextFlip />
      <code style={{ width: '50%', padding: '20px 0 0 0' }}>
        Just an early demo to see how this performs on your browsers. Can be improved, but not insanely (that would require rendering it in 3D, which is a a more intense  bit of work)
      </code>
    </section>
  </Layout>
)

export default DebugPage
