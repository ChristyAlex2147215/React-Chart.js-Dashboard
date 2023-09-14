import {ColorModeContext,useMode} from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard"
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Invoice from "./scenes/invoice";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Profile from "./scenes/profile";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { Route,Routes } from "react-router-dom";
import Calendar from "./scenes/calendar";


function App() {
  const {theme,colorMode}=useMode();
  // console.log("Theme is =>",theme);
  // console.log("color mode is =>",colorMode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
        <div className="app">
          <Sidebar/>
          <main className="content">
          <Topbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/invoice" element={<Invoice/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/line" element={<Line/>}/>
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/geography" element={<Geography/>}/>
          </Routes>
          </main>
        </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  
  );
}

export default App;
