let timer;
AutoSlider();

let Obj;
let Cart = [];

fetch('https://my-json-server.typicode.com/RobertUA/Lab4/db')
  .then((response) => 
  {
        return response.json();
  })
  .then((data) => 
  {
        Obj=data;
        if(!localStorage.getItem("cart"))
        {
            for(let i=0;i<Obj['products'].length;i++)
            {
                Cart[i]=0;
            }
        }
        else 
        {
            Cart = JSON.parse(localStorage.getItem("cart"))
            UpdateCart();
        }
        LoadSlider();
        document.getElementById("loader").remove();

        switch(window.location.hash)
        {
            case "#home": 
                {
                    LoadList(-1)
                    break;
                }
            case "#catalog": 
                {
                    LoadList(0);
                    break;
                }
            case "#catalog/type1":
                {
                    LoadList(1);
                    break;
                }
            case "#catalog/type2":
                {
                    LoadList(2);
                    break;
                }
            case "#catalog/type3":
                {
                    LoadList(3);
                    break;
                }
            case "#cart":
                {
                    LoadList(4);
                    break;
                }
            case "#order":
                {
                    LoadList(5);
                    break;
                }
            default:
                {
                    let is=false;
                    for(let i=0;i<Obj['products'].length;i++)
                    {
                        if('#product/'+Obj['products'][i].url==window.location.hash)
                        {
                            LoadObj(Obj['products'][i]);
                            is=true;
                            break;
                        }
                    }
                    for(let i=0;i<Obj['sales'].length;i++)
                    {
                        if('#action/'+Obj['sales'][i].url==window.location.hash)
                        {
                            LoadAction(Obj['sales'][i]);
                            is=true;
                            break;
                        }
                    }
                    if(is==false) window.location.hash="#home";
                    break;
                }
        }
        return data;
  });

