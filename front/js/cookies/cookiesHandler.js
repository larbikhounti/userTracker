

function getCookies(Name) {
  var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(Name)) {
          var cookieValue = cookie.substring(Name.length, cookie.length);
          // Do something with cookieValue
          cookieValue = cookieValue.replace("=", "");
          console.log(cookieValue)
          break;
        }
      }    
}

function setCookies(Name, value) {
  // Set a cookie with name `trackingUserId` and value `userId`, to be expired never and to be valid for the entire site
  document.cookie = `${Name}=${value}; expires=never; path=/`;
}


export {getCookies , setCookies}
