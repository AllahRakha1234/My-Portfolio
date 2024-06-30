import "../styles/globals.css";
// NEXT ROUTER
import { useRouter } from "next/router";
// IMPORTING COMPONENTS
import Layout from "../components/Layout";
import Transition from "../components/Transition";
// IMPORTING FRAMER-MOTION
import { motion, AnimatePresence } from "framer-motion";

// MYAPP FUNCTION
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        {/* <motion.div key={router.route} className="h-full"> */}
        <motion.div key={router.route}>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
