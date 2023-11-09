const adviceId = document.querySelector(".advice_id p span");
const adviceText = document.querySelector(".advice_text_container p q");
const button = document.querySelector(".dice_button");

async function fetchData() {
  try {
    // Fetch data using the Fetch API
    const response = await fetch("https://api.adviceslip.com/advice");

    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON data in the response
    const data = await response.json();
    // Access the advice from the fetched data
    adviceFromApi = data.slip.advice;
    adviceIdFromApi = data.slip.id;
    adviceId.innerHTML = adviceIdFromApi;
    adviceText.innerHTML = adviceFromApi;
    // Now you can use the advice in your application
  } catch (error) {
    adviceText.innerHTML = "❌ Something Went Wrong";
    console.log(error);
  }
}

function handleSubmit() {
  fetchData();
}

button.addEventListener("click", handleSubmit);
fetchData();
