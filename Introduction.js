let set1 = []

let encryptbutton = 0

function recalibrate() {
  const scooby = new Map()
  let variance = set1.length/2 + set1.length%2
  for (i = 0; i < variance; i++){
    for (j = 0; j < set1[i*2].length; j++){
      const bible = set1[i*2][j].toLowerCase()
      if (scooby.has(bible)){
        scooby.set(bible, scooby.get(bible)+1)
      }else {
        scooby.set(bible, 1)
      }
    }
  }
  scooby.delete(" ")
  const mapSort1 = new Map([...scooby.entries()].sort((a, b) => b[1] - a[1]));
  console.log(mapSort1)
  let bing = mapSort1.entries().next().value
  let garg = `most used letter is ${bing[0]}, with ${bing[1]} uses`
  document.getElementById('chump').innerText = garg
}

window.onload = function() { 
  /* For keyboard event */
  document.addEventListener('keydown',
                  function(event) 
  {
    if (event.key == "Enter"){
      let goth = document.getElementById('mobile').value;
      set1.push(goth)
      set1.push("\n")
      document.getElementById('texto').innerText = set1.join(" ");
      document.getElementById('mobile').value = "";
    }
        
      
  }, false);
}




function createButton(context, func) {
  var button = document.createElement("input");
  button.type = "button";
  button.value = "im a button";
  button.onclick = func;
  context.appendChild(button);
}
function link(){
  createButton(document.body, function() {
    const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let ghost = []
    let variance = set1.length/2 + set1.length%2
    const x = parseInt(document.getElementById('linear').value)
    //console.log(x)
    for (i = 0; i < variance; i++){
      for (j = 0; j < set1[i*2].length; j++){
        let jt = alph[parseInt(alph.indexOf(set1[i*2][j].toLowerCase()))]
        let tt = parseInt(alph.indexOf(set1[i*2][j].toLowerCase()))
        if (jt == " " | jt == "\n"){
          ghost.push(' ')
        }else if (tt + x >= 26){
          console.log(tt+x,(tt+x)%26)
          ghost.push(alph[(tt+x)%26])
        } else {
          ghost.push(alph[x+tt])
        }
        const bible = set1[i*2][j].toLowerCase()
        //console.log(bible, ghost[-1])
      }
    console.log(ghost)
  }

  document.getElementById('blank').innerText = ghost.join("")
  console.log(ghost)

});

}

class Animal{
  constructor(name,age,color,legs){
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }

  reportFacts(){
    console.log(`this dog is named ${this.name} and is ${this.age} years old`)
  }
}


const person = new Animal('James Charles',28,'red',2)
person.reportFacts()
