const contacts=document.getElementsByClassName("contact")
const options=document.getElementsByClassName("option")
let conlnth=contacts.length
let optlnth=options.length

for(let i=0;i<=conlnth;i++){
    addEventListener("click", function() {
       

        for(let i=0;i<=optlnth;i++){
          options[i].classList.toggle("active")
        }
    })
}
  