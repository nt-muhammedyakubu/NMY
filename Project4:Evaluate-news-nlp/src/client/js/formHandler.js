import fetch from "node-fetch"
import axios from 'axios';

export function submitHandler(e) {
    e.preventDefault()

    // check what text was put into the form field
    //let formText = document.getElementById('name').value
    //checkForName(formText)

    const url = document.getElementById('url').value
    Client.checkUrl(url)

    if (Client.checkUrl(url) === true) {
        console.log("::: Form Submitted :::")

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

                document.getElementById('polarity').innerHTML = `Polarity: ${allData.polarity}`;
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${allData.subjectivity}`;
            })

    } else {
        alert('Url not valid! Please Re-try!')

    }
}