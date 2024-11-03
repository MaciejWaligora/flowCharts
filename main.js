import {newInstance, ready} from '@jsplumb/browser-ui'
import { Node } from './node';

function showCurrentConnections (instance){
    const connections = instance.getConnections();
      return connections;
}

ready(()=>{  
    
    const chart = document.getElementById('chart');
    const instance = newInstance({
        container: chart,
        dragOptions:{
            containment:"parentEnclosed",
            grid:{w:10,h:10}
        }
        
    });

    const addNode = (chart, instance, value) => {
        const node = new Node({
            chart: chart,
            instance: instance,
            value: value,
            name: value
        });

        node.setSourceEndpoint();
        node.setTargetEndpoint();
    }

    /**
     * Control menu part:
     */

    const inputValue = document.createElement('input');
    inputValue.setAttribute('type', 'text');
    document.body.appendChild(inputValue);
    const button = document.createElement('button');
    button.innerHTML = "Add";
    button.addEventListener('click', () => {
        const val = inputValue.value;
        addNode(chart, instance,val, 'test');
    });

    const getConnsButton = document.createElement('button');
    getConnsButton.innerHTML = 'Show Connections';
    getConnsButton.addEventListener('click', () => {
        console.log(showCurrentConnections(instance));
    })
    document.body.appendChild(button);
    document.body.appendChild(getConnsButton);
})