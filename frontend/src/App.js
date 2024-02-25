import { ImageUpload } from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorldFLora from "./pages/WorldFlora";
import UsefulPlants from "./pages/UsefulPlants"
import Weeds from "./pages/Weeds"
import Invasive from "./pages/Invasive";
import UsefulplantsofTropicalAfrica from "./pages/UsefulplantsofTropicalAfrica"
import UsefulplantsofAsia from "./pages/UsefulplantsofAsia"
import NewCaledonia from "./pages/NewCaledonia"
import Hawaii from "./pages/hawaii";
import French from "./pages/french";
import Gardens from "./pages/Gardens";
import Flower from "./pages/Flower";


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<ImageUpload/>}/>
      <Route path="/worldflora" element={<WorldFLora/>} />
      <Route path="/usefulplants" element={<UsefulPlants/>}/>
      <Route path="/weeds" element={<Weeds/>}/>
      <Route path="/invasive" element={<Invasive/>}/>
      <Route path="/UsefulplantsofTropicalAfrica" element={<UsefulplantsofTropicalAfrica/>}/>
      <Route path="/UsefulplantsofAsia" element={<UsefulplantsofAsia/>}/>
      <Route path="/NewCaledonia" element={<NewCaledonia/>}/>
      <Route path="/Hawaii" element={<Hawaii/>}/>
      <Route path="/french" element={<French/>}/>
      <Route path="/Gardens" element={<Gardens/>}/>
      <Route path="/Flower" element={<Flower/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
