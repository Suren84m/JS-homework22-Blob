let button = document.getElementById("button")

button.onclick = function(){
    let file = document.getElementById("files").files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function(){
        let place = document.getElementById("main")
       let array =  reader.result.split("\r\n")
       let leter = array.filter((el)=>el.startsWith("let"))
       let func = array.filter((el)=>el.startsWith("function"))
       let div1 = document.createElement("div")
       div1.classList.add("item")
       div1.innerText = `Functions = ${func.length}`
        place.append(div1)
       let div = document.createElement("div")
       div.classList.add("item")
       div.innerText = `Variables = ${leter.length}`
        place.append(div)
        
    }
    }