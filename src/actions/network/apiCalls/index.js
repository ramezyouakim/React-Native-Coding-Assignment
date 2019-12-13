export default makeCall = function (url) {
    return new Promise((reslove, reject) => {
        fetch(url)
            .then((res) => {
                reslove(res.json())
            })
            .catch((error) => {
                reject(error)
            })
    })

}