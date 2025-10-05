/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================
 

const validBookingJSON = {
  
  "hotelName": "Grand City Hotel",
  "checkInDate": "05-15-2024", 
  "checkOutDate": "05-20-2024",  
  
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": 29, 
      "email": "bob.smith@example.com" 
    }
  ],
  
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200, 
    "amenities": ["WiFi", "Breakfast", "Parking"] 
  }
}

//console.log(validBookingJSON);


// ============================================
// ✅ Requirements
// ============================================


- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  Invalid JSON!
  Error: Parse error on line 1:
  const validBookingJSON
^
Expecting 'STRING', 'NUMBER', 'NULL', 'TRUE', 'FALSE', '{', '[', got 'undefined'
  • Why is it a problem in JSON?
   Because it is not valid in JSON , since it is a JavaScript file because const keyword is declaring a variable and assigns it to a object.
  • What did you change to fix it?
 So I removed const validBookingJSON   then JSON is Valid! this is how I fixed .



// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
I used VS code to identify the syntax errors , missing commas, unmatched brackets ,semicolons and also braces.According to the question I also used JSONLint Validator and Formatter
(https://jsonlint.com/) This helped after correcting the erors in code and validating JSON validator.
2️⃣ How did you confirm that your corrected JSON file was valid?
After removing the line of code const validBookingJSON and clicked on validate JSON and output is JSON is valid! Then I understood that commas,brackets and datatypes are correct.

3️⃣ Which errors were the most difficult to spot? Why?
So here I observed each line of code first I changed variable invalidBookingJSON to validBookingJSON.Finding missing commas,semicolons, double quotes, some wrong email formats,brackets, backticks I felt difficult to spot.when I used the help of Online JSON validator it helped me to find errors easily.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
*/
Next time I will use syntax highlighting and also JavaScript linters to find errors before executing the code in VS code and also writing JSON code with proper spacing and validate JSON carefully. By writing the JSON code by example and hecking each line of code so that I can avoid errors in the future.
