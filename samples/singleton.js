var Instance = function() {
	function TroveDB() {
		// Constructor
	}
	TroveDB.prototype.get_year = function(query, year) {
		return this.do_trove_request({q: query + " FROM:"+year + " TO:" + year});
	}
	TroveDB.prototype.do_trove_request = function(query_dict) {
		// Do some cool AJAXy stuff.
	}

	// Return a new instance.
	return new TroveDB();
};
