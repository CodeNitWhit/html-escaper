var escapeDictionary = {
    "numerical":["&#32;","&#33;","&#34;","&#35;","&#36;","&#37;","&#38;","&#39;","&#40;","&#41;","&#42;","&#43;","&#44;","&#45;","&#46;","&#47;","&#48;","&#49;","&#50;","&#51;","&#52;","&#53;","&#54;","&#55;","&#56;","&#57;","&#58;","&#59;","&#60;","&#61;","&#62;","&#63;","&#64;","&#65;","&#66;","&#67;","&#68;","&#69;","&#70;","&#71;","&#72;","&#73;","&#74;","&#75;","&#76;","&#77;","&#78;","&#79;","&#80;","&#81;","&#82;","&#83;","&#84;","&#85;","&#86;","&#87;","&#88;","&#89;","&#90;","&#91;","&#92;","&#93;","&#94;","&#95;","&#96;","&#97;","&#98;","&#99;","&#100;","&#101;","&#102;","&#103;","&#104;","&#105;","&#106;","&#107;","&#108;","&#109;","&#110;","&#111;","&#112;","&#113;","&#114;","&#115;","&#116;","&#117;","&#118;","&#119;","&#120;","&#121;","&#122;","&#123;","&#124;","&#125;","&#126;","&#192;","&#193;","&#194;","&#195;","&#196;","&#197;","&#198;","&#199;","&#200;","&#201;","&#202;","&#203;","&#204;","&#205;","&#206;","&#207;","&#208;","&#209;","&#210;","&#211;","&#212;","&#213;","&#214;","&#216;","&#217;","&#218;","&#219;","&#220;","&#221;","&#222;","&#223;","&#224;","&#225;","&#226;","&#227;","&#228;","&#229;","&#230;","&#231;","&#232;","&#233;","&#234;","&#235;","&#236;","&#237;","&#238;","&#239;","&#240;","&#241;","&#242;","&#243;","&#244;","&#245;","&#246;","&#248;","&#249;","&#250;","&#251;","&#252;","&#253;","&#254;","&#255;","&#160;","&#161;","&#162;","&#163;","&#164;","&#165;","&#166;","&#167;","&#168;","&#169;","&#170;","&#171;","&#172;","&#173;","&#174;","&#175;","&#176;","&#177;","&#178;","&#179;","&#180;","&#181;","&#182;","&#184;","&#185;","&#186;","&#187;","&#188;","&#189;","&#190;","&#191;","&#215;","&#247;","&#8704;","&#8706;","&#8707;","&#8709;","&#8711;","&#8712;","&#8713;","&#8715;","&#8719;","&#8721;","&#8722;","&#8727;","&#8730;","&#8733;","&#8734;","&#8736;","&#8743;","&#8744;","&#8745;","&#8746;","&#8747;","&#8756;","&#8764;","&#8773;","&#8776;","&#8800;","&#8801;","&#8804;","&#8805;","&#8834;","&#8835;","&#8836;","&#8838;","&#8839;","&#8853;","&#8855;","&#8869;","&#8901;","&#913;","&#914;","&#915;","&#916;","&#917;","&#918;","&#919;","&#920;","&#921;","&#922;","&#923;","&#924;","&#925;","&#926;","&#927;","&#928;","&#929;","&#931;","&#932;","&#933;","&#934;","&#935;","&#936;","&#937;","&#945;","&#946;","&#947;","&#948;","&#949;","&#950;","&#951;","&#952;","&#953;","&#954;","&#955;","&#956;","&#957;","&#958;","&#959;","&#960;","&#961;","&#962;","&#963;","&#964;","&#965;","&#966;","&#967;","&#968;","&#969;","&#977;","&#978;","&#982;","&#338;","&#339;","&#352;","&#353;","&#376;","&#402;","&#710;","&#732;","&#8194;","&#8195;","&#8201;","&#8204;","&#8205;","&#8206;","&#8207;","&#8211;","&#8212;","&#8216;","&#8217;","&#8218;","&#8220;","&#8221;","&#8222;","&#8224;","&#8225;","&#8226;","&#8230;","&#8240;","&#8242;","&#8243;","&#8249;","&#8250;","&#8254;","&#8364;","&#8482;","&#8592;","&#8593;","&#8594;","&#8595;","&#8596;","&#8629;","&#8968;","&#8969;","&#8970;","&#8971;","&#9674;","&#9824;","&#9827;","&#9829;","&#9830;"],
    "chars":["!","\"","#","$","%","&","'","(",")","*","+","=","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","þ","ÿ","","¡","¢","£","¤","¥","¦","§","¨","©","ª","«","¬","­","®","¯","°","±","²","³","´","µ","¶","¸","¹","º","»","¼","½","¾","¿","×","÷","∀","∂","∃","∅","∇","∈","∉","∋","∏","∑","−","∗","√","∝","∞","∠","∧","∨","∩","∪","∫","∴","∼","≅","≈","≠","≡","≤","≥","⊂","⊃","⊄","⊆","⊇","⊕","⊗","⊥","⋅","Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω","α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","ς","σ","τ","υ","φ","χ","ψ","ω","ϑ","ϒ","ϖ","Œ","œ","Š","š","Ÿ","ƒ","ˆ","˜","","","","‌","‍","‎","‏","–","—","‘","’","‚","“","”","„","†","‡","•","…","‰","′","″","‹","›","‾","€","™","←","↑","→","↓","↔","↵","⌈","⌉","⌊","⌋","◊","♠","♣","♥","♦"],
    "charsNamed":["&","<",">","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","þ","ÿ","","¡","¢","£","¤","¥","¦","§","¨","©","ª","«","¬","­","®","¯","°","±","²","³","´","µ","¶","¸","¹","º","»","¼","½","¾","¿","×","÷","∀","∂","∃","∅","∇","∈","∉","∋","∏","∑","−","∗","√","∝","∞","∠","∧","∨","∩","∪","∫","∴","∼","≅","≈","≠","≡","≤","≥","⊂","⊃","⊄","⊆","⊇","⊕","⊗","⊥","⋅","Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω","α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","ς","σ","τ","υ","φ","χ","ψ","ω","ϑ","ϒ","ϖ","Œ","œ","Š","š","Ÿ","ƒ","ˆ","˜","","","","‌","‍","‎","‏","–","—","‘","’","‚","“","”","„","†","‡","•","…","‰","′","″","‹","›","‾","€","™","←","↑","→","↓","↔","↵","⌈","⌉","⌊","⌋","◊","♠","♣","♥","♦"],
    "named":["&amp;","&lt;","&gt;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&Oslash;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&yacute;","&thorn;","&yuml;","&nbsp;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&not;","&shy;","&reg;","&macr;","&deg;","&plusmn;","&sup2;","&sup3;","&acute;","&micro;","&para;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&times;","&divide;","&forall;","&part;","&exist;","&empty;","&nabla;","&isin;","&notin;","&ni;","&prod;","&sum;","&minus;","&lowast;","&radic;","&prop;","&infin;","&ang;","&and;","&or;","&cap;","&cup;","&int;","&there4;","&sim;","&cong;","&asymp;","&ne;","&equiv;","&le;","&ge;","&sub;","&sup;","&nsub;","&sube;","&supe;","&oplus;","&otimes;","&perp;","&sdot;","&Alpha;","&Beta;","&Gamma;","&Delta;","&Epsilon;","&Zeta;","&Eta;","&Theta;","&Iota;","&Kappa;","&Lambda;","&Mu;","&Nu;","&Xi;","&Omicron;","&Pi;","&Rho;","&Sigma;","&Tau;","&Upsilon;","&Phi;","&Chi;","&Psi;","&Omega;","&alpha;","&beta;","&gamma;","&delta;","&epsilon;","&zeta;","&eta;","&theta;","&iota;","&kappa;","&lambda;","&mu;","&nu;","&xi;","&omicron;","&pi;","&rho;","&sigmaf;","&sigma;","&tau;","&upsilon;","&phi;","&chi;","&psi;","&omega;","&thetasym;","&upsih;","&piv;","&OElig;","&oelig;","&Scaron;","&scaron;","&Yuml;","&fnof;","&circ;","&tilde;","&ensp;","&emsp;","&thinsp;","&zwnj;","&zwj;","&lrm;","&rlm;","&ndash;","&mdash;","&lsquo;","&rsquo;","&sbquo;","&ldquo;","&rdquo;","&bdquo;","&dagger;","&Dagger;","&bull;","&hellip;","&permil;","&prime;","&Prime;","&lsaquo;","&rsaquo;","&oline;","&euro;","&trade;","&larr;","&uarr;","&rarr;","&darr;","&harr;","&crarr;","&lceil;","&rceil;","&lfloor;","&rfloor;","&loz;","&spades;","&clubs;","&hearts;","&diams;"]
  };

