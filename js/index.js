var btn = document.querySelector(".logo-Header");
var menu = document.querySelector(".caixa-de-itens-header");
var burguerChilds = document.querySelectorAll(".menuBurguer div");
var menuChilds = document.querySelectorAll(".itens a")

function aberto(){
  for(var i of menuChilds)
  i.style.pointerEvents = "auto"
  for(var li of burguerChilds)
  menu.style.height = "100vh"
  menu.style.transition = "0.5s"
  menu.style.opacity = "1"
  burguerChilds[1].style.transform = "rotate(-45deg)"
  burguerChilds[1].style.transition = "0.5s"
  burguerChilds[1].style.marginTop = "-5px"
  burguerChilds[0].style.transform = "rotate(45deg)"
  burguerChilds[0].style.transition = "0.5s"
  burguerChilds[0].style.marginBottom = "-5px"
}
function fechado(){
  for(var i of menuChilds)
  i.style.pointerEvents = "none"
  for(var li of burguerChilds)
  menu.style.height = "0"
  menu.style.transition = "0.5s"
  menu.style.opacity = "0"
  
  burguerChilds[1].style.transform = "rotate(0)"
  burguerChilds[1].style.transition = "0.5s"
  burguerChilds[1].style.marginTop = "0"
  burguerChilds[0].style.transform = "rotate(0)"
  burguerChilds[0].style.transition = "0.5s"
  burguerChilds[0].style.marginBottom = "0"
}

function btnBurguer(){
  if(menu.style.height == "100vh"){
    fechado()
  }else{
    aberto()
  }
}
function btServico(){
  fechado()
}
function btProjeto(){
  fechado()
}
function btSobre(){
  fechado()
}
function btOrcamento(){
  fechado()
}
