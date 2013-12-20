// I'm using eval(). If you don't like it, fuck you.
;(function() {

    var methods = $('.method-apply');
    
    var getMethodVal = function(method) {
        return eval(method);
    };

    var run = function() {
        var elem,
            method,
            val,
            returnLoc,
            i;
        $('div.content-wrapper').fadeTo(500, 1.0);
        for(i = 0; i < methods.length; i++) {
            elem = $(methods[i]);
            method = elem.text();
            returnLoc = elem.parent().siblings().children().eq(0);
            val = getMethodVal(method);
            // set value / style
            $(returnLoc).text(val);
            if (val === true) {
                returnLoc.addClass('true');
            } else if (val === false) {
                returnLoc.addClass('false');
            } else if (!isNaN(val)) {
                returnLoc.addClass('number');
            } else if (typeof val === 'string') {
                returnLoc.addClass('string');
            }
        }
    };

    run();

})();