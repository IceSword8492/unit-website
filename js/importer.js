const importer = {
    import: function (src, cb) {
        const script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", cb);
        document.body.appendChild(script);
    }
};