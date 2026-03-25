// NovaChair App
// Design: Scandinavian Minimalism + Industrial Edge

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Wholesale from "./pages/Wholesale";
import About from "./pages/About";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/wholesale" component={Wholesale} />
      <Route path="/about" component={About} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header />
      <div className="flex-1">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <CartProvider>
          <TooltipProvider>
            <Toaster position="bottom-right" />
            <Layout />
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
