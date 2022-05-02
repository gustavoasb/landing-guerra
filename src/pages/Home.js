import Header from "../../src/components/Header"
import Simulation from "../components/Simulation";
import Partners from "../../src/components/Partners"
import Steps from "../../src/components/Steps"
import Stats from "../../src/components/Stats"

function App() {
  return (
    <>
    {/* Header */}
      <Header />
    {/* Partners */}
      <Partners />
    {/* Passo a Passo */}
      <Steps />
    {/* CTA / SIMULAÇãO */}
      <Simulation />
    {/* Dados */}
      <Stats />
    {/* Contato */}
    
    </>
  );
}

export default App;