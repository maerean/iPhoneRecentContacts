"use strict";

var animationDurationMilliseconds = 500;
var templateRecentContact;

$(document).ready( function() {
    templateRecentContact = $("#templateRecentContact").html();
    
    createDOMForListOfRecentContacts(recentContacts, $(".recentContactsList")[0]);
    
    $(".checkboxEditMode").click( function () {
        $(".recentContactsList").toggleClass("editModeEnabled");
        $(".aboutToBeDeleted").removeClass("aboutToBeDeleted");
    });
} );

function createDOMForRecentContact(recentContact) {
	return Mustache.to_html(templateRecentContact, recentContact);
}

function createDOMForListOfRecentContacts(list, parentNode) {
    $.each(list, function (index, recentContact) {
        var html = createDOMForRecentContact(recentContact);
        var dom = $(html);
        $(parentNode).append( dom );
    });
}

function toggleClassAboutToBeDeleted(deleteIcon) {
    $(deleteIcon.parentNode).toggleClass('aboutToBeDeleted');
}

function deleteRecentContact(div) {
    $(div).addClass("animateDeletion");
    setTimeout( function () { $(div).remove(); }, animationDurationMilliseconds);
}