function followers() {
    swal({
        icon: "warning",
      });
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://api.scratch.mit.edu/proxy/users/irlius/activity/count', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var response = xhttp.responseText;
            var obj = JSON.parse(response);
            document.getElementById("test").innerHTML = (obj.msg_count);
            
        }
    };

}
