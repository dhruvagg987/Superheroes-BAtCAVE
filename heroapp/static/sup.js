
function jinga(){
    var str=$("#srch").val();
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "https://cors-anywhere.herokuapp.com/superheroapi.com/api/2620686038220622/search/"+str,
        headers: { Origin:"localhost", },
        success: function (cont) {
            $("body").append(cont.results[0].id);
            console.log(cont);
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