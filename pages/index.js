import Head from "next/head";
import Image from "next/image";
import BoardLogo from "../components/board-logo/BoardLogo";
import FeatureCard from "../components/feature-card/FeatureCard";
import RoadMapCard from "../components/roadmap-card/RoadMapCard";
import styles from "../styles/Home.module.scss";
import Button from "../ui/button/Button";
import LeftIcon from "../public/assets/shared/icon-arrow-left.svg";
import UpIcon from "../public/assets/shared/icon-arrow-up.svg";
import Pill from "../ui/pill/Pill";
import MobileSideBar from "../components/mobile-sidebar/MobileSideBar";
import Overlay from "../ui/overlay/OverLay";
import SideBar from "../components/desktop-sidebar/SideBar";
import SuggestionBar from "../components/suggestion-bar/SuggestionBar";
import Suggestion from "../components/suggestions/Suggestion";
import SuggestionList from "../components/suggestions/SuggestionList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product FeedBack App</title>
        <meta name="description" content="give feedback on your projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <SideBar />
          {/* <MobileSideBar />
          <Overlay /> */}
          <div className="suggestion">
            <SuggestionBar />
            <SuggestionList />
          </div>
        </div>
      </main>
    </div>
  );
}
