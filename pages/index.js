import Head from "next/head";
import FeedbackDashboard from "../components/feedback-dashboard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product FeedBack App</title>
        <meta name="description" content="give feedback on your projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FeedbackDashboard />
      </main>
    </div>
  );
}
