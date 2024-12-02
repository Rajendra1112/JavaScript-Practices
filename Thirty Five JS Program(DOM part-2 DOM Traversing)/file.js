//DOM traversing

//to get root node
const rootNode = document.getRootNode();
console.log("root node:", rootNode); //#document

// ###################### Child Relationship ###################
//to get child nodes of rood node
console.log(rootNode.childNodes);
//Here, rootNode.childNodes return NodeList[html] which is array like object 
//and since there is only one child node of document rood node so we use index
const htmlElementNode = rootNode.childNodes[0];     
console.log("child node of root node:", htmlElementNode);

//to display all the child nodes of htmlElementNode
console.log(htmlElementNode.childNodes);
//to get child nodes of htmlElementNode and display them
const headElementNode=htmlElementNode.childNodes[0];
const textNode1=htmlElementNode.childNodes[1];
const bodyElementNode=htmlElementNode.childNodes[2];
console.log("first child node of htmlElementNode",headElementNode);
console.log("second child node of htmlElementNode",textNode1);
console.log("third child node of htmlElementNode",bodyElementNode);


//to display all the child nodes of headElementNode
console.log(headElementNode.childNodes);
//to get child nodes of headElementNode and display them
const textNode2=headElementNode.childNodes[0];
const titleElementNode=headElementNode.childNodes[1];
const textNode3=headElementNode.childNodes[2];
const scriptElementNode=headElementNode.childNodes[3];
const textNode4=headElementNode.childNodes[4];
console.log("first child node of headElementNode",textNode2);
console.log("second child node of headElementNode",titleElementNode);
console.log("third child node of headElementNode",textNode3);
console.log("fourth child node of headElementNode",scriptElementNode);
console.log("fifth child node of headElementNode",textNode4);

//to display all the child nodes of titleElementNode
console.log(titleElementNode.childNodes);

//to get child nodes of titleElementNode
const textNode5=titleElementNode.childNodes[0];
console.log("first child node of titleElementNode",textNode5);


//ans so on in conclusion we can traverse each node of the DOM tree


// ###################### Parent Relationship ###################
//to get and display parent node of htmlElementNode
const parentOfHTMLElementNode=htmlElementNode.parentNode;
console.log("parent of htmlElementNode",parentOfHTMLElementNode);

//to get and display parent node of headElementNode
const parentOfHeadElementNode=headElementNode.parentNode;
console.log("parent of headElementNode",parentOfHeadElementNode);

//to get and display parent node of titleElementNode
const parentOfTitleElementNode=titleElementNode.parentNode;
console.log("parent of titleElementNode is",parentOfTitleElementNode);

//to get and display parent node of textNode5
const parentOfTextNode5=textNode5.parentNode;
console.log("parent of textNode5 is",parentOfTextNode5);

// ###################### Sibling Relationship ###################


//next sibling of headElementNode or simply head element
console.log(headElementNode.nextSibling);

//next sibling of head element is text node and next slibling of that next node is body element
console.log(headElementNode.nextSibling.nextSibling);

const h1=document.querySelector("h1");
console.log(h1);
const parentOfH1=h1.parentNode;
console.log(parentOfH1);
parentOfH1.style.backgroundColor="gray";
parentOfH1.style.color="#fff";

console.log(titleElementNode.parentNode.parentNode);
console.log(htmlElementNode.childNodes[0].childNodes[1].childNodes[0]);

//querySelector can also be used in object other than document
const child1=headElementNode.querySelector("title");
console.log(child1);

//to get child nodes except text node
const container=document.querySelector(".container");
console.log(container.children);

