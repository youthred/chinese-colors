// $.ajax({
//     method: 'GET',
//     // https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}${path}
//     url: 'https://cdn.jsdelivr.net/gh/youthred/chinese-colors@master/resources/color/jieqi-colors-simple.json',
//     dataType: 'json',
//     async: false,
//     success: function (jieqiList) {
//         $('#jieqiList').empty()
//         $.each(jieqiList, function (index, jieqi) {
//             console.log(jieqi)
//             $('#jieqiList').append(`<p class="block">${jieqi.number} ${jieqi.jieqi}</p>`)
//             $.each(jieqi.colors, function (index, color) {
//                 let colorRaw = JSON.stringify(color).replace(/\"/g,"'")
//                 // $('#jieqiList').append(`<span onclick="changeColor(${colorRaw})" class="font-bg" style="color: ${color.hex};"><span class="font">${color.name} ${color.pinyin}</span></span><br>`)
//                 $('#jieqiList').append(`<span class="mdui-card" onclick="changeColor(${colorRaw})">
//                                           <div class="mdui-card-media font-bg mdui-float-left" style="width: 200px; height: 200px; color: ${color.hex}">
//                                             <!--<img src="https://cdn.jsdelivr.net/gh/youthred/chinese-colors@master/resources/pic/texture.png"/>-->
//                                             <div class="mdui-card-media-covered mdui-card-media-covered-transparent">
//                                               <div class="mdui-card-primary font-bg" style="color: ${color.hex};">
//                                                 <span class="mdui-card-primary-title font">${color.name}</span>
//                                                 <span class="mdui-card-primary-subtitle font">${color.pinyin}</span>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </span>`)
//             })
//             $('#jieqiList').append('<br>')
//         })
//     }
// })

$.ajax({
    method: 'GET',
    // https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}${path}
    url: 'https://cdn.jsdelivr.net/gh/youthred/chinese-colors@master/resources/color/jieqi-colors-simple.json',
    dataType: 'json',
    async: false,
    success: function (jieqiList) {
        $('#jieqiList').empty()
        $.each(jieqiList, function (index, jieqi) {
            $.each(jieqi.colors, function (index, color) {
                let colorRaw = JSON.stringify(color).replace(/\"/g,"'")
                $('#jieqiGrid').append(`<div class="mdui-col mdui-m-a-0 mdui-p-a-0">
                                                <div class="mdui-grid-tile mdui-m-a-0 mdui-p-a-0" onclick="changeColor('${jieqi.jieqi}', ${colorRaw})" onmouseover="colorGridMouseover('${jieqi.jieqi}', ${colorRaw})">
                                                  <div class="mdui-card-media font-bg" style="width: 100%; height: 200px; color: ${color.hex}">
                                                    <!--<img src="https://cdn.jsdelivr.net/gh/youthred/chinese-colors@master/resources/pic/texture.png"/>-->
                                                    <div class="mdui-card-media-covered mdui-card-media-covered-top">
                                                      <div class="mdui-card-primary">
                                                        <div class="mdui-card-primary-title" style="color: ${color.hex};">${jieqi.jieqi}</div>
                                                        <!--<div class="mdui-card-primary-subtitle">Subtitle</div>-->
                                                      </div>
                                                    </div>
                                                    <div class="mdui-card-media-covered mdui-card-media-covered-transparent">
                                                      <div class="mdui-card-primary font-bg" style="color: ${color.hex};">
                                                        <div class="mdui-card-primary-title font-bg-fontcolor">${color.name}</div>
                                                        <div class="mdui-card-primary-subtitle font-bg-fontcolor color-grid-pinyin">${color.pinyin}</div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>`)
                // $('#jieqiGrid').append(`<div class="mdui-col mdui-m-a-0 mdui-p-a-0" onclick="changeColor(${colorRaw})">
                //                             <div class="mdui-grid-tile mdui-m-a-0 mdui-p-a-0 font-bg mdui-float-left" style="width: 100%; height: 200px; color: ${color.hex}">
                //                                 <!--<img src="https://cdn.jsdelivr.net/gh/youthred/chinese-colors@master/resources/pic/texture.png"/>-->
                //                               <div class="mdui-grid-tile-actions mdui-grid-tile-actions-top">
                //                                 <div class="mdui-grid-tile-text">
                //                                   <div class="mdui-grid-tile-title font-size-32px" style="color: ${color.hex};">${jieqi.jieqi}</div>
                //                                 </div>
                //                               </div>
                //                               <div class="mdui-grid-tile-actions mdui-grid-tile-actions-transparent">
                //                                 <div class="mdui-grid-tile-text">
                //                                   <div class="mdui-grid-tile-title font-bg-fontcolor font-size-32px">${color.name}</div>
                //                                   <div class="mdui-grid-tile-subtitle font-bg-fontcolor color-grid-pinyin">${color.pinyin}</div>
                //                                 </div>
                //                               </div>
                //                             </div>
                //                           </div>`)
            })
        })
    }
})

function changeColor(jieqiname, color) {
    $('.container').css('background-color', color.hex)
    $('.word-bigscreen').css('color', color.hex)
    $('#wordBigscreenColorname').text(color.name)
    $('#wordBigscreenJieqi').text(jieqiname)

    // 重新播放动画 https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Animations_API/Tips
    document.querySelector(".word-bigscreen").animate({opacity: [0, 1]}, 5000)
}

function colorGridMouseover(jieqiname, color) {
    // changeColor(jieqiname, color)
}