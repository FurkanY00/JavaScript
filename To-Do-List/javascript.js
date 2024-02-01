
function newElement(){
var txt= document.getElementById("task").value;
var list =document.getElementById("list");
var btn=document.getElementById("liveToastBtn");

    if(txt!=""){
        var eklenen=document.createElement("li");
        list.appendChild(eklenen);
        eklenen.setAttribute("onclick","renkDegistir");
        eklenen.innerHTML=txt;

        var btnsil=document.createElement("img");
        btnsil.className="sil";
        btnsil.style.width="15px";
        btnsil.style.position="absolute";
        btnsil.style.right="10px";
        btnsil.style.top="18px";
        eklenen.appendChild(btnsil);
        btnsil.setAttribute("src","EXİT.png");
        btnsil.setAttribute("id","elemansil");
        btnsil.addEventListener("click",sil);
        var bos=document.getElementById("task");
        bos.value="";      
        localStorage.setItem("key",txt);



        
        function showalert(){
            var alertelement=document.createElement("div");
            alertelement.innerHTML="Yeni Görev Eklendi!";
            alertelement.style.backgroundColor="#09e22d";
            alertelement.style.padding="10px";
            alertelement.style.borderRadius="15px";
            alertelement.style.float="right";
            alertelement.style.marginRight="115px";
            alertelement.style.width="170px";
            document.body.appendChild(alertelement);
            setTimeout(function(){
                document.body.removeChild(alertelement);
            },1000)

        }
        showalert();
        
    }
    else{
        function showalert(){
            var alertelement=document.createElement("div");
            alertelement.innerHTML="Boş Değer Girilemez!";
            alertelement.style.backgroundColor="#09e22d";
            alertelement.style.padding="10px";
            alertelement.style.borderRadius="15px";
            alertelement.style.float="right";
            alertelement.style.marginRight="115px";
            alertelement.style.width="170px";
            document.body.appendChild(alertelement);
            setTimeout(function(){
                document.body.removeChild(alertelement);
            },1000)

        }
        showalert();
        
    }
}
function sil(){
    var secilen=event.currentTarget.parentNode;
    secilen.remove();
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);




