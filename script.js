////הקוד הזה מציג את הקילוגרם ויחידות  אבל לא את הבחירה של התמונה 


// function addProduct() {
//     const userQuantity = document.getElementById("quantity").value;
//     const unit = document.getElementById("unit").value; 
//     if (userQuantity === "") {
//         alert("עליך למלא את כל הפרטים!");
//         return;
//     }

//     let productImage = "";
//     if (unit === "banana") {
//         productImage = "Assets/banana.jpeg";
//     } else if (unit === "apple") {
//         productImage = "Assets/apple.jpeg";
//     } else if (unit === "melon") {
//         productImage = "Assets/melon.jpeg";
//     }
    
  

//     const imageContent = `<img src="${productImage}" alt="${unit}" style="max-width: 100px; max-height: 100px;">`;
//     const unitText = unit === "kg" ? 'ק"ג' : "יחידות";

    
//     const tableRow = `<tr><td>${unit === "banana" ? "בננה" : unit === "apple" ? "תפוח" : "מלון"}</td><td>${userQuantity}</td><td>${unitText}</td><td>${imageContent}</td></tr>`;

    
//     const tableBody = document.getElementById("userProducts");
//     tableBody.innerHTML += tableRow;

//     document.forms["userAdd"].reset();
// }


//הקוד הזה מציג את התמונה אבל לא את הבחירה של קילוגרם או יחידות 
function addProduct() {
    const userQuantity = document.getElementById("quantity").value;
    const unit = document.getElementById("product-unit").value; // Changed to match the select's id
    if (userQuantity === "") {
        alert("עליך למלא את כל הפרטים!");
        return;
    }

    let productImage = "";
    if (unit === "banana") {
        productImage = "Assets/banana.jpeg";
    } else if (unit === "apple") {
        productImage = "Assets/apple.jpeg";
    } else if (unit === "melon") {
        productImage = "Assets/melon.jpeg";
    }

    // בניית התוכן של התמונה והוספתה לטבלה
    const imageContent = `<img src="${productImage}" alt="${unit}" style="max-width: 100px; max-height: 100px;">`;
    const tableRow = `<tr><td>${unit === "banana" ? "בננה" : unit === "apple" ? "תפוח" : "מלון"}</td><td>${userQuantity} ${
        unit === "kg" ? 'ק"ג' : "יחידות"
    }</td><td>${imageContent}</td></tr>`;

    // הוספת השורה לטבלה
    const tableBody = document.getElementById("userProducts");
    tableBody.innerHTML += tableRow;

    // איפוס טופס ההוספה
    document.forms["userAdd"].reset();
}
    