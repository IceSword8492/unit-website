document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    if (document.getElementById("scorelist"))
    {
        const table = document.getElementById("scorelist");
        table.innerHTML += data.map(function (entry) {
            return "<tr><td>" + entry.name + "</td><td>" + entry.score + "</td></tr>";
        }).join("\n");
    }
});