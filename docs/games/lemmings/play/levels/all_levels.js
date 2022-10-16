/*
[
  100,            init_lemmings
   15,            min_release_rate
  480,            play_time (seconds)
   90,            save_lemmings
 'lemmin1p.mid',  level_music
  [               Array or lemming types
    0,              'climb'
    5,              'float'
   10,              'explode'
    5,              'block'
   30,              'build'
    0,              'bash'
    0,              'mine'
    5               'dig'
  ],
  'cb0091',         codebase ('../levels/codebase/cb0091.js');
  'JONHGINMHL',     level_code
  'Steel Works'     level_title
]
*/

const levels_fun = [
    [ 10, 50, 300,  1,    'tim1p.mid', [ 0, 0, 0, 0, 0, 0, 0,10], 'cb0001', 'BAJHLDHBCL', 'Just dig!'],
    [ 10, 50, 300,  1,    'tim2p.mid', [ 0,10, 0, 0, 0, 0, 0, 0], 'cb0002', 'IJJLDLCCCL', 'Only floaters can survive this'],
    [ 50, 50, 300,  5,    'tim3p.mid', [ 0, 0, 0,10, 0, 0, 0, 0], 'cb0003', 'NJLDLCADCY', 'Tailor-made for blockers'],
    [ 10,  1, 300, 10,    'tim4p.mid', [10, 0, 0, 0, 0, 0, 1, 0], 'cb0004', 'HNLHCIOECW', 'Now use miners and climbers'],
    [ 50, 50, 300,  5,    'tim5p.mid', [ 0, 0, 0, 0, 0,50, 0, 0], 'cb0005', 'LDLCAJNFCK', 'You need bashers this time'],
    [ 50, 50, 300, 10,    'tim6p.mid', [ 0, 0, 5, 5, 0, 0, 0, 0], 'cb0006', 'DLCIJNLGCT', 'A task for blockers and bombers'],
    [ 50, 50, 300, 25,    'tim7p.mid', [ 0, 0, 0, 0,20, 0, 0, 0], 'cb0007', 'HCAONNLHCX', 'Builders will help you here'],
    [100, 88, 300, 95,    'tim8p.mid', [20,20,20,20,20,20,20,20], 'cb0008', 'CINNLDLICJ', 'Not as complicated as it looks'],
    [100, 99, 300, 90,    'tim9p.mid', [20,20,20,20,20,20,20,20], 'cb0009', 'CEJHMDLJCN', 'As long as you try your best'],
    [ 20, 50, 300, 10, 'tenlemsp.mid', [20,20,20,20,20,20,20,20], 'cb0010', 'IKHMDLCKCT', 'Smile if you love lemmings']
];

const levels_tricky = [
    [100, 50, 240, 50, 'lemmin1p.mid', [10,10,10,10,10,10,10,10], 'cb0031', 'HCENNONPDW', 'This should be a doddle!'],
    [ 40,  1, 300, 40, 'lemmin2p.mid', [ 0, 0, 0, 0, 0, 0, 0,40], 'cb0032', 'CIOLMFLQDU', 'We all fall down'],
    [100, 50, 360, 50, 'lemmin3p.mid', [20,20,20,20,40,20,20,20], 'cb0033', 'CAJJDLMBEV', 'A ladder would be handy'],
    [100, 55, 480, 20,    'tim1p.mid', [40,40,40,40,40,40,40,40], 'cb0034', 'MKJNLICCEJ', 'Here\'s one I prepared earlier'],
    [100, 20, 300, 20,    'tim2p.mid', [20,20,20,20,20,20,20,20], 'cb0035', 'NHLDMCEDEN', 'Careless clicking costs lives'],
    [  5, 50, 300,  4,    'tim3p.mid', [20,20,20,20,20,20,20,20], 'cb0036', 'HLDMCIOEET', 'Lemmingology'],
    [ 75, 20, 300, 55, 'lemmin1p.mid', [20,20,20,20,20,20,20,20], 'cb0037', 'LDMCAJNFEN', 'Been there, seen it, done it'],
    [100, 40, 480, 60, 'lemmin2p.mid', [ 0, 0, 0,20,50, 0, 0, 0], 'cb0038', 'DICMJNNGEY', 'Lemming sanctuary in sight'],
    [ 75, 50, 300, 70, 'lemmin3p.mid', [20,20,20,20,20,20,20,20], 'cb0039', 'MCENLLDHEV', 'They just keep on coming'],
    [100, 60, 480, 94,  'cancanp.mid', [20,20,20,20,20,20,20,20], 'cb0040', 'CMNLLDMIEO', 'There\'s a lot of them about']
];

