

window.onload = function () {

    var function1 = "ADD-FUNCTION-ENDPOINT-URL";
    var function2 = "ADD-FUNCTION-ENDPOINT-URL";
    var function3 = "ADD-FUNCTION-ENDPOINT-URL";
    var function4 = "ADD-FUNCTION-ENDPOINT-URL";

    var function11 = document.getElementById("function11");
    var function12 = document.getElementById("function12");
    var function13 = document.getElementById("function13");
    var function21 = document.getElementById("function21");
    var function22 = document.getElementById("function22");
    var function23 = document.getElementById("function23");
    var function31 = document.getElementById("function31");
    var function32 = document.getElementById("function32");
    var function33 = document.getElementById("function33");
    var function41 = document.getElementById("function41");
    var function42 = document.getElementById("function42");
    var function43 = document.getElementById("function43");

    function updateFunction1() {
        $.getJSON(function1, function (data) {
            function11.textContent = data.Duration;
        });
        $.getJSON(function1, function (data) {
            function12.textContent = data.Duration;
        });
        $.getJSON(function1, function (data) {
            function13.textContent = data.Duration;
        });
    }
    function updateFunction2() {
        $.getJSON(function2, function (data) {
            function21.textContent = data.Duration;
        });
        $.getJSON(function2, function (data) {
            function22.textContent = data.Duration;
        });
        $.getJSON(function2, function (data) {
            function23.textContent = data.Duration;
        });
    }
    function updateFunction3() {
        $.getJSON(function3, function (data) {
            function31.textContent = data.Duration;
        });
        $.getJSON(function3, function (data) {
            function32.textContent = data.Duration;
        });
        $.getJSON(function3, function (data) {
            function33.textContent = data.Duration;
        });
    }
    function updateFunction4() {
        $.getJSON(function4, function (data) {
            function41.textContent = data.Duration;
        });
        $.getJSON(function4, function (data) {
            function42.textContent = data.Duration;
        });
        $.getJSON(function4, function (data) {
            function43.textContent = data.Duration;
        });
    }

    setInterval(updateFunction1, 5000);
    setInterval(updateFunction2, 5000);
    setInterval(updateFunction3, 5000);
    setInterval(updateFunction4, 5000);
}
