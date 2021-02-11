function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showUser(JSON.parse(this.responseText));
        } else if (this.status == 404) {
            noSuchUser(user);
        }
    };
    xhttp.open("GET", "https://api.github.com/users/" + user, true);
    xhttp.send();
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    var link = "<a target='_blank' href='" + user.html_url + "'> URL </a>";
    $('.profilePic').attr("src", user.avatar_url);
    $('.card-title').html('<span>Name: </span>' + user.name + 
    '</br><span>Id: </span>' + user.id + 
    '</br><span>Public Repos: </span>' + user.public_repos + 
    '</br><span>Github URL: </span>' + link + 
    '</br><span>Created At: </span>' + user.created_at + 
    '</br><span>Bio: </span>' + user.bio + 
    '</br><span>Blog: </span>' + user.blog + '</br><span>Location: </span>' + user.location)
    $('#profile').show();
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $("#error").text("Sorry, The user '" + username + "' does not exist");
    $('#profile').hide();
    $('#error').show();

}

$(document).ready(function () {
    $('#error').hide();
    $("#profile").hide();
    $("#find").click(function () {
        var user = $('#usr').val();
        getGithubInfo(user);
    })
});
