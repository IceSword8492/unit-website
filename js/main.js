document.addEventListener('DOMContentLoaded', function() {
    (function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
    })();
    (function () {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
    })();
    if (document.getElementById("scoreboard"))
    {
        const table = document.getElementById("scoreboard");
        table.innerHTML += data.map(function (entry, index) {
            return "<tr><td>" + (!index ? "👑 " : "") + entry.name + "</td><td>" + entry.score + "</td></tr>";
        }).join("\n");
    }
});