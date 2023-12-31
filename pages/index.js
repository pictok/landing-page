import Head from "next/head";
import styles from "@/styles/Home.module.css";
import TopBar from "@/components/TopBar";
import Intro from "@/components/Introduction";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <TopBar />
        <Intro />
        <Features />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
