"use strict";

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
        $(parentNode).append( $(html) );
    });
}