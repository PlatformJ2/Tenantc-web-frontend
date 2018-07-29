



function authForm(){
    var form = '<form class="loginForm" id="authForm" role="form"> \
    <div id="logoCont">TENANT-C LOGO HERE</div> \
    <h2><span>Login</span></h2> \
    <div id="social-signin">\
        <ul>\
            <li id="signin-linkedin"><a href="#" class="btn"><i class="fab fa-linkedin-in fa-lg"></i> Sign in with LinkedIn</a></li>\
        </ul>\
    </div>\
    <div class="signup-only form-group"> \
        <label for="agencyname">Agency name:</label> \
        <input type="text" class="form-control" id="agencyname"> \
    </div> \
    <div class="signup-only form-group"> \
        <label for="yourname">Your name:</label> \
        <input required type="text" class="form-control" id="yourname"> \
    </div> \
    <div class="form-group"> \
    <label for="email">Email address:</label> \
    <input required type="email" class="form-control" id="youremail"> \
  </div> \
    <div class="form-group"> \
    <label for="pwd">Password:</label> \
    <input required type="password" class="form-control" id="password"> \
  </div> \
  <button type="submit" class="btn btn-primary">Continue</button> \
  <p class="formSwitch">Not registered? <a href="#" >Sign up</a></p>';
    return form;
}

function getPageHeader(){
    var header = '<div id="header">';
    header += '<div id="logo-cont">LOGO IN HERE</div>';
    header += '<div id="profile-cont">Signed in as Jez D</div>';
    header += '<nav><ul><li>Home</li><li>Properties</li><li>Tenants</li><li>Messages</li></ul></nav>';
    header += '</div>';
    return header;
}

function getHomePage(){
    var content = '<div class="content">';

    var cards = [];
    var card1 = {
        'name' :'Properties',
        'label':'Number',
        'number': 9
    }
    
    var card2 = {
        'name' :'Tenants',
        'label':'Number',
        'number': 14
    }
    var card3 = {
        'name' :'Messages',
        'label':'Unread',
        'number' : 21
    }

    cards.push(card1);
    cards.push(card2);
    cards.push(card3);
    cards.forEach(function(card) {
        //console.log(entry);
        content += '<div class="card"> \
        <div class="card-header"><h3>'+card.name+'</h3></div> \
        <div class="card-body">'+card.label+': '+card.number+'</div> \
        <div class="card-footer"><button class="btn btn-primary">View all</button></div> \
        </div>';
    });
    //content += cards;
    content +='</div>';
    $('body').addClass('home-page');
    return content;

}