document.addEventListener('DOMContentLoaded', function() {
    (_ => {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
    })();
    (_ => {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
    })();
    if (document.getElementById("scoreboard"))
    {
        const table = document.getElementById("scoreboard");
        table.innerHTML += data.map(function (entry) {
            return "<tr><td>" + entry.name + "</td><td>" + entry.score + "</td></tr>";
        }).join("\n");
    }
});