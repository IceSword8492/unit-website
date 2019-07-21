document.addEventListener('DOMContentLoaded', function() {
    // DEV
    let dev = document.createElement("div");
    dev.style.color = "rgba(255, 0, 0, .3)";
    dev.style.position = "fixed";
    dev.style.left = "1%";
    dev.style.top = "50%";
    dev.style.zIndex = 2;
    dev.style.pointerEvents = "none";
    dev.style.fontSize = "5rem";
    dev.textContent = "開発中";
    document.body.appendChild(dev);

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