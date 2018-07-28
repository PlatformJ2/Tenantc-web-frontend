



function loginForm(){
    var form = '<form id="loginForm" role="form"> \
    <div id="logoCont">LOGO HERE</div> \
    <div id="social-signin">\
        <ul>\
            <li id="signin-linkedin"><a href="#" class="btn"><i class="fab fa-linkedin-in fa-lg"></i> Sign in with LinkedIn</a></li>\
        </ul>\
    </div>\
    <div class="form-group"> \
    <label for="email">Email address:</label> \
    <input type="email" class="form-control" id="email"> \
  </div> \
  <div class="form-group"> \
    <label for="pwd">Password:</label> \
    <input type="password" class="form-control" id="pwd"> \
  </div> \
  <button type="submit" class="btn btn-primary">Submit</button>';
    return form;
}

function getPageHeader(){
    var header = '<div id="header">';
    header += '<div id="logo-cont">LOGO IN HERE</div>';
    header += '<div id="profile-cont">Signin as Jez D</div>';
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