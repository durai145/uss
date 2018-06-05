define(function (require, exports, module) {
    "use strict";
    class Field {
        constructor() {
            this.group = 'USS'; /*it has been changed by author on 02-Feb-2010*/
            this.name = '';
            this.label = '';
            this.task = 'NONE';
            this.desc = '';
            this.entitle = 'READONLY'; // Editable /Readonly
            this.enttlname = 0xFF //Entitle name to db
            this.mndf = 'N'
            this.dataType = 'VARCHAR';  // NUMBER/VARCHAR/DATE/EMAIL/AMOUNT/LIST/DIV/
            this.cclass = 'ctable';   //
            this.parent = '';
            this.parentHtmlType = ''
            this.validate = ''
            this.dflt = ''
            this.min = '0';
            this.max = '60';
        }
    }

    Field.prototype.isValidate = function () {
        console.log("Validate Field");
        if (!this.dataType) {
            throw new Error("DataType is invalid");
        }
    }

    Field.prototype.doDataValidate = function(value) {
        value = new String(value);
        switch (this.dataType) {
            case "DATE":
                re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
                if ((value != '') && (!value.match(re))) {
                    return new Error(this.name + " has invalid " + this.dataType + " format: [" + value + "]");
                }
                break;
            case "TIME":
                re = /^\d{1,2}:\d{2}([ap]m)?$/;
                if (value != '' && !value.match(re)) {
                    return new Error(this.name + " has invalid " + this.dataType + " format: [" + value + "]");
                }
                break;
            case "NUMBER":
                if (this.max != "unlimited") {
                    re = RegExp("^[0-9.]{" + this.min + "," + this.max + "}$");
                    if (value != '' && !re.test(value)) {
                        return new Error(this.name + " has invalid " + this.dataType + " format: [" + value + "]");
                    }
                } else {
                    re = /^[A-Za-z0-9_]$/;
                    if (value != '' && !value.match(re)) {
                        return new Error(this.name + " has invalid " + this.dataType + " format: [" + value + "]");
                    }
                }
                break;
            case "VARCHAR":
                if (this.max != "unlimited") {
                    re = RegExp("^[A-Za-z0-9_\.\\s]{" + this.min + "," + this.max + "}$");
                    //console.log(typeof value);
                    //console.log(value);
                    if (value != '' && !value.match(re)) {
                        return new Error(this.name + " has invalid " + this.dataType + " format: [" + value + "]");
                    }
                } else {
                    re = /^[A-Za-z0-9_\s]+$/;
                    //TODO: handle object 
                    if (typeof value == "object") {
                        try {
                            JSON.stringify(value);
                        } catch (e) {
                            return new Error(this.name + " has invalid " + this.dataType + " format: [" + value + "]");
                        }
                    } else {
                        if ((value != "") && (!value.match(re))) {
                            return new Error(this.name + " has invalid " + this.dataType + " format: [" + value + "]");
                        }
                    }
                }
                break;
            case "LIST":
            case "OPTION":
    
                if (value != '') {
                    var inpStrArr = this.listVal.split('|');
                    var chk = 0;
                    var values = new Array();
                    inpStrArr.forEach(function (obj, index) { if (index % 2 == 0) { values.push(obj) } });
                    if (!values.some(function (elem) { return elem == value; })) {
                        return new Error(this.name + " has invalid " + this.dataType + " value : [" + value + "] expected: " + JSON.stringify(values));
                    }
                }
        }
        return null;
    }

    exports.Field = Field;
});
