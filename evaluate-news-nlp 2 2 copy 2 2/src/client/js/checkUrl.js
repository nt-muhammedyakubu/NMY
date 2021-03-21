function checkUrl(url) {

    const regexr = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (regexr.test(url)) {
        return true;
    } else {
        return false;
    }
}
export { checkUrl }