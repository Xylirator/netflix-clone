import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/useAuth";
import { RecoilRoot } from "recoil";
import { RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* // Higher Order Component */}
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
