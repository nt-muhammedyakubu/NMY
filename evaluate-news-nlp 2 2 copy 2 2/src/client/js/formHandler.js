function submitHandler(e) {
    e.preventDefault()
    const url = document.getElementById('url').value
    Client.checkUrl(url)
    if (Client.checkUrl(url) === true) {

        fetch('http://localhost:8081/meaningcloud-api', {
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

                document.getElementById('polarity').innerHTML = `Polarity: ${allData.polarity}`;
                document.getElementById('agreement').innerHTML = `Agreement: ${allData.agreement}`;
                document.getElementById('confidence').innerHTML = `Confidence: ${allData.confidence}`;
                document.getElementById('irony').innerHTML = `Irony: ${allData.irony}`;

            })

    } else {
        alert('Not a valid url! Please Re-try!')
    }

}
export { submitHandler }