const levels_taxing = [
    [100, 40, 240,  99,    'tim1p.mid', [ 2, 2, 2, 2, 8, 2, 2, 2], 'cb0061', 'ONICAJNNFP', 'If at first you don\'t succeed..'],
    [100, 70, 300,  80,    'tim2p.mid', [10, 5, 5,10,10, 5, 5, 5], 'cb0062', 'FMCIKLMOFR', 'Watch out, there\'s traps about'],
    [100,  1, 120, 100,    'tim3p.mid', [30,30,30, 0,30,30,30,30], 'cb0063', 'ICENNONPFJ', 'Heaven can wait (we hope!!!!)'],
    [ 40, 50, 420,  30,    'tim4p.mid', [ 0, 0, 5, 4,20, 2, 2, 2], 'cb0064', 'CINNMFMQFY', 'Lend a helping hand....'],
    [ 60, 50, 300,  45,    'tim5p.mid', [ 0, 0, 5, 4,20,10, 0, 3], 'cb0065', 'GEJJNDHBGM', 'The Prison!'],
    [ 50, 99, 180,  30,    'tim6p.mid', [ 0, 0, 3, 3, 0, 5, 0, 1], 'cb0066', 'MJJNLHGCGN', 'Compression Method 1'],
    [100, 55, 180,  98,    'tim7p.mid', [ 1, 0, 5, 1, 6, 1, 0, 0], 'cb0034', 'NHNKHGADGU', 'Every Lemming for himself!!!'],
    [100, 20, 240, 100,    'tim8p.mid', [10,10,10, 0,10,10, 0, 0], 'cb0035', 'HLDLGIOEGY', 'The Art Gallery'],
    [ 20, 50, 240,  20,    'tim9p.mid', [ 2, 1, 1, 2, 2, 1, 1, 2], 'cb0010', 'LDLGAJNFGS', 'Perseverance'],
    [  5, 50, 300,   5, 'mountaip.mid', [ 0, 0, 5, 5,15, 5, 5, 5], 'cb0036', 'DLGIJNLGGL', 'Izzie Wizzie lemmings get busy']
];

const levels_mayhem = [
    [100, 15, 480,  90, 'lemmin1p.mid', [ 0, 5,10, 5,30, 0,0,5], 'cb0091', 'NJMFLGALHM', 'Steel Works'],
    [100, 15, 360,  90, 'lemmin2p.mid', [10, 5,10,10,30, 0,0,0], 'cb0092', 'JONHGINMHL', 'The Boiler Room'],
    [ 30, 99,  60,  30, 'lemmin3p.mid', [ 1, 1, 1, 1, 1, 1,1,1], 'cb0093', 'ONHGEKNNHJ', 'It\'s hero time!'],
    [100, 99,  60, 100,    'tim3p.mid', [ 0, 0,10, 0, 0,10,0,0], 'cb0094', 'FLGIJNMOHX', 'The Crossroads'],
    [ 80, 80, 300,  60,    'tim4p.mid', [ 2, 2,10,10, 5, 1,0,5], 'cb0095', 'HGAOLMNPHX', 'Down, along, up. In that order'],
    [ 75, 50, 240,  75,    'tim5p.mid', [ 0, 0,10, 0,15, 0,5,5], 'cb0039', 'GINNONHQHT', 'One way or another'],
    [ 50, 50, 300,  45,    'tim6p.mid', [ 1,10, 0, 0, 6, 4,0,4], 'cb0097', 'GAJJLDMBIN', 'Poles Apart'],
    [100, 55, 300,  90,    'tim7p.mid', [ 5, 0, 5, 5,10, 0,5,5], 'cb0098', 'IJHLDMGCIU', 'Last one out is a rotten egg!'],
    [100, 90, 240,  99,    'tim8p.mid', [ 0, 0,20, 1,12, 5,0,1], 'cb0099', 'NHLDMGADIR', 'Curse of the Pharaohs'],
    [ 75,  1, 300,  50,    'tim9p.mid', [ 2, 3, 4, 2,20, 4,0,2], 'cb0100', 'HLDMGIOEIL', 'Pillars of Hercules']
];


function _getAry(rat) {
    switch (rat) {
        case 'fun':    return levels_fun;
        case 'tricky': return levels_tricky;
        case 'taxing': return levels_taxing;
        case 'mayhem': return levels_mayhem;
        default: console.log('Unhandled rating '+rating);
    }
}
    

function getListing(rat) {
    const ary = _getAry(rat);
    var lst = new Array();
    for (var i=0; i<ary.length; i++) {
        lst.push( {
            code: ary[i][7],
            name: ary[i][8],
            completed: 0
        });
    }
    return lst;
}

function getLevel(rating, num) {
    return _getAry(rating)[num];
}

function getNumLevels(rat) {
    return _getAry(rat).length;
}

function getCode(rat, num) {
    return getLevel(rat, num)[7];
}
