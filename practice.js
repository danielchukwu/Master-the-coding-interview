// Javascript - {}
// Topic - Build Data Structure (Graphs)
// Problem: 7. Build a Graph Data Structure with the following methods 
// - addVertex
// - addEdge 
// - showConnection (tip: method should basically print the entire connection of every vertex in the graph)

class Graph {
   constructor() {
      this.adjacencyList = {};
      this.numberOfNodes = 0;
   }
   addVertex(node){
      // check param: empty return
      if (node === undefined) return "missing parameter";

      // check if node already exists: if it doesn't add, else ignore
      if (!this.adjacencyList.hasOwnProperty(node)){   // if node doesn't exist
         this.adjacencyList[node] = [];
         this.numberOfNodes++;
      } else {                                         // else if node does exist
         return "node already exists in this graph";
      }
   }
   addEdge(node1, node2){  // undirected
      // check param: if ether node1 or node2 empty
      if (node1 === undefined  || node2 === undefined) return "missing parameter"

      const n1 = this.adjacencyList[node1];
      const n2 = this.adjacencyList[node2];

      if (n1 && n2){
         n1.push(node2);
         n2.push(node1);
      } else {
         return "incorrect node inputs";
      }
   }
   showConnections(){
      const keys = Object.keys(this.adjacencyList);
      for (let i in keys){
         const k = keys[i];
         const vertexConnections = this.adjacencyList[k];
         let connections = k +" -> ";
         for (let i=0; i<vertexConnections.length; i++){
            connections += vertexConnections[i] + " ";
         }
         console.log(connections);
      }
   }
}

const myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);

myGraph.addEdge(0, 1);
myGraph.addEdge(0,2);
myGraph.addEdge(2,1);
myGraph.addEdge(2,4);
myGraph.addEdge(3,1);
myGraph.addEdge(3,4);
myGraph.addEdge(4,5);
myGraph.addEdge(5,6);


console.log(myGraph.adjacencyList)
console.log(myGraph.numberOfNodes)
myGraph.showConnections();