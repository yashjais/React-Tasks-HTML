setTimeout(function() {
	console.log(1)
	}, 0);

new Promise(function executor(resolve) {
	console.log(2);
	for( var i=0 ; i<10000 ; i++ ) {
		i == 9999 && resolve();
	}
	
	console.log(3);
	}).then(function() {
	console.log(4);
	});

	console.log(5);


    function Root() {
    return (
    <Hello>
      {false}
    </Hello>
  );
}
////
If you try to use React.Children.count, and the children contains a child with the value false, what will the result be?

0 1 2 3 

function Hello({children}) {
  return (
    <div>
      Count: {React.Children.count(children)}
      <br />
      toArray length: {React.Children.toArray(children).length}
    </div>
  );
}   