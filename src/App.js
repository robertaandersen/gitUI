import React from 'react';
import './App.css';

import { Gitgraph } from "@gitgraph/react";



function App() {

  return (
    <div className="App">
      <br/>  
      <br/>  
      <br/>  

      <Gitgraph>{(gitgraph) => {
        gitgraph._graph.mode = 'compact';
        
        console.dir(gitgraph)
      
      
        
        
        const master = gitgraph.branch("master");
        master.commit("Initial commit");
        const develop = gitgraph.branch("develop");
        develop.commit();   
        const feature = gitgraph.branch("feature");
        feature.commit(); 
        feature.commit(); 
        feature.commit(); 
        develop.merge(feature);
        const release = gitgraph.branch("release");
        release.commit(); 
        develop.merge(release);
        master.merge(release); 
        master.tag("1.0.0")
        const hotfix = gitgraph.branch("hotfix"); 
        hotfix.commit()
        hotfix.commit()
        master.merge(hotfix); 
        master.tag("1.0.1");
        develop.merge(hotfix)


        
        
        

      }}</Gitgraph>
    </div>
  );
}

export default App;