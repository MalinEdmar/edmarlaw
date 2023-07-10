"use client"
import React from 'react'
import styles from './Hero.module.css'
import { useTranslations } from 'next-intl'
const Hero = () => {
    const t = useTranslations("Index")
  return (
    <section className={styles.hero}>
    <div className={styles.container}>
     <h1>{t("Privacy Policy")}</h1>
    </div>
  </section>
  )
}

export default Hero