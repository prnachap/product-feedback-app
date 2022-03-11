import "normalize.css/normalize.css";
import "../styles/globals.scss";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import FeedbackState from "../context/feedback/FeedbackState";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedbackState>
        <Component {...pageProps} />
      </FeedbackState>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
