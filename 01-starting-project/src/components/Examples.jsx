import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples(){
const [selectedTopic, setSelectedTopic] = useState();
  // let tabContent='Please click a button';
  function handleSelect(selectedButton){
    //selectedButton=> 'components;, 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  // console.log('APP COMPONENT RENDERING');
  let tabContent= <p>please select a topic</p> ;
  if(selectedTopic){
    tabContent=  (<div id='tab-content'>
            <h3> {EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}

              </code>
            </pre>
            </div>);
  }
  
  return(
    <Section title ="Examples" id='examples'>
          {/* <h2>Examples</h2> */}
          <Tabs
         
          buttons={
          <>
            <TabButton
             isSelected={selectedTopic ==='components'}
              onClick={()=>handleSelect('components')}>
                Components
                </TabButton>
            <TabButton
             isSelected={selectedTopic ==='state'}
                 onClick={()=>handleSelect('jsx')}>
                JSX
                </TabButton>
            <TabButton
             isSelected={selectedTopic ==='props'}
                 onClick={()=>handleSelect('props')}>
                Props
                </TabButton>
            <TabButton
             isSelected={selectedTopic ==='state'}
                 onClick={()=>handleSelect('state')}>
                State
                </TabButton></>
              }
              >
                {tabContent}
                </Tabs>
        
          
        
           
            
            </Section> 
  );
}


