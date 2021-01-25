var escapeDictionary = {
    "numerical":["&#32;","&#33;","&#34;","&#35;","&#36;","&#37;","&#38;","&#39;","&#40;","&#41;","&#42;","&#43;","&#44;","&#45;","&#46;","&#47;","&#48;","&#49;","&#50;","&#51;","&#52;","&#53;","&#54;","&#55;","&#56;","&#57;","&#58;","&#59;","&#60;","&#61;","&#62;","&#63;","&#64;","&#65;","&#66;","&#67;","&#68;","&#69;","&#70;","&#71;","&#72;","&#73;","&#74;","&#75;","&#76;","&#77;","&#78;","&#79;","&#80;","&#81;","&#82;","&#83;","&#84;","&#85;","&#86;","&#87;","&#88;","&#89;","&#90;","&#91;","&#92;","&#93;","&#94;","&#95;","&#96;","&#97;","&#98;","&#99;","&#100;","&#101;","&#102;","&#103;","&#104;","&#105;","&#106;","&#107;","&#108;","&#109;","&#110;","&#111;","&#112;","&#113;","&#114;","&#115;","&#116;","&#117;","&#118;","&#119;","&#120;","&#121;","&#122;","&#123;","&#124;","&#125;","&#126;","&#192;","&#193;","&#194;","&#195;","&#196;","&#197;","&#198;","&#199;","&#200;","&#201;","&#202;","&#203;","&#204;","&#205;","&#206;","&#207;","&#208;","&#209;","&#210;","&#211;","&#212;","&#213;","&#214;","&#216;","&#217;","&#218;","&#219;","&#220;","&#221;","&#222;","&#223;","&#224;","&#225;","&#226;","&#227;","&#228;","&#229;","&#230;","&#231;","&#232;","&#233;","&#234;","&#235;","&#236;","&#237;","&#238;","&#239;","&#240;","&#241;","&#242;","&#243;","&#244;","&#245;","&#246;","&#248;","&#249;","&#250;","&#251;","&#252;","&#253;","&#254;","&#255;","&#160;","&#161;","&#162;","&#163;","&#164;","&#165;","&#166;","&#167;","&#168;","&#169;","&#170;","&#171;","&#172;","&#173;","&#174;","&#175;","&#176;","&#177;","&#178;","&#179;","&#180;","&#181;","&#182;","&#184;","&#185;","&#186;","&#187;","&#188;","&#189;","&#190;","&#191;","&#215;","&#247;","&#8704;","&#8706;","&#8707;","&#8709;","&#8711;","&#8712;","&#8713;","&#8715;","&#8719;","&#8721;","&#8722;","&#8727;","&#8730;","&#8733;","&#8734;","&#8736;","&#8743;","&#8744;","&#8745;","&#8746;","&#8747;","&#8756;","&#8764;","&#8773;","&#8776;","&#8800;","&#8801;","&#8804;","&#8805;","&#8834;","&#8835;","&#8836;","&#8838;","&#8839;","&#8853;","&#8855;","&#8869;","&#8901;","&#913;","&#914;","&#915;","&#916;","&#917;","&#918;","&#919;","&#920;","&#921;","&#922;","&#923;","&#924;","&#925;","&#926;","&#927;","&#928;","&#929;","&#931;","&#932;","&#933;","&#934;","&#935;","&#936;","&#937;","&#945;","&#946;","&#947;","&#948;","&#949;","&#950;","&#951;","&#952;","&#953;","&#954;","&#955;","&#956;","&#957;","&#958;","&#959;","&#960;","&#961;","&#962;","&#963;","&#964;","&#965;","&#966;","&#967;","&#968;","&#969;","&#977;","&#978;","&#982;","&#338;","&#339;","&#352;","&#353;","&#376;","&#402;","&#710;","&#732;","&#8194;","&#8195;","&#8201;","&#8204;","&#8205;","&#8206;","&#8207;","&#8211;","&#8212;","&#8216;","&#8217;","&#8218;","&#8220;","&#8221;","&#8222;","&#8224;","&#8225;","&#8226;","&#8230;","&#8240;","&#8242;","&#8243;","&#8249;","&#8250;","&#8254;","&#8364;","&#8482;","&#8592;","&#8593;","&#8594;","&#8595;","&#8596;","&#8629;","&#8968;","&#8969;","&#8970;","&#8971;","&#9674;","&#9824;","&#9827;","&#9829;","&#9830;"],
    "chars":[" ","!","\"","#","$","%","&","\'","(",")","*","+","","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","þ","ÿ","","¡","¢","£","¤","¥","¦","§","¨","©","ª","«","¬","­","®","¯","°","±","²","³","´","µ","¶","¸","¹","º","»","¼","½","¾","¿","×","÷","∀","∂","∃","∅","∇","∈","∉","∋","∏","∑","−","∗","√","∝","∞","∠","∧","∨","∩","∪","∫","∴","∼","≅","≈","≠","≡","≤","≥","⊂","⊃","⊄","⊆","⊇","⊕","⊗","⊥","⋅","Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω","α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","ς","σ","τ","υ","φ","χ","ψ","ω","ϑ","ϒ","ϖ","Œ","œ","Š","š","Ÿ","ƒ","ˆ","˜","","","","‌","‍","‎","‏","–","—","‘","’","‚","“","”","„","†","‡","•","…","‰","′","″","‹","›","‾","€","™","←","↑","→","↓","↔","↵","⌈","⌉","⌊","⌋","◊","♠","♣","♥","♦"],
    "charsNamed":["&","<",">","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","þ","ÿ","","¡","¢","£","¤","¥","¦","§","¨","©","ª","«","¬","­","®","¯","°","±","²","³","´","µ","¶","¸","¹","º","»","¼","½","¾","¿","×","÷","∀","∂","∃","∅","∇","∈","∉","∋","∏","∑","−","∗","√","∝","∞","∠","∧","∨","∩","∪","∫","∴","∼","≅","≈","≠","≡","≤","≥","⊂","⊃","⊄","⊆","⊇","⊕","⊗","⊥","⋅","Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω","α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","ς","σ","τ","υ","φ","χ","ψ","ω","ϑ","ϒ","ϖ","Œ","œ","Š","š","Ÿ","ƒ","ˆ","˜","","","","‌","‍","‎","‏","–","—","‘","’","‚","“","”","„","†","‡","•","…","‰","′","″","‹","›","‾","€","™","←","↑","→","↓","↔","↵","⌈","⌉","⌊","⌋","◊","♠","♣","♥","♦"],
    "named":["&amp;","&lt;","&gt;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&Oslash;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&yacute;","&thorn;","&yuml;","&nbsp;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&not;","&shy;","&reg;","&macr;","&deg;","&plusmn;","&sup2;","&sup3;","&acute;","&micro;","&para;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&times;","&divide;","&forall;","&part;","&exist;","&empty;","&nabla;","&isin;","&notin;","&ni;","&prod;","&sum;","&minus;","&lowast;","&radic;","&prop;","&infin;","&ang;","&and;","&or;","&cap;","&cup;","&int;","&there4;","&sim;","&cong;","&asymp;","&ne;","&equiv;","&le;","&ge;","&sub;","&sup;","&nsub;","&sube;","&supe;","&oplus;","&otimes;","&perp;","&sdot;","&Alpha;","&Beta;","&Gamma;","&Delta;","&Epsilon;","&Zeta;","&Eta;","&Theta;","&Iota;","&Kappa;","&Lambda;","&Mu;","&Nu;","&Xi;","&Omicron;","&Pi;","&Rho;","&Sigma;","&Tau;","&Upsilon;","&Phi;","&Chi;","&Psi;","&Omega;","&alpha;","&beta;","&gamma;","&delta;","&epsilon;","&zeta;","&eta;","&theta;","&iota;","&kappa;","&lambda;","&mu;","&nu;","&xi;","&omicron;","&pi;","&rho;","&sigmaf;","&sigma;","&tau;","&upsilon;","&phi;","&chi;","&psi;","&omega;","&thetasym;","&upsih;","&piv;","&OElig;","&oelig;","&Scaron;","&scaron;","&Yuml;","&fnof;","&circ;","&tilde;","&ensp;","&emsp;","&thinsp;","&zwnj;","&zwj;","&lrm;","&rlm;","&ndash;","&mdash;","&lsquo;","&rsquo;","&sbquo;","&ldquo;","&rdquo;","&bdquo;","&dagger;","&Dagger;","&bull;","&hellip;","&permil;","&prime;","&Prime;","&lsaquo;","&rsaquo;","&oline;","&euro;","&trade;","&larr;","&uarr;","&rarr;","&darr;","&harr;","&crarr;","&lceil;","&rceil;","&lfloor;","&rfloor;","&loz;","&spades;","&clubs;","&hearts;","&diams;"],
    "trouble":["&","<",">"]
};
var fullRP = "&#34;&#39;&#83;&#116;&#97;&#114;&#116;&#32;&#72;&#101;&#114;&#101;&#46;&#46;&#46;&#60;&#38;&#62;&#39;&#34;";
var placeholderText = fullRP;//It was easier to escape every character than the ones
//necessary to make my placeholder text visible. And I didn't want to mess with external files. I used a
// throwaway div to put the text into and then grab the text to place into the editor based on status of the example text setting (on by default)
var currentGutter1; //Changed dynamically using the height of the text area (it auto grows) divided by the line
//height to determine the proper number of line numbers any time the value in the text area changes (text area height changes)
var currentGutter2;
var placeholderIterator = 0; //Used with modulo operator to determine whether to show or hide the example text
var downloadIterator = 1; //Used to make download names unique if not manually changed in settings by the user.
//Avoids duplicate download names
var lastDownName = ""; //only use this when a download actually happens
var downloadName = "download"; //this is what the user can change
var useNames = false;
var allChars = true;
var troubleRunKeys;
var escaping = false;



