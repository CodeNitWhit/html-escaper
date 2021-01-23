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



$(document).ready(function() {
    preparePage();
    $("#exit-btn").click(function() {
        $("#settings-box").hide();
        $("#container").css("opacity", "1");
        $('#settings-button').css("box-shadow", "none");
    });
    //$("#unescaped-textarea").on("input", (event) => editorHandling(1));
    $("#escaped-textarea").on('input', (event) => editorHandling(2));
    $(window).resize(function() {
        resizeEditors();
    });
});



/*---------Used once when page first loads and on resize------------*/
function preparePage() {
    resizeEditors();
    populateNameField();
    $("#settings-box").hide();
    $("#copied").hide();
    $("#saved").hide();
    $("#downloaded").hide();
    $("#escaped-textarea").val(placeholderText);
    editorHandling();
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
    let footerSize = $("#title").height();
    let editorHeight = windowSize - titleSize - footerSize - 20;
    $(".tile").height(editorHeight);
}

function resizeEditorsPortrait() {
    let windowSize = $(window).height();
    let titleSize = $("#title").height();
    let footerSize = $("#title").height();
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

function escapeText() {

}

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
/**/