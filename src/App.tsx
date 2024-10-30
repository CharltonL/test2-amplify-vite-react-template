import { generateClient } from "aws-amplify/api";
import Post from "./sender";


const client = generateClient();

function App() {


  const callAPI = (id: string, value: string)=>{
      // Create a new Headers object and set the 'Content-Type' to 'application/json'
       let myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
      
      // Create the JSON string from the input values
       let raw = JSON.stringify({"id": id, "value": value});
      
      // Define the request options including method, headers, body, and redirect behavior
       let requestOptions: RequestInit = {
           method: 'POST', // Method type
           headers: myHeaders, // Headers for the request
           body: raw, // The body of the request containing the JSON string
           redirect: 'follow' // Automatically follow redirects
       };
      
      // Use the fetch API to send the request to the specified URL
       fetch("https://6dgvy6vs8l.execute-api.us-east-1.amazonaws.com/dev/test2part2", requestOptions) // Replace "API_KEY" with your actual API endpoint
       .then(response => response.text()) // Parse the response as text
       .then(result => alert(JSON.parse(result).message)) // Parse the result as JSON and alert the message
       .catch(error => console.log('error', error)); // Log any errors to the console
   }
  

  return (
    <main>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={()=>Post()}>send</button>
      <button type="button" onClick={()=>callAPI("1", "stringingingignignign")}>Submit</button>

    </main>
  );
}

export default App;
