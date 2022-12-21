import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/Topbar";
import DashBoard from "./scenes/dashboard";
import SideBar from "./scenes/global/Sidebar";

import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Callendar from './scenes/calendar'
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();

//CssBaseline 구성 요소는 빌드할 우아하고 일관되며 간단한 기준선을 시작하는 데 도움이 됩니다.
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/> 
      <div className="app">
        <SideBar/>
        <main className="content">
          <TopBar/>
          <Routes>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/invoices" element={<Invoices/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/calendar" element={<Callendar/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/line" element={<Line/>}/>
            <Route path="/geography" element={<Geography/>}/>
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