function LoadList(cat)
{
    if(document.getElementById('list'))
    {
        document.getElementById('list').remove();
        let newlist = document.createElement('div');
        newlist.id="list";
        document.getElementsByTagName('main')[0].appendChild(newlist);
    }
    switch(cat)
    {
        case -1:
            {
                document.getElementsByClassName('slider-all')[0].style.display="flex";
                let newA = document.createElement("article");
                newA.style.border="none";
                newA.style.width = '98%';
                document.getElementById("list").appendChild(newA);
                newEl = document.createElement('h2');
                newEl.textContent="Ми круті, прям ваще !!!";
                newA.appendChild(newEl);
                break;
            }
        case 0:
            {
                document.getElementsByClassName('slider-all')[0].style.display="none";
                for(let i=0;i<Obj['products'].length;i++)
                {
                    let newA = document.createElement("article");
                    //newA.onclick=OnProdClick(Obj['products'][i].url);
                    newA.setAttribute('onclick',"OnProdClick('"+Obj['products'][i].url+"')")
                    document.getElementById("list").appendChild(newA);
                    let newEl = document.createElement('img');
                    newEl.src=Obj['products'][i].image;
                    newEl.alt='tovar';
                    newEl.title='Фото';
                    newA.appendChild(newEl);
                    newEl = document.createElement('h2');
                    newEl.textContent=Obj['products'][i].productName;
                    newA.appendChild(newEl);
                    newEl = document.createElement('p');
                    newEl.textContent=""+Obj['products'][i].price+""+" грн";
                    newA.appendChild(newEl);
                    newEl = document.createElement('p');
                    newEl.textContent=Obj['products'][i].productDescription;
                    newA.appendChild(newEl);
                }
                break;
            }
        case 1:
            {
                document.getElementsByClassName('slider-all')[0].style.display="none";
                for(let i=0;i<Obj['products'].length;i++)
                {
                    if(Obj['products'][i].categoryId==1)
                    {
                        let newA = document.createElement("article");
                        //newA.onclick="OnProdClick("+Obj['products'][i].url+")";
                        newA.setAttribute('onclick',"OnProdClick('"+Obj['products'][i].url+"')")
                        document.getElementById("list").appendChild(newA);
                        let newEl = document.createElement('img');
                        newEl.src=Obj['products'][i].image;
                        newEl.alt='tovar';
                        newEl.title='Фото';
                        newA.appendChild(newEl);
                        newEl = document.createElement('h2');
                        newEl.textContent=Obj['products'][i].productName;
                        newA.appendChild(newEl);
                        newEl = document.createElement('p');
                        newEl.textContent=""+Obj['products'][i].price+""+" грн";
                        newA.appendChild(newEl);
                        newEl = document.createElement('p');
                        newEl.textContent=Obj['products'][i].productDescription;
                        newA.appendChild(newEl);
                    }
                }
                break;
            }
        case 2:
            {
                document.getElementsByClassName('slider-all')[0].style.display="none";
                for(let i=0;i<Obj['products'].length;i++)
                {
                    if(Obj['products'][i].categoryId==2)
                    {
                        let newA = document.createElement("article");
                        //newA.onclick="OnProdClick("+Obj['products'][i].url+")";
                        newA.setAttribute('onclick',"OnProdClick('"+Obj['products'][i].url+"')")
                        document.getElementById("list").appendChild(newA);
                        let newEl = document.createElement('img');
                        newEl.src=Obj['products'][i].image;
                        newEl.alt='tovar';
                        newEl.title='Фото';
                        newA.appendChild(newEl);
                        newEl = document.createElement('h2');
                        newEl.textContent=Obj['products'][i].productName;
                        newA.appendChild(newEl);
                        newEl = document.createElement('p');
                        newEl.textContent=""+Obj['products'][i].price+""+" грн";
                        newA.appendChild(newEl);
                        newEl = document.createElement('p');
                        newEl.textContent=Obj['products'][i].productDescription;
                        newA.appendChild(newEl);
                    }
                }
                break;
            }
        case 3:
            {
                document.getElementsByClassName('slider-all')[0].style.display="none";
                for(let i=0;i<Obj['products'].length;i++)
                {
                    if(Obj['products'][i].categoryId==3)
                    {
                        let newA = document.createElement("article");
                        //newA.onclick="OnProdClick("+Obj['products'][i].url+")";
                        newA.setAttribute('onclick',"OnProdClick('"+Obj['products'][i].url+"')")
                        document.getElementById("list").appendChild(newA);
                        let newEl = document.createElement('img');
                        newEl.src=Obj['products'][i].image;
                        newEl.alt='tovar';
                        newEl.title='Фото';
                        newA.appendChild(newEl);
                        newEl = document.createElement('h2');
                        newEl.textContent=Obj['products'][i].productName;
                        newA.appendChild(newEl);
                        newEl = document.createElement('p');
                        newEl.textContent=""+Obj['products'][i].price+""+" грн";
                        newA.appendChild(newEl);
                        newEl = document.createElement('p');
                        newEl.textContent=Obj['products'][i].productDescription;
                        newA.appendChild(newEl);
                    }
                }
                break;
            }
        case 4:
            {
                let is=false;
                document.getElementsByClassName('slider-all')[0].style.display="none";
                for(let i=0;i<Obj['products'].length;i++)
                {
                    if(Cart[Obj['products'][i].id]>=1)
                    {
                        is=true;
                        let newA = document.createElement("article");
                        //newA.onclick="OnProdClick("+Obj['products'][i].url+")";
                        newA.setAttribute('onclick',"OnProdClick('"+Obj['products'][i].url+"')")
                        document.getElementById("list").appendChild(newA);
                        let newEl = document.createElement('img');
                        newEl.src=Obj['products'][i].image;
                        newEl.alt='tovar';
                        newEl.title='Фото';
                        newA.appendChild(newEl);
                        newEl = document.createElement('h2');
                        newEl.textContent=Obj['products'][i].productName;
                        newA.appendChild(newEl);
                        newEl = document.createElement('p');
                        newEl.textContent=+""+Cart[Obj['products'][i].id] + " x " + Obj['products'][i].price+""+" грн";
                        newA.appendChild(newEl);
                        newEl = document.createElement('p');
                        newEl.textContent=Obj['products'][i].productDescription;
                        newA.appendChild(newEl);
                    }
                }
                if(is==false) window.location.hash="#catalog";
                break;
            }
        case 5:
            {
                document.getElementsByClassName('slider-all')[0].style.display="none";
                let newA = document.createElement("form");
                newA.style.border="none";
                newA.style.width = '97%';
                newA.style.height = 'auto'
                newA.style.display = 'grid';
                newA.style.gridTemplateColumns= '30% 50%';
                newA.style.gridGap='5%';
                document.getElementById("list").appendChild(newA);
                let newEl = document.createElement("a");
                newEl.textContent="Ім'я";
                newA.appendChild(newEl);
                newEl = document.createElement("input");
                newEl.id='name';
                newEl.required=true;
                newEl.type='text';
                newA.appendChild(newEl);
                newEl = document.createElement("a");
                newEl.textContent="Прізвише";
                newA.appendChild(newEl);
                newEl = document.createElement("input");
                newEl.required=true;
                newEl.id='surname';
                newEl.type='text';
                newA.appendChild(newEl);
                newEl = document.createElement("a");
                newEl.textContent="Адреса";
                newA.appendChild(newEl);
                newEl = document.createElement("input");
                newEl.required=true;
                newEl.id='address';
                newA.appendChild(newEl);
                newEl = document.createElement("a");
                newEl.textContent="Номер телефона";
                newA.appendChild(newEl);
                newEl = document.createElement("input");
                newEl.required=true;
                newEl.id='pnumber';
                newEl.type='tel';
                newEl.pattern='[0-9,+]{10,13}';
                newA.appendChild(newEl);
                newEl = document.createElement("a");
                newEl.textContent="email";
                newA.appendChild(newEl);
                newEl = document.createElement("input");
                newEl.required=true;
                newEl.type = 'email';
                newEl.id='email';
                newA.appendChild(newEl);
                newEl = document.createElement('a');
                newEl.textContent="Замовити";
                newEl.id="BtnOrder";
                newEl.setAttribute('onclick',"ToOrder()")
                newEl.style.cursor='pointer';
                newEl.style.textAlign="center";
                newEl.style.padding='2%';
                newEl.style.fontWeight='900';
                newEl.style.backgroundColor='green';
                newA.appendChild(newEl);
            }
    }
}
function ToOrder()
{
    if(document.getElementById("name").validity.valid==true
    && document.getElementById("surname").validity.valid==true
    && document.getElementById("email").validity.valid==true
    && document.getElementById("pnumber").validity.valid==true
    && document.getElementById("address").validity.valid==true
    )
    {
        for(let i=0; i<Obj['products'].length;i++)
        {
            Cart[Obj['products'][i].id]=0;
        }

        UpdateCart();
        localStorage.removeItem("cart");
        let Order = [
            {
                id: 123,
                name: document.getElementById("name").value,
                surname: document.getElementById("surname").value,
                email: document.getElementById("email").value,
                pnumber: document.getElementById("pnumber").value,
                address: document.getElementById("address").value
            }
        ];
        document.getElementById("cart").textContent="Кошик";
        document.getElementById("Order").remove();
        document.getElementById("BtnOrder").remove();
        document.getElementById("name").disabled=true;
        document.getElementById("surname").disabled=true;
        document.getElementById("email").disabled=true;
        document.getElementById("pnumber").disabled=true;
        document.getElementById("address").disabled=true;

        //console.log(Order);
        fetch('https://my-json-server.typicode.com/RobertUA/Lab4/orders',
        {
            method: "POST",
            headers: 
            {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            "orders":  JSON.stringify(Order),
        })
        .then((response) =>
        { 
            return response.json();  
        })
        .then((data) => 
        {
            window.location.hash="#order/"+data.id;
        })
    }
}
function LoadSlider()
{
    let vit = document.getElementsByClassName("image");
    for(let i=0; i<3; i++)
    {
        let newA = document.createElement("article");
        vit[0].appendChild(newA);
        let newImg = document.createElement("img");
        newImg.src=Obj['sales'][i].logo;
        newImg.setAttribute("onclick", "OnAdClick('"+Obj['sales'][i].url+"')");
        newA.appendChild(newImg);
    }
}

function AutoSlider()
{
    timer = setTimeout(function () 
    {
        if(document.getElementById("switch1").checked == true)
        {
            document.getElementById("switch1").checked = false;
            document.getElementById("switch2").checked = true;
        }
        else if(document.getElementById("switch2").checked == true)
        {
            document.getElementById("switch2").checked = false;
            document.getElementById("switch3").checked = true;
        }
        else if(document.getElementById("switch3").checked == true)
        {
            document.getElementById("switch3").checked = false;
            document.getElementById("switch1").checked = true;
        }
        AutoSlider();
    }, 10000);
}
function UpdateCart()
{
    let sum=0;
    for(let i=0;i<Obj['products'].length;i++)
    {
        sum+=Cart[Obj['products'][i].id]*Obj['products'][i].price;
    }
    if(sum>0) 
    {
        if(!document.getElementById("Order"))
        {
            let newEl = document.createElement('a');
            newEl.textContent="Замовити";
            newEl.id="Order";
            newEl.style.color='lime';

            newEl.setAttribute("onclick", "window.location.hash='#order'");
            (document.getElementsByTagName('nav')[0]).appendChild(newEl);
        }
    }
    sum = sum.toFixed(2);
    if(sum!="0.00") document.getElementById("cart").textContent="Кошик "+sum +" грн";
    else 
    {
        document.getElementById("cart").textContent="Кошик";
    }
    var serialObj = JSON.stringify(Cart)
    localStorage.setItem("cart", serialObj)
}

function hashchanged()
{
    switch(window.location.hash)
    {
        case "#home":
            {
                LoadList(-1)
                break;
            }
        case "#catalog": 
            {
                LoadList(0);
                break;
            }
        case "#catalog/type1":
            {
                LoadList(1);
                break;
            }
        case "#catalog/type2":
            {
                LoadList(2);
                break;
            }
        case "#catalog/type3":
            {
                LoadList(3);
                break;
            }
        case "#cart":
            {
                LoadList(4);
                break;
            }
        case "#order":
            {
                LoadList(5);
                break;
            }
        default:
            {
                let is=false;
                
                if(window.location.hash.slice(0,9)=="#product/")
                {
                    for(let i=0;i<Obj['products'].length;i++)
                    {
                        if('#product/'+Obj['products'][i].url==window.location.hash)
                        {
                            LoadObj(Obj['products'][i]);
                            is=true;
                            break;
                        }
                    }
                }
                if(window.location.hash.slice(0,8)=="#action/")
                {
                    for(let i=0;i<Obj['sales'].length;i++)
                    {
                        if('#action/'+Obj['sales'][i].url==window.location.hash)
                        {
                            LoadAction(Obj['sales'][i]);
                            is=true;
                            break;
                        }
                    }
                }
                if(is==false && window.location.hash.slice(0,7)!="#order/") window.location.hash="#home";
                break;
            }
    }
}

function OnProdClick(url)
{
    window.location.hash="#product/" + url;
}
function OnAdClick(url)
{
    window.location.hash="#action/" + url;
}
function LoadAction(Obj)
{
    
    document.getElementsByClassName('slider-all')[0].style.display="none";
    if(document.getElementById('list'))
    {
        document.getElementById('list').remove();
        let newlist = document.createElement('div');
        newlist.id="list";
        document.getElementsByTagName('main')[0].appendChild(newlist);
    }
    let newA = document.createElement("article");
    document.getElementById("list").appendChild(newA);
    newA.style.width='97%';
    let newEl = document.createElement('h2');
    newEl.textContent=Obj.text;
    newA.appendChild(newEl);
    newEl = document.createElement('img');
    newEl.src=Obj.logo;
    newEl.alt='action';
    newEl.title='Фото';
    newA.appendChild(newEl);
}
function LoadObj(Obj)
{
    
    document.getElementsByClassName('slider-all')[0].style.display="none";
    if(document.getElementById('list'))
    {
        document.getElementById('list').remove();
        let newlist = document.createElement('div');
        newlist.id="list";
        document.getElementsByTagName('main')[0].appendChild(newlist);
    }
    let newA = document.createElement("article");
    newA.style.cursor='auto';
    document.getElementById("list").appendChild(newA);
    newA.style.width='97%';
    let newEl = document.createElement('h2');
    newEl.textContent="В корзину";
    newEl.setAttribute('onclick',"AddToCart('"+Obj.id+"')")
    newEl.style.cursor='pointer';
    newEl.style.padding='0.5rem';
    newEl.style.marginLeft='35%';
    newEl.style.marginRight='35%';
    newEl.style.backgroundColor='green';
    newA.appendChild(newEl);
    newEl = document.createElement('h2');
    newEl.textContent=Obj.productName;
    newA.appendChild(newEl);
    newEl = document.createElement('p');
    newEl.textContent=""+Obj.price+""+" грн";
    newA.appendChild(newEl);
    newEl = document.createElement('p');
    newEl.textContent=Obj.productDescription;
    newA.appendChild(newEl);
    newEl = document.createElement('p');
    newEl.textContent=Obj.AdInfo;
    newA.appendChild(newEl);
    newEl = document.createElement('img');
    newEl.src=Obj.image;
    newEl.alt='tovar';
    newEl.title='Фото';
    newA.appendChild(newEl);
}
function AddToCart(id)
{
    Cart[id]++;
    UpdateCart();
}