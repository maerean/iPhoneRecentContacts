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
    // if other rows have already been changed to display the delete button, undo it.
    if ( ! $(deleteIcon.parentNode).hasClass("aboutToBeDeleted") )
        $(".aboutToBeDeleted").removeClass("aboutToBeDeleted");

    $(deleteIcon.parentNode).toggleClass('aboutToBeDeleted');
}

function deleteRecentContact(div) {
    $(div).addClass("animateDeletion");
    setTimeout( function () { $(div).remove(); }, animationDurationMilliseconds);
}