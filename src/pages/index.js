import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css" 

export default function Home() {
  return (
    <Layout>
    <section className = {styles.header}>
      <h2>Hello Patil</h2>
      <h3>Hello From JTC</h3>
      <p>This is The Worth Sayings 100K milestone</p>
      <Link className={styles.btn} to='/about'> Our team</Link>
    </section>
    </Layout>

  )
}
