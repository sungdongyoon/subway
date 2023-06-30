const getLiveData = async () => {
  let res = await fetch(`http://swopenAPI.seoul.go.kr/api/subway/45724870526568643434635358536e/json/realtimePosition/0/20/1호선`);
  let data = await res.json();

  function subwayState() {
    let state = data.realtimePositionList[0].trainSttus;
    if(state === 0) {
      state.innerText = "진입";
    }
    if(state === 1) {
      state.innerText = "도착";
    }
    if(state === 2) {
      state.innerText = "출발";
    }
    if(state === 3) {
      state.innerText = "전역출발";
    }
  }
  subwayState();
  console.log(data);
  console.log(data.realtimePositionList[0]);
  console.log(`${data.realtimePositionList[0].subwayNm},
  현위치: ${data.realtimePositionList[0].statnNm}역,
  ${data.realtimePositionList[0].trainNo}번 열차,
  상하행선: ${data.realtimePositionList[0].updnLine},
  ${data.realtimePositionList[0].statnTnm}행,
  상태: ${data.realtimePositionList[0].trainSttus}`);

  const subwayLine = document.querySelector(".subway_line");
  const subwayUpdnLine = document.querySelector(".subway_updnLine");
  const subwayNum = document.querySelector(".subway_num");
  const subwayTerminus = document.querySelector(".subway_terminus");
  const currentLocation = document.querySelector(".current_location");

  subwayLine.innerText = `${data.realtimePositionList[0].subwayNm}`;
  subwayUpdnLine.innerText = `${data.realtimePositionList[0].updnLine}행선`;
  subwayNum.innerText = `${data.realtimePositionList[0].trainNo}번 열차`;
  subwayTerminus.innerText = `${data.realtimePositionList[0].statnTnm}행`;
  currentLocation.innerText = `현위치 : ${data.realtimePositionList[0].statnNm}역 ${data.realtimePositionList[0].trainSttus}`;
}

getLiveData()




// const getStationData = async () => {
//   let res = await fetch(`http://swopenAPI.seoul.go.kr/api/subway/45724870526568643434635358536e/json/realtimeStationArrival/0/5/서울`)
//   let data = await res.json()
//   console.log(data)
// }

// getStationData()