var fullRP = "&#83;&#116;&#97;&#114;&#116;&#32;&#72;&#101;&#114;&#101;&#46;&#46;&#46;";

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



$(document).ready(function() {
    preparePage();
    $("#exit-btn").click(function() {
        $("#settings-box").hide();
        $("#container").css("opacity", "1");
        $('#settings-button').css("box-shadow", "none");
    });
    //$("#unescaped-textarea").on("input", (event) => editorHandling(1));
    $(window).resize(function() {
        resizeEditors();
    });
    $("#escaped-textarea").attr("disabled", "disabled");
});



/*---------Used once when page first loads and on resize------------*/
function preparePage() {
    resizeEditors();
    populateNameField();
    $("#settings-box").hide();
    $("#copied").hide();
    $("#saved").hide();
    $("#setting-saved").hide();
    $("#downloaded").hide();
    $("#escaped-textarea").val(placeholderText);
    $("#entities-no").attr("checked", "true");
    $("#allchar-yes").attr("checked", "true");
    editorHandling(2);
}

function resizeEditors() {
    if(window.matchMedia('(orientation: landscape)').matches) {
        resizeEditorsLandscape();
    } else if(window.matchMedia('(orientation: portrait)').matches) {
        resizeEditorsPortrait();
    }
}

function resizeEditorsLandscape() {
    let windowSize = $(window).height();
    let titleSize = $("#title").height();
    let footerSize = $("#footer").height();
    let editorHeight = windowSize - titleSize - footerSize - 20;
    $(".tile").height(editorHeight);
}

