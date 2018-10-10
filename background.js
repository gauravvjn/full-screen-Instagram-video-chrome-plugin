// try{
//  var video_src = document.evaluate('//video', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.src;
//  window.open(video_src, "_self");
// }
// catch(e){
// }


try{
    var video_src = document.evaluate('//video', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.src;
    window.open(video_src, "_self");
}
catch(e){
}
