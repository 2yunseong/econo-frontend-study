export default class TextView {
    constructor({ model }) {
      this.$target = document.createElement("div");
      this.textModel = model;
      this.textModel.subscribe(this.render.bind(this)); //Model에 구독
      this.render();
    }
    render() {
      const text = this.textModel.getText(); //Model의 상태를 가져와서 렌더링
      this.$target.innerHTML = `
        <div>${text}</div>
      `;
    }
  }
  