window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}
window.$ = window.jQuery

window.jQuery.ajax = function ({ url, method, body, headers }) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url) // 配置request
        for (let key in headers) {
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/zww',
        method: 'post',
        body: 'a=11&b=22',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'zww': '22'
        }
    }).then(
        (text) => { console.log(text) },
        (request) => { console.log(request) }
    )
})



// function success(responseText) {
//     console.log(responseText)
// }
// function fail(request) {
//     console.log(request)
// }

// myButton.addEventListener('click', (e) => {
//     $.ajax({
//         url: '/xxx',
//         method: 'get',
//     }).then(
//         (responseText) => {
//             console.log(responseText);
//             return responseText
//         },
//         (request) => { console.log('error1'); return '已经处理' }
//     ).then(
//         (上一次的处理结果) => {
//             console.log(上一次的处理结果)
//         },
//         (request) => { console.log('error2') }
//     )
// })