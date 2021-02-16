import Graph from './index';

export default function createGraph(family) {
    const graph = new Graph();

    Object.keys(family).forEach(person => {
        graph.addNode(person);
    });

    Object.keys(family).forEach(person => {
        if(family[person].children.length > 0){
            family[person].children.forEach(child => {
                graph.addEdge(person, child);
            });
        }
    });

    console.log(graph)
    return graph;
}