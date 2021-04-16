function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value

    const formdata = new FormData();
    formdata.append("key", "9d87555e8faa41de323561e444471bfb");
    formdata.append("txt", "egypt and franc going to world cup");
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(response => ({
            status: response.status,
            body: response.json()
        }))
        .then(({ status, body }) => {
            console.log(status, body)
            return body;
        }).then((response) => {
            document.getElementById('results').innerHTML += "subjectivity: " + response.subjectivity;
            document.getElementById('results').innerHTML += JSON.stringify(response);
            console.log(response)
        })
        .catch(error => console.log('error', error));

    // // check what text was put into the form field
    // let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    // fetch('https://api.meaningcloud.com/sentiment-2.1')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.status.msg
    // })
}
export { handleSubmit }
