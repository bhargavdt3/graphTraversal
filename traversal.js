var g = {2: [4, 5, 10], 3: [9, 10, 8], 4: [2, 8], 5: [2], 9: [3], 10: [3, 2], 8: [4]};
var visited = {};
// temp :: set the destination node
var dest = 3;

//temp :: set the root node
var mainroot = 2
function levelIter(root) {
  var edges = g[root];
  if (edges) {
  	for(var idx =0; idx< edges.length; idx++) {
       var notv = false;
       if (edges[idx] != mainroot) {
          if(!visited[edges[idx]]) {
               var r = visited[root]
               visited[edges[idx]] =  r && !visited[edges[idx]] ? r+1 : 1;
              notv = true
          }
          notv ? levelIter(edges[idx]) : '';
       }
       if(edges[idx] == dest) { 
         break;
         return true;
       }
    }
  }

}
// pass the root node of the graph, it can be any node
levelIter(2)
