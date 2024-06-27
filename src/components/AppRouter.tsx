import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CalendarPage from "../pages/CalendarPage";
import SubscribePage from "../pages/SubscribePage";


export enum RouteNames {
    HOME = "/",
    CALENDAR = "/calendar",
    SUBSCRIBE = "/subscribe",
}

export const AppRouter = () => {
    return (
      <Routes>
        <Route path={RouteNames.HOME} element={<MainPage />} />
        <Route path={RouteNames.CALENDAR} element={<CalendarPage />} />
        <Route path={RouteNames.SUBSCRIBE} element={<SubscribePage />} />
      </Routes>
    );
  };