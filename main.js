import {newInstance, ready} from '@jsplumb/browser-ui'
import { Node } from './node';


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
    }

    instance.bind("connection", (newCon) => {
        const existingCons = instance.getConnections();
        for(let i = 0; i < existingCons.length; i++){
            if(existingCons[i].sourceId === newCon.targetId && existingCons[i].targetId === newCon.sourceId){
                console.log('this connection is not allowed');
                instance.deleteConnection(existingCons[existingCons.length-1]);
            }
        }
     });

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