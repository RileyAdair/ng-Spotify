spotify.controller('artistCtrl', function($scope, $stateParams, mainSrvc) {
  /*============================================================================
                              Get-artist-and-tracks
  ============================================================================*/
  mainSrvc.getArtist($stateParams)
  .then(function(response){
      $scope.artist = response;
  })
  mainSrvc.getTracks($stateParams)
  .then(function(response){
    // console.log(response);
      $scope.tracks = response;
  })

  /*============================================================================
                            Pass-trackObj-to-service
  ============================================================================*/
  $scope.playPreview = function(trackObj){
    mainSrvc.playPreview(trackObj);
  }

  /*============================================================================
                                Add-to-playlist
  ============================================================================*/
  $scope.addTrack = function(trackObj){
    mainSrvc.addTrack(trackObj);
  }

});
