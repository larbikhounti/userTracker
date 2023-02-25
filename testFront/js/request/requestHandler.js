
function sendRequest(data) {
     // define the request options
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  
  // send the request
  fetch("http://127.0.0.1:3000/getData", options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });

}

export {sendRequest}
 