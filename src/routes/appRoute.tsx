import Detail from "@/modules/detail";
import Home from "@/modules/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../modules/layout";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home></Home>}></Route>
        <Route path="detail/:matchId" element={<Detail></Detail>}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoute;
