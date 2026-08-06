function checkCategory(value) {
  if (isFinite(value)) {
    if (value >= 30.0) {
      return [`Obese`];
    } else if (value >= 25.0 && value <= 29.9) {

      return [`超标了`, 'red'];
    } else if (value >= 18.5 && value <= 24.9) {

      return [`正常`, 'black'];
    } else if (value <= 18.4) {

      return [`太瘦了`, 'purple'];
    }
  } else {

    return ``;
  }
}

!(function () {
  // const weightElem = document.getElementById('weight');

  // let weight = weightElem.innerHTML;
  // let height = 175;
  // let bmiMetric;
  // let bmi = weight / (height * height); // bmi in kg/cm*cm
  // 
  // //console.log(weight);
  // document.getElementById('bmi').innerHTML = bmiMetric;
  // document.getElementById('bmi-category').innerHTML = checkCategory(bmiMetric);

  var oldLoadAp = window.onload;
  window.onload = function () {
    let weightgroup = document.getElementsByName('weight')
    let bmigroup = document.getElementsByName("bmi")
    let bmicatgroup = document.getElementsByName("bmi-category")
    let height = 178;
    let weightindex = weightgroup.length
    let bmiMetric;
    //console.log(weightgroup.length)
    for (let i = 0; i < weightindex; i++) {
      let bmi = weightgroup[i].innerHTML / (height * height); // bmi in kg/cm*cm
      bmiMetric = (bmi * 10000).toFixed(1); //bmi in kg/m*m rounded to 1 decimal
      bmigroup[i].innerHTML = bmiMetric;
      [bmicatgroup[i].innerHTML, bmicatgroup[i].style.color] = checkCategory(bmiMetric);

    }


    oldLoadAp && oldLoadAp();
    //console.log(checkCategory(bmiMetric))
    // new APlayer({
    //   container: document.getElementById('aplayer'),
    //   fixed: true,
    //   autoplay: false,
    //   loop: 'all',
    //   order: 'random',
    //   theme: '#b7daff',
    //   preload: 'none',
    //   audio: [
    //     {
    //       name: '跟着感觉走',
    //       artist: 'artist1',
    //       url: '/img/Bobby.mp3',
    //       cover: '/img/inde_1.JPG'
    //     }
    //   ]
    // });
  }
})();