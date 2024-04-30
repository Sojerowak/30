let ilosc = 0; 
let nr_zdjecia = 1;

function OnLoad()
{

}

function dodaj()
{
    ilosc++;
    document.getElementById("koszykIlosc").innerText = ilosc;
}

function odejmij()
{
    if(ilosc > 0)
    {
        ilosc--;
        document.getElementById("koszykIlosc").innerText = ilosc;
    }
  
}

function DodajDoKoszyka()
{
    document.getElementById("PustyKoszInfo").style.display = "none";
   let wynik = ilosc * 125;
    let item = document.createElement("div");
    item.style.display = "flex";
    item.style.alignContent = "center";
    item.innerHTML = ` <img src="images/image-product-${nr_zdjecia}-thumbnail.jpg" alt="" width="50px" height="50px">
    <div> 
         <h3 style="color: grey ;">Fall Limited Edition Sneakers</h3> 
         <h3 style="color: grey ;">$125.00 x ${ilosc} <span style="color: black;">$${wynik}.00</span></h3> 
        </div> 
        <img src="images/icon-delete.svg" height="20px">`;

   document.getElementById("koszyk").appendChild(item);
}

function WyswietlZdjecia(a)
{
   nr_zdjecia = a;
   
   document.getElementById("wyswietl").style.display = "flex";
   document.getElementById("wyswietlObraz").src = "images/image-product-1.jpg";
   
   switch(nr_zdjecia)
   {
     case 1:   document.getElementById("wyswietlObraz").src = "images/image-product-1.jpg"; break;
     case 2:   document.getElementById("wyswietlObraz").src = "images/image-product-2.jpg"; break;
     case 3:   document.getElementById("wyswietlObraz").src = "images/image-product-3.jpg"; break;
     case 4:   document.getElementById("wyswietlObraz").src = "images/image-product-4.jpg"; break;

   }
  

}

function ZamknijWyswietlanie()
{
    document.getElementById("wyswietl").style.display = "none";
    document.getElementById("cialo").style.backgroundColor = "white";
}

function InneZdjecie(a)
{

    switch(a)
    {
        case 1:
            {

                if(nr_zdjecia == 4)
                {
                    nr_zdjecia = 1;
                    WyswietlZdjecia(nr_zdjecia);
                }
                else{
                    nr_zdjecia++;
                    WyswietlZdjecia(nr_zdjecia);
                }
                 break;
            }
           
        case 2:
            {
                if(nr_zdjecia == 1)
                {
                    nr_zdjecia = 4;
                    WyswietlZdjecia(nr_zdjecia);
                }
                else{
                    nr_zdjecia--;
                    WyswietlZdjecia(nr_zdjecia);
                }
                 break;
            }
            
    }
}

let y;
function actKosz()
{

    if(y == 0)
    {
      document.getElementById("koszyk").style.display = "block";
      y = 1;
    }
    else 
    {
        document.getElementById("koszyk").style.display = "none";
        y=0;
    }
}