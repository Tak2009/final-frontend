import React from "react";



class Background extends React.Component {

function change (image) {
    $('body').css({"background-image":"url($image)"});
}

function start () {
    var fruit = ["data:image/jpeg;base64,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",
     "https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/54fe7140f2e16-ghk-stainbuster-lemon-ikmp1a-mdn.jpg",
      "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg"];

    for (let index = 0; index < fruit.length; index++) {
        setTimeout(change(fruit[index]), 2000);
        
    }

}

}

export default Background