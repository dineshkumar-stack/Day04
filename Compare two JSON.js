let obj1=[
  {
    "name": "person 1",
    "age": 5,
  },
];
let obj2=[
  {
    "age": 5,
    "name": "person 1",
  },
];
  
  //for(let i=0; i<obj1.length;  i++)
  console.log("Name:",obj1[0].name,"=",obj2[0].name);
  if (obj1[0].name==obj2[0].name){
      console.log("true");
          }else{
              console.log("false");
          }
   console.log("Age:",obj1[0].age,"=",obj2[0].age);
  if (obj1[0].age==obj2[0].age){
      console.log("true");
          }else{
              console.log("false");
          } 