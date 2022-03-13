let data = [
    {
        title: 'cafa-898-8',
        content: '서울 남산',
        date: '2022-03-13',
        lat: 37.547683,
        lng: 126.722610
    }
]

var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

var map = new naver.maps.Map('map', mapOptions);

for(let i in data){
    let target = data[i];
    let  latlng= new naver.maps.LatLng(target.lat, target.lng);
    console.log(latlng);
    maker = new naver.maps.Marker({
    map:map,
    position: latlng,
    icon: {
        content:`<div style="
        font-size:2rem;
        border: 1px solid black;
        background: #ff6863;
        opacity: 0.8;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        "
        ><div style="margin-left:2rem; font-size:3rem; color: #ff6863;">Here</div>
        </div>`,
    }
});
map.setZoom(14, false);
map.panTo(latlng);
}