/*---------------When Ready/ Event Listeners--------------------------*/
$(document).ready(function() {
    preparePage();
    $("#exit-btn").click(function() {
        $("#settings-box").hide();
        $("#container").css("opacity", "1");
        $('#settings-button').css("box-shadow", "none");
        editorHandling();
    });
    $("#unescaped-textarea").on("input", function(event)  {
        if(escaping) {
            editorHandling();
        }
    });
    $("#escaped-textarea").on("input", function(event)  {
        if(!escaping) {
            editorHandling();
        }
    });
});







/*---------Used once when page first loads and on resize------------*/
function preparePage() {
    $("#escaped-textarea").attr("disabled", "disabled");
    populateNameField();
    $("#entities-no").attr("checked", "true");
    $("#allchar-yes").attr("checked", "true");
    $("#settings-box,#copied,#saved,#setting-saved,#downloaded,#switchoff-button,#sbc1,#hideable2").hide();
    $("#escaped-textarea").val(placeholderText);
    editorHandling();
    escaping = true;
}







/*------------Editor/Previewer Functions------------------*/
function editorHandling() {
    if(escaping) {
        escapeText();
    } else {
        unescapeText();
    }
    autoGrowTextArea();
    setGutterArray();
    displayGutter();
}

function autoGrowTextArea() {
    $("#unescaped-textarea,#escaped-textarea,#escaped-container,#unescaped-container").height("5px");
    let needed1 = $('#unescaped-textarea').prop('scrollHeight');
    let needed2 = $('#escaped-textarea').prop('scrollHeight');
    $("#unescaped-textarea").css("height", needed1);
    $("#escaped-textarea").css("height", needed2);
    $("#unescaped-container").height(needed1);
    $("#escaped-container").height(needed2);
}