function resizeEditorsPortrait() {
    let windowSize = $(window).height();
    let titleSize = $("#title").height();
    let footerSize = $("#footer").height();
    let totalHeight = windowSize - titleSize - footerSize;
    let eachHeight = (totalHeight/2) - 20;
    $(".tile").height(eachHeight);
}


/*------------Editor/Previewer Functions------------------*/
function editorHandling(source) {
    if(source === 1) {
        //escapeText();
    } else {
        unescapeText();
    }
    autoGrowTextArea();
    setGutterArray();
    displayGutter();
}

function autoGrowTextArea() {
    $("#unescaped-textarea").height("5px");
    $("#escaped-textarea").height("5px");
    $("#escaped-container").height("5px");
    $("#unescaped-container").height("5px");
    let needed1 = $('#unescaped-textarea').prop('scrollHeight');
    let needed2 = $('#escaped-textarea').prop('scrollHeight');
    $("#unescaped-textarea").css("height", needed1);
    $("#escaped-textarea").css("height", needed2);
    $("#escaped-container").height(needed1);
    $("#unescaped-container").height(needed2);
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
    $("#gutter1").empty();
    $("#gutter2").empty();
    let p1 = '<div id="';
    let idTag;
    let p2 = '" class="gutter-number">';
    let content;
    let p3 = "</div>";
    /*Unescaped Gutter*/
    if(currentGutter1.length > 1) {
        for(let i = 0; i < currentGutter1.length; i++) {
            content = i+1;
            idTag = "lg" + content;
            let appendString = p1 + idTag + p2 + content + p3;
            $("#gutter1").append(appendString);
        }
    } else {
        content = "1";
        idTag = "lg1";
        let appendString = p1 + idTag + p2 + content + p3;
        $("#gutter1").append(appendString);
    }
    /* Escaped Gutter */
    if(currentGutter2.length > 1) {
        for(let i = 0; i < currentGutter2.length; i++) {
            content = i+1;
            idTag = "rg" + content;
            let appendString = p1 + idTag + p2 + content + p3;
            $("#gutter2").append(appendString);
        }
    } else {
        content = "1";
        idTag = "rg1";
        let appendString = p1 + idTag + p2 + content + p3;
        $("#gutter2").append(appendString);
    }
}










