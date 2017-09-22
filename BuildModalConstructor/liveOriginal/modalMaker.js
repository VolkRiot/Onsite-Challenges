(function() {
  class modalMaker {
    constructor(elm) {
      this.elm = elm;
      this.state = { visible: false };
      this.buildModal();
    }

    buildModal() {
      this.newModal = $('<div>');
      this.newModal.attr('id', 'my-modal');
      this.newModal.append($(this.elm).css('display', 'block'));

      this.overlay = $('<div>');
      this.overlay.attr('id', 'my-overlay');

      this.offButton = $('<button>');
      this.offButton.text('X');
      this.offButton.addClass('close-modal');

      this.offButton.on('click', () => {
        this.newModal.detach();
        this.overlay.detach();
        this.state.visible = false;
      });

      this.newModal.prepend(this.offButton);
    }

    showModal() {
      console.log('Works');
      if (!this.state.visible) {
        $('body').append(this.overlay);
        $('body').append(this.newModal);
      }
    }
  }
  window.modalMaker = modalMaker;
})();
