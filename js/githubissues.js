// Script for getting GitHub issues by Yannik Ehlert 2015
// Requires jQuery
function githubissues(repo,projectname) {
	var githuburl = "https://api.github.com/repos/" + repo + "/issues";
	$.getJSON( githuburl, {})
	.done(function( data ) {
		var issues = 0;
		$('#' + projectname).html('<b>Aktuelle Meldungen:</b>')
		$( "<ul>" ).attr('id','issues').appendTo('#' + projectname);
      	$.each( data, function( i, item ) {
			if (item.state == "open" && item.pull_request == null) {
				$('<li>').attr('id',item.id).appendTo('#issues');
				$( "<a>" ).attr('href', item.html_url ).html( item.title ).appendTo('#' + item.id);
				issues = issues + 1;
			}
      });
	  if (issues == 0) {
		  $('#' + projectname).html('<div align="center">Nix los!<br></div>');
	  }
	  $('<div>').attr('id','ghbutton' + projectname).attr('align','center').html('<br>').appendTo('#' + projectname);
	  $('<a>').attr('class','icon fa-github').attr('href','https://github.com/' + repo + '/issues/new').html('&nbsp;&nbsp;<b>Neuer Eintrag</b>').appendTo('#' + 'ghbutton' + projectname);
    });
};