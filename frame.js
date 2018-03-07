(function (require, exports, module) {
    var ussfield = require("./field");
    var field=new ussfield.Field();
    "use strict";
    class Frame extends ussfield.Field {
        constructor() {
            super();
            this.cclass = 'ctable',   //
            this.parent = '',
            this.parentHtmlType = '',
            this.validate = '',
            this.dflt = '',
            this.min = '0',
            this.max = '60',
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
            this.dataCategory = '';
        }
    }

    Frame.prototype.isFrameValidate = function () {
        this.isValidate();

    }

    Frame.prototype.isFrameDataValidate =function(value) {
        this.doDataValidate(value);
    }
    exports.Frame = Frame;
})(require, exports, module);