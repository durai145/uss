(function (require, exports, module) {
    "use strict";
    var field = require("./uss.field");
    var print = function (frame) {
        field.print(frame.field);
        console.log("htmlType=" + field.htmlType);
    }

    var frame = function () {
        this.field = field,
            this.tips = '',
            this.onkeyup = 'onKeyUp(this);',
            this.onchange = 'onChange(this);',
            this.onkeydown = 'onKeyDown(this);',
            this.onkeypress = 'onKeyPress(this);',
            this.onclick = 'onClick(this);',
            this.onblure = 'onBlure(this);',
            this.listVal = '||A|A-ADD|M|M-MODIFY|I|I-INQURY|C|C-CANCEL|V|V-VERIFY',
            this.help = 'N',
            this.helpLink = 'helpload',
            this.xml = 'Y',
            this.xmlname = '',
            this.Xpath = '/',
            this.maxCol = '1',
            this.col = '0',
            this.dimensions = '1',
            this.dimensionMax = '1',
            this.dimensionMin = '0',
            this.dataCategory = '',
            this.htmlType = 'text' // newly introduced in USS05
    }

    
    //  console.log(field);
    exports.frame = frame;
    exports.print = print;
})(require, exports, module);