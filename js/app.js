// function workDetail() {
//     var workDetail = document.getElementById("work-detail");
//     workDetail.classList.toggle("show");

// }

var marker = new AMap.Marker({
    icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
    position: [112.560913, 37.78817]
});

var roadNetLayer = new AMap.TileLayer.RoadNet();

var map = new AMap.Map('map', {
    zoom: 20, //级别
    center: [112.560913, 37.78817], //中心点坐标
    viewMode: '3D', //使用3D视图
    resizeEnable: true, //是否监控地图容器尺寸变化
    mapStyle: "amap://styles/whitesmoke"
});

map.add(marker);
map.add(roadNetLayer);