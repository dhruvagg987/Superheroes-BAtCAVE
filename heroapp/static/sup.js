
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
            document.getElementById('gallery').appendChild(nwimg);
            console.log("tries....");
            console.log(response.results);
            for(let i=0;i<response.results.length;i++)
            {
                var str='<div class="col-lg-4 mb-4"><div class="card "><img class="card-image-top" src="'+response.results[i].image.url+'" ><div class="card-body"><h5 class="card-title">'+response.results[i].name+'</h5><p class="card-text">'+response.results[i]+'</p></div></div></div>';
                $("#newbox").append(str);
                console.log(response.results[i]);
            }
            console.log("hi..its working");                
        },
        Error: function(){
            console.log("why");
        }
        
});
}

document.getElementById("nice").addEventListener("click", jinga);











// window.onload = function () {

//     function changeImage() {   
//         var BackgroundImg=["./images/deadpool.jpg",
//             "./images/phantom.png",
//             // "./Img/Bg3.jpg",
//             // "./Img/Bg4.jpg"
//         ];
//         var i = Math.floor((Math.random() * 4));
//         document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
//     }
//     window.setInterval(changeImage, 5000);
// }
// url: "http://www.omdbapi.com/?i=tt0468569&apikey=e8ac2654",