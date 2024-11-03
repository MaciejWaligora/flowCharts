import { BezierConnector } from "@jsplumb/browser-ui"


export class Node{
    
    #name;
    #value;
    #chart;
    #instance;
    #node;

    constructor({chart, instance, name, value}){
        this.name = name;
        this.value = value;
        this.chart = chart;
        this.instance = instance;
        this.createNode();
        this.setSourceEndpoint();
        this.setTargetEndpoint();
    }


    createNode = () => {
        this.node = document.createElement('div');
        this.node.setAttribute('class', "node");
        this.node.innerHTML = this.name;
        this.chart.appendChild(this.node);
    }

    setSourceEndpoint = () => {
        this.instance.addEndpoint(this.node, {
            source: true,
            maxConnections:5,
            endpoint:"Dot",   
            anchor:"Bottom",

            connector:{
                type:BezierConnector.type,
                options:{
                    curviness: 50
                }
            }
        })
    }

    setTargetEndpoint = () => {
        this.instance.addEndpoint(this.node, {
            target: true,
            maxConnections:5,
            endpoint:"Rectangle",   
            anchor: "Top",

        })
    }
}
