import "normalize.css/normalize.css";
import "../styles/globals.scss";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import FeedBackState from "../context/feedback/FeedBackState";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedBackState>
        <Component {...pageProps} />
      </FeedBackState>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
