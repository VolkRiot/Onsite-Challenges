(function() {
  const modal = new modalMaker('#toy-child');
  $('#my-button').on('click', function() {
    // Instantiate the modal;

    modal.showModal();
  });
})();
