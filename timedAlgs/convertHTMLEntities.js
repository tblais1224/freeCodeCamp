// // Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

const HTML = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&apos;"
}

function convertHTML(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        HTML[str[i]] ? newStr += HTML[str[i]] : newStr += str[i]
    }
    return newStr;
}

convertHTML("Dolce & Gabbana");


// completed in 4 minutes 45 seconds



convertHTML("Dolce & Gabbana") //should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") // should return Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") // should return Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') // should return Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") // should return Schindler&apos;s List.
convertHTML("<>") // should return &lt;&gt;.
convertHTML("abc") // should return abc.