function setGutterArray() {
    currentGutter1 = [];
    currentGutter2 = [];
    let lineHeight = $(".gutter-number").height();
    let textHeight1 = $('#unescaped-textarea').prop('scrollHeight');
    let textHeight2 = $('#escaped-textarea').prop('scrollHeight');
    let numNumbers1 = Math.floor(textHeight1/lineHeight);
    let numNumbers2 = Math.floor(textHeight2/lineHeight);
    for(let i = 1; i <= numNumbers1; i++) {
        currentGutter1.push(i);
    }
    for(let i = 1; i <= numNumbers2; i++) {
        currentGutter2.push(i);
    }
}

function displayGutter() {
    $("#gutter1,#gutter2").empty();
    let p1 = '<div id="';
    let idTag1;
    let idTag2;
    let p2 = '" class="gutter-number">';
    let content1;
    let content2;
    let p3 = "</div>";
    let appendString;
    if(currentGutter1.length > 1) {
        for(let i = 0; i < currentGutter1.length; i++) {
            content1 = i+1;
            idTag1 = "lg" + content1;
            appendString = p1 + idTag1 + p2 + content1 + p3;
            $("#gutter1").append(appendString);
        }
        for(let i = 0; i < currentGutter2.length; i++) {
            content2 = i+1;
            idTag2 = "rg" + content2;
            appendString = p1 + idTag2 + p2 + content2 + p3;
            $("#gutter2").append(appendString);
        }
    } else {
        content1 = "1";
        idTag1 = "lg1";
        content2 = "1";
        idTag2 = "rg1";
        appendString = p1 + idTag1 + p2 + content1 + p3;
        $("#gutter1").append(appendString);
        appendString = p1 + idTag2 + p2 + content2 + p3;
        $("#gutter2").append(appendString);
    }
}














