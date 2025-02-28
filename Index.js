// getting the area of a circle

const PI=1415;
const r = 5;
CircleArea=PI*r**2;

console.log(CircleArea)



// count week and plants

const weeks=5

const spacePerPlant=0.8;
const allPlants=20;
totalPlants=CircleArea/spacePerPlant
console.log(totalPlants);

// Area per numofPlants


// The plants double every week & Plants muliplty per week
for ( let week=1;week <=weeks; week++) {

    const areaOcupied=spacePerPlant*allPlants

    console.log(week,totalPlants)
}
    // Plants Double followng week2
  allPlants=allPlants*2


//   Control Flow
const percentage=(allPlants/totalPlants)*100 //2 weeks of platnts

if (percentage>80){

    console.log("Prune not to exceed area of growth");
}
 else if (percentage>=50 && percentage <80){
    console.log(" Monitor for near future prunning");

 }
 else (percentage<50)
 {
console.log("plant more plants there is room")
 }
 
// On third Week

let allPlants2 =allPlants*6;

percentage2 =(allPlants2/totalPlants)*100

console.log(percentage2, totalPlants);


if (percentage2>80){

    console.log("Prune not to exceed area of growth");
}
 else if (percentage2>=50 && percentage2<80){
    console.log(" Monitor for near future prunning");

 }
 else (percentage2<50)
 {
console.log("plant more plants there is room")}


// Think bigger
 const ttlPlants=100;
weeks =10
// Calculate the plants increase
for (let i =0; i<weeks; i++) {
    ttlPlants *=2;
}
areaOcupied2 =ttlPlants*spacePerPlant

newRadius=sqrt(areaOcupied2/PI);
console.log(areaOcupied2);
console.log(newRadius)
console.log(ttlPlants)

// Error in Judgement
try{  
let totalPlants2=100;
weeks =5;

spaceRequired=totalPlants2*spacePerPlant
availableArea =PI*r*r;

let x = 10;


	if (spaceRequired>availableArea){
        console.log("not enough space")
		
		throw new Error("not enough space")
    };

	console.log("total plants is okay")
} catch (err) {
	console.log(err);
} finally {
	console.log("The scientist should consider their plant")
}
