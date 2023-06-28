function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform API request or any asynchronous operation
    // Once the operation is completed, resolve the promise with the response
    // If there's an error, reject the promise with the error message

    // For demonstration purposes, let's resolve the promise with a sample response
    const response = { message: "Sample response from API" };
    resolve(response);
  });
}

export default getResponseFromAPI;