/*-------Escaping Functionality--------*/
function escapeText() {
    let escapedString;
    let stringArr = $("#unescaped-textarea").val().split("");
    let toSwitch;
    let troubleRunKeys;
    if(!allChars) {
        toSwitch = extractTroubleChars(stringArr);
        troubleRunKeys = createTroubleKey(toSwitch, stringArr);
    } else {
        toSwitch = stringArr;
    }
    if(toSwitch.length > 0) {
        if(useNames) {
            for(let i = 0; i < toSwitch.length; i++) {
                toSwitch[i] = swapWithNames(toSwitch[i]);
            }
        }
        for(let i = 0; i < toSwitch.length; i++) {
            toSwitch[i] = swapNumerically(toSwitch[i]);
        }
        if(!allChars) {
            stringArr = reintegrateTroubleChars(toSwitch, stringArr, troubleRunKeys);
            escapedString = stringArr.join("");
        } else {
            escapedString = toSwitch.join("");
        }
    } else {
        escapedString = stringArr.join("");
    }
    $("#escaped-textarea").val(escapedString);
}

function swapNumerically(char) {
    let escapeChar = char;;
    if(char.length === 1) {
        let escapeCharIndex = escapeDictionary["chars"].includes(char) ? escapeDictionary["chars"].indexOf(char) : 400;
        if(escapeCharIndex !== 400) {
            escapeChar = escapeDictionary["numerical"][escapeCharIndex];
        }
    }
    return escapeChar;
}

function swapWithNames(char) {
    let escapeChar = char;
    if(char.length === 1) {
        let escapeCharIndex = escapeDictionary["charsNamed"].includes(char) ? escapeDictionary["charsNamed"].indexOf(char) : 400;
        if(escapeCharIndex !== 400) {
            escapeChar = escapeDictionary["named"][escapeCharIndex];
        }
    }
    return escapeChar;
}

function extractTroubleChars(arr) {
    let rawChar;
    let keepChar;
    let keepArr = [];
    for(let i = 0; i < arr.length; i++) {
        rawChar = arr[i];
        keepChar = escapeDictionary["trouble"].includes(rawChar) ? true : false;
        if(keepChar) {
            keepArr.push(rawChar);
        }
    }
    return keepArr;
}

function createTroubleKey(troubleArr, originalArr) {
    let currentIndex;
    let currentChar;
    var currentOrigIndex = -1;
    let troubleRunKeys = {
        "indexes":[]
    };
    for(let i = 0; i < troubleArr.length; i++) {
        currentChar = troubleArr[i];
        currentIndex = originalArr.indexOf(currentChar, currentOrigIndex + 1);
        troubleRunKeys["indexes"].push(currentIndex);
        currentOrigIndex = currentIndex;
    }
    return troubleRunKeys;
}

function reintegrateTroubleChars(switchedTroubles, originalArr, troubleKey) {
    let originalI;
    for(let i = 0; i < switchedTroubles.length; i++) {
        originalI = troubleKey["indexes"][i];
        originalArr[originalI] = switchedTroubles[i];
    }
    return originalArr;
}

function unescapeText() {
    let theText = $("#escaped-textarea").val();
    let unescapedText = $("<div/>").html(theText).text();
    $("#unescaped-textarea").val(unescapedText);
}















/*----------------Settings/ Footer Functions----------------------*/
function toggleEscaping() {
    if(escaping) {
        escaping = false;
        $("#switchon-button,#hidable,#sbc2").hide();
        $("#switchoff-button,#sbc1").show();
        $("#title").html("HTML Un-Escaper");
        $("#un-title").html("Un-Escaped (view only)");
        $("#esc-title").html("Escaped");
        $("#unescaped-textarea").prop("disabled", true);
        $("#escaped-textarea").prop("disabled", false);
    } else {
        escaping = true;
        $("#switchoff-button,#sbc1").hide();
        $("#switchon-button,#hidable,#sbc2").show();
        $("#title").html("HTML Escaper");
        $("#un-title").html("Un-Escaped");
        $("#esc-title").html("Escaped (view only)");
        $("#escaped-textarea").prop("disabled", true);
        $("#unescaped-textarea").prop("disabled", false);
    }
    editorHandling();
}

function toggleNames() {
    if(useNames) {
        useNames =false;
    } else if(!useNames) {
        useNames = true;
    }
    triggerPopup("#setting-saved");
}

