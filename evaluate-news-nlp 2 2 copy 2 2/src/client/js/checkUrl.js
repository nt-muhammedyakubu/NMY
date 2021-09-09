function checkUrl(url) {

    var regexr = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    var newUrl = new RegExp(regexr, 'i');
    return newUrl.test(url);

}
export { checkUrl }