// A minimal stub-implementation of the Clay.io API.
// The actual API can be found at http://cdn.clay.io/api.js.
(function() {

    Clay.Achievement = function(obj) { };
    Clay.Achievement.prototype.award = function() { };
    Clay.Achievement.showAll = function() { };


    Clay.Leaderboard = function(obj) { };
    Clay.Leaderboard.prototype.show = function() { };
    Clay.Leaderboard.prototype.post = function() { };


    Clay.Player = {
        loggedIn: false,
        isReady: false,
        data: {
                username: 'Guest'
        },
        onUserReady:   function() { },
        login:         function() { },
        fetchUserData: function(key, handler) { },
        saveUserData:  function(localkey, localvalue) { }
    };


    if (Clay.readyFunctions.length > 0) {
        Clay.readyFunctions[0]();
    }
}());
