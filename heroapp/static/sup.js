
// jQuery.ajaxPrefilter(function(options) {
//     if (options.crossDomain && jQuery.support.cors) {
//         options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//     }
// });
function jinga(){
    // jQuery.support.cors = true;
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: "https://cors-anywhere.herokuapp.com/superheroapi.com/api/2620686038220622/644",
        headers: { Origin:"localhost", },
        success: function () {
            console.log("hi");                
        },
        Error: function(){
            console.log("why");
        }
        
});
}

document.getElementById("huh").addEventListener("click", jinga);











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