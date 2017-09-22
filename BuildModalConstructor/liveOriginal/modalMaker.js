class modalMaker {
  constructor($elm) {
    this.buildModal($elm);
  }

  buildModal($elm) {
    this.newModal = $('<div>');
    this.newModal.attr('id', 'my-modal');
    this.newModal.append($($elm).css('display', 'block'));

    this.overlay = $('<div>');
    this.overlay.attr('id', 'my-overlay');

    this.offButton = $('<button>');
    this.offButton.text('X');
    this.offButton.addClass('close-modal');

    this.offButton.on('click', () => {
      this.newModal.css('display', 'none');
      this.overlay.css('display', 'none');
    });

    this.newModal.prepend(this.offButton);

    $('body').append(this.overlay);
    $('body').append(this.newModal);
  }

  showModal() {
    this.newModal.css('display', 'block');
    this.overlay.css('display', 'block');
  }
}
