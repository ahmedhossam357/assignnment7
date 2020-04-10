var webname = document.getElementById("webname");
var ay7aga = document.getElementById("url");
var weblist;

if(localStorage.getItem("website")==null)
{
    weblist=[];
}
else
{
    weblist=JSON.parse(localStorage.getItem("website"));
    display();
}

function add()
{
    if(webname.value=="" && ay7aga.value=="")
{
    window.alert("You Must Fill All Fields");
}
    product=
    {
        name:webname.value,
        web:ay7aga.value,
    }
    weblist.push(product);
    localStorage.setItem("website",JSON.stringify(weblist));
    display();
}

function display()
{
    var cartoona=``;
    for(var i=0;i<weblist.length;i++)
    {
        cartoona+=
        `<div class="test">
                    <div class="row">
                        <div class="col-md-6">
                        `+weblist[i].name+`
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-warning">Visit</button>
                            <button class="btn btn-danger" onclick="del(`+i+`)">Delete</button>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById("demo").innerHTML=cartoona;
    clear();
}

function del(index)
{
    weblist.splice(index,1);
    localStorage.setItem("website",JSON.stringify(weblist));
    display();

}

function clear()
{
    webname.value="";
    ay7aga.value="";
}