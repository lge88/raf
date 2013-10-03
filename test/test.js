
var lib = require( 'raf' );
var expect = require( 'expect.js' );

describe( 'raf', function() {

  it( 'should return Hello World', function() {
    expect( lib() ).to.be( 'Hello World' );
  } );

} );
