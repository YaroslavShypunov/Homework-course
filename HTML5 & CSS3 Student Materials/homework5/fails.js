function function6(a,b){
    if( a > b) return 1;
    if( a < b) return -1;
}
addEventListener('message',function(){
                 var e = new Array(1000000);
for(var i = 0;i < e.length; i++){
    e[i] = Math.random() * 100;
}
e.sort(function6);

postMessage(e);

                 },true);