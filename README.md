# Giphy-API

Giphy API and JavaScript/jQuery

<h1>Live Link</h1>
<hr>
<a href="https://denisplaster.github.io/Giphy-API/">
<h3>Requirements</h3>
<hr>
<ul>
    <li>Generate a set of buttons based on an array of related strings</li>
    <li>Allow user to create new button based on text input</li>
    <li>Generate a set of gif images based on which button is being clicked</li>
    <li>Initialize gif's as stills but allow for animation once clicked</li>
</ul>
<h3>Technologies Used</h3>
<h3>
<ul>
    <li>Giphy API</li>
    <li>AJAX</li>
    <li>JavaScript</li>
    <li>jQuery for DOM manipulation</li>
    <li>HTML</li>
    <li>CSS</li>
<h3>Code Explanation<h3>
<hr>
<ul>
<li>Buttons are dynamically generated using jQuery, an array, and a for-loop
<li>Depending on the button clicked, that will send out an AJAX call using the appropriate query to Giphy (certain parameters must be passed <li>in such as the search term, number of responses, and an API key)
<li>Given the JSON response object, we must then parse through it to display in the HTML using jQuery and the general principle of DOM <li>manipulation
<li>HTML and CSS were used to style and give the page its basic structure
</ul>