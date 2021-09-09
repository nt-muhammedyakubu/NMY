function submitHandler(e) {
    e.preventDefault()
    const url = document.getElementById('url').value
    Client.checkUrl(url)
    if (Client.checkUrl(url) === true) {

        fetch('http://localhost:8080/meaningcloud-api', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "url": url })

            })
            .then(res => {
                return res.json()

            })
            .then((allData) => {
                console.log(allData)

                document.getElementById('score_tag').innerHTML = `Score_tag: ${allData.score_tag}`;
                document.getElementById('agreement').innerHTML = `Agreement: ${allData.agreement}`;
                document.getElementById('confidence').innerHTML = `Confidence: ${allData.confidence}`;
                document.getElementById('irony').innerHTML = `Irony: ${allData.irony}`;
                document.getElementById('subjectivity').innerHTML = `subjectivity: ${allData.subjectivity}`;


            })

    } else {
        alert('Not a valid url! Please Re-try!')
    }

}
export { submitHandler }