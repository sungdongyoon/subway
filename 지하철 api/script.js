// const getLiveData = async () => {
//   let res = await fetch(`http://swopenAPI.seoul.go.kr/api/subway/45724870526568643434635358536e/json/realtimePosition/0/51/4호선`);
//   let data = await res.json();
//   console.log(data)
//   let state = data.realtimePositionList[0].trainSttus;
//   let direction = data.realtimePositionList[0].updnLine;
//   function subwayDirection() {
//     if(direction == 0) {
//       direction = "상";
//     }
//     if(direction == 1) {
//       direction = "하";
//     }
//   }
//   function subwayState() {
//     if(state == 0) {
//       state = "진입";
//     }
//     if(state == 1) {
//       state = "도착";
//     }
//     if(state == 2) {
//       state = "출발";
//     }
//     if(state == 1) {
//       state = "전역출발";
//     }
//   }
//   subwayDirection();
//   subwayState();
//   // console.log(data);
//   // console.log(data.realtimePositionList[0]);

//   const subwayLine = document.querySelector(".subway_line");
//   const subwayUpdnLine = document.querySelector(".subway_updnLine");
//   const subwayNum = document.querySelector(".subway_num");
//   const subwayTerminus = document.querySelector(".subway_terminus");
//   const currentLocation = document.querySelector(".current_location");

//   subwayLine.innerText = `${data.realtimePositionList[0].subwayNm}`;
//   subwayUpdnLine.innerText = `${direction}행선`;
//   subwayNum.innerText = `${data.realtimePositionList[0].trainNo}번 열차`;
//   subwayTerminus.innerText = `${data.realtimePositionList[0].statnTnm}행`;
//   currentLocation.innerText = `현위치 : ${data.realtimePositionList[0].statnNm}역 ${state}`;
// }

// getLiveData()






const getStationData = async (target) => {
  let res = await fetch(`http://swopenAPI.seoul.go.kr/api/subway/45724870526568643434635358536e/json/realtimeStationArrival/0/10/${target}`)
  let data = await res.json();
  console.log(data);
  
  const stationName = document.querySelector(".station_name");
  const destination1 = document.querySelector(".destination1");
  const destination2 = document.querySelector(".destination2");
  const stationInfo1 = data.realtimeArrivalList[0];
  const stationInfo2 = data.realtimeArrivalList[1];
  
  stationName.innerHTML = `<span>${stationInfo1.statnNm}역 도착정보</span>`;

  destination1.innerHTML = `<span class="direction"><b>${stationInfo1.trainLineNm}</span></b><br/>
  <span class="state">${stationInfo1.arvlMsg2}</span><br/>
  <span class="arr_time">${stationInfo1.barvlDt}초 후에 도착 예정입니다.</span>`;
  destination2.innerHTML = `<span class="direction"><b>${stationInfo2.trainLineNm}</span></b><br/>
  <span class="state">${stationInfo2.arvlMsg2}</span><br/>
  <span class="arr_time">${stationInfo2.barvlDt}초 후에 도착 예정입니다.</span>`;
}


const station = document.querySelector(".station");

const getStationInformation = async () => {
  let res = await fetch(`http://openapi.seoul.go.kr:8088/45724870526568643434635358536e/json/SearchSTNBySubwayLineInfo/1/100/ / /4호선`)
  let data = await res.json();
  let row = data.SearchSTNBySubwayLineInfo.row;
  row.sort((a, b) => (
    a.FR_CODE- b.FR_CODE
  ))
  // 4호선 역 개수 : 51개
  for(let i = 0; i < 51; i++){
    const stationNm = row[i].STATION_NM;
    const stationDiv = document.createElement("div");
    station.appendChild(stationDiv);
    stationDiv.innerHTML = `<div class="station_item" value=${stationNm}>${stationNm}</div>`;
  };
  const stationItem = document.querySelectorAll(".station_item");
  stationItem.forEach((it) => {
    it.addEventListener("click", (e) => {
      const target = e.target.textContent;
      getStationData(target);
      console.log(target)
    })
  })
}

getStationInformation();