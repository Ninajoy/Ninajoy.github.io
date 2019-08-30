const $goal1 = $( "#goal-1" );
const $goal1Content = $( "#goal-1-content" );
const $goal2 = $( "#goal-2" );
const $goal2Content = $( "#goal-2-content" );
const $closeButton = $( ".close-button" );

$goal1.click(function() {
	event.preventDefault();
	$goal1.hide( "slow");
	  $goal2.hide( "slow");
	  $goal1Content.show( "slow");
  });

  $goal2.click(function() {
	event.preventDefault();
	$goal2.hide( "slow");
	  $goal1.hide( "slow");
	  $goal2Content.show( "slow");
  });

  $closeButton.click(function() {
	event.preventDefault();
	$goal1Content.hide( "slow");
	  $goal2Content.hide( "slow");
	  $goal1.show( "slow");
	  $goal2.show( "slow");
  });
