import Head from "next/head";
import Image from "next/image";
import BoardLogo from "../components/board-logo/BoardLogo";
import FeatureCard from "../components/feature-card/FeatureCard";
import Pill from "../components/pill/Pill";
import RoadMapCard from "../components/roadmap-card/RoadMapCard";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product FeedBack App</title>
        <meta name="description" content="give feedback on your projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BoardLogo />
        <FeatureCard />
        <RoadMapCard />
      </main>
    </div>
  );
}