/*function escapeText() {
    let escapedString;
    let stringArr = $("#unescaped-textarea").val().split("");
    let toSwitch;
    if(useNames) {
        if(allChars) {
            stringArr = swapWithNames(stringArr);
        } else if(!allChars) {
            toSwitch = extractTroubleChars(stringArr);
            for(let i = 0; i < toSwitch.length; i++) {
                toSwitch = swapWithNames(toSwitch);
                //To switch should be an object. The old char is the key for finding the array element to replace
                //Replace array char with escape in stringArr
            }
       }
    }
    if(allChars) {
        for(let i = 0; i < stringArr.length; i++) {
            stringArr = swapNumerically(stringArr);
        }
    } else {
        toSwitch = extractTroubleChars(stringArr);
        for(let i = 0; i < toSwitch.length; i++) {
            toSwitch = swapNumerically(toSwitch);
            //To switch should be an object. The old char is the key for finding the array element to replace
            //Replace array char with escape in stringArr
        }
    }
    let newString = stringArr.join("");
    $("#escaped-textarea").val(newString);
}

function swapNumerically(arr) {
    if(arr[i].length === 1) {
        let rawChar = stringArr[i];
        let escapeCharIndex = ;//-----------------
        let escapeChar = escapeDictionary["numerical"][escapeCharIndex];
        arr[i] = escapeChar;
    }
    return arr;
}

function swapWithNames() {

}

function extractTroubleChars() {
    //----------------------------------------------------------
}/**/










function unescapeText() {
    let theText = $("#escaped-textarea").val();
    let unescapedText = $("<div/>").html(theText).text();
    $("#unescaped-textarea").val(unescapedText);
}

/*----------------Settings/ Footer Functions----------------------*/
function copyInput(source) {
    if(source === 1) {
        $("#unescaped-textarea").select();
        document.execCommand("copy");
        $("#copied").fadeIn(700);
        $("#copied").fadeOut(700);
    } else if(source === 2) {
        $("#escaped-textarea").select();
        document.execCommand("copy");
        $("#copied").fadeIn(700);
        $("#copied").fadeOut(700);
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
    editorHandling();
}

function populateNameField() {
    $("#name-textarea").val(downloadName);
}

function generateDownload(source) {
    let text;
    if(source === 1) {
        text = $("#unescaped-textarea").val();
    } else if(source === 2) {
        text = $("#escaped-textarea").val();
    }
    let fileName = tweakName(source);
    //Use link element (hidden) to set the download attribute
    $("#download-link").attr("href", "data:text/plain;charset-utf-8," + encodeURIComponent(text));
    $("#download-link").attr("download", fileName);
    $("#download-link")[0].click();
    triggerDownloadedPopup();
    clearDownloadAttributes();
    downloadIterator++;
}

function clearDownloadAttributes() {
    $("#download-link").attr("href", "");
    $("#download-link").attr("download", "fileName");
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
        triggerSavedPopup();
    } else {
        populateNameField();
    }
}

function triggerSavedPopup() {
    $("#saved").fadeIn(700);
    $("#saved").fadeOut(700);
}

function triggerDownloadedPopup() {
    $("#downloaded").fadeIn(700);
    $("#downloaded").fadeOut(700);
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

function toggleNames() {
    if(useNames) {
        useNames =false;
    } else if(!useNames) {
        useNames = true;
    }
    $("#setting-saved").fadeIn(700);
    $("#setting-saved").fadeOut(700);
}
/**/