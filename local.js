var friendList = [];



function addFriendToSystem(usuario,contra){

    var newfriend ={
        id:usuario,
        country:pcountry
    };
    console.log(newfriend);
    friendList.push(newfriend);
    localStorageFriendList(friendList);
}

function getFriendList(){
    var storedLIst = localStorage.getItem('localFriendList');
    if(storedList == null){
        friendList =[];
    }else{
        friendList = JSON.parce(storedList);
    }
    return friendList;
}

function localStorageFriendList(plist){
    localStorage.setItem('localFriendList', JSON.stringify(plist));
}