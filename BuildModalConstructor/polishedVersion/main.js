(function() {
  const modal = new window.modalMaker('#toy-child');
  $('#my-button').on('click', function() {
    // Instantiate the modal;

    modal.showModal();
  });
})();
