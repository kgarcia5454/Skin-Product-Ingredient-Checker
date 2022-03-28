var form = document.getElementById("ProductForm")
var IngredientsInputString = document.getElementById("IngredientsInput");
var ProductNameInputString = document.getElementById("PNameInput");

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

function Scan(){
    var combo=false;
    const UserInput = IngredientsInputString.value.toLowerCase().split(", ");
    
    UserInput[UserInput.length-1] = UserInput[UserInput.length-1].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

    let Matched = UserInput.filter(element => IngredientsList.includes(element));

    if(Matched.includes("cetearyl alcohol") && Matched.includes("ceteareth-20")){
        combo = true;
    }

    if(!combo){
        Matched = Matched.filter(item => !ComboList.includes(item));
    }

    document.getElementById("IngredientDetected").innerHTML = Matched.length+ " Ingredients Found in "+ProductNameInputString.value+": " + Matched;

}