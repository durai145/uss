(function (require, exports, module) {
    "use strict";
    var field = function() {
        this.group = 'USS', /*it has been changed by author on 02-Feb-2010*/
        this.name = '',
        this.label = '',
        this.task = 'NONE',
        this.desc = '',
        this.entitle = 'READONLY'; // Editable /Readonly
        this.enttlname = 0xFF, //Entitle name to db
        this.mndf = 'N',
        this.dataType = 'VARCHAR',  // NUMBER/VARCHAR/DATE/EMAIL/AMOUNT/LIST/DIV/
        this.cclass = 'ctable',   //
        this.parent = '',
        this.parentHtmlType = '',
        this.validate = '',
        this.dflt = '',
        this.min = '0',
        this.max = '60',
        /*
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
        this.htmlType = 'text', // newly introduced in USS05
        */
        this.camelCase = false
    }
    var print = function(field) {
        console.log("name=" + field.name);
    }
    exports.field = field;

}
(require,exports,module));