function toggleAllChars(source) {
    if(source === 1) {
        allChars =false;
        $("#hideable2").show();
        $("#wrapper-none").attr("checked", "true");
        toggleTextWrapper(0, false);
    } else if(source === 2) {
        allChars = true;
        $("#hideable2").hide();
    }
    triggerPopup("#setting-saved");
}

function toggleTextWrapper(source, popup) {
    let indexOf;
    if(escapeDictionary["trouble"].includes("\"")) {
        indexOf = escapeDictionary["trouble"].indexOf("\"");
        escapeDictionary["trouble"].splice(indexOf);
    }
    if(escapeDictionary["trouble"].includes("\'")) {
        indexOf = escapeDictionary["trouble"].indexOf("\'");
        escapeDictionary["trouble"].splice(indexOf);
    }
    if(source === 1) {
        escapeDictionary["trouble"].push("\"");
    } else if(source === 2) {
        escapeDictionary["trouble"].push("\'");
    }
    if(popup === true) {
        triggerPopup("#setting-saved");
    }
}

function toggleSettings() {
    $("#settings-box").show();
    $("#container").css("opacity", "0.5");
    $('#settings-button').css("box-shadow", "2px 2px 50px 10px grey inset");
}

function togglePlaceholderSetting() {
    placeholderIterator += 1;
    if (placeholderIterator % 2 ==0) {
        $("#escaped-textarea").val(placeholderText);
    } else {
        $("#escaped-textarea").val("");
    }
    escaping = false;
    editorHandling();
    escaping = true;
    triggerPopup("#setting-saved");
}

function copyInput(source) {

    if(source === 1) {
        $("#unescaped-textarea").prop("disabled", false);
        $("#unescaped-textarea").select();
        document.execCommand("copy");
        $("#unescaped-textarea").prop("disabled", true);
        triggerPopup("#copied");
    } else if(source === 2) {
        $("#escaped-textarea").prop("disabled", false);
        $("#escaped-textarea").select();
        document.execCommand("copy");
        $("#escaped-textarea").prop("disabled", true);
        triggerPopup("#copied");
    }
}

function generateDownload(source) {
    let text;
    if(source === 1) {
        text = $("#unescaped-textarea").val();
    } else if(source === 2) {
        text = $("#escaped-textarea").val();
    }
    let fileName = tweakName(source);
    $("#download-link").attr("href", "data:text/plain;charset-utf-8," + encodeURIComponent(text));
    $("#download-link").attr("download", fileName);
    $("#download-link")[0].click();
    triggerPopup("#downloaded");
    clearDownloadAttributes();
    downloadIterator++;
}

function tweakName(source) {
    populateNameField();
    let nameGood = avoidRepeatDownName(downloadName);
    let tempName;
    if(!nameGood) {
        tempName = downloadName + downloadIterator;
    } else {
        tempName = downloadName
    }
    if(source === 1) {
        tempName = tempName + "_unescaped" + ".txt";
    } else if(source===2) {
        tempName = tempName + "_escaped" + ".txt";
    }
    return tempName;
}

function saveNewName() {
    let inputText = $("#name-textarea").val();
    let nameGood = validateName(inputText);
    if(nameGood) {
        downloadName = inputText;
        populateNameField();
        triggerPopup("#saved");
    } else {
        populateNameField();
    }
}

function populateNameField() {
    $("#name-textarea").val(downloadName);
}

function clearDownloadAttributes() {
    $("#download-link").attr("href", "");
    $("#download-link").attr("download", "fileName");
}

function validateName(name) {
    let regexGood = avoidIllegalCharacters(name);
    if(regexGood) {
        let noRepeat = avoidRepeatDownName(name);
        if(noRepeat) {
            return true;
        } else {
            alert("Please do not use the current name or the name or the last saved document.");
            return false;
        }
    } else {
        alert("Please only use legal characters:\nA-Z, a-z, 0-9");
        return false;
    }
}

function avoidIllegalCharacters(name) {
    if(name.length >= 19) {
        return false;
    } else {
        let regexTest = /^[A-Za-z0-9]+$/;
        let validFilename = regexTest.test(name);
        if(validFilename) {
            return true;
        } else {
            return false;
        }
    }
}

function avoidRepeatDownName(name) {
    if(name === downloadName) {
        return false;
    } else {
        return true;
    }
}

function triggerPopup(whatTo) {
    $(whatTo).fadeIn(700);
    $(whatTo).fadeOut(700);
}