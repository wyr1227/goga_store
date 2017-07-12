export const cookie = function( name, value, days ){
  // if value is undefined, get the cookie value
  if( value === undefined ){
    var cookiestring = "; " + window.document.cookie;
    var cookies = cookiestring.split( "; " + name + "=" );
    if ( cookies.length === 2 ){
      return cookies.pop().split( ";" ).shift();
    }
    return null;
  }
  else {
    // if value is a false boolean, we'll treat that as a delete
    if( value === false ){
      days = -1;
    }
    var expires = "";
    if ( days ) {
      var date = new Date();
      date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
      expires = "; expires="+date.toGMTString();
    }
    window.document.cookie = name + "=" + value + expires + "; path=/";
  }
};


export const validate = {
  mobile(telephone) {
    let pattern = /^(1.[0-9]{9})$/;
    return pattern.test(telephone);
  }
}
