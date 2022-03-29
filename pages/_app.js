import "normalize.css/normalize.css";
import "../styles/globals.scss";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import FeedBackState from "../context/feedback/FeedBackState";
import AuthState from "../context/authContext/AuthState";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthState>
        <FeedBackState>
          <Component {...pageProps} />
        </FeedBackState>
      </AuthState>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
