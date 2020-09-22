const board_layouts = [
    {"id":"2175883231","name":"Turtle","cat":"Classic","map":[[0,[[0,[[2,12]]],[2,[[6,8]]],[4,[[4,10]]],[6,[[2,12]]],[7,[0,[26,2]]],[8,[[2,12]]],[10,[[4,10]]],[12,[[6,8]]],[14,[[2,12]]]]],[1,[[2,[[8,6]]],[4,[[8,6]]],[6,[[8,6]]],[8,[[8,6]]],[10,[[8,6]]],[12,[[8,6]]]]],[2,[[4,[[10,4]]],[6,[[10,4]]],[8,[[10,4]]],[10,[[10,4]]]]],[3,[[6,[[12,2]]],[8,[[12,2]]]]],[4,[[7,13]]]]},
    {"id":"1830783848","name":"Fly","cat":"Classic","map":[[0,[[0,[[1,4],[19,4]]],[2,[[1,4],[12,2],[19,4]]],[4,[[5,9]]],[6,[[0,2],[9,5],[24,2]]],[8,[0,[8,6],26]],[10,[[4,10]]],[12,[[0,4],[10,4],[20,4]]],[14,[[0,4],[11,3],[20,4]]]]],[1,[[0,[[3,3],[19,3]]],[2,[[3,3],[12,2],[19,3]]],[4,[7,19]],[6,[[0,2],[11,3],[24,2]]],[8,[0,[10,4],26]],[10,[[8,6]]],[12,[[2,3],[20,3]]],[14,[[2,3],[11,3],[20,3]]]]],[2,[[1,[[4,2],[20,2]]],[2,13],[6,13],[8,[[12,2]]],[10,[[12,2]]],[13,[[3,2],[21,2]]],[14,13]]],[3,[[8,13],[10,13]]]]},
    {"id":"3955482880","name":"Dragon","cat":"Classic","map":[[0,[[0,[[6,2]]],[1,[[10,2],20]],[2,[[4,3],26]],[3,[1,12,[18,2],24,28]],[5,[[0,2],[10,2],[17,2],24,28]],[6,[4,22]],[7,[1,6,[9,2],[16,3],28]],[8,14],[9,[[6,4],[16,3],27]],[10,[3,14,22]],[11,[[6,4],18]],[12,[[2,2],[22,2]]],[13,18],[14,[3,[14,2],[24,2]]]]],[1,[[0,[[6,2]]],[1,[[10,2]]],[2,[[4,3],26]],[3,[1,12,19,24,28]],[5,[[0,2],[10,2],[17,2],24,28]],[6,22],[7,[1,6,[9,2],[16,3],28]],[8,14],[9,[[6,4],[16,3],27]],[10,[3,14,22]],[11,[[8,3],18]],[12,[[2,2],[22,2]]],[13,18],[14,[3,15,25]]]],[2,[[0,7],[1,[[9,2]]],[2,[[5,2]]],[3,12],[4,[1,24,28]],[5,[11,18]],[6,[1,28]],[7,[10,[17,2]]],[9,[[9,2],14,[17,2]]],[11,[3,[9,2]]],[13,3]]],[3,[[1,7],[7,18],[9,[10,18]],[11,10]]]]},
    {"id":"709938609","name":"Arena","cat":"Classic","map":[[0,[[0,[[0,5],[16,5]]],[2,[[0,4],[10,3],[18,4]]],[4,[[0,3],12,[20,3]]],[6,[[0,2],[10,3],[22,2]]],[8,[[0,3],12,[20,3]]],[10,[[0,4],[10,3],[18,4]]],[12,[[0,5],[16,5]]]]],[1,[[0,[[0,4],[18,4]]],[2,[[0,3],[20,3]]],[3,12],[4,[[0,2],[22,2]]],[6,[0,12,24]],[8,[[0,2],[22,2]]],[9,12],[10,[[0,3],[20,3]]],[12,[[0,4],[18,4]]]]],[2,[[0,[[0,3],[20,3]]],[2,[[0,2],[22,2]]],[4,[0,24]],[8,[0,24]],[10,[[0,2],[22,2]]],[12,[[0,3],[20,3]]]]],[3,[[0,[[0,2],[22,2]]],[2,[0,24]],[10,[0,24]],[12,[[0,2],[22,2]]]]],[4,[[0,[0,24]],[12,[0,24]]]]]},
    {"id":"4277830847","name":"Bridge","cat":"Classic","map":[[0,[[0,[[0,5],12,[16,5]]],[2,[[0,4],[10,3],[18,4]]],[4,[[0,3],[8,5],[20,3]]],[6,[[0,2],[6,7],[22,2]]],[8,[[0,3],[8,5],[20,3]]],[10,[[0,4],[10,3],[18,4]]],[12,[[0,5],12,[16,5]]]]],[1,[[0,[[0,4],[18,4]]],[2,[[0,3],12,[20,3]]],[4,[[0,2],[10,3],[22,2]]],[6,[0,12,24]],[8,[[0,2],[10,3],[22,2]]],[10,[[0,3],12,[20,3]]],[12,[[0,4],[18,4]]]]],[2,[[0,[[2,2],[20,2]]],[2,[[0,2],[22,2]]],[4,[0,24]],[8,[0,24]],[10,[[0,2],[22,2]]],[12,[[2,2],[20,2]]]]]]},
    {"id":"588942537","name":"Kitty","cat":"Classic","map":[[0,[[0,6],[1,4],[2,2],[4,[0,[6,6],27]],[5,18],[6,[0,[4,7],[24,4]]],[7,[[18,2]]],[8,[[2,8],[24,5]]],[9,[[18,2]]],[10,[[2,8],[24,5]]],[11,[[18,2]]],[12,[[2,8],[24,5]]],[13,[18,22]],[14,[[4,7],[24,4]]],[16,[5,15]]]],[1,[[0,6],[1,4],[2,2],[4,[0,27]],[6,[0,[6,6]]],[8,[[4,7],[26,2]]],[9,18],[10,[[4,7],[24,4]]],[12,[[6,6],[26,2]]],[16,[5,15]]]],[2,[[8,[[8,5]]],[9,[[26,2]]],[10,[[8,5]]],[11,[[26,2]]]]],[3,[[9,[[10,3]]]]]]},
    {"id":"3878481316","name":"Monkey","cat":"Classic","map":[[0,[[0,[[0,4],[18,2],28]],[2,[0,[6,3],[16,2],[26,2]]],[4,[[0,2],[10,4],26]],[6,[[8,7],26]],[7,6],[8,[[8,5],[20,2],26]],[10,[[0,2],10,14,22,26]],[12,[2,[8,2],14,18,[22,3]]],[14,[[2,4],[14,3]]]]],[1,[[0,[[2,2]]],[1,[0,6,18,28]],[2,[[8,2],16]],[3,[0,26]],[4,[[10,4]]],[5,26],[6,[[8,6]]],[7,[20,26]],[8,[[8,5]]],[9,[22,26]],[10,10],[11,[2,14,22,26]],[12,[10,24]],[13,[2,8]],[14,[[4,2],[15,2]]]]],[2,[[0,3],[2,0],[4,[[10,4],26]],[6,[[9,5],26]],[8,[[10,4],26]],[10,[22,26]],[12,2],[14,[5,16]]]],[3,[[4,[[10,4]]],[5,26],[6,[[10,4]]],[7,26],[8,[[10,4]]],[9,26]]],[4,[[6,26],[8,26]]]]},
    {"id":"4047697972","name":"OX","cat":"Classic","map":[[0,[[0,[[4,2],[24,2]]],[2,[[4,4],[20,4]]],[3,14],[4,[1,[6,4],[16,5]]],[5,14],[6,[[2,6],[16,5]]],[7,[0,14,26]],[8,[[2,6],[16,5]]],[9,14],[10,[1,[6,4],[16,5]]],[11,14],[12,[[4,4],[20,4]]],[14,[[4,2],[24,2]]]]],[1,[[1,[5,25]],[4,[[8,8]]],[6,[[2,12]]],[8,[[2,12]]],[10,[[8,8]]],[13,[5,25]]]],[2,[[4,[[14,3]]],[6,[[10,7]]],[7,2],[8,[[10,7]]],[10,[[14,3]]]]],[3,[[6,[[14,3]]],[8,[[14,3]]]]]]},
    {"id":"2680421030","name":"Ram","cat":"Classic","map":[[0,[[0,[[3,3],[21,3]]],[2,[[0,15]]],[4,[[0,5],[12,3],[20,5]]],[6,[[0,2],[6,2],11,14,17,[20,2],[26,2]]],[8,[[0,5],[12,3],[20,5]]],[10,[[2,3],[13,2],[22,3]]],[12,[[13,2]]],[14,14]]],[1,[[0,[[4,2],[22,2]]],[2,[[2,13]]],[4,[[1,4],[12,3],[21,4]]],[6,[1,7,11,14,17,21,27]],[8,[[1,4],[13,2],[21,4]]],[10,[[3,2],14,[23,2]]],[12,14],[14,14]]],[2,[[2,[[3,2],14,[23,2]]],[4,[[2,3],[13,2],[22,3]]],[8,[[2,3],14,[22,3]]]]],[3,[[4,[4,14,24]]]]]},
    {"id":"2810552848","name":"Rooster","cat":"Classic","map":[[0,[[0,[0,[13,5],[24,3]]],[2,[[1,2],[12,4],24]],[4,[[2,8],[22,4]]],[5,20],[6,[[0,3],[8,6],[22,2],28]],[7,20],[8,[3,[10,5],[22,2]]],[9,26],[10,[[10,2],[16,2]]],[11,[[26,2]]],[12,[[8,2],[16,2]]],[14,[[4,3],[18,2]]]]],[1,[[0,[[14,4],[25,2]]],[2,[2,[13,3],24]],[4,[[2,2],[10,4],[22,2]]],[5,[8,28]],[6,[[2,2],[10,8]]],[8,[[10,5],[22,2]]],[10,26],[12,[9,17]],[14,[[5,2],19]]]],[2,[[0,[[15,3]]],[2,[[14,2]]],[3,24],[4,[[2,2],[12,2]]],[5,[10,16,[22,2]]],[6,[[2,2],[12,2]]],[7,[10,[16,2],[22,2]]],[8,[[12,2]]],[14,6]]],[3,[[5,[3,[12,2]]],[6,[16,23]],[7,[[12,2]]]]],[4,[[6,13]]]]},
    {"id":"2390420165","name":"Snake","cat":"Classic","map":[[0,[[0,[[7,2],[19,2]]],[2,[[4,5],[16,5]]],[4,[[3,2],[10,2],[16,2],[22,2]]],[6,[[0,3],[10,2],[16,2],[22,2]]],[8,[[0,2],[8,3],[16,2],[22,2]]],[9,[[26,2]]],[10,[[8,6],[22,2]]],[12,[[8,6]]],[14,[[10,4]]]]],[1,[[0,[[7,2],[19,2]]],[2,[[4,5],[16,5]]],[4,[[3,2],[10,2],[16,2],[22,2]]],[6,[[0,3],[10,2],[16,2],[22,2]]],[8,[[0,2],[8,3],[16,2],[22,2]]],[9,26],[10,[[8,6],[22,2]]],[12,[[8,6]]],[14,[[11,3]]]]],[2,[[4,[11,17]],[6,[11,17]],[7,1],[8,[11,17]],[10,[[8,6]]],[12,[[8,6]]],[14,[[12,2]]]]],[3,[[11,[[9,5]]]]]]},
    {"id":"2038574563","name":"Hare","cat":"Classic","map":[[0,[[0,[[2,4]]],[2,[[0,6]]],[3,[[20,2]]],[4,[[2,6],18]],[5,[16,[20,3]]],[6,[[12,2],18]],[7,[10,16,[20,5]]],[8,[[12,2],18]],[9,[16,[20,3]]],[10,[[2,6],18]],[11,[[20,2]]],[12,[[0,6]]],[14,[[2,4]]]]],[1,[[0,[[4,2]]],[2,[[2,4]]],[3,[[20,2]]],[4,[[4,3]]],[5,[[16,5]]],[6,[[12,2]]],[7,[10,[16,7]]],[8,[[12,2]]],[9,[[16,5]]],[10,[[4,3]]],[11,[[20,2]]],[12,[[2,4]]],[14,[[4,2]]]]],[2,[[0,5],[2,[[4,2]]],[3,21],[4,5],[5,[[16,5]]],[7,[[14,6]]],[9,[[16,5]]],[10,5],[11,21],[12,[[4,2]]],[14,5]]],[3,[[2,5],[5,[[18,3]]],[7,[[18,3]]],[9,[[18,3]]],[12,5]]],[4,[[6,[[19,2]]],[8,[[19,2]]]]]]},
    {"id":"1488318675","name":"Tiger","cat":"Classic","map":[[0,[[0,[[0,2]]],[1,[[4,3],[20,5]]],[2,[[0,2]]],[3,[[8,2],[18,2]]],[4,[[12,3]]],[5,[[8,2],18]],[6,[[4,2],[12,3],24,28]],[7,[[8,2],[18,2]]],[8,[[4,2],[12,3],22,26]],[9,[[8,2],18]],[10,[[12,3]]],[11,[[8,2],[18,2]]],[12,[[0,2]]],[13,[[4,3],[20,5]]],[14,[[0,2]]]]],[1,[[0,[[0,2]]],[1,[[4,2],[20,5]]],[2,[[0,2]]],[3,[8,[18,2]]],[4,[[10,4]]],[5,[8,18]],[6,[6,[10,4],24,28]],[7,[4,8,[18,2]]],[8,[6,[10,4],22,26]],[9,[8,18]],[10,[[10,4]]],[11,[8,[18,2]]],[12,[[0,2]]],[13,[[4,2],[20,5]]],[14,[[0,2]]]]],[2,[[5,[[8,6]]],[7,[[8,6]]],[9,[[8,6]]]]],[3,[[5,[12,18]],[7,[10,16]],[9,[8,14]]]]]},
    {"id":"1566704849","name":"Boar","cat":"Classic","map":[[0,[[0,14],[2,[[0,3],[10,5],[24,3]]],[4,[0,4,[12,3],24,28]],[6,[0,[10,5],28]],[8,[[0,2],[6,9],[26,2]]],[10,[[0,5],[12,3],[20,5]]],[12,[[2,3],[10,5],[22,3]]],[14,[[13,2]]]]],[1,[[2,[[1,2],[12,3],[25,2]]],[4,[[12,3]]],[5,[0,28]],[6,[[10,5]]],[7,[0,28]],[8,[[10,5]]],[10,[[1,4],[12,3],[21,4]]],[12,[[3,2],[12,3],[23,2]]],[14,14]]],[2,[[2,[2,[13,2],26]],[4,[[13,2]]],[6,[0,[11,4],28]],[8,[[11,4]]],[10,[[2,3],[13,2],[22,3]]],[12,[4,[13,2],24]]]],[3,[[2,14],[4,14],[6,[[13,2]]],[8,[[13,2]]],[10,14],[12,14]]]]},
    {"id":"2788427354","name":"Bar","cat":"Classic","map":[[0,[[0,[[0,10]]],[2,[[0,10]]],[4,[[0,10]]],[6,[[0,10]]],[8,[[0,10]]],[10,[[0,10]]],[12,[[0,10]]],[14,[[0,10]]],[16,[[0,10]]]]],[1,[[3,[[3,7]]],[5,[[3,7]]],[7,[[3,7]]],[9,[[3,7]]],[11,[[3,7]]],[13,[[3,7]]]]],[2,[[6,[[6,4]]],[8,[[6,4]]],[10,[[6,4]]]]]]},
    {"id":"2683869356","name":"Farandole","cat":"Classic","map":[[0,[[0,[[4,2],[12,3],[22,2]]],[1,[2,[8,2],[18,2],26]],[2,[5,23]],[3,[1,27]],[4,[[10,2],[16,2]]],[5,[1,[6,2],[20,2],27]],[6,[4,24]],[7,[[0,2],[9,6],[26,2]]],[8,[4,24]],[9,[1,[6,2],[20,2],27]],[10,[[10,2],[16,2]]],[11,[1,27]],[12,[5,23]],[13,[2,[8,2],[18,2],26]],[14,[[4,2],[12,3],[22,2]]]]],[1,[[0,[[4,2],[12,3],[22,2]]],[1,[2,[8,2],[18,2],26]],[3,[1,27]],[4,[[10,2],[16,2]]],[5,[1,[6,2],[20,2],27]],[6,[4,24]],[7,[[0,2],[11,4],[26,2]]],[8,[4,24]],[9,[1,[6,2],[20,2],27]],[10,[[10,2],[16,2]]],[11,[1,27]],[13,[2,[8,2],[18,2],26]],[14,[[4,2],[12,3],[22,2]]]]],[2,[[4,[[10,2],[16,2]]],[5,[8,20]],[7,[[13,2]]],[9,[8,20]],[10,[[10,2],[16,2]]]]]]},
    {"id":"1492921254","name":"Ceremonial","cat":"Classic","map":[[0,[[0,[[2,2],[9,7],[26,2]]],[2,[[3,2],[25,2]]],[3,[0,15,30]],[4,[[4,2],13,17,[24,2]]],[5,[0,[8,2],15,[20,2],30]],[6,[12,18]],[7,[0,15,30]],[8,[12,18]],[9,[0,[8,2],15,[20,2],30]],[10,[[4,2],13,17,[24,2]]],[11,[0,15,30]],[12,[[3,2],[25,2]]],[14,[[2,2],[9,7],[26,2]]]]],[1,[[0,[[2,2],[10,6],[26,2]]],[2,[[3,2],[25,2]]],[4,[0,[4,2],[14,2],[24,2],30]],[5,[[8,2],[20,2]]],[6,[0,12,15,18,30]],[8,[0,12,15,18,30]],[9,[[8,2],[20,2]]],[10,[0,[4,2],[14,2],[24,2],30]],[12,[[3,2],[25,2]]],[14,[[2,2],[10,6],[26,2]]]]],[2,[[0,[[13,3]]],[4,15],[6,15],[7,[0,30]],[8,15],[10,15],[14,[[13,3]]]]],[3,[[7,15]]]]},
    {"id":"1463206324","name":"Hourglass","cat":"Classic","map":[[0,[[0,[[0,13]]],[2,[0,12,24]],[3,[2,22]],[4,[0,4,12,20,24]],[5,[2,6,18,22]],[6,[0,4,8,12,16,20,24]],[7,[2,6,10,14,18,22]],[8,[0,4,8,12,16,20,24]],[9,[2,6,18,22]],[10,[0,4,12,20,24]],[11,[2,22]],[12,[0,12,24]],[14,[[0,13]]]]],[1,[[1,[0,12,24]],[3,[0,12,24]],[4,[2,22]],[5,[0,4,20,24]],[6,[2,6,18,22]],[7,[0,4,[8,2],[14,2],20,24]],[8,[2,6,18,22]],[9,[0,4,20,24]],[10,[2,22]],[11,[0,12,24]],[13,[0,12,24]]]],[2,[[2,[0,24]],[4,[0,24]],[6,[0,24]],[8,[0,24]],[10,[0,24]],[12,[0,24]]]],[3,[[3,[0,24]],[5,[0,24]],[7,[0,24]],[9,[0,24]],[11,[0,24]]]],[4,[[4,[0,24]],[6,[0,24]],[8,[0,24]],[10,[0,24]]]]]},
    {"id":"2770595719","name":"Black Hole","cat":"Classic","map":[[0,[[0,[[0,8]]],[2,[[0,8]]],[4,[[0,3],[10,3]]],[6,[[0,3],[10,3]]],[8,[[0,8]]],[10,[[0,8]]]]],[1,[[0,[[0,8]]],[2,[[2,6]]],[4,[[2,2],[10,2]]],[6,[[2,2],[10,2]]],[8,[[2,6]]],[10,[[0,8]]]]],[2,[[0,[[0,8]]],[2,[[2,6]]],[4,[[2,2],[10,2]]],[6,[[2,2],[10,2]]],[8,[[2,6]]],[10,[[0,8]]]]],[3,[[0,[[0,8]]],[2,[[4,4]]],[4,[4,10]],[6,[4,10]],[8,[[4,4]]],[10,[[0,8]]]]]]},
    {"id":"1752166124","name":"Butterfly","cat":"Classic","map":[[0,[[0,[8,24]],[1,[2,10,22,30]],[2,[0,4,12,20,28,32]],[3,[2,6,14,18,26,30]],[4,[0,8,24,32]],[5,[4,10,[14,3],22,28]],[6,[1,[6,2],[24,2],31]],[7,[3,[11,6],29]],[8,[[5,3],[23,3]]],[9,[[13,4]]],[10,[[6,3],[22,3]]],[11,[4,[14,3],28]],[12,[[6,4],[20,4]]],[13,[3,[15,2],29]],[14,[1,[5,2],11,21,[25,2],31]],[15,[3,9,16,23,29]],[16,[[5,2],[25,2]]]]],[1,[[2,[2,30]],[3,[0,6,26,32]],[5,16],[6,[1,7,25,31]],[7,[12,[15,2],20]],[8,[5,27]],[9,[8,[14,3],24]],[10,[6,26]],[11,[4,[15,2],28]],[12,[6,[10,2],[20,2],26]],[13,[3,29]],[14,[1,[5,2],11,21,[25,2],31]],[15,[3,9,23,29]],[16,[6,26]]]],[2,[[6,16]]]]},
    {"id":"679913014","name":"Flakes","cat":"Classic","map":[[0,[[0,[0,16,32]],[1,[2,30]],[2,[0,4,[14,3],28,32]],[3,[2,30]],[4,[0,[13,4],32]],[5,[11,21]],[6,[9,23]],[7,[7,11,21,25]],[8,[5,9,16,23,27]],[9,[7,11,21,25]],[10,[9,23]],[11,[11,21]],[12,[0,[13,4],32]],[13,[2,30]],[14,[0,4,[14,3],28,32]],[15,[2,30]],[16,[0,16,32]]]],[1,[[0,[0,16,32]],[1,[2,30]],[2,[0,[14,3],32]],[3,[2,30]],[4,[0,13,16,19,32]],[5,[11,21]],[6,[9,23]],[7,[7,25]],[8,[5,27]],[9,[7,25]],[10,[9,23]],[11,[11,21]],[12,[0,13,16,19,32]],[13,[2,30]],[14,[0,[14,3],32]],[15,[2,30]],[16,[0,16,32]]]],[2,[[0,[0,16,32]],[2,[0,32]],[4,[0,32]],[6,[9,23]],[7,[7,25]],[8,[5,27]],[9,[7,25]],[10,[9,23]],[12,[0,32]],[14,[0,[14,3],32]],[16,[0,16,32]]]],[3,[[7,[7,25]],[8,[5,27]],[9,[7,25]]]],[4,[[8,[5,27]]]]]},
    {"id":"2257355141","name":"Temple","cat":"Classic","map":[[0,[[0,[[0,4],[10,5],[22,4]]],[2,[[8,7]]],[4,[0,[6,9],28]],[6,[0,[4,11],28]],[8,[0,[4,11],28]],[10,[0,[6,9],28]],[12,[[8,7]]],[14,[[0,4],[10,5],[22,4]]]]],[1,[[0,14],[2,[[12,3]]],[4,[[10,5]]],[6,[[8,7]]],[7,[0,6,22,28]],[8,[[8,7]]],[10,[[10,5]]],[12,[[12,3]]],[14,14]]],[2,[[3,14],[5,[[12,3]]],[7,[[10,5]]],[9,[[12,3]]],[11,14]]],[3,[[5,14],[7,[[12,3]]],[9,14]]],[4,[[7,[[13,2]]]]]]},
    {"id":"2951481859","name":"Fire","cat":"Classic","map":[[0,[[0,14],[2,[[8,7]]],[4,[[6,9]]],[6,[[4,11]]],[8,[[0,6],14,[18,6]]],[10,[[4,11]]],[12,[[6,9]]],[14,[[8,7]]],[16,14]]],[1,[[2,[[12,3]]],[4,[[8,7]]],[6,[[6,9]]],[8,[[4,3],14,[20,3]]],[10,[[6,9]]],[12,[[8,7]]],[14,14],[16,14]]],[2,[[2,14],[4,14],[6,[[8,7]]],[8,[6,14,22]],[10,[[8,7]]],[12,14],[14,14]]],[3,[[6,[[12,3]]],[8,14],[10,[[12,3]]]]],[4,[[6,14],[8,14],[10,14]]]]},
    {"id":"544607066","name":"Broken Wall","cat":"Classic","map":[[0,[[0,[[0,3],[8,2],[14,3],[22,2],[28,3]]],[2,[[0,3],[8,2],[14,3],[22,2],[28,3]]],[4,[[0,3],[8,2],[14,3],[22,2],[28,3]]],[8,[[0,5],[12,5],[24,5]]],[12,[[0,3],[8,2],[14,3],[22,2],[28,3]]],[14,[[0,3],[8,2],[14,3],[22,2],[28,3]]],[16,[[0,3],[8,2],[14,3],[22,2],[28,3]]]]],[1,[[1,[[1,2],[15,2],[29,2]]],[3,[[1,2],[15,2],[29,2]]],[8,[[1,4],[13,4],[25,4]]],[13,[[1,2],[15,2],[29,2]]],[15,[[1,2],[15,2],[29,2]]]]],[2,[[2,[2,16,30]],[8,[[2,3],[14,3],[26,3]]],[14,[2,16,30]]]]]},
    {"id":"2674681711","name":"Center Point","cat":"Classic","map":[[0,[[0,14],[1,[[0,4],[22,4]]],[2,14],[3,[[0,5],12,16,[20,5]]],[4,14],[5,[[0,4],[22,4]]],[6,14],[7,[4,24]],[8,[[6,9]]],[9,[4,24]],[10,14],[11,[[0,4],[22,4]]],[12,14],[13,[[0,5],12,16,[20,5]]],[14,14],[15,[[0,4],[22,4]]],[16,14]]],[1,[[2,[[1,3],14,[23,3]]],[4,[[1,3],14,[23,3]]],[6,14],[8,[[4,11]]],[10,14],[12,[[1,3],14,[23,3]]],[14,[[1,3],14,[23,3]]]]],[2,[[3,[[2,2],[24,2]]],[4,14],[6,14],[8,[[10,5]]],[10,14],[12,14],[13,[[2,2],[24,2]]]]],[3,[[3,[3,25]],[6,14],[8,[[12,3]]],[10,14],[13,[3,25]]]]]},
    {"id":"1088330854","name":"Steps","cat":"Classic","map":[[0,[[0,[[0,9]]],[2,[[0,8],20]],[4,[[0,7],[18,2]]],[6,[[0,6],[16,3]]],[8,[[0,5],[14,4]]],[10,[[0,4],[12,5]]],[12,[[0,3],[10,6]]],[14,[[0,2],[8,7]]]]],[1,[[0,[[0,7]]],[2,[[0,6]]],[4,[[0,5]]],[6,[[0,4],20]],[8,[[0,3],[18,2]]],[10,[[0,2],[16,3]]],[12,[0,[14,4]]],[14,[[12,5]]]]],[2,[[0,[[0,5]]],[2,[[0,4]]],[4,[[0,3]]],[6,[[0,2]]],[8,0],[10,20],[12,[[18,2]]],[14,[[16,3]]]]],[3,[[0,[[0,3]]],[2,[[0,2]]],[4,0],[14,20]]],[4,[[0,0]]]]},
    {"id":"1378681582","name":"Gloom","cat":"Classic","map":[[0,[[0,14],[2,[[12,3]]],[3,[0,28]],[4,[[8,7]]],[5,[[0,2],6,22,[26,2]]],[6,[[8,2],[18,2]]],[7,[[0,4],[22,4]]],[8,[[8,3],[16,3]]],[9,[[0,4],[22,4]]],[10,[[8,2],[18,2]]],[11,[[0,2],6,22,[26,2]]],[12,[[8,7]]],[13,[0,28]],[14,[[12,3]]],[16,14]]],[1,[[0,14],[2,14],[4,[[8,2],14,[18,2]]],[5,[1,27]],[6,[[8,2],[18,2]]],[7,[1,27]],[8,[[8,3],[16,3]]],[9,[1,27]],[10,[[8,2],[18,2]]],[11,[1,27]],[12,[[8,2],14,[18,2]]],[14,14],[16,14]]],[2,[[1,14],[3,14],[4,[[8,2],[18,2]]],[6,[1,[8,2],[18,2],27]],[8,[1,[8,3],[16,3],27]],[10,[1,[8,2],[18,2],27]],[12,[[8,2],[18,2]]],[13,14],[15,14]]],[3,[[2,14],[6,[1,27]],[8,[1,27]],[10,[1,27]],[14,14]]]]},
    {"id":"130253071","name":"Castle","cat":"Classic","map":[[0,[[0,[[0,3],[16,3]]],[2,[0,4,16,20]],[3,[[6,5]]],[4,[[0,3],[16,3]]],[5,[6,14]],[7,[6,14]],[9,[6,14]],[10,[[0,3],[16,3]]],[11,[[6,5]]],[12,[0,4,16,20]],[14,[[0,3],[16,3]]]]],[1,[[0,[[0,3],[16,3]]],[2,[0,4,16,20]],[3,[[6,5]]],[4,[[0,3],[16,3]]],[5,[6,14]],[7,[6,14]],[9,[6,14]],[10,[[0,3],[16,3]]],[11,[[6,5]]],[12,[0,4,16,20]],[14,[[0,3],[16,3]]]]],[2,[[0,[[0,3],[16,3]]],[2,[0,4,16,20]],[4,[[0,3],[16,3]]],[10,[[0,3],[16,3]]],[12,[0,4,16,20]],[14,[[0,3],[16,3]]]]],[3,[[0,[0,4,16,20]],[4,[0,4,16,20]],[10,[0,4,16,20]],[14,[0,4,16,20]]]]]},
    {"id":"399933105","name":"Crawler","cat":"Classic","map":[[0,[[0,[[0,5],[14,6]]],[2,[[2,4],[12,8]]],[4,[[0,13]]],[6,[[6,8]]],[8,[[6,8]]],[10,[[0,13]]],[12,[[2,4],[12,8]]],[14,[[0,5],[14,6]]]]],[1,[[1,[[3,3]]],[2,[[18,4]]],[3,[[3,3]]],[4,[[12,6]]],[6,[[10,5]]],[7,[[6,2]]],[8,[[10,5]]],[10,[[12,6]]],[11,[[3,3]]],[12,[[18,4]]],[13,[[3,3]]]]],[2,[[3,21],[6,[[12,3]]],[7,10],[8,[[12,3]]],[11,21]]],[3,[[7,[[12,3]]]]]]},
    {"id":"738084013","name":"Pawn","cat":"Classic","map":[[0,[[0,[[8,2]]],[1,[6,12]],[2,[[8,2]]],[4,[[2,8]]],[6,[[8,2]]],[7,[6,12]],[8,[[8,2]]],[9,[6,12]],[10,[[8,2]]],[12,[[2,8]]],[14,[[0,10]]]]],[1,[[0,[[8,2]]],[1,[6,12]],[2,[[8,2]]],[4,[[2,8]]],[6,[[8,2]]],[7,[6,12]],[8,[[8,2]]],[9,[6,12]],[10,[[8,2]]],[12,[[2,8]]],[14,[[0,10]]]]],[2,[[0,[[8,2]]],[2,[[8,2]]],[4,[[4,6]]],[6,[[8,2]]],[7,[6,12]],[8,[[8,2]]],[9,[6,12]],[10,[[8,2]]],[12,[[4,6]]],[14,[[2,8]]]]],[3,[[0,[[8,2]]],[2,[[8,2]]],[4,[[6,4]]],[6,[[8,2]]],[8,[[8,2]]],[10,[[8,2]]],[12,[[8,2]]],[14,[[4,6]]]]],[4,[[4,[[6,4]]]]]]},
    {"id":"2005925237","name":"Block","cat":"Classic","map":[[0,[[0,[[0,9]]],[2,[[0,9]]],[4,[[0,9]]],[6,[[0,9]]],[8,[[0,9]]],[10,[[0,9]]],[12,[[0,9]]],[14,[[0,9]]]]],[1,[[0,[[0,9]]],[2,[[0,9]]],[4,[[0,9]]],[6,[[0,9]]],[8,[[0,9]]],[10,[[0,9]]],[12,[[0,9]]],[14,[[0,9]]]]]]},
    {"id":"2206664028","name":"Borders","cat":"Classic","map":[[0,[[0,[[0,19]]],[2,[[0,19]]],[4,[[0,19]]],[6,[[0,5],[28,5]]],[8,[[0,4],9,27,[30,4]]],[10,[[0,5],[28,5]]],[12,[[0,19]]],[14,[[0,19]]],[16,[[0,19]]]]]]}
];

export { board_layouts };
