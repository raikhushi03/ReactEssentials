
// import componentsImg from './assets/Components.png';

import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import Examples  from './components/Examples.jsx';

import CoreConcepts from './components/CoreConcepts.jsx';

function App() {
  
  return (
    <>
      <Header />
    
      <main>
        <CoreConcepts/>
        <Examples/>
        

      </main> 
    </>
  );
}

export default App; 