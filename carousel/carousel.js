const carouselElementIds = {
  INNER_CONTAINER:  'inner-container',
  LEFT_CHEVRON: 'left-chevron',
  RIGHT_CHEVRON: 'right-chevron',
} 

class Carousel {
  constructor(target) {
    this.parentCont = document.querySelector(target);
    this.activeIndex = 0;
    this.innerContainer;
    this.images = [
      'http://placekitten.com/800/400',
      'https://www.fillmurray.com/800/400',
      'https://loremflickr.com/800/400',
      'https://placebear.com/800/400'
    ];

    this.init();
  }

  init() {
    this.layoutHTML();
    this.innerContainer = document.getElementById(carouselElementIds.INNER_CONTAINER)
    this.attachListeners();
  }

  layoutHTML() {
    this.parentCont.innerHTML = `
        <div style="${mainContainerStyle}">
          <div id="${carouselElementIds.INNER_CONTAINER}" style="${innerContainerStyle}">
            ${this.images
              .map(
                imageLink =>
                  `<div style="${imageStyle}">
                    <image src=${imageLink} />
                  </div>`
              )
              .join('')}
          </div>
            <div id="${carouselElementIds.LEFT_CHEVRON}" style="${baseChevronStyle} ${leftChevron}">
              &lsaquo;
            </div>
            <div id="${carouselElementIds.RIGHT_CHEVRON}" style="${baseChevronStyle} ${rightChevron}">
              &rsaquo;
            </div>
        </div>`;
  }

  attachListeners() {
    document
      .getElementById(carouselElementIds.LEFT_CHEVRON)
      .addEventListener('click', () => this.handleArrowClickLeft());
    document
      .getElementById(carouselElementIds.RIGHT_CHEVRON)
      .addEventListener('click', () => this.handleArrowClickRight());
  }

  handleArrowClickLeft() {
    const { style } = this.innerContainer;

    if (this.activeIndex > 0) {
      this.activeIndex--;
      style.transform = `translateX(${this.activeIndex * -100}%)`;
    }
  }

  handleArrowClickRight() {
    const { style } = this.innerContainer;

    if (this.activeIndex < this.images.length - 1) {
      this.activeIndex++;
      style.transform = `translateX(${this.activeIndex * -100}%)`;
    }
  }
}

const mainContainerStyle = `
    position: relative;
    margin: auto;
    overflow-x: hidden;
    width: 800px;
    height: 400px;
  `;

const innerContainerStyle = `
    display: flex;
    max-width: 800px;
    position: relative;
    transition: transform 300ms linear;
  `;

const baseChevronStyle = `
    align-items: center;
    color: white;
    display: flex;
    font-size: 80px;
    height: 100%;
    position: absolute;
    top: 0;
    width: 10%;
  `;

const imageStyle = `
    width: 100%;
    display: inline-block;
  `;

const leftChevron = `
  left: 0;
  padding-left: 10px;
  justify-content: flex-start;
`

const rightChevron = `
  right: 0;
  padding-right: 10px;
  justify-content: flex-end;
`

// Example running the class with an id selector on the HTML doc for the root component.
// new Carousel('#carousel');
