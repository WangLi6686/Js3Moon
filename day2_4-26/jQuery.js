var $ = function (str) {
        var element = null;
        if (str.length > 0) {
            switch (str[0]) {
                case '.':
                    element = document.getElementsByClassName(str.substr(1, str.length - 1));
                    break;
                case '#':
                    element = document.getElementById(str.substr(1, str.length - 1))
                    break;
                default:
                    element = document.getElementsByTagName(str);
                    break;
            }
        }


        return element;
    }
