// const getLiveData = async () => {
//   let res = await fetch(`http://swopenAPI.seoul.go.kr/api/subway/45724870526568643434635358536e/json/realtimePosition/0/20/1호선`);
//   let data = await res.json();

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







const getStationData = async () => {
  let res = await fetch(`http://swopenAPI.seoul.go.kr/api/subway/45724870526568643434635358536e/json/realtimeStationArrival/0/10/회룡`)
  let data = await res.json();
  console.log(data);
  
  const stationName = document.querySelector(".station_name");
  const destination1 = document.querySelector(".destination1");
  const destination2 = document.querySelector(".destination2");
  const stationInfo1 = data.realtimeArrivalList[4];
  const stationInfo2 = data.realtimeArrivalList[5];
  
  stationName.innerHTML = `<span>${stationInfo1.statnNm}역 도착정보</span>`;

  destination1.innerHTML = `<div>1</div><span><b>${stationInfo1.trainLineNm}</span></b> <br/> <span>${stationInfo1.arvlMsg2}</span> <br/>
  ${stationInfo1.barvlDt}초 후에 도착 예정입니다.`;

  destination2.innerHTML = `<div>2</div><span><b>${stationInfo2.trainLineNm}</span></b> <br/> <span>${stationInfo2.arvlMsg2}</span> <br/>
  ${stationInfo2.barvlDt}초 후에 도착 예정입니다.`;
}


const test = document.querySelector(".test");

const getStationInformation = async () => {
  let res = await fetch(`http://openapi.seoul.go.kr:8088/45724870526568643434635358536e/json/SearchSTNBySubwayLineInfo/1/100/ / /1호선`)
  let data = await res.json();
  console.log(data);
  let info = data.SearchSTNBySubwayLineInfo.row;
  // 1호선 역 개수 : 99개
  for(let i = 0; i < 99; i++){
    console.log(info[i].STATION_NM);
    const stationNm = info[i].STATION_NM;
    const div = document.createElement("div");
    test.appendChild(div);
    div.innerText = stationNm;
  }
}

getStationInformation();