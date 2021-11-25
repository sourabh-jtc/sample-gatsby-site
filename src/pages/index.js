import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css" 

export default function Home() {
  return (
    <Layout>
      <section className = {styles.header}>
        <div>
          <h2>Inspire</h2>
          <h3>Believe & Achieve</h3>
          <p>This is The Worth Sayings</p>
          <Link className={styles.btn} to='/projects'> My portfolio</Link>
        </div>
        <img src='/banner.png' alt='banner image' style = {{maxWidth:'100%'}} />
      </section>
    </Layout>

  )
}
