
function jinga(){
    var str=$("#srch").val();
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "https://cors-anywhere.herokuapp.com/superheroapi.com/api/2620686038220622/search/"+str,
        headers: { Origin:"localhost", },
        success: function (response) {
            // $("body").append(response.results.id);
            // alert(response);
            console.log(response);
            const nwimg=document.createElement('img');
            nwimg.src=response.results[0].image.url;
            // document.getElementById('gallery').appendChild(nwimg);
            console.log("tries....");
            // console.log(response.results);
            for(let i=0;i<response.results.length;i++)
            {
                var str='<div class="col-lg-4 mb-4"><div class="card " style=" background-color: rgba(246, 247, 248, 0.671);"><img class="card-image-top" src="'+response.results[i].image.url+'" ><div class="card-body"><h5 class="card-title">'+response.results[i].name+'</h5><div style="display: flex;"><table><tr><td><span>Power</span></td><td>'+response.results[i].powerstats.power+'</td></tr><tr><td><span>Intelligence</span></td><td>'+response.results[i].powerstats.intelligence+'</td></tr><tr><td><span>Gender</span></td><td>'+response.results[i].appearance.gender+'</td></tr></table><div style="width: 4rem;"></div><table><tr><td><span>Combat</span></td><td>'+response.results[i].powerstats.combat+'</td></tr><tr><td><span>Speed</span></td><td>'+response.results[i].powerstats.speed+'</td></tr><tr><td><span>Strength</span></td><td>'+response.results[i].powerstats.strength+'</td></tr></table></div><span>Publisher</span>'+response.results[i].biography.publisher+'<hr><table><tr><td colspan="2"><span>Base</span></td><td colspan="2">'+response.results[i].work.base+'</td></tr></table></div></div></div>';
                $("#newbox").append(str);
                console.log(response.results[i]);
            }
            console.log("response successful");                
        },
        Error: function(){
            console.log("Something went wrong!");
        }
        
});
}

document.getElementById("nice").addEventListener("click", jinga);
var wage = document.getElementById("srch");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

window.onload = function () {
    
    function changeImage() {   
        var BackgroundImg=["static/images/b1.jpg",
            "static/images/b2.jpg",
            "static/images/b3.jpg",
            // "static/images/b4.jpg",
            "static/images/b5.jpg",
            "static/images/b6.jpg", 
        ];
        var i = Math.floor((Math.random() * 5));
        document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 8000);
    this.document.body.style.backgroundImage = 'url("static/images/b5.jpg")';
}