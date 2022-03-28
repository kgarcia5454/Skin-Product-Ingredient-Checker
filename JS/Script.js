var form = document.getElementById("ProductForm")
var IngredientsInputString = document.getElementById("Ingredients");
var combo = false;

var IngredientsList = ["acetylated lanolin",
"acetylated lanolin alcohol",
"butyl stearate",
"cetyl acetate",
"coal tar",
"cocoa butter",
"coconut butter",
"coconut oil",
"cocos nucifera (coconut) oil",
"d&c red no. 27",
"d&c red no. 9",
"ethylhexyl palmitate",
"glyceryl-3-diisostearate",
"isocetyl alcohol",
"isopropyl isostearate",
"isopropyl linolate",
"isopropyl myristate",
"isopropyl palmitate",
"isostearic acid",
"isostearyl isostearate",
"laureth-4",
"lauric acid",
"lauric acid in sunflower oil",
"myristyl lactate",
"myristyl myristate",
"oleic acid",
"oleth-3",
"oleyl alcohol",
"peg 16 lanolin",
"solulan 16",
"ceteareth-20",
"polyglyceryl-3-diisostearate",
"ppg-2 myristyl propionate",
"ppg 5 ceteth 10 phosphate",
"propylene glycol monostearate",
"sodium lauryl sulfate",
"stearyl heptanoate",
"cetearyl alcohol",
"theobroma cacao (cocoa) seed butter",
"xylene"];

var ComboList = ["ceteareth-20","cetearyl alcohol"]


// GROUP Cetearyl alcohol + Ceteareth 20 — only when in the same formulation, not on their own.


function test(){
    combo=false;
    const test = IngredientsInputString.value.toLowerCase().split(", ");
    console.log(test);
    
    let intersection = test.filter(element => IngredientsList.includes(element));
    console.log(intersection);
   
    if(intersection.includes("cetearyl alcohol") && intersection.includes("ceteareth-20")){
        combo = true;
    }

    console.log(combo);

    if(!combo){
        intersection = intersection.filter(item => !ComboList.includes(item));
    }

    document.getElementById("CringeDetected").innerHTML =intersection.length+ " Ingredients Found: " + intersection;

}