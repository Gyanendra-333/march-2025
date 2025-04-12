import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Home />
        <Footer />
      </QueryClientProvider>
    </>
  )
}

export default App;
