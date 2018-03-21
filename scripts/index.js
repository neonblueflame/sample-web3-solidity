var candidates = ["Hanger is cute", "Hanger is sexy", "Hanger is baby"];
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var getVotingDef = function() {
  var def = {};
  
  $.ajax({
      url: "build/contracts/Voting.json"
    , async: false
    , dataType: "json"
    , success: function(result) {
      def = result;
    }
  });
  
  return def;
};

var votingDef = getVotingDef();
var VotingContract = web3.eth.contract(votingDef.abi);

var createVotingContract = function(bytecode) {
  //var contractAddress = VotingContract.at("0x8a1dad02b01585026a6aae8896b36341288d4f93");
  //if (
  //*
  var instance = VotingContract.new(
      candidates
    , {
          data: bytecode
        , from: web3.eth.accounts[0]
        , gas: 353560
    });
  //*/
  
  return instance;
};

var votingInstance = createVotingContract(votingDef.bytecode);