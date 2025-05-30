import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ComingSoon from "@/pages/ComingSoon";
import { QueryClientProvider } from "@tanstack/react-query";
import { Redirect, Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";

const RELEASE_DATE = new Date("2025-06-01T10:00:00-04:00");

function isAfterRelease(): boolean {
  const now = new Date();
  return now >= RELEASE_DATE;
}

function Router() {
  const showSite = isAfterRelease();

  return (
    <Switch>
      <Route path="/plexview_glass_website" component={showSite ? Home : ComingSoon} />
      <Route path="/">
        <Redirect to="/plexview_glass_website" />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
