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
      if (node === null || node === undefined) return "missing parameter";

      // check if node already exists: if it doesn't add, else ignore
      if (!this.adjacencyList.hasOwnProperty(node)){   // if node doesn't exist
         this.adjacencyList[node] = [];
      } else {                                         // else if node does exist
         return "node already exists in this graph";
      }
   }
   addEdge(node1, node2){
      // undirected
   }
   showConnections(){
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

console.log(myGraph.adjacencyList)