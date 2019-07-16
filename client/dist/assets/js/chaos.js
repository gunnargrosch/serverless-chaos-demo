function updateFunction1() {
    $.ajax({
        type: 'GET',
        url: function1,
        async: true,
        dataType: 'json',
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('jqXHR:');
            console.log(jqXHR);
            //function11.textContent = 'Function 3 (' + data.Duration + ' ms)';
            function11status.textContent = 'Status ' + jqXHR.status + ' ' + textStatus;
            function11content.textContent = errorThrown;
        },
        success: function (data, textStatus, jqXHR) {
            console.log('jqXHR:');
            console.log(jqXHR);
            function11.textContent = 'Function 1 (' + data.Duration + ' ms)';
            function11status.textContent = 'Status ' + jqXHR.status + ' ' + textStatus;
            function11content.textContent = JSON.stringify(data.Parameter.replace(/\\/g, " "));
            function11img.src = data.itemUrl;
        }
    });
}
function updateFunction2() {
    $.ajax({
        type: 'GET',
        url: function2,
        async: true,
        dataType: 'json',
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('jqXHR:');
            console.log(jqXHR);
            //function21.textContent = 'Function 3 (' + data.Duration + ' ms)';
            function21status.textContent = 'Status ' + jqXHR.status + ' ' + textStatus;
            function21content.textContent = errorThrown;
        },
        success: function (data, textStatus, jqXHR) {
            console.log('jqXHR:');
            console.log(jqXHR);
            function21.textContent = 'Function 2 (' + data.Duration + ' ms)';
            function21status.textContent = 'Status ' + jqXHR.status + ' ' + textStatus;
            function21content.textContent = JSON.stringify(data.Parameter.replace(/\\/g, " "));
            function21img.src = data.itemUrl;
        }
    });
}
function updateFunction3() {
    $.ajax({
        type: 'GET',
        url: function3,
        async: true,
        dataType: 'json',
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('jqXHR:');
            console.log(jqXHR);
            //function31.textContent = 'Function 3 (' + data.Duration + ' ms)';
            function31status.textContent = 'Status ' + jqXHR.status + ' ' + textStatus;
            function31content.textContent = errorThrown;
        },
        success: function (data, textStatus, jqXHR) {
            console.log('jqXHR:');
            console.log(jqXHR);
            function31.textContent = 'Function 3 (' + data.Duration + ' ms)';
            function31status.textContent = 'Status ' + jqXHR.status + ' ' + textStatus;
            function31content.textContent = JSON.stringify(data.Parameter.replace(/\\/g, " "));
            function31img.src = data.itemUrl;
        }
    });
}

window.onload = function () {

    setInterval(updateFunction1, 5000);
    setInterval(updateFunction2, 5000);
    setInterval(updateFunction3, 5000);
}
